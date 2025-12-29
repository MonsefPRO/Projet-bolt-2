import { useState, FormEvent, ChangeEvent } from 'react';
import { validateInput, detectXSS } from '../utils/security';
import { sanitizeInput } from '../utils/validation';

interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

interface UseSecureFormConfigObject<T extends Record<string, string>> {
  initialValues: T;
  validate?: (values: T) => Record<string, string>;
  onSubmit?: (data: T) => Promise<void>;
}

type UseSecureFormConfig<T extends Record<string, string>> = T | UseSecureFormConfigObject<T>;

function isConfigObject<T extends Record<string, string>>(
  config: UseSecureFormConfig<T>
): config is UseSecureFormConfigObject<T> {
  return typeof config === 'object' && config !== null && 'initialValues' in config;
}

export function useSecureForm<T extends Record<string, string>>(config: UseSecureFormConfig<T>) {
  const isLegacyAPI = isConfigObject(config);
  const initialValues: T = isLegacyAPI ? config.initialValues : config;
  const validateFn = isLegacyAPI ? config.validate : undefined;
  const onSubmitFn = isLegacyAPI ? config.onSubmit : undefined;

  const [formData, setFormData] = useState<T>(initialValues);
  const [fields, setFields] = useState<Record<string, FormField>>(() => {
    const initial: Record<string, FormField> = {};
    Object.keys(initialValues).forEach(key => {
      initial[key] = { value: initialValues[key as keyof T], error: '', touched: false };
    });
    return initial;
  });
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);

    const validation = validateInput(sanitized, 5000);

    setFormData(prev => ({
      ...prev,
      [name]: sanitized
    }));

    if (isLegacyAPI) {
      setFields(prev => ({
        ...prev,
        [name]: {
          value: sanitized,
          error: validation.isValid ? '' : (validation.error || ''),
          touched: true
        }
      }));
    }

    if (!validation.isValid && validation.error) {
      setErrors(prev => ({
        ...prev,
        [name]: validation.error
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof T];
        return newErrors;
      });
    }
  };

  const handleBlur = (name: string) => {
    if (!isLegacyAPI) return;

    setFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true
      }
    }));

    if (validateFn && typeof validateFn === 'function') {
      const validationErrors = validateFn(formData);
      if (validationErrors[name]) {
        setFields(prev => ({
          ...prev,
          [name]: {
            ...prev[name],
            error: validationErrors[name]
          }
        }));
      }
    }
  };

  const handleSubmit = (onSubmit?: (data: T) => Promise<void>) => {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitSuccess(false);
      setSubmitError('');

      Object.keys(formData).forEach(key => {
        if (detectXSS(formData[key as keyof T])) {
          throw new Error('Contenu potentiellement dangereux détecté');
        }
      });

      if (isLegacyAPI && validateFn && typeof validateFn === 'function') {
        const validationErrors = validateFn(formData);
        const hasErrors = Object.keys(validationErrors).length > 0;

        if (hasErrors) {
          const newFields = { ...fields };
          Object.keys(validationErrors).forEach(key => {
            newFields[key] = {
              ...newFields[key],
              error: validationErrors[key],
              touched: true
            };
          });
          setFields(newFields);
          setSubmitError('Veuillez corriger les erreurs dans le formulaire');
          return;
        }
      }

      const hasErrors = Object.keys(errors).length > 0;
      if (hasErrors) {
        return;
      }

      setIsSubmitting(true);

      try {
        const submitFn = onSubmit || onSubmitFn;
        if (submitFn && typeof submitFn === 'function') {
          await submitFn(formData);
        }
        setSubmitSuccess(true);
        setFormData(initialValues);
        setErrors({});

        if (isLegacyAPI) {
          const resetFields: Record<string, FormField> = {};
          Object.keys(initialValues).forEach(key => {
            resetFields[key] = { value: initialValues[key as keyof T], error: '', touched: false };
          });
          setFields(resetFields);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
        setSubmitError(errorMessage);
        console.error('Erreur lors de la soumission:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  };

  return {
    formData,
    errors,
    fields,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit
  };
}
