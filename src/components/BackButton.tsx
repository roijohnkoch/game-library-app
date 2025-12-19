'use client'
import styles from './BackButton.module.scss';

const BackButton = () => {
  return (
    <button className={styles.backButton} onClick={() => window.history.back()}>
      ← Back
    </button>
  )
}

export default BackButton;