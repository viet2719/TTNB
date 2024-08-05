import React, { useState } from "react";
import styles from "./Intro.module.scss";
import Image from "next/image";

export default function Overview() {
  const [yet, setYet] = useState();

  return (
    <div>
      <div className={styles.gr_introduce_status}>
        <Image
          width={24}
          height={25}
          alt=""
          src={"/img/noi-lam-viec-icon.svg"}
        />
      </div>
    </div>
  );
}
