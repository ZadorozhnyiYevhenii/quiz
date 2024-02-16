import { useTranslation } from "react-i18next"
import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"

export const AgePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ProgressBar numberOfQuiz={3} fillPercentage={barPercenteges.agePage} />
      <QuizTitle title={t('age-page.title')} />
    </div>
  )
}