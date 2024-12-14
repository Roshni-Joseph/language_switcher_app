import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Content = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="">
        <div className="flex justify-center">
            {language === "French" ? (
                <p className="flex justify-center w-80 p-6 border mt-8 rounded-lg bg-slate-200">
                React JS est une bibliothèque JavaScript open-source populaire
                développée par Facebook pour créer des interfaces utilisateur,
                principalement pour des applications monopages. Elle permet aux
                développeurs de créer des composants d'interface utilisateur
                réutilisables qui mettent à jour et rendent efficacement des données
                changeant de manière dynamique, en utilisant une approche de
                programmation déclarative.
                </p>
            ) : language === "Spanish" ? (
                <p className="flex justify-center w-80 p-6 border mt-8 rounded-lg bg-slate-200">
                React JS es una biblioteca de JavaScript de código abierto popular
                desarrollada por Facebook para construir interfaces de usuario,
                principalmente para aplicaciones de una sola página. Permite a los
                desarrolladores crear componentes de interfaz de usuario reutilizables
                que actualizan y renderizan datos dinámicos de manera eficiente,
                utilizando un enfoque de programación declarativa.
                </p>
            ) : (
                <p className="flex justify-center w-80 p-6 border mt-8 rounded-lg bg-slate-200">
                React JS is a popular open-source JavaScript library developed by
                Facebook for building user interfaces, primarily for single-page
                applications. It allows developers to create reusable UI components
                that efficiently update and render dynamically changing data, using a
                declarative programming approach.
                </p>
            )}
        </div>
    </div>
  );
};

export default Content;
