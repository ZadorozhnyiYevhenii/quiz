import cn from "classnames";
import { CustomButton } from "../CustomButton/CustomButton";
import "./CustomRadioButton.scss";

export const CustomRadioButton = ({ title, onClick, height, storageKey }) => {

  const handleClick = () => {
    onClick();
  };

  const selecetedOptions = localStorage.getItem(storageKey)

  return (
    <div className="radio-btn">
      <div className={cn("radio-btn__clear", { clicked: selecetedOptions.includes(title) })} />
      <CustomButton
        title={title}
        onCLick={handleClick}
        height={height}
        storageKey={storageKey}
      />
    </div>
  );
};
