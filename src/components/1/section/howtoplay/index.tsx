import type React from "react";
import "./global.css";
import styles from "./styles.module.css";

export const SectionHowToPlay: React.FC = () => {
  return (
    <section>
      <hgroup>
        <p className={styles.titleEn}>
          <span className={styles.titleEnText}></span>
        </p>
        <h2>遊び方</h2>
      </hgroup>
    </section>
  );
};
