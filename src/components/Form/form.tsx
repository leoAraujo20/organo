import { useState } from "react";
import Btn from "../Btn/btn.tsx";
import SelectField from "../SelectField/select-field.tsx";
import Field from "../Field/field.js";
import "./form.css";
import { v4 as uuidv4 } from "uuid";
import { ICollaborator, ITeam } from "../../shared/interfaces.ts";

interface FormProps {
  teams: string[];
  onAddCollaborator: (collaborator: ICollaborator) => void;
  onAddTeam: (team: ITeam) => void;
}

function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmitCollaborator = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      id: uuidv4(),
      name,
      position,
      image,
      team,
      date,
      isFavorite: false,
    };
    props.onAddCollaborator(formData);
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
    setDate("");
  };

  const handleSubmitTeam = (event: React.FormEvent<HTMLFormElement>) => {
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
        <Field
          value={date}
          onValueChange={(value) => setDate(value)}
          label="Data"
          placeholder="10/10/2022"
          type="date"
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
