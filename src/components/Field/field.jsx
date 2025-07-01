import "./field.css";

function Field({
  label,
  value,
  onValueChange,
  obrigatorio,
  type = "text",
  placeholder,
}) {
  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Field;
