import React, { useState } from "react";
import styles from "./SettingStory.module.scss";
import { Image } from "antd";

export default function StoryTurnOff() {
  const [storage, setStorage] = useState(false);
  const onClickStorage = () => {
    setStorage(!storage);
  };
  return (
    <div>
      <div className={styles.OnOff}>
        <div className={styles.name}>
          <Image width={40} height={40} src={"/img/c.png"} alt="" />
          <span>Nguyễn Thế Thức</span>
        </div>
        <button className={styles.btn} onClick={onClickStorage}>
          {storage ? "Ẩn tin" : "Bật lại"}
        </button>
      </div>
    </div>
  );
}
