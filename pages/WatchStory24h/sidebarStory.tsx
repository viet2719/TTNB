import React from "react";
import styles from "./watchstory24h.module.scss";
import Settingstory from "@/components/viet_components/SettingStory/Settingstory";
import { Image } from "antd";
import { useRouter } from "next/router";

function SiderbarStory() {
  const story = [
    {
      id: 1,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "3",
      time: "10",
    },
    {
      id: 2,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "3",
      time: "23",
    },
    {
      id: 3,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "1",
      time: "22",
    },
    {
      id: 4,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "3",
      time: "22",
    },
    {
      id: 5,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "4",
      time: "22",
    },
    {
      id: 6,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "5",
      time: "22",
    },
    {
      id: 7,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "3",
      time: "22",
    },
    {
      id: 8,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "4",
      time: "22",
    },
    {
      id: 9,
      name: "công công",
      imgAvt: "/img/c.png",
      quanty: "5",
      time: "22",
    },
  ];
  const router = useRouter();
  const handleOnClickKhotin = () => {
    router.push("/addstory24h/WarehouseStory/WareHouseStory");
  };
  return (
    <div className={styles.siderbar}>
      <div className={styles.siderBar_story}>
        <div className={styles.siderbar_story_header}>
          <h4>Tin</h4>
          <div className={styles.siderbar_story_header_right}>
            <h4 className={styles.khotin} onClick={handleOnClickKhotin}>
              Kho lưu trữ
            </h4>
            <Settingstory />
          </div>
        </div>
        <div className={styles.siderbar_story_content}>
          <div className={styles.header_content}>
            <h4>Tạo tin của bạn</h4>
            <div
              className={styles.info}
              onClick={() => {
                router.push("/addstory24h");
              }}
            >
              <Image
                alt="add-story"
                preview={false}
                width={50}
                src="/img/nv_add-circle_blue.svg"
              />
              <div className={styles.my_info}>
                <h4>Tạo tin</h4>
                <p>Hãy chia sẻ ảnh, video hoặc viết gì đó.</p>
              </div>
            </div>
          </div>
          <h4>Tất cả các tin</h4>
          <div className={styles.content}>
            {story.map((storys, index) => (
              <div key={index} className={`${styles.list_story} list_story`}>
                <div className={`${styles.imgAvt} imgAvt`}>
                  <Image
                    alt="add-story"
                    preview={false}
                    width={50}
                    src={storys.imgAvt}
                  />
                </div>

                <div>
                  <span className={styles.name}>{storys.name}</span>
                  <div className={styles.quanty_time}>
                    <span>{storys.quanty} thẻ mới</span>
                    <span>{storys.time} phút trước</span>
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

export default SiderbarStory;
