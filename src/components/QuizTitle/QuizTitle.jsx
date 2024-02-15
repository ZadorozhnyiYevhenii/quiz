import './QuizTitle.scss';

export const QuizTitle = ({ title, description = '' }) => {
  return (
    <>
      <h1 className="quiz-title">
        {title}
      </h1>
      {description && <h3>{description}</h3>}
    </>
  )
}