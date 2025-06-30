import "./collaborator.css";
import { IoIosCloseCircle } from "react-icons/io";

function Collaborator(props) {
  return (
    <div className="collaborator">
      <IoIosCloseCircle size={25} className="delete" onClick={() =>props.onDelete(props.id)}/>
      <div className="avatar" style={{ backgroundColor: props.color }}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="details">
        <h4 style={{ color: props.color }}>{props.name}</h4>
        <h5>{props.position}</h5>
      </div>
    </div>
  );
}

export default Collaborator;
