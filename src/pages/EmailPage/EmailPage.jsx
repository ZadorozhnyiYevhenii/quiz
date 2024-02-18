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

  const [emailValue, setEmailValue] = useLocalStorage("emailValue", "");

  const [isEmailValid, setIsEmailValid] = useLocalStorage("emailError", true);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmailValue(value);

    if (emailRules.test(value)) {
      console.log("Okay");
      setIsEmailValid(true);
    } else {
      console.log("Bad");
    }
  };

  const handleNextPage = () => {
    if (emailRules.test(emailValue)) {
      setIsEmailValid(true);
      navigate("/quiz/download");
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <main className="email-page">
      <QuizTitle
        title={t("email-page.title")}
        description={t("email-page.description")}
      />

      <div className="email-page__container">
        <CustomInput
          value={emailValue}
          onChange={handleChange}
          error={!isEmailValid}
          erorrMessage={t("email-page.not-valid")}
        />

        <p className="email-page__policy">{t("email-page.policy")}</p>

        <NextPageButton onClick={handleNextPage} />
      </div>
    </main>
  );
};
