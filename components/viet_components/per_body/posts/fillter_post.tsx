"use client";
import React from "react";
import styles from "../index.module.css";
import Fillter from "@/components/viet_components/fillter/Fillter";
import Article_management from "@/components/viet_components/Article_management/Article_management";
export default function FillterPosat() {
  return (
    <>
      <div className={styles.fillter}>
        <span className={styles.filter_post_title}> Bài viết</span>
        <div className={styles.btn_post}>
          <Fillter />
          <Article_management />
        </div>
      </div>
    </>
  );
}
