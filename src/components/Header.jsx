import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="flex justify-center gap-4 mt-8">
        <h1 className="font-bold text-xl">Language Switcher</h1>
        <p className="text-zinc-800">{language}</p>
      </div>
    </div>
  );
};

export default Header;
