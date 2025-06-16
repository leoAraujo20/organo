import { useState } from "react";

import Banner from "./components/Banner/banner.jsx";
import Form from "./components/Form/form.jsx";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const handleAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
    console.log("Colaborador adicionado:", collaborator);
  };

  return (
    <>
      <Banner />
      <Form onAddCollaborator={handleAddCollaborator} />
    </>
  );
}

export default App;
