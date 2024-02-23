import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import { downloadCSV } from "../../helpers/downloadCSV";
import { answerKeyArray, titlesKey } from "../../utils/localstorageKeys";
import { AnimatedPageWrapper } from "../../components/AnimatedPageWrapper/AnimatedPageWrapper";
import "./DownLoadPage.scss";

export const DownLoadPage = () => {
  const { t, i18n } = useTranslation();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const allData = answerKeyArray.reduce((acc, key) => {
      const storedData = JSON.parse(localStorage.getItem(key));
      if (storedData) {
        acc.push(storedData);
      }
      return acc;
    }, []);
    setQuizData(allData);
  }, []);

  const handleDownloadClick = () => {
    if (quizData.length > 0) {
      const questions = JSON.parse(localStorage.getItem(titlesKey));
      const uniqueQuestions = [...new Set(questions)].slice(-6);

      const questionType = t("question-type", { returnObjects: true });

      const formattedData = quizData.map((value, index) => [
        index + 1,
        uniqueQuestions[index],
        questionType[index],
        value,
      ]);

      downloadCSV(formattedData);
    }
  };

  const handleRetakeClick = () => {
    localStorage.clear();
    i18n.changeLanguage('en')
  };

  return (
    <main className="download-page">
      <AnimatedPageWrapper>
        <header className="download-page__header">
          <QuizTitle
            title={t("download-page.title")}
            description={t("download-page.description")}
            color={"#fff"}
          />
        </header>

        <section className="download-page__content">
          <div className="download-page__image" />
        </section>
      </AnimatedPageWrapper>

      <DownloadComponent onDownload={handleDownloadClick} />

      <NextPageButton
        title={t("download-page.button")}
        onClick={handleRetakeClick}
        path={"/quiz"}
      />
    </main>
  );
};
