import "./text-field.css";

function TextField(props) {
 

  const handleChange = (event) => {
    props.onValueChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={handleChange}
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextField;
