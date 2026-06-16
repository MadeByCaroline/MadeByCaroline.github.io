# MadeByCaroline - migration to Vue 3 + TypeScript

Cette branche contient un scaffold minimal pour migrer le site statique vers une application Vue 3 + TypeScript avec des améliorations d'accessibilité (RGAA) de base :

- structure sémantique (landmarks)
- lien "Aller au contenu"
- focus visible et respect du reduced-motion
- configuration initiale pour eslint et pa11y-ci

Étapes suivantes (à réaliser localement / en PR review):

1. npm install
2. npm run dev (le serveur s'ouvrira sur http://localhost:5173)
3. compléter les descriptions d'images (alt) par des textes métiers
4. exécuter npm run test:accessibility après démarrage du serveur

Une Pull Request peut être ouverte manuellement depuis la branche vue-ts-rgaa vers la branche par défaut.
