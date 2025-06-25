import Collaborator from "../Collaborator/collaborator.jsx";
import "./team.css";

function Team(props) {
  if (props.collaborators.length > 0) {
    return (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator, index) => (
            <Collaborator
              key={index}
              primaryColor={props.primaryColor}
              image={collaborator.image}
              name={collaborator.name}
              position={collaborator.position}
            />
          ))}
        </div>
      </section>
    );
  }
  return null;
}

export default Team;
