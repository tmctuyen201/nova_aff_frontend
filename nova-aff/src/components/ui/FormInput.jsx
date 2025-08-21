import "../../styles/components/form-input.css";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="form-input-group">
      <label htmlFor={name} className="form-input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="form-input"
        required={required}
      />
    </div>
  );
};

export default FormInput;
