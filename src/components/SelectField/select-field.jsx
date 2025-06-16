import "./select-field.css";

function SelectField(props) {
  const handleChange = (event) => {
    props.onValueChange(event.target.value);
  };
  
  return (
    <div className="select-field">
      <label>{props.label}</label>
      <select value={props.value} onChange={handleChange}>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectField;
