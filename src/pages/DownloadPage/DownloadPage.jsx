import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import "./DownLoadPage.scss";
import { useEffect, useState } from "react";
import { downloadCSV } from "../../helpers/downloadCSV";

export const DownLoadPage = () => {
  const { t } = useTranslation();

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("selectedOptions"));
    if (storedData) {
      const formattedData = storedData.map(option => [option]); // Convert each option into an array
      setQuizData(formattedData);
    }
  }, []);

  console.log(quizData)

  const handleDownloadClick = () => {
    if (quizData.length > 0) {
      downloadCSV(quizData);
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
