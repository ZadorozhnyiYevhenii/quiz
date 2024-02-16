import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"

export const GenderPage = () => {
  return (
    <div>
      <ProgressBar numberOfQuiz={1} fillPercentage={barPercenteges.genderPage} />
      <QuizTitle title={'dqdqdqdq'} />
    </div>
  )
}