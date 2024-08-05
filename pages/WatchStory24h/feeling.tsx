import React, { useState } from "react";
import { Image } from "antd";
import styles from "./watchstory24h.module.scss";

function Feeling() {
  const felling = [
    {
      id: 1,
      imgSrc: "/img/felling/like.svg",
    },
    {
      id: 2,
      imgSrc: "/img/felling/haha.svg",
    },
    {
      id: 3,
      imgSrc: "/img/felling/love 1.svg",
    },
    {
      id: 4,
      imgSrc: "/img/felling/sad 1.svg",
    },
    {
      id: 5,
      imgSrc: "/img/felling/wow 1.svg",
    },
    {
      id: 6,
      imgSrc: "/img/felling/angry 1.svg",
    },
  ];
  return (
    <div className={styles.felling}>
      {felling.map((fell, index) => (
        <div key={index}>
          <Image alt="phanh" src={fell.imgSrc} preview={false} />
        </div>
      ))}
    </div>
  );
}

export default Feeling;
