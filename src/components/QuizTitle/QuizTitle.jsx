import "./QuizTitle.scss";

export const QuizTitle = ({ title, description = "", color }) => {
  return (
    <div className="quiz-title">
      <h1 className="quiz-title__main">{title}</h1>
      {description && (
        <h3 className="quiz-title__description" style={{ color: color }}>
        {description}
        </h3>
      )}
    </div>
  );
};
