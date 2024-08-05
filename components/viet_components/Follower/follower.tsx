import React, { useState } from "react";
import Image from "next/image";
import styles from "./follower.module.scss";

import BtnAction from "./btnAction";

const fr = [
  {
    id: 1,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 2,
    imgAvt: "/img/c.png",
    name: "Đạt",
  },
  {
    id: 3,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 4,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 5,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 6,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 7,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 8,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
  {
    id: 9,
    imgAvt: "/img/c.png",
    name: "Nguyễn Hoàng",
  },
];

export default function Follower() {
  const [followers, setFollowers] = useState(fr);

  const handleRemoveFollower = (id: number) => {
    // Lọc ra danh sách bạn bè mới loại bỏ người dùng có id tương ứng
    const updatedFollowers = followers.filter((follower) => follower.id !== id);
    setFollowers(updatedFollowers);
  };

  return (
    <div className={styles.grid_fr}>
      {followers.map((follower, index) => (
        <div key={index} className={styles.grid}>
          <div className={styles.allfr} key={follower.id}>
            <Image
              className={styles.allfr_img}
              width={56}
              height={56}
              alt="anh-dai-dien"
              src={follower.imgAvt}
            />
            <a className={styles.allfr_name}>{follower.name}</a>
          </div>
          <div className={styles.feedback_dad}>
            <BtnAction
              removeFollower={() => handleRemoveFollower(follower.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
