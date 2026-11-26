# THE FRIENDS ARCADE

Arcade de six mini-jeux personnalisés, en français, pensée mobile-first.

## Lancer en local

Prérequis : Node.js 18 ou supérieur.

```bash
npm install
npm run dev
```

## Construire pour Netlify

```bash
npm run build
```

Dans Netlify :
- Build command : `npm run build`
- Publish directory : `dist`

Le fichier `netlify.toml` contient déjà ces paramètres et une règle de fallback SPA.

## Contenu

- `src/App.tsx` : accueil, sélection des jeux et classement local.
- `src/data.ts` : configuration centralisée des personnages.
- `src/components/Avatar.tsx` : portraits SVG dessinés dans le code.
- `src/games/Game.tsx` : les six mini-jeux et leurs mécaniques.
- `src/style.css` : direction artistique, décors CSS et responsive.

## Les six défis

1. Market Panic — trading arcade, portefeuille, cours animé et cheveux de Clément qui blanchissent avec le stress.
2. Paris Survival — vélo, feux tricolores, circulation, vies et commandes tactiles.
3. Sweet Rush — ingrédients, mélange, cuisson et décoration.
4. Emergency Mode — sélection des foyers, lance à eau et réserve.
5. Bois de Boulogne Maze — labyrinthe, déplacement clavier/tactile et camion blanc piégé.
6. Baby Panic — besoins du bébé, humeur et actions adaptées.

Les scores sont conservés dans le LocalStorage du navigateur. Les illustrations sont réalisées en SVG/CSS directement dans le code : aucune image générée ou ressource graphique distante n'est requise. Les polices utilisent une police web avec des polices système de secours.
