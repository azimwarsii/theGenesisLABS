// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

// Translations (You can store this in separate files for better maintainability)
const resources = {
  en: {
    translation: {
      contact: {
        heading: "Contact",
        description: "We are currently available for freelance work.",
        formHeading: "Have an awesome idea? Let's bring it to life.",
        messageSent: "Message Sent"
      },
      hero: {
        title: "THE GENESIS LABS",
        subtitle: "In The Beginning,",
        scroll: "scroll"
      },
      about: {
        title: "We create with precision building scalable, high-performance web and app solutions.",
        description: "Every line of code and interface is optimized for seamless engagement and lasting impact. From architecture to deployment, we drive innovation that transforms digital experiences."
      },
      services: {
        title: "Our expertises.",
        description: "We focus on all things design and web-related, crafting innovative solutions that bring your vision to life.",
        description1: "We start with a personalized consultation to align with your goals, crafting tailored, user-centered solutions. From development to design, we ensure seamless execution."
      },
      projects: {
        title: "Projects"
      }
    }
  },
  it: {
    translation: {
      contact: {
        heading: "Contatto",
        description: "Siamo attualmente disponibili per lavori freelance.",
        formHeading: "Hai un'idea fantastica? Portiamola in vita.",
        messageSent: "Messaggio inviato"
      },
      hero: {
        title: "THE GENESIS LABS",
        subtitle: "In the Beginning,",
        scroll: "scorri"
      },
      about: {
        title: "Creiamo con precisione costruendo soluzioni web e app scalabili e ad alte prestazioni.",
        description: "Ogni riga di codice e interfaccia è ottimizzata per un coinvolgimento senza soluzione di continuità e un impatto duraturo. Dall'architettura al deployment, guidiamo l'innovazione che trasforma le esperienze digitali."
      },
      services: {
        title: "Le nostre competenze.",
        description: "Ci concentriamo su tutto ciò che riguarda il design e il web, creando soluzioni innovative che danno vita alla tua visione.",
        description1: "Partiamo con una consulenza personalizzata per allinearci ai tuoi obiettivi, creando soluzioni su misura incentrate sull'utente. Dallo sviluppo al design, garantiamo un'esecuzione perfetta."
      },
      projects: {
        title: "Progetti"
      }
    }
  },
  fr: {
    translation: {
      contact: {
        heading: "Contact",
        description: "Nous sommes actuellement disponibles pour des travaux freelance.",
        formHeading: "Vous avez une idée géniale ? Mettons-la en œuvre.",
        messageSent: "Message envoyé"
      },
      hero: {
        title: "THE GENESIS LABS",
        subtitle: "In the Beginning,",
        scroll: "faites défiler"
      },
      about: {
        title: "Nous créons avec précision en construisant des solutions web et d'applications évolutives et performantes.",
        description: "Chaque ligne de code et d'interface est optimisée pour une interaction fluide et un impact durable. De l'architecture au déploiement, nous conduisons l'innovation qui transforme les expériences numériques."
      },
      services: {
        title: "Nos expertises.",
        description: "Nous nous concentrons sur tout ce qui concerne le design et le web, en créant des solutions innovantes qui donnent vie à votre vision.",
        description1: "Nous commençons par une consultation personnalisée pour nous aligner sur vos objectifs, créant des solutions sur mesure centrées sur l'utilisateur. Du développement au design, nous assurons une exécution fluide."
      },
      projects: {
        title: "Projets"
      }
    }
  }
  // Add more languages if needed
};

i18n
  .use(LanguageDetector)
  .use(XHR)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
