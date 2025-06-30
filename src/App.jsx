import { useState } from "react";

import Banner from "./components/Banner/banner.jsx";
import Form from "./components/Form/form.jsx";
import Team from "./components/Team/team.jsx";
import Footer from "./components/Footer/footer.jsx";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#D86EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FEBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const handleAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const handleDeleteCollaborator = (id) => {
    setCollaborators(collaborators.filter((collaborator) => {
      return collaborator.id !== id;
    }));
  };

  const handleChangeTeamColor = (teamId, newColor) => {
    setTeams(teams.map((team) => {
      if (team.id === teamId) {
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
            id={team.id}
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
