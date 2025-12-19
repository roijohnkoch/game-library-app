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
  const { title, description, releaseDate, developer, averageRating, genre } = game;

  const formatUnixDate = (unix: string | number): string => {
    const timestamp = Number(unix)
    if (!timestamp) return 'Unknown'

    const date =
      timestamp < 1e12
        ? new Date(timestamp * 1000)
        : new Date(timestamp)

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

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
      <section className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Release Date: </span>
          <span>{formatUnixDate(releaseDate)}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Developer: </span>
          <span>{developer.name}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Genres: </span>
          <span>{genre.genreName}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Rating: </span>
          <span>{averageRating}</span>
        </div>
      </section>
    </section>
  );
}

export default GameDetailsPage;