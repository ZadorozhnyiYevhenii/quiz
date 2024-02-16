import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { BackButton } from "../../components/BackButton/BackButton";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import "./AgePage.scss";

export const AgePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAge = () => {
    navigate("/quiz/3");
  };

  const ages = t('age-page.options', { returnObjects: true });

  return (
    <div className="age">
      <BackButton />
      <ProgressBar numberOfQuiz={3} fillPercentage={barPercenteges.agePage} />
      <QuizTitle title={t("age-page.title")} />

      <ul className="age__list">
        {ages.map((option, index) => (
          <li className="age__item" key={index}>
            <CustomButton
              title={option}
              height={76}
              onCLick={handleAge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
