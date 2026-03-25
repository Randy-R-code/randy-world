# 🎮 Randy World — Interactive Portfolio

## 🧠 Vision

Randy World est un portfolio interactif sous forme de **jeu exploratoire**, combiné à un **site optimisé SEO**.

Objectifs :

- Créer une expérience mémorable (type jeu)
- Rester lisible et professionnel
- Générer des opportunités (clients, collabs)
- Être indexable et performant SEO

---

## 🎯 Positionnement

Ce site ne présente pas simplement un développeur.

> Il montre un créateur de produits, capable de construire des applications concrètes, utiles et performantes.

---

## 🗺️ Concept principal

Le site est une **carte interactive (world map)**.

Chaque zone représente :

- une thématique
- une page SEO réelle
- un univers visuel

---

## 🌍 Structure globale

### Routes principales

/ → Hub (map principale)
/projects → Projects City
/apps → Apps Station
/seo → SEO District
/lab → Lab Zone
/about → About Base
/blog/... → contenu SEO

---

## 🎮 Zones du jeu

### 🏠 Central Hub (`/`)

Point d’entrée.

Contenu :

- H1 clair SEO
- phrase d’accroche
- CTA
- map interactive

---

### 🏙️ Projects City (`/projects`)

Projets concrets.

Contenu :

- projets clients
- études de cas
- structure :
  - problème
  - solution
  - résultat

---

### 🚀 Apps Station (`/apps`)

Applications / SaaS.

Contenu :

- Liflow
- architecture
- Stripe / multi-tenant
- logique produit

---

### 🌐 SEO District (`/seo`)

SEO local et sites vitrines.

Contenu :

- stratégie SEO
- pages locales (ex: /seo/perpignan)
- création de sites artisan

---

### 🧪 Lab Zone (`/lab`)

Expérimentations.

Contenu :

- IA
- tests techniques
- prototypes
- idées

Format :
"Expérience #01"

---

### 🧑‍💼 About Base (`/about`)

Profil + contact.

Contenu :

- parcours
- vision
- méthode
- lien contact

---

## 🎨 Direction artistique

### Ambiance

- sombre
- moderne
- légèrement futuriste
- inspirée UI jeu + dashboard

---

### Palette

- background: #09090b / #0f172a
- surface: #111827 / #18181b
- accent: #22d3ee / #8b5cf6
- texte: clair (blanc cassé)

---

### Typographie

- Inter ou Geist
- hiérarchie claire (H1, H2, body)

---

## 🧩 UI / UX

### Map

- zones flottantes
- layout asymétrique
- connexions via lignes (SVG)
- hover + glow
- clic → navigation

---

### Animations

Utiliser Framer Motion :

- fade in
- scale
- hover feedback
- transitions entre pages

---

### Interactions

- hover → preview zone
- clic → entrée
- possible navigation clavier (optionnel)

---

## ⚙️ Stack technique

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- éventuellement SVG pour connexions

---

## 📁 Structure projet

/app
/(marketing)
page.tsx
projects/page.tsx
apps/page.tsx
seo/page.tsx
lab/page.tsx
about/page.tsx

/components
/map
world-map.tsx
map-node.tsx
map-connections.tsx

/ui
button.tsx
card.tsx

/lib
data.ts

---

## 🧠 Règles SEO

IMPORTANT :

- contenu visible sans JS
- H1 unique par page
- H2 structurés
- texte réel (pas uniquement visuel)
- URLs propres
- contenu utile et lisible

---

## 📈 Objectifs SEO

Cibler :

- création site artisan
- SEO local
- SaaS Next.js
- développeur freelance

---

## 🎯 Pages SEO importantes

- /seo/perpignan
- /creation-site-artisan
- /saas-nextjs
- /developpeur-freelance

---

## 🤖 IA / Assistant (optionnel)

Feature :

- assistant intégré
- permet de naviguer
- ex :
  - "montre les projets"
  - "c’est quoi Liflow"

---

## ⚡ Features bonus

- bouton “Explorer aléatoire”
- progression (zones découvertes)
- easter eggs
- stats (projets, stack)

---

## 📱 Responsive

### Desktop

- map complète
- expérience immersive

### Mobile

- version simplifiée
- layout vertical
- navigation claire

---

## 🧭 Workflow de dev

1. Setup projet
2. Design global (palette, layout)
3. Implémentation map (home)
4. Création pages SEO
5. Ajout animations
6. Ajout features fun
7. optimisation SEO

---

## 🚫 À éviter

- canvas-only (mauvais SEO)
- contenu caché
- design trop complexe
- surcharge visuelle
- navigation confuse

---

## 💡 Règle principale

Le site doit être :

> lisible comme un site classique  
> mais vécu comme une expérience

---

## 🎯 Résultat attendu

Un portfolio qui :

- attire l’attention immédiatement
- montre des compétences concrètes
- donne envie d’explorer
- génère des opportunités

---

## 🧠 Guideline pour IA

Toujours :

- privilégier lisibilité + SEO
- garder une structure simple
- ajouter du style via animations
- ne jamais sacrifier le contenu pour l’effet visuel
