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

  const isClicked = storeValues && storeValues.includes(title);

  return (
    <button
      type="button"
      className={cn("custom-button", { clicked: isClicked })}
      onClick={onCLick}
      value={value}
      style={{ height: height }}
    >
      {title}
    </button>
  );
};
