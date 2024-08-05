import React, { useState } from "react";
import styles from "../index.module.css";
import { Divider } from "antd";
import { Image } from "antd";
import Interest from "@/components/common/Modal/Interest/Interest";

import HomeImage from "../ImageP/homeImage";
import { useRouter } from "next/router";
import EdieStory from "./EdieStory";
import Friend from "../Friend/friend";

export default function Intro() {
  const router = useRouter();
  const [add, setAdd] = useState("d");

  return (
    <>
      <div>
        <div className={styles.center_intro}>
          <p className={styles.title} style={{ fontSize: 16, fontWeight: 700 }}>
            Giới thiệu
          </p>
          <div className={styles.Divider}>
            <Divider />
          </div>
          <div className={styles.sto}>
            <EdieStory />
          </div>

          <div className={styles.follow}>
            {add && (
              <div style={{ display: "flex", gap: 10 }}>
                <Image
                  alt=""
                  src={"img/noi-lam-viec-icon.svg"}
                  preview={false}
                />
                Làm việc tại : <span>{add}</span>
              </div>
            )}

            <div
              className={styles.follow_list}
              style={{ display: "flex", gap: 10 }}
            >
              <Image
                width={24}
                height={24}
                alt=""
                src={"/img/nv_eye.svg"}
                preview={false}
              />
              <span>Có 1 người theo dõi</span>
            </div>
            <p>Xem thêm</p>
          </div>
          <div className={styles.st}>
            <Interest />
          </div>
        </div>
        <HomeImage />
        <Friend />
      </div>
    </>
  );
}
