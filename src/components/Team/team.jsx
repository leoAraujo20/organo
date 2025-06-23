import Collaborator from "../Collaborator/collaborator.jsx";
import "./team.css";

function Team(props) {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor}}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <Collaborator />
      <Collaborator />
    </section>
  )
}

export default Team;