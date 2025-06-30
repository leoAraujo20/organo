import Collaborator from "../Collaborator/collaborator.jsx";
import "./team.css";

import hexToRgba from 'hex-to-rgba';

function Team(props) {
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
                color={props.color}
                image={collaborator.image}
                name={collaborator.name}
                position={collaborator.position}
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
