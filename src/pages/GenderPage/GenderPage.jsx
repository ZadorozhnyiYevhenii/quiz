import { useTranslation } from "react-i18next"
import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"
import i18next from "i18next"

export const GenderPage = () => {
  const { t } = useTranslation();

  console.log(i18next.language)

  return (
    <div>
      <ProgressBar numberOfQuiz={2} fillPercentage={barPercenteges.genderPage} />
      <QuizTitle title={t('gender-page.title')} />
    </div>
  )
}