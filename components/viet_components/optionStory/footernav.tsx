import React from "react";
import styles from "./optionStory.module.scss";
import ExitStory from "@/components/common/Modal/ExitStory/exitStory";
export default function Footernav() {
  return (
    <div>
      <div className={styles.footer}>
        <ExitStory />

        <button className={styles.chiaselentin}>Chia sẻ lên tin</button>
      </div>
    </div>
  );
}
