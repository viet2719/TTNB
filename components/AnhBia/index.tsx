import React, { useState } from "react";
import styles from "./index.module.scss";
import { Image } from "antd";
interface ImageUrl {
  imageUrl: string;
}
function AnhBia(props: any) {
  const { ten, soluong } = props;
  const [uploadedImage, setUploadedImage] = useState<string | null>("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file) as string;
      setUploadedImage(imageUrl);
    }
  };
  const [uploadAvt, setUploadAvt] = useState<string | null>("");
  const handleImageUploadAvt = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file) as string;
      setUploadAvt(imageUrl);
    }
  };
  return (
    <div>
      <div className={`${styles.anhbia} anhbia`}>
        <Image
          alt="ph-anh"
          src={uploadedImage || "/img/c.png"}
          preview={false}
        />
        <div className={styles.anhdaidiennhom}>
          <div className={styles.img}>
            <Image
              className="img_daidien"
              alt="ph-anh"
              src={uploadAvt || "/img/c.png"}
              preview={false}
              width={70}
              height={70}
            />
            <label htmlFor="update-avt">
              <Image
                className="img_camera"
                alt="ph-anh"
                src={"/img/nv_camera.svg"}
                preview={false}
                width={25}
                height={25}
              />

              <input
                type="file"
                name="update-avt"
                id="update-avt"
                hidden
                accept="image/*" // Chỉ cho phép tải lên các tệp ảnh
                onChange={handleImageUploadAvt}
              />
            </label>
          </div>

          <div className={styles.info_gr}>
            <p>{ten}</p>
            <p>{soluong} thành viên</p>
          </div>
        </div>
        <label htmlFor="update-image" className={styles.btn_chinhsuaanhbia}>
          <Image
            alt="ph-anh"
            src={"/img/nv_camera.svg"}
            preview={false}
            width={25}
            height={25}
          />
          <p className={styles.text}>Chỉnh sửa ảnh bìa</p>
          <input
            type="file"
            hidden
            id="update-image"
            accept="image/*" // Chỉ cho phép tải lên các tệp ảnh
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
}

export default AnhBia;
