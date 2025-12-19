import Image from 'next/image';
import {  getGameDetailsById } from '@/graphql/queries/getGameDetailsById';
import styles from './page.module.scss';

interface GameDetailsPageParams {
  params: {
    id: string;
  }
}

const GameDetailsPage: React.FC<GameDetailsPageParams> = async ({ params }) => {
  const { id } = await params;
  const gameDetails = await getGameDetailsById(id);
  const { game } = gameDetails;
  const { title, description } = game;

  return (
    <section className={styles.gameDetailsContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>
      <section className={styles.poster}>
        <Image 
          src={`https://picsum.photos/seed/${encodeURIComponent(title)}/1200/675`}
          alt={`${title} Poster`}
          fill
          sizes='(max-width: 768px) 100vw, 60vw'
        />
      </section>
    </section>
  );
}

export default GameDetailsPage;