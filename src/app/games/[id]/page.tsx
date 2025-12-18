import {  getGameDetailsById } from '@/graphql/queries/getGameDetailsById';


interface GameDetailsPageParams {
  params: {
    id: string;
  }
}

const GameDetailsPage: React.FC<GameDetailsPageParams> = async ({ params }) => {
  const { id } = await params;
  const gameDetails = await getGameDetailsById(id);
  const { game } = gameDetails;
  const { title } = game;
  return <div>Game Details Page: {title}</div>;
}

export default GameDetailsPage;