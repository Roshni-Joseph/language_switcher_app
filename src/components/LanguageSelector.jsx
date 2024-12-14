import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const LanguageSelector = () => {
  const { setContentLanguage } = useContext(LanguageContext);

  return (
    <div className="flex justify-center">
      <div className="mt-28">
        <div className="flex gap-2">
          <button onClick={() => setContentLanguage("english")} className="p-2 bg-blue-300 rounded-lg opacity-75 hover:opacity-100 transition duration-300">
            English
          </button>
          <button onClick={() => setContentLanguage("french")} className="p-2 bg-blue-300 rounded-lg opacity-75 hover:opacity-100 transition duration-300">
            French
          </button>
          <button onClick={() => setContentLanguage("spanish")} className="p-2 bg-blue-300 rounded-lg opacity-75 hover:opacity-100 transition duration-300">
            Spanish
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
