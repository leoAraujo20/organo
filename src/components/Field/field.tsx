import "./field.css";

interface FieldProps {
  onValueChange: (value: string) => void;
  label: string;
  value: string;
  obrigatorio?: boolean;
  type?: string;
  placeholder?: string;
}

function Field({
  label,
  value,
  onValueChange,
  obrigatorio,
  type = "text",
  placeholder,
}: FieldProps) {

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    onValueChange(event.target.value);
  }

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Field;
