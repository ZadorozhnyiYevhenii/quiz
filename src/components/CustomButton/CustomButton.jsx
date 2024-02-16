import "./CustomButton.scss";

export const CustomButton = ({ 
  title,
  onCLick,
  value,
  height = 60
}) => {
  return (
    <button
      type="button"
      className="custom-button"
      onClick={onCLick}
      value={value}
      style={{ height: height }}
    >
      {title}
    </button>
  );
};
