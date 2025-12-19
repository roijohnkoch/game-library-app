"use client";

import styles from "./page.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.errorContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Unable to Load Games</h1>
        <p className={styles.description}>
          Something went wrong while fetching the games list.
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
        </div>
      </div>
    </div>
  );
}
