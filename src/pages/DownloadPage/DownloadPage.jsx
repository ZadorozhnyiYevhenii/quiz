import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import { useEffect, useState } from "react";
import { downloadCSV } from "../../helpers/downloadCSV";
import "./DownLoadPage.scss";

export const DownLoadPage = () => {
  const { t } = useTranslation();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const keys = [
      "age",
      "gender",
      "language",
      "selectedOptions",
      "selectedTopics",
      "emailValue",
    ];
    const allData = keys.reduce((acc, key) => {
      const storedData = JSON.parse(localStorage.getItem(key));
      if (storedData) {
        if (Array.isArray(storedData)) {
          acc.push(storedData);
        } else {
          acc.push(storedData);
        }
      }
      return acc;
    }, []);
    setQuizData(allData);
  }, []);

  const handleDownloadClick = () => {
    if (quizData.length > 0) {
      const questions = JSON.parse(localStorage.getItem("titles"));

      const formattedData = quizData.map((value, index) => [
        index + 1,
        questions[index],
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
        title="Retake quiz"
        onClick={handleRetakeClick}
        path={"/quiz"}
      />
    </main>
  );
};
