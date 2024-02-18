import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { barPercenteges } from "../../utils/barPercentages";
import { BackButton } from "../../components/BackButton/BackButton";
import { TopicsOptions } from "../../utils/topicsOptions";
import { CustomOption } from "../../components/CustomOption/CustomOption";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Loader } from "../../components/Loader/Loader";
import "./TopicsPage.scss";

export const TopicsPage = () => {
  const { t } = useTranslation();

  const [title, setTitle] = useLocalStorage("titles", []);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [selectedTopics, setSelectedTopics] = useLocalStorage(
    "selectedTopics",
    []
  );

  const handleSelectOption = (option) => {
    if (selectedTopics.includes(option)) {
      setSelectedTopics(selectedTopics.filter((item) => item !== option));
    } else {
      setSelectedTopics([...selectedTopics, option]);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    setTitle([...title, t("topics-page.title")]);
  }, []);

  return (
    <div className="topics">
      <BackButton />
      <ProgressBar
        numberOfQuiz={5}
        fillPercentage={barPercenteges.topicsPage}
      />
      <QuizTitle
        title={t("topics-page.title")}
        description={t("topics-page.description")}
      />

      <ul className="topics__list">
        {TopicsOptions().map((option) => (
          <li key={option.id} className="topics__item topics__item--odd">
            <CustomOption
              option={option}
              heightBtn={88}
              widthBtn={88}
              radius={50}
              emojiSize={25}
              titleSize={13}
              paddingBtn={50}
              onClick={() => handleSelectOption(option.title)}
              storageKey={"selectedTopics"}
            />
          </li>
        ))}
      </ul>

      {isButtonClicked && <Loader />}

      <NextPageButton
        disabled={!selectedTopics.length}
        onClick={handleButtonClick}
      />
    </div>
  );
};
