import { useTranslation } from "react-i18next";
import { QuizTitle } from "../../components/QuizTitle/QuizTitle";

export const EmailPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <QuizTitle
        title={t("email-page.title")}
        description={t("email-page.description")}
      />
    </main>
  );
};
