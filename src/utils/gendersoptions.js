import { useTranslation } from "react-i18next";

export const GenderOptions = () => {
  const { t } = useTranslation();

  const genderArr = [
    { id: 1, title: t("gender-page.genders.female"), emoji: "👩" },
    { id: 2, title: t("gender-page.genders.male"), emoji: "👨" },
    { id: 3, title: t("gender-page.genders.other"), emoji: "😉" },
  ];

  return genderArr;
};
