import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NextPageButton } from "../../components/NextPageButton/NextPageButton";
import { emailRules } from "../../utils/emailRules";
import "./EmailPage.scss";

export const EmailPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [title, setTitle] = useLocalStorage("titles", []);

  useEffect(() => {
    setTitle([...title, t("email-page.title")]);
  }, []);

  const [emailValue, setEmailValue] = useLocalStorage("emailValue", "");

  const [isEmailValid, setIsEmailValid] = useLocalStorage("emailError", false);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmailValue(value);
  };

  useEffect(() => {
    if (emailRules.test(emailValue) && emailValue.length > 0) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }, [emailValue, navigate, setIsEmailValid]);

  return (
    <main className="email-page">
      <QuizTitle
        title={t("email-page.title")}
        description={t("email-page.description")}
      />

      <section className="email-page__container">
        <CustomInput
          value={emailValue}
          onChange={handleChange}
          error={isEmailValid}
          erorrMessage={t("email-page.not-valid")}
        />

        <p className="email-page__policy">{t("email-page.policy")}</p>

        <NextPageButton
          path={!isEmailValid ? "/quiz/download" : ""}
          disabled={isEmailValid}
        />
      </section>
    </main>
  );
};
