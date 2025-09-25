# Project Guardrails

**Stack**
- Framework: Next.js (App Router, `/src/app`)
- TypeScript
- Tailwind CSS (bez inline-styles)
- Komponenty w `src/components`, utilsy w `src/lib`
- Preferuj Server Components; `"use client"` tylko gdy potrzebne

**Konwencje**
- Import alias: `@/*`
- Spójne klasy Tailwind z `globals.css`
- Obrazy: `next/image`
- Nie dodawaj zewnętrznych UI-libów bez uzasadnienia

**Builder**
- Nowe pliki i komponenty trzymaj w istniejącej strukturze (`src/app/*`, `src/components/*`)
- Nie duplikuj komponentów
- Zmiany konfiguracyjne opisuj w README

**Dostarczaj kod gotowy do builda, z TS type-safety i bez błędów ESLint.**
