import React, { useState } from "react";
import styles from "./create_album.module.scss";
import { Image } from "antd";
import Head from "next/head";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import { useRouter } from "next/router";

export default function Create_album() {
  const router = useRouter();
  const [nextId, setNextId] = useState(0);

  const handleFileUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    const newImage = {
      id: nextId,
      imgAvt: URL.createObjectURL(selectedFile), // Sử dụng URL.createObjectURL để tạo URL cho ảnh
      name: "Mô tả mới", // Có thể đặt mô tả mặc định
    };
    // Thêm ảnh mới vào danh sách img và tăng nextId
    setImg((prevImg) => [...prevImg, newImage]);
    setNextId(nextId + 1);
  };

  const [img, setImg] = useState<
    Array<{ id: number; imgAvt: string; name: string }>
  >([
    {
      id: 1,
      imgAvt: "/img/c.png",
      name: "ffdsdffd",
    },
    {
      id: 2,
      imgAvt: "/img/c.png",
      name: "sfsdf",
    },
    {
      id: 3,
      imgAvt: "/img/c.png",
      name: "ffdsdffd",
    },
  ]);
  const onClickDelImage = () => {
    if (window.confirm("Bạn chắc chắn muốn xóa ảnh này không !")) {
      alert("Xóa ảnh thành công !");
    }
  };
  const [albumName, setAlbumName] = useState("dđ");
  const onClickCreateAlbum = () => {
    if (albumName.trim() === "") {
      // Kiểm tra xem albumName có trống không
      alert("Vui lòng nhập tên album trước khi cập nhật!");
    } else {
      // Tên album không trống, cho phép tạo album
      alert("Cập album thành công !");
      router.push("/personal_page");
    }
  };
  const handleDescriptionChange = (index: number, newValue: string) => {
    // Create a copy of the 'img' state array
    const updatedImg = [...img];
    // Update the 'name' property for the specified index
    updatedImg[index].name = newValue;
    // Set the updated state
    setImg(updatedImg);
  };
  return (
    <div>
      <Head>
        <title>Sửa album</title>
      </Head>
      <div className={styles.album}>
        <div className={styles.nav_left}>
          <div
            className={styles.text_create_album}
            onClick={() => {
              router.push("/personal_page");
            }}
          >
            <Image
              preview={false}
              width={16}
              height={15}
              alt=""
              src={"/img/ve_left.svg"}
            />
            Tạo album
          </div>
          <div>
            <Serfdom />
          </div>
          <div>
            <div className={styles.text_name_album}>
              <input
                type="text"
                placeholder="Tên Album"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
              />
            </div>
            <div className={styles.upload}>
              <input
                id="file-upload"
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                multiple
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload" className={styles.upload_image}>
                Tải ảnh hoặc video lên
              </label>
            </div>
          </div>
          <button className={styles.create} onClick={onClickCreateAlbum}>
            Cập nhập
          </button>
        </div>
        <div className={styles.right}>
          {img.map((item, index) => (
            <div key={index} className={styles.item}>
              <Image
                height={195}
                width={267.25}
                alt=""
                src={item.imgAvt}
                preview={false}
              />
              <div className={styles.name_image}>
                <textarea
                  name={`description-${item.id}`}
                  id={`description-${item.id}`}
                  placeholder="Mô tả"
                  value={item.name}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                ></textarea>
              </div>
              <div className={styles.del} onClick={onClickDelImage}>
                <Image alt="" src="/img/ep_show_cmt_del.svg" preview={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
