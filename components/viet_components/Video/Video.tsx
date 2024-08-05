import React, { useState } from "react";
import styles from "./video.module.scss";
import { Dropdown, Menu, Modal } from "antd";
import Image from "next/image";
import type { MenuProps } from "antd";
export default function Video() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
    {
      id: 2,
      imgAvt: "/video/video1.mp4",
      name: "Đạt",
    },
    {
      id: 3,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
    {
      id: 4,
      imgAvt: "/video/video1.mp4",
      name: "Nguyễn Hoàng",
    },
  ]);
  const handleDownloadVideo = (videoSrc: string, videoName: any) => {
    const anchor = document.createElement("a");
    anchor.href = videoSrc;
    anchor.download = `${videoName}`; // Set the desired file name here
    anchor.click();
  };

  const handleDeleteVideo = (videoId: number) => {
    // Show a confirmation modal before deleting
    Modal.confirm({
      title: "Xác nhận xóa video",
      content: "Bạn có chắc chắn muốn xóa video này?",
      onOk: () => {
        // Perform the delete action here
        const updatedVideos = videos.filter(
          (video: any) => video.id !== videoId
        );
        setVideos(updatedVideos);
      },
    });
  };
  const menu = (videoSrc: string, videoName: any, videoId: number) => (
    <Menu>
      <Menu.Item key="download">
        <a onClick={() => handleDownloadVideo(videoSrc, videoName)}>
          <Image width={19} height={20} alt="" src={"/img/fe_edit.svg"} />
          Tải xuống
        </a>
      </Menu.Item>
      <Menu.Item key="delete">
        <a onClick={() => handleDeleteVideo(videoId)}>
          <Image width={19} height={20} alt="" src={"/img/public_del.svg"} />
          Xóa video
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <h2 className={styles.title}>Video</h2>
      <div>
        <div className={`${styles.myimage} ${styles.vdeo}`}>
          {videos.map((video) => (
            <div className={styles.myimage_img} key={video.id}>
              <video
                width="100%"
                height="200"
                controls
                className={styles.video}
              >
                <source src={video.imgAvt} type="video/mp4" />
              </video>
              <Dropdown
                overlay={() => menu(video.imgAvt, video.imgAvt, video.id)}
                trigger={["click"]}
              >
                <Image
                  onClick={(e) => e.preventDefault()}
                  className={styles.myimage_img_edit}
                  width={31}
                  height={30}
                  alt="pencel"
                  src={"/img/edit_album.svg"}
                />
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
