import { useTranslation } from "react-i18next";

export const AgeOptions = () => {
  const { t } = useTranslation();

  const ageArr = [
    { id: 1, title: t("age-page.age-options.young") },
    { id: 2, title: t("age-page.age-options.adult") },
    { id: 3, title: t("age-page.age-options.middle-age") },
    { id: 4, title: t("age-page.age-options.oldEnough") },
  ];

  return ageArr;
};
