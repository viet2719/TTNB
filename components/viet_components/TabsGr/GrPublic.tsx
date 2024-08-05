import React, { useState } from "react";
import Image from "next/image";
import styles from "./tabsGr.module.scss";

import DotDrop from "./Dotdrop";
const gr = [
  {
    id: 1,
    imgSrc: "/img/c.png",
    nameGr: "abcxyz",
    quantity: "13",
  },
  {
    id: 2,
    imgSrc: "/img/c.png",
    nameGr: "abcxyz",
    quantity: "13",
  },
  {
    id: 3,
    imgSrc: "/img/c.png",
    nameGr: "abcxyz",
    quantity: "13",
  },
];

export default function GrPublic() {
  return (
    <div className={styles.grid_gr}>
      {gr.map((grs) => (
        <div className={styles.grPri} key={grs.id}>
          <Image
            className={styles.grPri_img}
            width={56}
            height={56}
            alt="anh-dai-dien"
            src={grs.imgSrc}
          />
          <div className={styles.info}>
            <a className={styles.grPri_name}>{grs.nameGr}</a>
            <span>{grs.quantity}</span>
          </div>
          <div className={styles.dot}>
            <DotDrop />
          </div>
        </div>
      ))}
    </div>
  );
}
