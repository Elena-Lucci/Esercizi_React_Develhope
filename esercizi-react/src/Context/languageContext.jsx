import { useState } from 'react';
import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <label htmlFor="language-select">Select language: </label>
      <select
        id="language-select"
        value={language}
        onChange={handleChange}
      >
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>

      <LanguageContext.Provider value={language}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};

