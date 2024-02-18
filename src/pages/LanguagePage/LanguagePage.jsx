import { useEffect } from "react";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { useTranslation } from "react-i18next";
import { languageOptions } from "../../utils/languageOptions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { answerKey, titlesKey } from "../../utils/localstorageKeys";
import "./LanguagePage.scss";

export const LanguagePage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [title, setTitle] = useLocalStorage(titlesKey, []);

  useEffect(() => {
    setTitle([...title, t("initial-page.subtitle")]);
  }, []);

  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    answerKey.language,
    i18n.language
  );

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    navigate("/quiz/1");
  };

  return (
    <main className="page">
      <ProgressBar
        numberOfQuiz={1}
        fillPercentage={barPercenteges.languagePage}
      />
      <QuizTitle
        title={t("initial-page.title")}
        description={t("initial-page.subtitle")}
      />

      <ul className="page__list">
        {languageOptions.map((lang) => (
          <li key={lang.id} className="page__item">
            <CustomButton
              title={lang.value}
              onCLick={() => changeLanguage(lang.id)}
              value={currentLanguage}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
