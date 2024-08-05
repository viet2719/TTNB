import React from "react";
import SiderbarStory from "./sidebarStory";
import Story from "./story";
import styles from "./watchstory24h.module.scss";
import Head from "next/head";
export default function Watchstory24h() {
  return (
    <>
      <Head>
        <title>Xem tin 24h</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.watchstory24h}>
        <SiderbarStory />
        <div className={styles.see}>
          <Story />
        </div>
      </div>
    </>
  );
}
