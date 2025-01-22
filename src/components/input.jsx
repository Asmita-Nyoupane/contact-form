const Input = ({ label, type = "text", placeholder, icon: Icon, ...props }) => {
  return (
    <div className="field-wrapper">
      <label className="label">{label}</label>

      <div className="input-with-icon">
        {Icon && (
          <span className="icon">
            <Icon />
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className="field"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
