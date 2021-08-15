import styles from  "./HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <div>
      <div className={`${styles.image} flex items-center justify-center`}>
        <span className={`container ${styles.text}`}>
          From Personal&nbsp;Grooming to Fashion&nbsp;Essentials we've&nbsp;got&nbsp;your&nbsp;back
        </span>
      </div>
    </div>
  );
}
