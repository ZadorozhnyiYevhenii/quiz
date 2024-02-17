import { useTranslation } from "react-i18next";

export const TopicsOptions = () => {
  const { t } = useTranslation();

  const topics = [
    { id: 1, title: t("topics-page.options.wolf"), emoji: "🐺" },
    { id: 2, title: t("topics-page.options.romance"), emoji: "🥰" },
    { id: 3, title: t("topics-page.options.action"), emoji: "💃" },
    { id: 4, title: t("topics-page.options.young-adult"), emoji: "🙋" },
    { id: 5, title: t("topics-page.options.royal-obsession"), emoji: "👑" },
    { id: 6, title: t("topics-page.options.bad-boy"), emoji: "🤠" },
    { id: 7, title: t("topics-page.options.billionaire"), emoji: "🤑" },
  ];

  return topics;
};
