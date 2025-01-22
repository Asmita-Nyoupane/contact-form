const TextArea = ({ label, placeholder, size, icon: Icon }) => {
  return (
    <div className={"field-wrapper"}>
      <label className={`label ${size}`}>{label} </label>

      <div className="input-with-icon">
        {Icon && (
          <span className={`icon  ${size}`}>
            <Icon />
          </span>
        )}
        <textarea placeholder={placeholder} rows={8} className={` ${size}}`} />
      </div>
    </div>
  );
};

export default TextArea;
