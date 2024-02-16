import './CustomButton.scss';

export const CustomButton = ({ title, onCLick }) => {
  return (
    <button
      type="button"
      className="custom-button"
      onClick={onCLick}
    >
      {title}
    </button>
  )
}