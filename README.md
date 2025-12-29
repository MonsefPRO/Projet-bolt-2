# Ellipsys - Site Web

Site web professionnel pour Ellipsys, spécialiste du nettoyage par drone.

## Technologies

- React + TypeScript
- TailwindCSS
- Vite
- React Router
- Supabase

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur http://localhost:5173

## Build

```bash
npm run build
```

Le build sera généré dans le dossier `dist/`

## Configuration

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_supabase
```

Un fichier `.env.example` est fourni comme template.

## Structure du projet

```
ellipsys-site/
├── public/              # Images et ressources statiques
├── src/
│   ├── components/      # Composants réutilisables
│   ├── contexts/        # Contextes React
│   ├── pages/           # Pages du site
│   ├── translations/    # Traductions FR/EN
│   ├── utils/           # Utilitaires
│   └── hooks/           # Hooks personnalisés
├── supabase/
│   └── migrations/      # Migrations de base de données
└── index.html           # Point d'entrée HTML
```

## Fonctionnalités

- Site multilingue (Français/Anglais)
- Design responsive
- Formulaire de contact
- Pages de services détaillées
- Optimisé pour le SEO
- Animations fluides

## Commandes utiles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Créer le build de production
npm run preview      # Prévisualiser le build de production
npm run typecheck    # Vérifier les erreurs TypeScript
```

## Déploiement

Le projet est configuré pour être déployé sur Netlify avec :
- `netlify.toml` pour la configuration
- `public/_redirects` pour les redirections SPA

N'oubliez pas de configurer les variables d'environnement sur votre plateforme de déploiement.

## Support

Pour toute question : solutionellipsys@gmail.com
