import "./select-field.css";

function SelectField(props) {
  const handleChange = (event) => {
    props.onValueChange(event.target.value);
  };
  
  return (
    <div className="select-field">
      <label>{props.label}</label>
      <select value={props.value} onChange={handleChange}>
        {props.items.map((item,index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectField;
