import React, { useState } from "react";
import Image from "next/image";
import DotFr from "../Dropdown/dropFriend";
import styles from "./allfr.module.scss";

const fr = [
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
];

export default function Allfriend() {
  const [frs, setFr] = useState(false);
  const toggleFriendship = (id: number) => {
    // Tìm kiếm người dùng dựa trên ID
    const user = fr.find((friend) => friend.id === id);
    if (user) {
      // Cập nhật trạng thái bạn bè của người dùng
      user.isFriend = !user.isFriend;
    }
  };
  const [followers, setFollowers] = useState(fr);

  const handleRemoveFollower = (id: number) => {
    // Lọc ra danh sách bạn bè mới loại bỏ người dùng có id tương ứng
    const updatedFollowers = followers.filter((follower) => follower.id !== id);
    setFollowers(updatedFollowers);
  };
  return (
    <div className={styles.grid_fr}>
      {followers.map((follower) => (
        <div className={styles.allfr} key={follower.id}>
          <Image
            className={styles.allfr_img}
            width={56}
            height={56}
            alt="anh-dai-dien"
            src={follower.imgAvt}
          />
          <a className={styles.allfr_name}>{follower.name}</a>
          {follower.id % 2 === 0 ? (
            <DotFr removeFollower={() => handleRemoveFollower(follower.id)} />
          ) : null}
          {follower.id % 2 !== 0 ? (
            <button
              className={styles.allfr_add}
              onClick={() => {
                toggleFriendship(follower.id);
                setFr(!frs);
              }}
            >
              {follower.isFriend ? "Hủy lời mời" : "Thêm bạn bè"}
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}
