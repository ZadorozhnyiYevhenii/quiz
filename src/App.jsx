import './App.scss'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { QuizTitle } from './components/QuizTitle/QuizTitle'

function App() {

  return (
    <>
      <ProgressBar numberOfQuiz={1} fillPercentage={80} />
      <QuizTitle title={'dada'} />
    </>
  )
}

export default App
