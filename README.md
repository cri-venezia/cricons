
# Cricons

Una collezione completa di icone SVG a tema medico, generate per Vue, React, React Native e Web.
Progettata con ❤️ da [AHDCreative](https://ahdcreative.com) per **Croce Rossa Italiana - Comitato di Venezia**.

![Cricons Banner](https://cricons.crivenezia.it/cricons.png)

## Funzionalità

- 🏥 **Focus Medico**: Icone specializzate per anatomia, specializzazioni, patologie e altro (es: `BloodBag`, `HeartOrgan`).
- 🚀 **Multi-Framework**: Componenti nativi pronti per **Vue 3**, **React** e **React Native**.
- 🌐 **Web Ready**: Webfonts e CSS serviti via CDN per utilizzo tradizionale senza framework.
- 🌳 **Tree-Shakable**: Importa solo ciò che ti serve, mantenendo il bundle leggero.
- ☁️ **CDN Powered**: Asset distribuiti globalmente tramite Cloudflare R2 + Workers.

---

## Documentazione

Per la guida completa all'installazione, l'utilizzo e la galleria delle icone, visita il nostro sito web dedicato.

---

## Sviluppo

Questo progetto utilizza una struttura monorepo per generare componenti a partire dai file sorgente SVG.

### Struttura del Progetto
- `public/icons/svg`: File SVG sorgente (organizzati per categoria/variante).
- `src/components`: Componenti Vue generati.
- `dist/react`: Componenti React generati.
- `dist/native`: Componenti React Native generati.
- `dist/webfonts`: Webfonts e CSS generati.

### Comandi Utili

```bash
# Installa le dipendenze
npm install

# Avvia il sito di documentazione locale
npm run dev

# Genera tutte le icone (Vue, React, Native, Webfonts)
npm run predeploy

# Esegui i test
npm run test
```

## Manutenzione

Le dipendenze vengono aggiornate automaticamente tramite **Renovate**.
Gli asset statici sono ospitati su **Cloudflare R2**.

## Licenza

ISC © Luca Forzutti / AHDCreative
