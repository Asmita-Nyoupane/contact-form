export const labelClasses = {
  sm: "text-sm  lg:text-md",
  md: "text-md lg:text-base ",
  lg: "text-base lg:text-lg ",
};

export const iconClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-10 w-10",
};
export const fieldContainer = {
  m: "p-10",
  md: "p-8 ",
  lg: "p-1",
};
const Input = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  size,
  ...props
}) => {
  return (
    <div className="flex  flex-start flex-col gap-3">
      <label className={`label ${labelClasses[size]}`}>{label}</label>
      <div className={`field-container ${fieldContainer[size]}`}>
        {Icon && (
          <span className={`icon justify-start ${iconClasses[size]}`}>
            <Icon />
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className={`field `}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
