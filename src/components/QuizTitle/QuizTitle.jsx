import './QuizTitle.scss';

export const QuizTitle = ({ title, description = '' }) => {
  return (
    <>
      <h1 className="quiz-title">
        {title}
      </h1>
      {description && <h3 className='quiz-description'>{description}</h3>}
    </>
  )
}