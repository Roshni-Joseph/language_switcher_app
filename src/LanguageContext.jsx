import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  const setContentLanguage = (languageCode) => {
    switch (languageCode) {
      case "spanish":
        setLanguage("Spanish");
        break;
      case "french":
        setLanguage("French");
        break;
      case "english":
      default:
        setLanguage("English");
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setContentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
