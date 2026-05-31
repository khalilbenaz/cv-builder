# CV Builder — Générateur de CV imprimable

Application web moderne pour créer, prévisualiser et exporter un CV professionnel au format PDF, entièrement dans le navigateur.

## Fonctionnalités

- **Formulaire complet** : informations personnelles (nom, titre, email, téléphone, ville, site/LinkedIn), résumé professionnel, expériences, formations, compétences (tags) et langues avec niveau
- **Entrées dynamiques** : ajout et suppression d'expériences, formations, compétences et langues en temps réel
- **Aperçu en direct** : le CV se met à jour instantanément dans un template élégant à deux colonnes
- **Impression / Export PDF** : bouton dédié — seul l'aperçu est imprimé, en pleine page A4, sans l'interface formulaire
- **Autosauvegarde** : toutes les modifications sont persistées dans le `localStorage` avec un debounce de 600 ms
- **Données d'exemple** : le formulaire est prérempli au premier lancement ; un bouton "Réinitialiser" recharge les données d'exemple
- **UI 100% française**, responsive et accessible (aria-labels sur tous les boutons de suppression)

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## Déploiement Cloudflare Pages

```bash
npm run deploy
```

Le script enchaîne `npm run build` puis déploie le dossier `dist/` sur Cloudflare Pages via Wrangler (`--project-name cv-builder`).

## Stack technique

| Technologie | Rôle |
|---|---|
| React 18 | Framework UI |
| TypeScript (strict) | Typage statique |
| Vite 5 | Bundler / Dev server |
| Tailwind CSS v3 | Styles (utilitaires + `print:`) |
| Inter (Google Fonts) | Typographie |
| localStorage | Persistance des données |
| Cloudflare Pages | Hébergement |

## Structure des fichiers

```
src/
├── App.tsx               # Composant racine, layout 2 colonnes, injection du CSS d'impression
├── types.ts              # Interfaces TypeScript (CVData, Experience, Formation…)
├── defaultData.ts        # Données d'exemple préremplies
├── storage.ts            # Lecture / écriture localStorage
├── utils.ts              # Générateur d'identifiants uniques
└── components/
    ├── FormPanel.tsx     # Formulaire complet avec gestion des listes dynamiques
    ├── CVPreview.tsx     # Template CV (en-tête + 2 colonnes : sidebar + contenu)
    ├── FormSection.tsx   # Conteneur de section du formulaire
    ├── InputField.tsx    # Champ texte réutilisable
    └── TextareaField.tsx # Textarea réutilisable
```

## Licence

MIT — voir le fichier `LICENSE`.
