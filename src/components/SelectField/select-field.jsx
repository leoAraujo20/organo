import "./select-field.css";

function SelectField(props) {
  
  return (
    <div className="select-field">
      <label>{props.label}</label>
      <select value={props.value} onChange={(e) => props.onValueChange(e.target.value)}>
        {props.items.map((item,index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectField;
