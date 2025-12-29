// @ts-nocheck
import { supabase } from './supabase';

// Exemples d'utilisation de la base de données Ellypsys

// ============================================
// DEVIS - Demandes de devis
// ============================================

export async function creerDevis(data: {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  code_postal: string;
  ville: string;
  service: string;
  surface?: string;
  message?: string;
}) {
  const { data: devis, error } = await supabase
    .from('devis')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return devis;
}

export async function listerDevis() {
  const { data, error } = await supabase
    .from('devis')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function mettreAJourStatutDevis(id: string, statut: string) {
  const { data, error } = await supabase
    .from('devis')
    .update({ statut })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// BLOG - Articles de blog
// ============================================

export async function listerArticlesPublies() {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('publie', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getArticleParSlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('slug', slug)
    .eq('publie', true)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function creerArticle(data: {
  titre: string;
  slug: string;
  contenu: string;
  image_url?: string;
  categorie: string;
  publie?: boolean;
}) {
  const { data: article, error } = await supabase
    .from('blog_articles')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return article;
}

// ============================================
// REALISATIONS - Projets réalisés
// ============================================

export async function listerRealisationsVisibles() {
  const { data, error } = await supabase
    .from('realisations')
    .select('*')
    .eq('visible', true)
    .order('date_realisation', { ascending: false });

  if (error) throw error;
  return data;
}

export async function creerRealisation(data: {
  titre: string;
  description: string;
  service: string;
  localisation: string;
  date_realisation: string;
  images?: string[];
}) {
  const { data: realisation, error } = await supabase
    .from('realisations')
    .insert({
      ...data,
      images: data.images || [],
    })
    .select()
    .single();

  if (error) throw error;
  return realisation;
}

// ============================================
// CONTACTS - Messages de contact
// ============================================

export async function envoyerContact(data: {
  nom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
}) {
  const { data: contact, error } = await supabase
    .from('contacts')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return contact;
}

export async function listerMessages() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function marquerMessageLu(id: string) {
  const { data, error } = await supabase
    .from('contacts')
    .update({ lu: true })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// NEWSLETTER - Inscriptions
// ============================================

export async function inscrireNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter')
    .insert({ email })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function desinscrireNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter')
    .update({ actif: false })
    .eq('email', email)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function listerAbonnesNewsletter() {
  const { data, error } = await supabase
    .from('newsletter')
    .select('*')
    .eq('actif', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
