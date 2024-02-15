import { totalQuizesNumber } from '../../utils/constants';
import './ProgressBar.scss';

export const ProgressBar = ({ numberOfQuiz, fillPercentage }) => {
  return (
    <div className='progress'>
      <span className='progress__wrap'>
        <span className='progress__page-number'>{numberOfQuiz}</span>
        <span className='progress__page-total'>{totalQuizesNumber}</span>
      </span>
      <div className='progress__bar'>
        <div className='progress__background' />
        <div className='progress__fill' style={{ width: `${fillPercentage}%` }} />
      </div>
    </div>
  )
}