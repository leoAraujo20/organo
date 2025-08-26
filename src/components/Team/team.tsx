import Collaborator from "../Collaborator/collaborator.js";
import "./team.css";
import hexToRgba from 'hex-to-rgba';
import { Collaborator as CollaboratorInterface } from "../../shared/interfaces";

interface TeamProps {
  id: string;
  name: string;
  color: string;
  collaborators: CollaboratorInterface[];
  onDeleteCollaborator: (id: string) => void;
  onFavoriteCollaborator: (id: string) => void;
  onChangeTeamColor: (id: string, color: string) => void;
}

function Team(props: TeamProps) {
  if (props.collaborators.length > 0) {
    return (
      <section
        className="team"
        style={{ 
          backgroundColor: hexToRgba(props.color, 0.6),
        }}
      >
        <input onChange={(e) => props.onChangeTeamColor(props.id, e.target.value)} value={props.color} type='color' className='input-color' />
        <h3 style={{ borderColor: props.color }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => {
            return (
              <Collaborator
                key={collaborator.id}
                id={collaborator.id}
                isFavorite={collaborator.isFavorite}
                color={props.color}
                image={collaborator.image}
                name={collaborator.name}
                position={collaborator.position}
                onFavorite={props.onFavoriteCollaborator}
                onDelete={props.onDeleteCollaborator}
              />
            );
          })}
        </div>
      </section>
    );
  }
  return null;
}

export default Team;
