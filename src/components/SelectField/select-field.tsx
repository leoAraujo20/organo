import "./select-field.css";

interface SelectFieldProps {
  label: string;
  value: string;
  items: string[];
  onValueChange: (value: string) => void;
}

function SelectField(props: SelectFieldProps) {
  return (
    <div className="select-field">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(e) => props.onValueChange(e.target.value)}
      >
        {props.items.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectField;
