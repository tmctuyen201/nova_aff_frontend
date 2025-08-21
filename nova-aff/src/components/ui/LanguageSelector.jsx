import { useState } from "react";
import "../../styles/components/language-selector.css";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "VI", name: "Tiếng Việt" },
  ];

  return (
    <div className="language-selector">
      <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedLang} ▼
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="language-option"
              onClick={() => {
                setSelectedLang(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
