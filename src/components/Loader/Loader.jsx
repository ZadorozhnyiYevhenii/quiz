import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Loader.scss";

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + 1;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      }, 50);
    }

    if (progress === 100) {
      navigate('/quiz/email')
    }

    return () => clearInterval(interval);
  }, [progress, navigate]);

  return (
    <div className="loader">
      <div
        className="loader__circle"
        style={{
          background: `conic-gradient(#e4229c ${progress}%, transparent ${progress}%)`,
        }}
      >
        <div className="loader__wrap" />
        <div className="loader__background" />
        <div className="loader__text">{progress}%</div>
      </div>
      <div className="loader__description">
        {t('loader')}
      </div>
    </div>
  );
};
