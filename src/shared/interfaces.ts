export interface ICollaborator {
  id: string;
  name: string;
  position: string;
  image: string;
  isFavorite: boolean;
  team?: string;
}

export interface ITeam {
  id: string;
  name: string;
  color: string;
}
