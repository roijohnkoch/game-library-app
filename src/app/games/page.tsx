import { getGames } from "@/graphql/queries/getGames";
import { Card } from "@/components";
import styles from "./page.module.scss";

const GamesPage = async () => {
  const gamesData = await getGames();
  const { games } = gamesData;
  const { games: gameList } = games;
  return (
    <section aria-labelledby="games-list-heading">
      <h2 id="games-list-heading">Games List</h2>
      <div className={styles["games-grid"]}>
        {gameList.map((game) => (
          <Card key={game.id} gameDetails={game} />
        ))}
      </div>
    </section>
  );
};

export default GamesPage;