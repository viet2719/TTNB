import React from "react";
import styles from "./tabsGr.module.scss";
import type { MenuProps } from "antd";
import { Dropdown, Image } from "antd";
// import  from "antd";
const shareURL =
  "https://www.facebook.com/sharer/sharer.php?u=" +
  encodeURIComponent("https://your-website-url.com");

const handleShareClick = () => {
  window.open(shareURL, "FacebookShare", "width=600,height=400");
};
const items: MenuProps["items"] = [
  {
    label: (
      <a className={styles.dot_child} onClick={handleShareClick}>
        <Image
          width={25}
          height={24}
          alt="facebook"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          }
        />{" "}
        Facebook
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a className={styles.dot_child}>
        {" "}
        <Image
          width={25}
          height={24}
          alt="facebook"
          src={
            "https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg"
          }
        />
        Twitter
      </a>
    ),
    key: "1",
  },

  {
    label: (
      <a className={styles.dot_child}>
        {" "}
        <Image
          width={25}
          height={24}
          alt="facebook"
          src={
            "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
          }
        />
        Linked In
      </a>
    ),
    key: "2",
  },
];

const DropOtherShare: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()} className={styles.dot_child}>
      <Image
        width={25}
        height={24}
        alt="anh-loi"
        src={"/img/nv_other_share.svg"}
      />
      Khác
    </a>
  </Dropdown>
);

export default DropOtherShare;
