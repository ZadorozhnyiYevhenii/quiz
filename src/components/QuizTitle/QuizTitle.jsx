import './QuizTitle.scss';

export const QuizTitle = ({ title, description = '' }) => {
  return (
    <div className='quiz-title'>
      <h1 className="quiz-title__main">
        {title}
      </h1>
      {description && <h3 className='quiz-title__description'>{description}</h3>}
    </div>
  )
}