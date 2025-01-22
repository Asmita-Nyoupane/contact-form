const TextArea = ({ label, placeholder, icon: Icon }) => {
  return (
    <div className="field-wrapper">
      <label className="label">{label} </label>

      <div className="input-with-icon">
        {Icon && (
          <span className="icon textarea-icon">
            <Icon />
          </span>
        )}
        <textarea placeholder={placeholder} rows={8} className="field" />
      </div>
    </div>
  );
};

export default TextArea;
