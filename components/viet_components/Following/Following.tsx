import React, { useState } from "react";
import Image from "next/image";
import styles from "./following.module.scss";

export default function Following() {
  const [fr, setFr] = useState([
    {
      id: 1,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 2,
      imgAvt: "/img/c.png",
      name: "Đạt",
      isFriend: false,
    },
    {
      id: 3,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 4,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 5,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 6,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 7,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 8,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
    {
      id: 9,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      isFriend: false,
    },
  ]);
  const [addFr, setAddFr] = useState(false);
  const handleAddFr = () => {
    setAddFr(!addFr);
  };
  const handleAddFriend = (memberId: any) => {
    const updatedFr = [...fr];
    const member = updatedFr.find((m) => m.id === memberId);

    if (member) {
      member.isFriend = !member.isFriend;
    }

    setFr(updatedFr);
  };
  return (
    <div className={styles.grid_fr}>
      {fr.map((allfr, index) => (
        <div key={index} className={styles.grid}>
          <div className={styles.allfr} key={allfr.id}>
            <Image
              className={styles.allfr_img}
              width={56}
              height={56}
              alt="anh-dai-dien"
              src={allfr.imgAvt}
            />
            <div className={styles.allfr_name}>{allfr.name}</div>
          </div>
          <div className={styles.feedback_dad}>
            <button
              className={styles.allfr_add}
              onClick={() => handleAddFriend(allfr.id)}
            >
              {allfr.isFriend ? "Hủy lời mời" : "Thêm bạn bè"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
