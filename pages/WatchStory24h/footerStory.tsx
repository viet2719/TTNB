import { Input, Image } from "antd";
import React from "react";
import Feeling from "./feeling";
import styles from "./watchstory24h.module.scss";
function FooterStory() {
  return (
    <div className={styles.footer_story}>
      <div className="input-footer-story">
        <Input
          prefix={
            <Image
              alt="phanh"
              width={25}
              height={25}
              src="/img/XMLID 92.svg"
              preview={false}
            />
          }
          style={{ background: "none", color: "#fff", width: 350 }}
          placeholder="Nhập tin nhắn"
        />
      </div>
      <div>
        <Feeling />
      </div>
    </div>
  );
}

export default FooterStory;
