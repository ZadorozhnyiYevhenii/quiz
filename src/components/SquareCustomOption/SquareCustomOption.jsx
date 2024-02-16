import './SquareCustomOption.scss';

export const SquareCustomOption = ({
  option,
  onClick
}) => {
  return (
    <button
      className="square-btn"
      type="button"
      onClick={onClick}
    >
      <div className="square-btn__emoji">{option.emoji}</div>
      <div className="square-btn__title">{option.title}</div>
    </button>
  )
}