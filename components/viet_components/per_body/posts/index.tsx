"use client";
import React from "react";
import Intro from "./introduce";
import AddPost from "@/components/homepage/ContentHome/AddPost/AddPost";
import FillterPosat from "./fillter_post";
import Post from "@/components/homepage/ContentHome/Post/Post";
import styles from "./responsive.module.scss";
export default function Posts() {
  return (
    <>
      <div className={styles.post}>
        <div>
          <Intro />
        </div>

        <div className={styles.post_post}>
          <AddPost />
          <FillterPosat />
          <Post />
        </div>
      </div>
    </>
  );
}
