import React from "react";
import styles from "./index.module.css";
import { Image } from "antd";
import { Popover, ConfigProvider } from "antd";

import Menunav from "./menu";

export default function HeaderLogin() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.header_respon}>
            <div className={styles.config}>
              <ConfigProvider
                theme={{
                  components: {
                    Menu: {
                      darkItemBg: "#4c5bd4",
                      darkItemHoverBg: "#2e3994",
                      darkItemSelectedBg: "#2e3994",
                      darkSubMenuItemBg: "#4c5bd4",
                    },
                  },
                }}
              >
                <Popover
                  content={<Menunav />}
                  className={`thuc_popover`}
                  trigger="click"
                  arrow={false}
                >
                  <Image
                    alt="/"
                    src={"/img/before_login/menu.png"}
                    preview={false}
                  />
                </Popover>
              </ConfigProvider>
            </div>
            <Image
              alt="/"
              src={"/img/before_login/log_hdnav.png"}
              preview={false}
            />
            <div></div>
          </div>
          <div className={styles.login}>
            <ul className={styles.ul}>
              <li>Trang chủ</li>
              <li>Hướng dẫn</li>
              <li>Tin tức</li>
              <li>Chuyển đổi số</li>
            </ul>
            <button className={styles.button_login}>Đăng ký</button>
            <button className={styles.button_login}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}
