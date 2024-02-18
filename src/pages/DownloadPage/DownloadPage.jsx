import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { DownloadComponent } from "../../components/DownloadComponent/DownloadComponent";
import "./DownLoadPage.scss";

export const DownLoadPage = () => {
  const { t } = useTranslation();

  const handleRetakeClick = () => {
    localStorage.clear();
  }

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

      <DownloadComponent />

      <NextPageButton title="Retake quiz" onClick={handleRetakeClick} path={'/quiz'} />
    </main>
  );
};
