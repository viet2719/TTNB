import React, { useEffect, useState } from "react";
import styles from "./watchstory24h.module.scss";
import { Carousel, Image, Modal, Tabs } from "antd";
import type { MenuProps, RadioChangeEvent } from "antd";
import { Dropdown } from "antd";
import FooterStory from "./footerStory";
import { useRouter } from "next/router";
import type { DotPosition } from "antd/es/carousel";
function Story() {
  const router = useRouter();
  const [play, setPlay] = useState(true);
  const handleOnClickPlay = () => {
    setPlay(!play);
  };
  const [mute, setMute] = useState(false);
  const handleClickMute = () => {
    setMute(!mute);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div onClick={showModal}>
          <Image alt="phanh" src="/img/Group.svg" preview={false} /> Tắt tin của
          Mipan Zu Zu
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div>
          <Image alt="phanh" src="/img/Vector.svg" preview={false} />
          Tìm hỗ trợ hoặc báo cáo tin
        </div>
      ),
      key: "1",
    },
  ];

  const images = [
    { src: "/img/c.png", type: "image" },
    { src: "/img/c.png", type: "image" },
    { src: "/img/c.png", type: "image" },
    { src: "/video/video1.mp4", type: "video" },
    { src: "/img/c.png", type: "image" },
    { src: "/img/c.png", type: "image" },
    { src: "/img/c.png", type: "image" },
    { src: "/video/video1.mp4", type: "video" },
  ];

  const [dotPosition, setDotPosition] = useState<DotPosition>("top");
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };
  return (
    <div className={styles.story_content}>
      <div>
        <div className={styles.nav_story2}>
          <div className={styles.fr}>
            <Image
              width={46}
              height={46}
              alt="phanh"
              src="/img/c.png"
              preview={false}
              style={{ borderRadius: "50%" }}
            />
            <div className={styles.infomation}>
              <span>Tên</span>
              <span>10 giờ</span>
            </div>
          </div>
          <div className={styles.btn_custom}>
            <div onClick={handleOnClickPlay}>
              {!play ? (
                <Image
                  alt="phanh"
                  src={"/img/pause.svg"}
                  preview={false}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Image
                  alt="phanh"
                  src={"/img/gg_play-pause-o.svg"}
                  preview={false}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            <div onClick={handleClickMute}>
              {mute ? (
                <Image
                  alt="phanh"
                  src={"/img/mute.svg"}
                  preview={false}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Image
                  alt="phanh"
                  src={"/img/fluent_speaker-2-32-regular.svg"}
                  preview={false}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Image
                alt="phanh"
                src={"/img/3dot.svg"}
                preview={false}
                onClick={(e) => e.preventDefault()}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </div>
        </div>
        <div className="tabsStory">
          <Carousel
            style={{ width: "350px", height: 500 }}
            dotPosition={dotPosition}
            autoplay={play}
            waitForAnimate
          >
            {images.map((content, index) => (
              <div key={index}>
                {content.type === "image" ? (
                  <div className={styles.img_story}>
                    <Image
                      alt={`ảnh-${index + 1}`}
                      src={content.src}
                      preview={false}
                      width={350}
                      height={500}
                    />
                  </div>
                ) : (
                  <video
                    src={content.src}
                    autoPlay
                    loop
                    muted={mute}
                    width={350}
                    height={500}
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.story_footer}>
          <FooterStory />
        </div>
      </div>
      <div
        className={styles.exit}
        onClick={() => {
          router.push("/");
        }}
      >
        X
      </div>

      <Modal
        title="Tắt tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content_modal}>
          <h4>Tắt tin của Mipan Zu Zu?</h4>
          <p>Bạn sẽ không thấy tin của họ nữa nhưng vẫn là bạn bè.</p>
          <div className={styles.btn_modal}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.ok} onClick={handleOk}>
              Tắt
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Story;
