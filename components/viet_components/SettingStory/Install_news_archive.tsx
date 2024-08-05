import React, { useState } from "react";
import styles from "./SettingStory.module.scss";

export default function Install_news_archive() {
  const [storage, setStorage] = useState(false);
  const onClickStorage = () => {
    setStorage(!storage);
  };
  return (
    <div>
      <div>
        <p className={styles.text_set}>
          <span>Lưu vào Kho lưu trữ</span>
          <span>
            Tự động lưu trữ ảnh và video sau khi chúng biến mất khỏi tin của
            bạn. Chỉ có bạn mới xem được kho lưu trữ tin của mình.
          </span>
        </p>
        <div className={styles.btn}>
          <button onClick={onClickStorage}>
            {storage ? "Tắt kho tin lưu trữ" : "Bật kho tin lưu trữ"}
          </button>
        </div>
      </div>
    </div>
  );
}
