import { useTranslation } from "react-i18next";

export const LanguageOptions = () => {
  const { t } = useTranslation();

  const languageOptions = [
    { id: "en", value: t("language-page.languages.english") },
    { id: "fr", value: t("language-page.languages.french") },
    { id: "de", value: t("language-page.languages.german") },
    { id: "es", value: t("language-page.languages.spanish") },
  ];

  return languageOptions;
};
