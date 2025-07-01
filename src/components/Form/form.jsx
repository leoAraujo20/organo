import { useState } from "react";
import Btn from "../Btn/btn";
import SelectField from "../SelectField/select-field";
import Field from "../Field/field.jsx";
import "./form.css";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const handleSubmitCollaborator = (event) => {
    event.preventDefault();
    const formData = {
      id: uuidv4(),
      name,
      position,
      image,
      team,
    };
    props.onAddCollaborator(formData);
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  const handleSubmitTeam = (event) => {
    event.preventDefault();
    const formData = {
      id: uuidv4(),
      name: teamName,
      color: teamColor,
    };
    props.onAddTeam(formData);
    setTeamName("");
    setTeamColor("");
  };

  return (
    <section className="form-box">
      <form onSubmit={handleSubmitCollaborator}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          value={name}
          onValueChange={(value) => setName(value)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Field
          value={position}
          onValueChange={(value) => setPosition(value)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <Field
          value={image}
          onValueChange={(value) => setImage(value)}
          label="Imagem"
          placeholder="Digite o URL da imagem"
        />
        <SelectField
          value={team}
          onValueChange={(value) => setTeam(value)}
          label="Times"
          items={props.teams}
        />
        <Btn>Criar Card</Btn>
      </form>
      <form onSubmit={handleSubmitTeam}>
        <h2>Preencha os dados para criar um time</h2>
        <Field
          value={teamName}
          onValueChange={(value) => setTeamName(value)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <Field
          type="color"
          value={teamColor}
          onValueChange={(value) => setTeamColor(value)}
          obrigatorio={true}
          label="Cor"
          placeholder="Digite a cor do time"
        />
        <Btn>Criar Time</Btn>
      </form>
    </section>
  );
}

export default Form;
