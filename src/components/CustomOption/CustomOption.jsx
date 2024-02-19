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
  storageKey,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const selectedOptions = localStorage.getItem(storageKey);

  const isClicked = selectedOptions && selectedOptions.includes(option.title);

  return (
    <button
      className={cn("square-btn", {
        clicked: isClicked,
      })}
      type="button"
      onClick={handleClick}
      style={{
        borderRadius: `${radius}%`,
        height: heightBtn,
        width: widthBtn,
        padding: `${paddingBtn}%`,
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
