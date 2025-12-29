export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const setCSRFToken = (): string => {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
};

export const getCSRFToken = (): string | null => {
  return sessionStorage.getItem('csrf_token');
};

export const validateCSRFToken = (token: string): boolean => {
  const storedToken = getCSRFToken();
  return storedToken === token;
};

export const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
};

export const sanitizeUrl = (url: string): string => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol === 'javascript:' || parsedUrl.protocol === 'data:') {
      return '';
    }
    return url;
  } catch {
    return '';
  }
};

export const isValidOrigin = (origin: string): boolean => {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:4173',
    'https://ellipsys-solution.com',
    'https://www.ellipsys-solution.com',
    window.location.origin
  ];
  return allowedOrigins.includes(origin);
};

export const setCookie = (name: string, value: string, days: number = 365): void => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict;Secure`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const rateLimit = (() => {
  const limits = new Map<string, { count: number; resetTime: number }>();

  return (key: string, maxRequests: number = 5, windowMs: number = 60000): boolean => {
    const now = Date.now();
    const limit = limits.get(key);

    if (!limit || now > limit.resetTime) {
      limits.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (limit.count >= maxRequests) {
      return false;
    }

    limit.count++;
    return true;
  };
})();

export const detectXSS = (input: string): boolean => {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /<img[^>]+src[^>]*>/gi
  ];

  return xssPatterns.some(pattern => pattern.test(input));
};

export const validateInput = (input: string, maxLength: number = 1000): { isValid: boolean; error?: string } => {
  if (input.length > maxLength) {
    return { isValid: false, error: 'Input trop long' };
  }

  if (detectXSS(input)) {
    return { isValid: false, error: 'Contenu potentiellement dangereux détecté' };
  }

  return { isValid: true };
};
