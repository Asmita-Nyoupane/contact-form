const Input = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  size,
  ...props
}) => {
  return (
    <div className="field-wrapper">
      <label className={`label ${size}`}>{label}</label>

      <div className="input-with-icon">
        {Icon && (
          <span className={`icon  ${size}`}>
            <Icon />
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className={`field ${size}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
