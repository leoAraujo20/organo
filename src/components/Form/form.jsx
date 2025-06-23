import { useState } from "react";
import Btn from "../Btn/btn";
import SelectField from "../SelectField/select-field";
import TextField from "../TextField/text-field";
import "./form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
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

  return (
    <section className="form-box">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          value={name}
          onValueChange={(value) => setName(value)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={position}
          onValueChange={(value) => setPosition(value)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
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
    </section>
  );
}

export default Form;
