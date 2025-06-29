import "./text-field.css";

function TextField(props) {


  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onValueChange(e.target.value)}
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextField;
