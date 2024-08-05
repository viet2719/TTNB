"use client";
import React, { useState } from "react";
import { Divider } from "antd";
import { Image } from "antd";
import styles from "./homeImage.module.scss";
const HomeImage = (setActiveTab: any) => {
  const Img = [
    {
      id: 1,
      imgSrc: "/img/c.png",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
    },
    {
      id: 5,
      imgSrc: "/img/c.png",
    },
    {
      id: 6,
      imgSrc: "/img/c.png",
    },
    {
      id: 7,
      imgSrc: "/img/c.png",
    },
    {
      id: 8,
      imgSrc: "/img/c.png",
    },
    {
      id: 9,
      imgSrc: "/img/c.png",
    },
    {
      id: 10,
      imgSrc: "/img/c.png",
    },
    {
      id: 11,
      imgSrc: "/img/c.png",
    },
    {
      id: 12,
      imgSrc: "/img/c.png",
    },
  ];
  const chunkSize = 3;
  const imgChunks = [];
  for (let i = 0; i < Img.length; i += chunkSize) {
    imgChunks.push(Img.slice(i, i + chunkSize));
  }
  const limit = 5; // Số lượng ảnh tối đa muốn hiển thị
  const displayedImages = Img.slice(0, limit);

  return (
    <div className={`${styles.anh} anh`}>
      <div className={styles.homeImage}>
        <span style={{ fontSize: 16, fontWeight: 700 }}>Ảnh</span>
        <span
          style={{ cursor: "pointer" }}
          className={styles.homeImage__view_all}
        >
          Xem tât cả
        </span>
      </div>
      <Divider />
      <div className={styles.homeImage__image_all}>
        {displayedImages.map((img, imgIndex) => (
          <div key={imgIndex} className={`${styles.image} image`}>
            <Image
              className={styles.itemImg}
              alt="anh-loi"
              src={img.imgSrc}
              preview={false}
            />
          </div>
        ))}
        {Img.length > limit && (
          <div className={styles.image__length}>
            <p>+{Img.length - limit} ảnh khác</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeImage;
