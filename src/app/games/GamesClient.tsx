"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components";
import {GameDetails, SortOption } from "@/lib/types";
import styles from "./page.module.scss";
import SortBar from "@/components/SortBar";

interface GamesClientProps {
  games: GameDetails[];
}

const GamesClient: React.FC<GamesClientProps> = ({ games }) => {
  const [sortBy, setSortBy] = useState<SortOption>("rating-desc");

  const unixToMilliseconds = (unix: string | number): number => {
    return Number(unix) < 1e12 ? Number(unix) * 1000 : Number(unix);
  }

  const sortedGames = useMemo(() => {
    return [...games].sort((a, b) => {
      switch (sortBy) {
        case "release-desc":
          return (
            unixToMilliseconds(b.releaseDate) - unixToMilliseconds(a.releaseDate)
          );
        case "release-asc":
          return (
            unixToMilliseconds(a.releaseDate) - unixToMilliseconds(b.releaseDate)
          );
        case "rating-desc":
          return b.averageRating - a.averageRating;
        case "rating-asc":
          return a.averageRating - b.averageRating;
        default:
          return 0;
      }
    });
  }, [games, sortBy]);

  return (
    <>
      <SortBar value={sortBy} onChange={setSortBy} />

      <div className={styles["games-grid"]}>
        {sortedGames.map((game) => (
          <Card key={game.id} gameDetails={game} />
        ))}
      </div>
    </>
  )
}

export default GamesClient;