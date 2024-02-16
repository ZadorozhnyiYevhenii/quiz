import './CustomButton.scss';

export const CustomButton = ({ title, onCLick, value }) => {
  return (
    <button
      type="button"
      className="custom-button"
      onClick={onCLick}
      value={value}
    >
      {title}
    </button>
  )
}