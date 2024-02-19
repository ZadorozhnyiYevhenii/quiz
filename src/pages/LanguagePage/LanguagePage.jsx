import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { useTranslation } from "react-i18next";
import { LanguageOptions } from "../../utils/languageOptions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { answerKey, titlesKey } from "../../utils/localstorageKeys";
import { AnimatedPageWrapper } from "../../components/AnimatedPageWrapper/AnimatedPageWrapper";
import "./LanguagePage.scss";

export const LanguagePage = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [title, setTitle] = useLocalStorage(titlesKey, []);

  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    answerKey.language,
    i18n.language
  );

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    setTitle([...title, t("language-page.subtitle")]);
    setCurrentLanguage(language);
    navigate("/quiz/1");
  };

  const languages = LanguageOptions();

  return (
    <AnimatedPageWrapper>
      <main className="page">
        <ProgressBar
          numberOfQuiz={1}
          fillPercentage={barPercenteges.languagePage}
        />
        <QuizTitle
          title={t("language-page.title")}
          description={t("language-page.subtitle")}
        />

        <ul className="page__list">
          {languages.map((lang) => (
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
    </AnimatedPageWrapper>
  );
};
