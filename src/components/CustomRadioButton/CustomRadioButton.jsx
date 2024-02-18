import cn from "classnames";
import { CustomButton } from "../CustomButton/CustomButton";
import "./CustomRadioButton.scss";

export const CustomRadioButton = ({ title, onClick, height, storageKey }) => {

  const handleClick = () => {
    onClick();
  };

  const selecetedOptions = localStorage.getItem(storageKey)

  const isClicked = selecetedOptions && selecetedOptions.includes(title)

  return (
    <div className="radio-btn">
      <div className={cn("radio-btn__clear", { clicked: isClicked })} />
      <CustomButton
        title={title}
        onCLick={handleClick}
        height={height}
        storageKey={storageKey}
      />
    </div>
  );
};
