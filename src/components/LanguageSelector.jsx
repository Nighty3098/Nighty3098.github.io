import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", minWidth: 10 }}>
      <button
        className="navbar_button tooltip-container"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
      >
        <FontAwesomeIcon icon={faEarthAmericas} />
        <p>{current.code.toLocaleUpperCase()}</p>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "var(--bg)",
            borderRadius: 10,
            backdropFilter: "blur(10px)",
            boxShadow: "var(--shadow)",
            zIndex: 100,
            minWidth: 100,
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => selectLang(lang.code)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: 10,
                fontWeight: lang.code === current.code ? 700 : 400,
                background:
                  lang.code === current.code ? "var(--color1)" : "transparent",
                color: "var(--fg)",
              }}
            >
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
