import React, { useState } from "react";
import styles from "./index.module.scss";
import TruyenThongNoiBo from "..";

import Head from "next/head";

export default function Sinhnhat() {
  const childrenContentLeft = (
    <>
      <div className={styles.thutuceoContainer}>
        <div className={styles.thutuceoContainerHeader}>
          <div className={styles.birthday_title}>
            <h4> Sinh nhật vào hôm nay(0)</h4>
            <span>18 tháng 10, 2023</span>
          </div>
        </div>
        <div className={styles.divider_gach}></div>
        <div className={styles.list_birth_day}>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
        </div>
      </div>
      <div className={styles.thutuceoContainer}>
        <div className={styles.thutuceoContainerHeader}>
          <div className={styles.birthday_title}>
            <h4> Sinh nhật gần đây(0)</h4>
          </div>
        </div>
        <div className={styles.divider_gach}></div>
        <div className={styles.list_birth_day}>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
        </div>
      </div>
      <div className={styles.thutuceoContainer}>
        <div className={styles.thutuceoContainerHeader}>
          <div className={styles.birthday_title}>
            <h4> Sinh nhật sắp tới(0)</h4>
          </div>
        </div>
        <div className={styles.divider_gach}></div>
        <div className={styles.list_birth_day}>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
          <p>Nguyễn Thế Đạt</p>
        </div>
      </div>
    </>
  );
  const childrenContentRight = (
    <div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Tháng 10, 2023</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
          </div>
        </div>
      </div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Tháng 11, 2023</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
          </div>
        </div>
      </div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Tháng 12, 2023</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
            <p>Nguyễn Thế Đạt</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Head>
        <title>Sinh nhật</title>
      </Head>
      <TruyenThongNoiBo
        childrenContentLeft={childrenContentLeft}
        childrenContentRight={childrenContentRight}
        keyduocchon="3"
      />
    </>
  );
}
