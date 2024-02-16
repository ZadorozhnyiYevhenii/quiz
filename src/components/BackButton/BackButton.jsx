import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/back-icon";
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <button className="back-btn" onClick={handleNavigateBack}>
      <BackIcon />
    </button>
  );
};
