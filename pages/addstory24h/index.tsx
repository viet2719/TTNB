import React, { useState } from "react";
import styles from "./addstory.module.scss";
import { Button, Image, Drawer } from "antd";
import Head from "next/head";
import NavStory from "./NavStory/navStory";

import Settingstory from "@/components/viet_components/SettingStory/Settingstory";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [text, setText] = useState(false);
  const [textStory, setTextstory] = useState(false);
  const [imaget, setImageNone] = useState(true);
  const [story, setStory] = useState(true);
  const [textColorIndex, setTextColor] = useState(0);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  //  đưa ảnh vào
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setSelectedImage(e.target.result as string);
          const newUrl = "/anh24h";
          setUrl(newUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const onClickOpentextarea = () => {
    setText(!text);
  };
  const onClicktextstory = () => {
    setTextstory(true);
    setStory(false);
    setImageNone(false);
  };

  const backgroundColors = [
    "#474747",
    "#ffffff",
    "#76b51b",
    "#2E3994",
    "#F2C94C",
    "#FF3333",
    "#BDBDBD",
    "#56CCF2",
    "#F2994A",
    "#9B51E0",
    "#E37676",
    "#BB6BD9",
    "#4C5BD4",
    "#E145A2",
    "#27AE60",
    "#219653",
    "#6FCF97",
    "#2F80ED",
    "#2D9CDB",
    "#B05A69",
    "#FF9DAF",
  ]; // Danh sách các màu nền
  const textColorOptions = [
    "#474747",
    "#ffffff",
    "#76b51b",
    "#2E3994",
    "#F2C94C",
    "#FF3333",
    "#BDBDBD",
    "#56CCF2",
    "#F2994A",
    "#9B51E0",
    "#E37676",
    "#BB6BD9",
    "#4C5BD4",
    "#E145A2",
    "#27AE60",
    "#219653",
    "#6FCF97",
    "#2F80ED",
    "#2D9CDB",
    "#B05A69",
    "#FF9DAF",
  ]; // Danh sách các màu nền
  const [backgroundIndex, setBackgroundIndex] = useState(0); // Chỉ số của màu nền hiện tại
  const maxCharacters = 100; // Số ký tự tối đa cho phép
  // Xử lý khi nút được nhấp để điều chỉnh màu nền
  const handleBackgroundButtonClick = (index: number) => {
    setBackgroundIndex(index);
  };

  // Tạo các nút tương ứng với các màu
  const colorButtons = backgroundColors.map((color, index) => (
    <button
      key={index}
      onClick={() => handleBackgroundButtonClick(index)}
      style={{
        backgroundColor: color,
        border: backgroundIndex === index ? "3px solid black" : "none",
      }}
      className={styles.color_background}
    ></button>
  ));
  const handleColorButtonClick = (index: number) => {
    // Đặt màu chữ mới dựa trên index của nút màu
    setTextColor(index);
  };
  const colorButtonsText = backgroundColors.map((colors, index) => (
    <button
      key={index}
      onClick={() => handleColorButtonClick(index)}
      style={{
        color: colors,
        backgroundColor: colors,
        border: textColorIndex === index ? "3px solid black" : "none",
      }}
      className={styles.color_background}
    ></button>
  ));
  // Xử lý khi nút thay đổi màu chữ được nhấp

  const textareaStyle = {
    backgroundColor: backgroundColors[backgroundIndex],
    color: backgroundColors[textColorIndex],
  };
  const textareaStyle2 = {
    color: backgroundColors[textColorIndex],
  };

  ///thay đổi nội dung textarea
  const [textarea1Content, setTextarea1Content] = useState("");

  // Hàm để cập nhật nội dung của textarea 1 từ component con
  const updateTextarea1Content = (newContent: any) => {
    setTextarea1Content(newContent);
  };

  return (
    <div className={styles.story}>
      <Head>
        <title>Tạo tin 24h</title>
        <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
      </Head>
      <div className={styles.taotin24h}>
        <div className={styles.navigation}>
          <NavStory
            selectedImage={selectedImage}
            text={onClickOpentextarea}
            imaget={imaget}
            colorButtons={colorButtons}
            colorButtonsText={colorButtonsText}
            value={textarea1Content}
            updateTextarea1Content={updateTextarea1Content}
          />
        </div>

        {story ? (
          <div
            className={`${styles.cont} ${selectedImage ? styles.hidden : ""}`}
          >
            <div className={styles.settig}>
              <div>
                <Settingstory />
              </div>
            </div>
            <div
              className={`${styles.header} 
        `}
            >
              <label htmlFor="image_story" className={styles.image_story}>
                <Image
                  width={77}
                  height={77}
                  src={"/img/tao-tin-anh.svg"}
                  alt=""
                  preview={false}
                />

                <span>Tạo tin ảnh</span>
                <input
                  type="file"
                  hidden
                  id="image_story"
                  onChange={handleImageChange}
                />
              </label>
              <div onClick={onClicktextstory} className={styles.text_story}>
                <Image
                  preview={false}
                  width={77}
                  height={77}
                  src={"/img/tao-tin-van-ban.svg"}
                  alt=""
                />
                <span>Tạo tin văn bản</span>
              </div>
            </div>
          </div>
        ) : null}

        {imaget ? (
          <div
            className={`${styles.header1} ${styles.edit} tuychinh ${
              selectedImage ? "" : styles.hidden
            }`}
          >
            <div className={styles.watch}>
              Xem trước{" "}
              <Button type="primary" onClick={showDrawer}>
                Tùy chỉnh
              </Button>
              <Drawer title="" placement="right" onClose={onClose} open={open}>
                <NavStory
                  selectedImage={selectedImage}
                  text={onClickOpentextarea}
                  imaget={imaget}
                  colorButtons={colorButtons}
                  colorButtonsText={colorButtonsText}
                  value={textarea1Content}
                  updateTextarea1Content={updateTextarea1Content}
                />
              </Drawer>
            </div>
            <div className={styles.fa_content}>
              <div className={styles.content}>
                <div className={styles.image_story2}>
                  {selectedImage && (
                    <Image
                      width={300}
                      height={470}
                      src={selectedImage}
                      alt="Selected Image"
                      preview={false}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  {text ? (
                    <textarea
                      style={textareaStyle2}
                      className={styles.textarea}
                      placeholder="Nhập văn bản..."
                    ></textarea>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.header} ${styles.edit} tuychinh`}>
            <div className={styles.watch}>
              Xem trước
              <Button type="primary" onClick={showDrawer}>
                Tùy chỉnh
              </Button>
              <Drawer title="" placement="right" onClose={onClose} open={open}>
                <NavStory
                  selectedImage={selectedImage}
                  text={onClickOpentextarea}
                  imaget={imaget}
                  colorButtons={colorButtons}
                  colorButtonsText={colorButtonsText}
                  value={textarea1Content}
                  updateTextarea1Content={updateTextarea1Content}
                />
              </Drawer>
            </div>
            <div className={styles.fa_content}>
              <div className={styles.content}>
                <div className={styles.image_story2}>
                  <textarea
                    style={textareaStyle}
                    value={textarea1Content}
                    className={styles.textarea2}
                    placeholder="Nhập văn bản..."
                    onChange={(e) => setTextarea1Content(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
