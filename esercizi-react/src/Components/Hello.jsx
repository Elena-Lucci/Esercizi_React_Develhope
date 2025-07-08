import React, { useContext } from 'react';
import { LanguageContext } from '../Context/languageContext';

function Hello() {
  const language = useContext(LanguageContext);

  const messages = {
    en: 'Hello, World!',
    it: 'Ciao, Mondo!',
    es: '¡Hola, Mundo!',
    fr: 'Bonjour, le monde!',
    de: 'Hallo, Welt!',
  };

  return <h2>{messages[language] || messages.en}</h2>;
};

export default Hello;

