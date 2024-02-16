import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { GenderOptions } from "../../utils/gendersoptions";
import { SquareCustomOption } from "../../components/SquareCustomOption/SquareCustomOption";
import "./GenderPage.scss";
import { useNavigate } from "react-router-dom";

export const GenderPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGender = () => {
    navigate("/quiz/2");
  };

  return (
    <div className="gender">
      <ProgressBar
        numberOfQuiz={2}
        fillPercentage={barPercenteges.genderPage}
      />

      <QuizTitle
        title={t("gender-page.title")}
        description={t("gender-page.subtitle")}
      />

      <ul className="gender__list">
        {GenderOptions().map((option) => (
          <li key={option.id} className="gender__item">
            <SquareCustomOption option={option} onClick={handleGender} />
          </li>
        ))}
      </ul>
    </div>
  );
};
