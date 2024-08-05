import React, { useState } from "react";
import Image from "next/image";
import styles from "../TabsImage.module.scss";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import UpdateAvatar from "@/components/common/Modal/UpdateCoverImage/UpdateAvatar";
import Update from "@/components/common/Modal/UpdateCoverImage/Update";
const Pen = (props: any) => {
  const { removeFollower, imageURL, alt } = props;
  const handleDownload = () => {
    // Sử dụng đường dẫn hình ảnh từ imageURL
    const downloadURL = imageURL; // imageURL đã được truyền từ Myimage
    // Tạo một fake anchor element
    const anchor = document.createElement("a");
    anchor.href = downloadURL;
    anchor.download = alt;
    // Tên tệp ảnh khi tải xuống
    // Trigger a click event to download the image
    anchor.click();
  };
  const [avt, setAvt] = useState(false);
  const [cover, setCover] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className={styles.pen}
          onClick={() => {
            setAvt(true);
          }}
        >
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-dai-dien.svg"}
          />
          Đặt làm ảnh đại diện
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className={styles.pen}
          onClick={() => {
            setCover(true);
          }}
        >
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-bia.svg"}
          />
          Đặt làm ảnh bìa
        </div>
      ),
      key: "1",
    },

    {
      label: (
        <div className={styles.pen} onClick={handleDownload}>
          <Image width={19} height={20} alt="" src={"/img/fe_edit.svg"} />
          Tải xuống
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className={styles.pen} onClick={removeFollower}>
          {" "}
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa ảnh
        </div>
      ),
      key: "4",
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Image
          onClick={(e) => e.preventDefault()}
          className={styles.myimage_img_edit}
          width={31}
          height={30}
          alt="pencel"
          src={"/img/edit_album.svg"}
        />
      </Dropdown>
      {avt && (
        <UpdateAvatar
          isOpen={avt}
          onClose={() => {
            setAvt(false);
          }}
          coverImageSrc={imageURL}
        />
      )}
      {cover && (
        <Update
          isOpen={cover}
          onClose={() => {
            setCover(false);
          }}
          coverImageSrc={imageURL}
        />
      )}
    </>
  );
};
export default Pen;
