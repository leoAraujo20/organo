import { useState } from "react";

import Banner from "./components/Banner/banner.jsx";
import Form from "./components/Form/form.jsx";
import Team from "./components/Team/team.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#D86EBF",
    },
    {
      name: "Mobile",
      color: "#FEBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const handleAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const handleDeleteCollaborator = () => {
    console.log("Colaborador deletado");
  }

  const handleChangeTeamColor = (teamName, newColor) => {
    setTeams(teams.map((team) => {
      if (team.name === teamName) {
        team.color = newColor;
      }
      return team;
    }))
  }

  return (
    <>
      <Banner />
      <Form
        onAddCollaborator={handleAddCollaborator}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team, index) => {
        return (
          <Team
            onChangeTeamColor={handleChangeTeamColor}
            key={index}
            name={team.name}
            color={team.color}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.name
            )}
            onDeleteCollaborator={handleDeleteCollaborator}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
