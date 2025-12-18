import Image from "next/image";
import { CardProps } from "@/lib/types";
import styles from "./Card.module.scss";

const Card: React.FC<CardProps> = (props) => {
  const { gameDetails } = props;
  const { title, releaseDate, averageRating, genre, images } = gameDetails;

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
    <article
      className={styles.card}
      itemScope
      itemType="http://schema.org/VideoGame"
    >
      <div className={styles.poster}>
        <Image 
          src={`https://picsum.photos/seed/${encodeURIComponent(title + releaseDate)}/600/900`}
          alt={`${title} Cover Image`}
          fill
          itemProp="image"
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <span>Release Date: <time dateTime={releaseDate} itemProp="releaseDate">{formatUnixDate(releaseDate)}</time></span>
        <span>Genre: {genre.genreName}</span>
        <span>Average Rating: {averageRating}</span>
      </div>
    </article>
  );
}

export default Card;  