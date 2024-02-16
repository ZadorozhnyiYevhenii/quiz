import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"
import { useTranslation} from 'react-i18next'

export const LanguagePage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <ProgressBar numberOfQuiz={1} fillPercentage={barPercenteges.languagePage} />
      <QuizTitle title={t('initial-page.title')} description={t('initial-page.subtitle')} />
    </div>
  )
}