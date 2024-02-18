import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import { useEffect, useState } from "react";
import { downloadCSV } from "../../helpers/downloadCSV";
import { answerKeyArray, titlesKey } from "../../utils/localstorageKeys";
import "./DownLoadPage.scss";

export const DownLoadPage = () => {
  const { t } = useTranslation();

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

      const uniqueQuestions = [...new Set(questions)];

      const formattedData = quizData.map((value, index) => [
        index + 1,
        uniqueQuestions[index],
        value,
      ]);
      downloadCSV(formattedData);
    }
  };

  const handleRetakeClick = () => {
    localStorage.clear();
  };

  return (
    <main className="download-page">
      <section className="download-page__header">
        <QuizTitle
          title={t("download-page.title")}
          description={t("download-page.description")}
          color={"#fff"}
        />
      </section>

      <div className="download-page__image" />

      <DownloadComponent onDownload={handleDownloadClick} />

      <NextPageButton
        title={t('download-page.button')}
        onClick={handleRetakeClick}
        path={"/quiz"}
      />
    </main>
  );
};
