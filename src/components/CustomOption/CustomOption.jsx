import { useState } from "react";
import cn from "classnames";
import "./CustomOption.scss";

export const CustomOption = ({
  option,
  onClick,
  paddingBtn,
  radius = 12,
  widthBtn,
  heightBtn = 144,
  emojiSize = 56,
  titleSize,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={cn("square-btn", { clicked: isClicked })}
      type="button"
      onClick={handleClick}
      style={{
        borderRadius: `${radius}%`,
        height: heightBtn,
        width: widthBtn,
        padding: paddingBtn,
      }}
    >
      <div className="square-btn__emoji" style={{ fontSize: emojiSize }}>
        {option.emoji}
      </div>
      <div className="square-btn__title" style={{ fontSize: titleSize }}>
        {option.title}
      </div>
    </button>
  );
};
