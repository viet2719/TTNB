import React from "react";
import styles from "./WareHouseStory.module.scss";
import Image from "next/image";

export default function Khotin() {
  const fr = [
    {
      id: 1,
      media: {
        type: "image", // Loại media (image hoặc video)
        src: "/img/c.png", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 2,
      media: {
        type: "image", // Loại media (image hoặc video)
        src: "/img/c.png", // Đường dẫn hình ảnh hoặc video
      },
      name: "Đạt",
      date: "05 tháng 11",
    },
    {
      id: 3,
      media: {
        type: "image", // Loại media (image hoặc video)
        src: "/img/c.png", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 4,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 5,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 6,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 7,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 8,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
    {
      id: 9,
      media: {
        type: "video", // Loại media (image hoặc video)
        src: "/video/video1.mp4", // Đường dẫn hình ảnh hoặc video
      },
      name: "Nguyễn Hoàng",
      date: "05 tháng 11",
    },
  ];
  return (
    <div>
      <div>
        <div className={styles.myimage}>
          {fr.map((item) => (
            <div className={styles.myimage_img} key={item.id}>
              <span className={styles.date}>{item.date}</span>
              {item.media.type === "image" ? ( // Kiểm tra loại media
                <Image
                  className={styles.myimage_img_img}
                  width={155}
                  height={287}
                  alt="anh-loi"
                  src={item.media.src}
                />
              ) : (
                // Nếu là video, sử dụng phần tử <video>
                <video
                  className={styles.myimage_img_img}
                  width={155}
                  height={287}
                  controls // Hiển thị điều khiển video
                >
                  <source src={item.media.src} type="video/mp4" />
                </video>
              )}
              <div className={styles.seen}>
                <Image
                  width={18}
                  height={18}
                  alt=""
                  src={"/img/ant-design_eye-filled.svg"}
                />
                70
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
