import { fieldContainer, iconClasses, labelClasses } from "./input";
const textAreaClass = {
  sm: "pt-0 pl-8",
  md: "pt-0 pl-8",
  lg: "pl-12 pt-3",
};

const TextArea = ({ label, placeholder, size, icon: Icon }) => {
  return (
    <div className={"flex flex-col gap-3 flex-start"}>
      <label className={`label ${labelClasses[size]}`}>{label} </label>
      <div
        className={`field-container flex items-start ${fieldContainer[size]}`}
      >
        {Icon && (
          <span className={`icon absolute top-2 left-2 ${iconClasses[size]}`}>
            <Icon />
          </span>
        )}
        <textarea
          placeholder={placeholder}
          rows={6}
          className={`field resize-none ${textAreaClass[size]}`}
        />
      </div>
    </div>
  );
};

export default TextArea;
