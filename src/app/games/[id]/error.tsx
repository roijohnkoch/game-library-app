"use client";

import Link from "next/link";
import styles from "./page.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.gameDetailsContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Unable to Load Game</h1>
        <p className={styles.description}>
          The game you’re trying to access is invalid or no longer available.
        </p>
      </header>

      <div className={styles.errorBox}>
        <p className={styles.errorMessage}>
          {error.message || "An unexpected error occurred."}
        </p>

        <div className={styles.actions}>
          <button onClick={() => reset()} className={styles.primaryButton}>
            Try Again
          </button>

          <Link href="/games" className={styles.secondaryButton}>
            Back to Games
          </Link>
        </div>
      </div>
    </div>
  );
}
