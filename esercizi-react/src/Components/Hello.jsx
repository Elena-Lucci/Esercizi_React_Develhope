// Create a Hello function component that renders the "Hello, World!" message within an h2 tag. Create a LanguageContext and wrap the Hello component within its provider. Add a select tag to the component in which the Hello component is rendered that allows the user to select the language, and pass it as a value to the Provider.
// Consume the LanguageContext within the Hello component by using the useContext hook, and show the "Hello, World!" message in the correct language

// 2. Hello component consumes the context
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

