import { useTranslation } from "react-i18next";
import { DownloadIcon } from "../../assets/DownloadIcon";
import "./DownloadComponent.scss";

export const DownloadComponent = ({onDownload}) => {
  const { t } = useTranslation();

  return (
    <button className="download-btn" onClick={onDownload}>
      <span>
        <DownloadIcon />
      </span>
      <span className="download-btn__label">
        {t("download-page.download-answers")}
      </span>
    </button>
  );
};
