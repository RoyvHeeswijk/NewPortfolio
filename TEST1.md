# Test 1 — Revert Document

**Datum:** 18 februari 2026

Om **Test 1 terug te draaien**, herstel de volgende bestanden naar de hieronder beschreven inhoud.

---

## Gewijzigde bestanden

### 1. `src/components/layout/Footer.tsx`

**Huidige staat (Test 1):** Minimalistische footer met alleen "© 2026 Roy van Heeswijk"

**Originele staat (voor revert):**
Zie git history of onderstaande volledige originele code. De originele Footer had:
- Roy v Heeswijk branding + beschrijving
- Footer nav links (Home, Over Mij, Projecten, Skills, Contact)
- Connect sectie met GitHub, LinkedIn, Email icons
- Copyright regel "© {jaar} Roy van Heeswijk. Alle rechten voorbehouden."

### 2. `src/pages/index.tsx`

**Huidige staat (Test 1):**
- Over Mij + Skills sectie herstructureerd naar 3 kolommen: Over Mij (2 cols) | Neem Contact Op + icons (1 col) | Skills (2 cols)
- Onder Skills: extra "Neem contact op" blokje met LinkedIn en Email iconen
- Contact sectie onderaan blijft ongewijzigd

**Originele staat (voor revert):**
- Over Mij (3 cols) | Skills (2 cols) — geen Contact blok ertussen
- Geen "Neem contact op" onder Skills
- Contact sectie onderaan ongewijzigd

---

## Revert instructies

Zeg: **"Test 1 terugdraaien"** — dan worden bovenstaande wijzigingen ongedaan gemaakt en de originele footer + index layout hersteld.
