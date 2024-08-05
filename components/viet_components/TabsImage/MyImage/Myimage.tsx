import React, { useState } from "react";
import Image from "next/image";
import styles from "../TabsImage.module.scss";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Pen from "./edit";

export default function Myimage() {
  const fr = [
    {
      id: 1,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "dasdas",
    },
    {
      id: 2,
      imgAvt: "/img/c.png",
      name: "Đạt",
      alt: "",
    },
    {
      id: 3,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 4,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 5,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 6,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 7,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 8,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
    {
      id: 9,
      imgAvt: "/img/c.png",
      name: "Nguyễn Hoàng",
      alt: "",
    },
  ];
  const [img, setImg] = useState(fr);
  const handleRemoveFollower = (id: number) => {
    // Lọc ra danh sách bạn bè mới loại bỏ người dùng có id tương ứng
    const updatedFollowers = img.filter((imgs) => imgs.id !== id);
    setImg(updatedFollowers);
  };
  const handleDownload = () => {
    // Create a fake URL for the image download
    const downloadURL = "/path/to/your/image.jpg"; // Thay đổi đường dẫn tới tệp ảnh của bạn

    // Create a fake anchor element
    const anchor = document.createElement("a");
    anchor.href = downloadURL;
    anchor.download = "image.jpg"; // Tên tệp ảnh khi tải xuống

    // Trigger a click event to download the image
    anchor.click();
  };

  return (
    <div>
      <div className={styles.myimage}>
        {img.map((imgs, index) => (
          <div className={styles.myimage_img} key={index}>
            <Image
              className={styles.myimage_img_img}
              width={215}
              height={215}
              alt="anh-loi"
              src={imgs.imgAvt}
            />
            <Pen
              removeFollower={() => handleRemoveFollower(imgs.id)}
              imageURL={imgs.imgAvt}
              alt={imgs.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
