import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"

export const HatePage = () => {
  return (
    <div>
      <ProgressBar numberOfQuiz={1} fillPercentage={barPercenteges.hatePage} />
      <QuizTitle title={'dqdqdqdq'} />
    </div>
  )
}