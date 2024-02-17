import { useNavigate } from "react-router-dom";
import cn from "classnames";
import "./NextPageButtom.scss";

export const NextPageButton = ({ onClick, path, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(path);
  };

  return (
    <div className="next-btn">
      <button
        type="button"
        className={cn("next-btn__button", { disabled: disabled })}
        onClick={handleClick}
        disabled={disabled}
      >
        Next
      </button>
    </div>
  );
};
