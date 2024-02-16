import { CustomButton } from "../../components/CustomButton/CustomButton";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { useTranslation } from "react-i18next";
import { languageOptions } from "../../utils/languageOptions";
import './LanguagePage.scss';

export const LanguagePage = () => {
  const { t } = useTranslation();
  return (
    <div className="page">
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
            <CustomButton title={lang.value} />
          </li>
        ))}
      </ul>
    </div>
  );
};
