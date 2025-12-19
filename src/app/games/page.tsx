import { getGames } from "@/graphql/queries/getGames";
import GamesClient from "./GamesClient";
import styles from "./page.module.scss";

const GamesPage = async () => {
  const gamesData = await getGames();
  const { games } = gamesData;
  const { games: gameList } = games;
  return (
    <section aria-labelledby="games-list-heading">
      <h2 id="games-list-heading" className={styles.header}>Games List</h2>
      <GamesClient games={gameList} />
    </section>
  );
};

export default GamesPage;