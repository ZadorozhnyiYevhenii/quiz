import cn from 'classnames';
import "./CustomButton.scss";

export const CustomButton = ({ 
  title,
  onCLick,
  value,
  height = 60,
  clicked = false
}) => {
  return (
    <button
      type="button"
      className={cn("custom-button", { clicked: clicked })}
      onClick={onCLick}
      value={value}
      style={{ height: height }}
    >
      {title}
    </button>
  );
};
