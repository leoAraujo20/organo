import "./collaborator.css";
import { IoIosCloseCircle } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface CollaboratorProps {
  key: string,
  id: string,
  isFavorite: boolean,
  color: string,
  image: string,
  name: string,
  position: string,
  onFavorite: (id: string) => void,
  onDelete: (id: string) => void,
}

function Collaborator(props: CollaboratorProps) {
  return (
    <div className="collaborator">
      <IoIosCloseCircle
        size={25}
        className="delete"
        onClick={() => props.onDelete(props.id)}
      />
      <div className="avatar" style={{ backgroundColor: props.color }}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="details">
        <h4 style={{ color: props.color }}>{props.name}</h4>
        <h5>{props.position}</h5>
        <div className="favorite">
          {props.isFavorite ? (
            <FaHeart
              onClick={() => props.onFavorite(props.id)}
              size={20}
              color="#ff0000"
            />
          ) : (
            <CiHeart onClick={() => props.onFavorite(props.id)} size={20} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Collaborator;
