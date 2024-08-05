"use client";
import React from "react";
import Link from "next/link";
import { Divider } from "antd";
import { Image } from "antd";
import styles from "./friend.module.scss";
import { useRouter } from "next/router";
const info = [
  {
    id: 1,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 2,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 3,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 4,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 5,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 6,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 7,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 8,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 9,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 10,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 11,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
  {
    id: 12,
    imgSrc: "/img/c.png",
    name: "nguyễn thế đạt",
  },
];

export default function Friend() {
  const router = useRouter();
  const handleClickOpenPersonalPages = () => {
    router.push("/personal_page");
  };
  const chunkSize = 3;
  const imgChunks = [];
  for (let i = 0; i < info.length; i += chunkSize) {
    imgChunks.push(info.slice(i, i + chunkSize));
  }
  const limit = 9;
  const displayedImages = info.slice(0, limit);

  return (
    <>
      <div className={`${styles.anh} anh`}>
        <div className={styles.homeImage}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>
            Bạn bè ({info.length})
          </span>
          <Link href={"#"} className={styles.homeImage__view_all}>
            Xem tât cả
          </Link>
        </div>
        <Divider />
        <div className={styles.homeImage__image_all}>
          {displayedImages.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={`${styles.image} image`}
              onClick={handleClickOpenPersonalPages}
            >
              <Image
                className={styles.itemImg}
                alt="anh-loi"
                src={img.imgSrc}
                preview={false}
              />
              <p className={styles.name_fri}>{img.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
