import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { CustomRadioButton } from "../../components/CustomRadioButton/CustomRadioButton";
import { BackButton } from "../../components/BackButton/BackButton";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { answerKey, titlesKey } from "../../utils/localstorageKeys";
import "./HatePage.scss";
import { AnimatedPageWrapper } from "../../components/AnimatedPageWrapper/AnimatedPageWrapper";

export const HatePage = () => {
  const { t } = useTranslation();

  const [selectedOptions, setSelectedOptions] = useLocalStorage(
    answerKey.hate,
    []
  );

  const [title, setTitle] = useLocalStorage(titlesKey, []);

  useEffect(() => {
    setTitle([...title, t("hate-page.title")]);
  }, []);

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
      <AnimatedPageWrapper>
        <BackButton />
        <ProgressBar
          numberOfQuiz={4}
          fillPercentage={barPercenteges.hatePage}
        />
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
      </AnimatedPageWrapper>
      <NextPageButton
        path={"/quiz/4"}
        disabled={!selectedOptions.length}
        title={t("next-page-btn")}
      />
    </main>
  );
};
