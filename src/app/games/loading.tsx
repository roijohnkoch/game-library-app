import styles from "./page.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.header}>
        <div className={styles.titleSkeleton} />
        <div className={styles.descriptionSkeleton} />
      </div>

      <div className={styles.posterSkeleton} />

      <div className={styles.loadingDetails}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={styles.loadingDetailItem}>
            <div className={styles.detailSkeleton} />
            <div className={styles.detailSkeletonSmall} />
          </div>
        ))}
      </div>
    </div>
  );
}
