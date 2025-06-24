import "./collaborator.css";

function Collaborator(props) {
  return (
    <div className="collaborator">
      <div className="avatar" style={{ backgroundColor: props.primaryColor }}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="details">
        <h4 style={{ color: props.primaryColor }}>{props.name}</h4>
        <h5>{props.position}</h5>
      </div>
    </div>
  );
}

export default Collaborator;
