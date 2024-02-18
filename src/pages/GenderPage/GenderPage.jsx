import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { GenderOptions } from "../../utils/gendersOptions";
import { CustomOption } from "../../components/CustomOption/CustomOption";
import "./GenderPage.scss";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect } from "react";

export const GenderPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [title, setTitle] = useLocalStorage("titles", []);

  useEffect(() => {
    setTitle([...title, t("gender-page.title")]);
  }, []);

  const [, setGender] = useLocalStorage("gender", "");

  const handleGender = (value) => {
    setGender(value);
    navigate("/quiz/2");
  };

  return (
    <main className="gender">
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
            <CustomOption
              option={option}
              onClick={() => handleGender(option.title)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
