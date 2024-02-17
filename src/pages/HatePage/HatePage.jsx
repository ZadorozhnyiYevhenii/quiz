import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { CustomRadioButton } from "../../components/CustomRadioButton/CustomRadioButton";
import { BackButton } from "../../components/BackButton/BackButton";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./HatePage.scss";

export const HatePage = () => {
  const { t } = useTranslation();

  const [selectedOptions, setSelectedOptions] = useLocalStorage(
    "selectedOptions",
    []
  );

  const titles = t("hate-page.options", { returnObjects: true });

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <main className="hate">
      <BackButton />
      <ProgressBar numberOfQuiz={4} fillPercentage={barPercenteges.hatePage} />
      <QuizTitle title={t("hate-page.title")} />

      <ul className="hate__list">
        {titles.map((title, index) => (
          <li key={index} className="hate__item">
            <CustomRadioButton
              title={title}
              height={80}
              onClick={() => handleSelectOption(title)}
              storageKey={"selectedOptions"}
            />
          </li>
        ))}
      </ul>

      <NextPageButton path={"/quiz/4"} disabled={!selectedOptions.length} />
    </main>
  );
};
