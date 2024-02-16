import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { CustomRadioButton } from "../../components/CustomRadioButton/CustomRadioButton";
import { BackButton } from "../../components/BackButton/BackButton";
import "./HatePage.scss";

export const HatePage = () => {
  const { t } = useTranslation();

  const titles = t("hate-page.options", { returnObjects: true });

  return (
    <div className="hate">
      <BackButton />
      <ProgressBar numberOfQuiz={4} fillPercentage={barPercenteges.hatePage} />
      <QuizTitle title={t("hate-page.title")} />

      <ul className="hate__list">
        {titles.map((title, index) => (
          <li key={index} className="hate__item">
            <CustomRadioButton title={title} height={80} />
          </li>
        ))}
      </ul>
    </div>
  );
};
