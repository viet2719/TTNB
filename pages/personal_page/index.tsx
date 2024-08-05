import React from "react";
import Center_avt from "../../components/viet_components/center_avt";
import styles from "./personal.module.css";
import Head from "next/head";

export default function Personal_page() {
  return (
    <>
      <Head>
        <title>Trang cá nhân</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.pages_canhan}>
        <div className={styles.center}>
          <Center_avt />
        </div>
      </div>
    </>
  );
}
