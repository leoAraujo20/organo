import { useState } from "react";
import Banner from "./components/Banner/banner.tsx";
import Form from "./components/Form/form.js";
import Team from "./components/Team/team.js";
import Footer from "./components/Footer/footer.tsx";
import { v4 as uuidv4 } from "uuid";
import { ICollaborator, ITeam } from "./shared/interfaces.ts";

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

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const handleAddCollaborator = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const handleDeleteCollaborator = (id: string) => {
    setCollaborators(
      collaborators.filter((collaborator) => {
        return collaborator.id !== id;
      })
    );
  };

  const handleChangeTeamColor = (teamId: string, newColor: string) => {
    setTeams(
      teams.map((team) => {
        if (team.id === teamId) {
          team.color = newColor;
        }
        return team;
      })
    );
  };

  const handleAddTeam = (team: ITeam) => {
    setTeams([
      ...teams,
      {
        id: uuidv4(),
        name: team.name,
        color: team.color,
      },
    ]);
  };

  const handleFavoriteCollaborator = (collaboratorId: string) => {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === collaboratorId)
          collaborator.isFavorite = !collaborator.isFavorite;
        return collaborator;
      })
    );
  };

  return (
    <>
      <Banner img="/images/banner.png" alt="Banner" />
      <Form
        onAddTeam={handleAddTeam}
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
            onFavoriteCollaborator={handleFavoriteCollaborator}
            onDeleteCollaborator={handleDeleteCollaborator}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
