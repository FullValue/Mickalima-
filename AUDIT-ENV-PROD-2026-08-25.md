# Audit environnement & accès production — 2026-08-25

Périmètre : `dev/SITE MICKA/Micka` — site vitrine Mickaël Lima Immobilier (React 18 + Vite 6 + SSG maison).

## Environnement local — ✅ OPÉRATIONNEL

| Élément | État |
|---|---|
| Node v22.22.2 / npm 10.9.7 | OK |
| Dépendances (`npm ci`, 147 paquets) | OK |
| `npm run build:ssg` | OK — 61 pages pré-rendues, 0 échec |
| `npm run dev` | OK — HTTP 200, port 3000 |

## Accès — ⛔ 1 BLOCANT

| Accès | État |
|---|---|
| Remote Git | https://github.com/FullValue/Mickalima-.git (main suivie) |
| Auth GitHub (gh CLI) | Compte **Ulycorp** — scopes repo, workflow |
| **Push vers origin** | **REFUSÉ (403)** — Ulycorp n'a pas les droits d'écriture sur FullValue/Mickalima-.git |
| Netlify / Vercel CLI + tokens | Absents — déploiement présumé via intégration Git (push main → `npm run build:ssg`) |

**Conclusion** : toute modification locale est possible immédiatement ; la publication en production est bloquée par l'absence de droits push.

## Configuration de déploiement en place

- `netlify.toml` : build `npm run build:ssg`, publish `dist`, headers sécurité + CSP (web3forms autorisé).
- `vercel.json` : même build, rewrites SPA, redirections `/en`, headers identiques.
- Les deux hébergeurs sont configurés ; celui réellement branché sur le repo reste à confirmer côté dashboard.

## Modifications réalisées le 2026-08-25

1. **Permissions OpenCode ouvertes** (`opencode.json` + `.opencode/agents/global-orchestrator.md`) : édition, bash, répertoires externes, outils MCP. Garde-fous conservés : force-push, `reset --hard`, `clean`, `branch -D`, `rm` (règles invariantes du workspace). Prise d'effet après redémarrage d'OpenCode.
2. **Suppression Gemini API** (site vitrine sans backend) : bloc `define` retiré de `vite.config.ts`, étape clé retirée du README. Aucune référence GEMINI/API_KEY restante. Build revalidé après modification.
3. Aucune modification de design, contenu ou fonctionnalité.

## Actions requises pour débloquer la publication

- Option A : inviter `Ulycorp` comme collaborateur (rôle write) sur `FullValue/Mickalima-`.
- Option B : fournir un token GitHub disposant de l'accès en écriture (stocké hors Git).
- Option C : opérer depuis un compte déjà autorisé.
- Puis confirmer l'hébergeur actif (Netlify ou Vercel) avant toute mise en production.

## Limites et risques

- Pas d'accès dashboard Netlify/Vercel : état des derniers déploiements et domaine actif invérifiables depuis ici.
- 7 vulnérabilités npm signalées (1 low, 6 high), non traitées (`npm audit fix --force` interdit).
- `public/video/` volontairement vide : les pages référençant la vidéo hero doivent être vérifiées avant mise en production.
