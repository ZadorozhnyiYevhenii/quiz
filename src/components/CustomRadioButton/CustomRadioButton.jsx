import { useState } from "react";
import cn from "classnames";
import { CustomButton } from "../CustomButton/CustomButton";
import "./CustomRadioButton.scss";

export const CustomRadioButton = ({ title, onClick, height }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    onClick();
  };

  return (
    <div className="radio-btn">
      <div className={cn("radio-btn__clear", { clicked: isClicked })} />
      <CustomButton
        title={title}
        onCLick={handleClick}
        height={height}
        clicked={isClicked}
      />
    </div>
  );
};
