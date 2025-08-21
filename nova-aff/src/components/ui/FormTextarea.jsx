import "../../styles/components/form-textarea.css";

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
}) => {
  return (
    <div className="form-textarea-group">
      <label htmlFor={name} className="form-textarea-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="form-textarea"
        rows={rows}
        required={required}
      />
    </div>
  );
};

export default FormTextarea;
