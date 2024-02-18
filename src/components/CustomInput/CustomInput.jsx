import "./CustomInput.scss";

export const CustomInput = ({
  value,
  onChange,
  error = false,
  erorrMessage = "",
}) => {
  return (
    <div className="custom-input">
      <label className="custom-input__label">{error ? erorrMessage : ""}</label>
      <input
        type="text"
        placeholder="Your email"
        className="custom-input__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
