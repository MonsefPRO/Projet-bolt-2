/*
  # Création du schéma Ellypsys

  ## 1. Nouvelles Tables

  ### Table `devis`
  - `id` (uuid, clé primaire) - Identifiant unique de la demande
  - `nom` (text) - Nom du client
  - `prenom` (text) - Prénom du client
  - `email` (text) - Email du client
  - `telephone` (text) - Numéro de téléphone
  - `code_postal` (text) - Code postal
  - `ville` (text) - Ville
  - `service` (text) - Type de service demandé (demoussage, frelons, facade)
  - `surface` (text, optionnel) - Surface approximative
  - `message` (text, optionnel) - Message complémentaire
  - `statut` (text) - Statut de la demande (nouveau, en_cours, traite)
  - `created_at` (timestamptz) - Date de création

  ### Table `blog_articles`
  - `id` (uuid, clé primaire) - Identifiant unique de l'article
  - `titre` (text) - Titre de l'article
  - `slug` (text, unique) - URL slug pour l'article
  - `contenu` (text) - Contenu de l'article
  - `image_url` (text, optionnel) - URL de l'image principale
  - `auteur` (text) - Nom de l'auteur
  - `categorie` (text) - Catégorie de l'article
  - `publie` (boolean) - Article publié ou brouillon
  - `created_at` (timestamptz) - Date de création
  - `updated_at` (timestamptz) - Date de mise à jour

  ### Table `realisations`
  - `id` (uuid, clé primaire) - Identifiant unique de la réalisation
  - `titre` (text) - Titre du projet
  - `description` (text) - Description détaillée
  - `service` (text) - Type de service
  - `localisation` (text) - Lieu de la réalisation
  - `date_realisation` (date) - Date de réalisation
  - `images` (jsonb) - Tableau d'URLs d'images
  - `visible` (boolean) - Afficher sur le site
  - `created_at` (timestamptz) - Date de création

  ### Table `contacts`
  - `id` (uuid, clé primaire) - Identifiant unique du message
  - `nom` (text) - Nom complet
  - `email` (text) - Email
  - `telephone` (text, optionnel) - Téléphone
  - `sujet` (text) - Sujet du message
  - `message` (text) - Contenu du message
  - `lu` (boolean) - Message lu ou non
  - `created_at` (timestamptz) - Date de création

  ### Table `newsletter`
  - `id` (uuid, clé primaire) - Identifiant unique
  - `email` (text, unique) - Email de l'abonné
  - `actif` (boolean) - Abonnement actif
  - `created_at` (timestamptz) - Date d'inscription

  ## 2. Sécurité

  - Activation de RLS sur toutes les tables
  - Politiques permettant la lecture publique pour blog et réalisations
  - Politiques d'insertion publique pour devis, contacts et newsletter
  - Accès en modification/suppression réservé aux utilisateurs authentifiés

  ## 3. Index

  - Index sur les colonnes fréquemment recherchées (email, slug, statut)
*/

-- Table des demandes de devis
CREATE TABLE IF NOT EXISTS devis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  prenom text NOT NULL,
  email text NOT NULL,
  telephone text NOT NULL,
  code_postal text NOT NULL,
  ville text NOT NULL,
  service text NOT NULL,
  surface text,
  message text,
  statut text NOT NULL DEFAULT 'nouveau',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE devis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut créer une demande de devis"
  ON devis FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent lire les devis"
  ON devis FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent mettre à jour les devis"
  ON devis FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Table des articles de blog
CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titre text NOT NULL,
  slug text UNIQUE NOT NULL,
  contenu text NOT NULL,
  image_url text,
  auteur text NOT NULL DEFAULT 'Ellypsys',
  categorie text NOT NULL,
  publie boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut lire les articles publiés"
  ON blog_articles FOR SELECT
  TO anon
  USING (publie = true);

CREATE POLICY "Les utilisateurs authentifiés peuvent tout voir"
  ON blog_articles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent créer des articles"
  ON blog_articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent mettre à jour les articles"
  ON blog_articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent supprimer les articles"
  ON blog_articles FOR DELETE
  TO authenticated
  USING (true);

-- Table des réalisations
CREATE TABLE IF NOT EXISTS realisations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titre text NOT NULL,
  description text NOT NULL,
  service text NOT NULL,
  localisation text NOT NULL,
  date_realisation date NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE realisations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut lire les réalisations visibles"
  ON realisations FOR SELECT
  TO anon
  USING (visible = true);

CREATE POLICY "Les utilisateurs authentifiés peuvent tout voir"
  ON realisations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent créer des réalisations"
  ON realisations FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent mettre à jour les réalisations"
  ON realisations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Les utilisateurs authentifiés peuvent supprimer les réalisations"
  ON realisations FOR DELETE
  TO authenticated
  USING (true);

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  email text NOT NULL,
  telephone text,
  sujet text NOT NULL,
  message text NOT NULL,
  lu boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut créer un message de contact"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent lire les messages"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent mettre à jour les messages"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Table newsletter
CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  actif boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tout le monde peut s'inscrire à la newsletter"
  ON newsletter FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent lire les inscriptions"
  ON newsletter FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Seuls les utilisateurs authentifiés peuvent mettre à jour les inscriptions"
  ON newsletter FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_devis_email ON devis(email);
CREATE INDEX IF NOT EXISTS idx_devis_statut ON devis(statut);
CREATE INDEX IF NOT EXISTS idx_devis_created_at ON devis(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_articles(slug);
CREATE INDEX IF NOT EXISTS idx_blog_publie ON blog_articles(publie);
CREATE INDEX IF NOT EXISTS idx_blog_categorie ON blog_articles(categorie);

CREATE INDEX IF NOT EXISTS idx_realisations_visible ON realisations(visible);
CREATE INDEX IF NOT EXISTS idx_realisations_service ON realisations(service);

CREATE INDEX IF NOT EXISTS idx_contacts_lu ON contacts(lu);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_actif ON newsletter(actif);