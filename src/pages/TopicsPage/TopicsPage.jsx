import { ProgressBar } from "../../components/ProgressBar/ProgressBar"
import { QuizTitle } from "../../components/QuizTitle/QuizTitle"
import { barPercenteges } from "../../utils/barPercentages"

export const TopicsPage = () => {
  return (
    <div>
      <ProgressBar numberOfQuiz={1} fillPercentage={barPercenteges.topicsPage} />
      <QuizTitle title={'dqdqdqdq'} />
    </div>
  )
}