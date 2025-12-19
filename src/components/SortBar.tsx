"use client";

import { SortBarProps, SortOption } from "@/lib/types";
import styles from "./SortBar.module.scss";

const SortBar: React.FC<SortBarProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div className={styles.sortBar}>
      <label htmlFor="sort" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className={styles.select}
      >
        <option value="release-desc">Release Date (Newest)</option>
        <option value="release-asc">Release Date (Oldest)</option>
        <option value="rating-desc">Rating (Highest)</option>
        <option value="rating-asc">Rating (Lowest)</option>
      </select>
    </div>
  )
}

export default SortBar;