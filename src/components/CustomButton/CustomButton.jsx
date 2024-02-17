import cn from "classnames";
import "./CustomButton.scss";

export const CustomButton = ({
  title,
  onCLick,
  value,
  height = 60,
  storageKey = "",
}) => {
  const storeValues = localStorage.getItem(storageKey);

  return (
    <button
      type="button"
      className={cn("custom-button", { clicked: storeValues.includes(title) })}
      onClick={onCLick}
      value={value}
      style={{ height: height }}
    >
      {title}
    </button>
  );
};
