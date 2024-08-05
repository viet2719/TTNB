import React, { useState } from "react";
import styles from "./WareHouseStory.module.scss";
import { Divider, Tabs } from "antd";
import Settingstory from "@/components/viet_components/SettingStory/Settingstory";
import Nhatki from "./Nhatki";
import Khotin from "./Khotin";
import TabPane from "antd/lib/tabs/TabPane";
import Head from "next/head";

export default function WareHouseStory() {
  const [activeTab, setActiveTab] = useState("khoTin"); // Sử dụng biến trạng thái để theo dõi tab được chọn

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Head>
        <title>Kho tin lưu trữ</title>
      </Head>
      <section className={styles.warehouse}>
        <div className={styles.sidebar}>
          <div
            className={` ${styles.khotin} activeTab === "khoTin" ? styles.activeTab : ""`}
            onClick={() => handleTabClick("khoTin")}
          >
            Kho tin lưu trữ
          </div>
          <div
            className={` ${styles.nhatki} activeTab === "nhatKy" ? styles.activeTab : ""`}
            onClick={() => handleTabClick("nhatKy")}
          >
            Nhật kí hoạt động
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.head_content}>
            <div className={`${styles.header_an} header_an`}>
              <Tabs activeKey={activeTab} onChange={handleTabClick}>
                <TabPane tab="Kho tin lưu trữ" key="khoTin">
                  Kho tin lưu trữ
                </TabPane>
                <TabPane tab="Nhật ký hoạt động" key="nhatKy">
                  Nhật ký hoạt động
                </TabPane>
              </Tabs>
            </div>
            <h4 className={styles.header_fake}>
              {activeTab === "khoTin" ? "Kho tin lưu trữ" : "Nhật ký hoạt động"}
            </h4>

            {activeTab === "khoTin" ? <Settingstory /> : ""}
          </div>
          <Divider />
          <div>
            {activeTab === "khoTin" && <Khotin />}
            {activeTab === "nhatKy" && <Nhatki />}
          </div>
        </div>
      </section>
    </div>
  );
}
