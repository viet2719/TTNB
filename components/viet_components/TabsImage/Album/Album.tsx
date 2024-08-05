import React from "react";
import { Image } from "antd";
import styles from "../TabsImage.module.scss";
import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/router";

export default function Edit_album(props: any) {
  const { setDetail, detail } = props;
  const router = useRouter();
  const handleDownloadAlbum = () => {
    // Tạo URL tải xuống album
    const albumDownloadUrl = "/link-to-your-album.zip"; // Thay thế bằng URL thực tế

    // Tạo một thẻ <a> ẩn để khởi động tải xuống
    const downloadLink = document.createElement("a");
    downloadLink.href = albumDownloadUrl;
    downloadLink.download = "your-album.zip"; // Tên tệp khi tải xuống
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const onClickDelAlbum = () => {
    if (window.confirm("Bạn có muốn xóa album này không?")) {
      alert("Xóa album thành công!");
    }
  };
  const onClickEidtAlbum = () => {
    router.push({
      pathname: "/create_album/editAlbum",
    });
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <a className={styles.pen} onClick={onClickEidtAlbum}>
          {" "}
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-dai-dien.svg"}
            style={{ cursor: "pointer" }}
          />
          Chỉnh sửa album
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          className={styles.pen}
          onClick={handleDownloadAlbum}
          style={{ cursor: "pointer" }}
        >
          <Image
            width={19}
            height={20}
            alt=""
            src={"/img/dat-lam-anh-bia.svg"}
          />
          Tải album xuống
        </a>
      ),
      key: "1",
    },

    {
      label: (
        <a
          className={styles.pen}
          onClick={onClickDelAlbum}
          style={{ cursor: "pointer" }}
        >
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa album
        </a>
      ),
      key: "2",
    },
  ];
  const album = [
    {
      id: 1,
      imgSrc: "/img/c.png",
      des: "dd",
      length: "12",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
      des: "dd",
      length: "12",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
      des: "dd",
      length: "12",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
      des: "dd",
      length: "12",
    },
  ];
  return (
    <div>
      <div className={styles.album}>
        <div className={styles.album_add}>
          {/*  */}
          <div className={styles.album_new}>
            <div
              className={styles.album_add__new}
              onClick={() => {
                router.push("/create_album");
              }}
            >
              <Image
                width={24}
                height={25}
                alt="alicu"
                src={"/img/nv_add-circle_blue.svg"}
                preview={false}
              />
              <p>Tạo album</p>
            </div>
            {album.map((albums, index) => (
              <div key={index} className={styles.img486}>
                <div className={styles.img486_child}>
                  <div
                    className={styles.album_new_img}
                    onClick={() => {
                      router.push("/personal_page/DetailAlbum");
                    }}
                  >
                    <Image
                      width={218}
                      height={215}
                      alt="anh loi"
                      src={albums.imgSrc}
                      preview={false}
                    />
                    <Dropdown menu={{ items }} trigger={["click"]}>
                      <Image
                        style={{ cursor: "pointer" }}
                        onClick={(e) => e.preventDefault()}
                        className={styles.album_img_edit}
                        width={31}
                        height={30}
                        preview={false}
                        alt="pencel"
                        src={"/img/edit_album.svg"}
                      />
                    </Dropdown>
                  </div>

                  <div className={styles.data}>
                    <p>{albums.des}</p>
                    <span>{albums.length} mục</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
