import React, { useState } from "react";
import styles from "../addstory.module.scss";
import { Divider, Image } from "antd";
import Footernav from "@/components/viet_components/optionStory/footernav";
import OptionStory from "@/components/viet_components/optionStory/optionStory";
import ChangeBackground from "./changeBackground";
import Settingstory from "@/components/viet_components/SettingStory/Settingstory";

export default function NavStory(props: any) {
  const {
    selectedImage,
    text,
    imaget,
    colorButtons,
    value,
    updateTextarea1Content,
    colorButtonsText,
  } = props;

  return (
    <div>
      <div className={styles.head_nav}>
        <span className={styles.tin}>Tin</span>
        <Settingstory />
      </div>
      <div className={styles.my_story}>
        <span>Tạo tin của bạn</span>
        <div className={styles.personal}>
          <Image alt="phanh" src={"/img/c.png"} width={50} preview={false} />
          <span className={styles.name}>Nguyễn Văn Thức</span>
        </div>
      </div>
      <Divider />
      <div className={styles.nav_content}>
        <div className={styles.navfooter}>
          {selectedImage && (
            <div>
              <OptionStory text={text} />
              <Footernav />
              {text ? (
                <div>
                  <span>Màu chữ</span>
                  <button style={{ marginBottom: 10 }}>
                    {colorButtonsText}
                  </button>
                </div>
              ) : null}
            </div>
          )}
          {!imaget && (
            <>
              <ChangeBackground
                colorButtons={colorButtons}
                value={value}
                updateTextarea1Content={updateTextarea1Content}
                colorButtonsText={colorButtonsText}
              />
              <OptionStory text={text} />
              <Footernav />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
