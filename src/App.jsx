import './App.scss'
import { ProgressBar } from './components/ProgressBar/ProgressBar'

function App() {

  return (
    <>
      <ProgressBar numberOfQuiz={1} fillPercentage={80} />
    </>
  )
}

export default App
