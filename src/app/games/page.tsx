import { getGames } from "@/graphql/queries/getGames";

const GamesPage = async () => {
  const games = await getGames();
  console.log('test ==>', games);
  return <div>Games Page</div>;
};

export default GamesPage;