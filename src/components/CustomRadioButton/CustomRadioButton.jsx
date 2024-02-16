import { useState } from "react";
import cn from "classnames";
import { CustomButton } from "../CustomButton/CustomButton";
import "./RadioButton.scss";

export const CustomRadioButton = ({ title, onClick, height }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="radio-btn">
      <div className={cn("radio-btn__clear", { clicked: isClicked })} />
      <CustomButton title={title} onCLick={handleClick} height={height} />
    </div>
  );
};
