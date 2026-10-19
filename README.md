# Garderie App

Landing page responsive pour **Les Petits Explorateurs**, réalisée avec Next.js, Bootstrap 5 et une API Node.js/Express.

## Installation

```bash
npm install
npm run dev
```

Frontend : `http://localhost:3000` — API : `http://localhost:4000`.

## API REST

| Méthode | Route | Description |
| --- | --- | --- |
| GET | `/api/garderie` | Informations générales de la garderie |
| GET | `/api/services` | Liste des services proposés |
| GET | `/api/activites` | Activités destinées aux enfants |

## Structure

`app/` contient la page et les styles, `components/` contient `Navbar`, `Hero` et `Services`, et `server/` contient l'API Express et les données.

## Workflow Git demandé

Branches successivement fusionnées dans `main` : `feature/landing-page`, `feature/components`, `feature/backend`, `feature/api-integration` et `docs/readme`.
