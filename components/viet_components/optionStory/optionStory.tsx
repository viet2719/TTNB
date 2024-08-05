import React, { useState } from "react";
import { Image } from "antd";
import styles from "./optionStory.module.scss";
export default function OptionStory(props: any): JSX.Element {
  const { text } = props;
  return (
    <div>
      <div>
        <div onClick={text} className={styles.action_item}>
          <Image alt="" preview={false} src={"/img/them-van-ban.svg"} />
          Thêm văn bản
        </div>
        <div className={styles.action_item}>
          <Image alt="" preview={false} src={"/img/gan-the-ban-be.svg"} />
          Gắn thẻ bạn bè
        </div>
        <div className={styles.action_item}>
          <Image alt="" preview={false} src={"/img/am-nhac.svg"} />
          Âm nhạc
        </div>
      </div>
    </div>
  );
}
