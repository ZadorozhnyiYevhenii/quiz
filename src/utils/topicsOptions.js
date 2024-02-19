import { useTranslation } from "react-i18next";
import { answerKey } from "./localstorageKeys";

export const TopicsOptions = () => {
  const { t } = useTranslation();

  const ageValue = JSON.parse(localStorage.getItem(answerKey.age));

  let topicsArray;

  switch (ageValue.slice(0, 2)) {
    case '18':
      topicsArray = [
        { id: 1, title: t("topics-page.options-18-29.fantasy"), emoji: "😱" },
        { id: 2, title: t("topics-page.options-18-29.science-fiction"), emoji: "🧬" },
        { id: 3, title: t("topics-page.options-18-29.thriller"), emoji: "🔦" },
        { id: 4, title: t("topics-page.options-18-29.mystery"), emoji: "👁️‍🗨️" },
        { id: 5, title: t("topics-page.options-18-29.dystopian"), emoji: "🧟‍♂️" },
        { id: 6, title: t("topics-page.options-18-29.graphic-novels"), emoji: "📖" },
        { id: 7, title: t("topics-page.options-18-29.nonfiction"), emoji: "👀" },
      ];
      break;
    case '30':
      topicsArray = [
        { id: 1, title: t("topics-page.options-30-39.literary-fiction"), emoji: "📓" },
        { id: 2, title: t("topics-page.options-30-39.historical-fiction"), emoji: "📜" },
        { id: 3, title: t("topics-page.options-30-39.self-help"), emoji: "🆘" },
        { id: 4, title: t("topics-page.options-30-39.memoir"), emoji: "🔖" },
        { id: 5, title: t("topics-page.options-30-39.billionaire"), emoji: "👑" },
        { id: 6, title: t("topics-page.options-30-39.crime-fiction"), emoji: "🤠" },
        { id: 7, title: t("topics-page.options-30-39.travel"), emoji: "🧳" },
      ];
      break;
    case '40':
      topicsArray = [
        { id: 1, title: t("topics-page.options-40-49.thriller"), emoji: "🔦" },
        { id: 2, title: t("topics-page.options-40-49.royal-obsession"), emoji: "👑" },
        { id: 3, title: t("topics-page.options-40-49.adventure"), emoji: "🧳" },
        { id: 4, title: t("topics-page.options-40-49.health"), emoji: "👩‍⚕️" },
        { id: 5, title: t("topics-page.options-40-49.historical"), emoji: "📜" },
        { id: 6, title: t("topics-page.options-40-49.memoir"), emoji: "🔖" },
        { id: 7, title: t("topics-page.options-40-49.auto-biography"), emoji: "📗" },
      ];
      break;
    case '50':
      topicsArray = [
        { id: 1, title: t("topics-page.options-50+.contemporary-fiction"), emoji: "👁️‍🗨️" },
        { id: 2, title: t("topics-page.options-50+.wolf"), emoji: "🐺" },
        { id: 3, title: t("topics-page.options-50+.welness"), emoji: "👩‍⚕️" },
        { id: 4, title: t("topics-page.options-50+.royal-obsession"), emoji: "👑" },
        { id: 5, title: t("topics-page.options-50+.dystopian"), emoji: "🧟‍♂️" },
        { id: 6, title: t("topics-page.options-50+.action"), emoji: "🤠" },
        { id: 7, title: t("topics-page.options-50+.thriller"), emoji: "🔦" },
      ];
      break;
    default:
      topicsArray = [];
  }

  return topicsArray;
};
