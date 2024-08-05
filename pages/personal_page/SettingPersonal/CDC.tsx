"use client";
import React from "react";
import styles from "./SettingPersonal.module.scss";
import SetName from "@/components/viet_components/Modal/SetName";
import SetEmail from "@/components/viet_components/Modal/SetEmail";
export default function CDC() {
  return (
    <div className={styles.cdc}>
      <h4>Cài đặt tài khoản chung</h4>
      <div className={styles.contact}>
        <span className={styles.lienhe}>Tên</span>
        <span className={styles.info}>Ngh</span>
        <div className={styles.set}>
          <SetName />
        </div>
      </div>
      <div className={styles.contact}>
        <span className={styles.lienhe}>Liên hệ</span>
        <span className={styles.info}>
          Email: <p>sdjasdgajshgadsjhasd@gmail.com</p>
        </span>
        <div className={styles.set}>
          <SetEmail />
        </div>
      </div>
    </div>
  );
}
