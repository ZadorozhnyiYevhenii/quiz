import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"

export const AgePage = () => {
  return (
    <div>
      <ProgressBar numberOfQuiz={1} fillPercentage={barPercenteges.agePage} />
      <QuizTitle title={'dqdqdqdq'} />
    </div>
  )
}