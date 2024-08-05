import Post from "@/components/homepage/ContentHome/Post/Post";
import { Col, Image, Row } from "antd";
import styles from "./index.module.css";
import React, { useState } from "react";
import ModalHideEveryone from "@/components/common/Modal/KyNiem/HideEveryone/ModalHideEveryone";
import ModalThongBao from "@/components/common/Modal/KyNiem/ThongBao/ModalThongBao";
import Head from "next/head";

interface KyNiemProps {
  isOpen: boolean;
  onClose: () => void;
}

const KyNiem: React.FC<KyNiemProps> = ({ isOpen, onClose }) => {
  const [isModalThongBao, setIsModalThongBao] = useState(false);
  const [isModalHideEveryone, setIsModalHideEveryone] = useState(false);

  return (
    <div>
      <Head>
        <title>Kỷ niệm</title>
      </Head>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col lg={8} md={2} sm={0} xs={0} className={styles.Col}>
            <div className={styles.celebrateNavbar}>
              <div className={styles.celebrateAll}>
                <h3 className={styles.celebrateAll__title}>Kỷ niệm</h3>
                <div className={styles.celebrateAllItem}>
                  <Image
                    src="/img/kyniem/all_memory.svg"
                    width={50}
                    height={50}
                    alt="celebrateIcon"
                    preview={false}
                  />
                  <p className={styles.celebrateAll__desc}>Tất cả kỷ niệm</p>
                </div>
              </div>
              <div className={styles.celebrateSetting}>
                <h3 className={styles.celebrateSetting__title}>Cài Đặt</h3>
                <div
                  className={styles.celebrateSettingItem}
                  onClick={() => {
                    setIsModalThongBao(true);
                  }}
                >
                  <Image
                    src="/img/kyniem/memory_notify.svg"
                    width={50}
                    height={50}
                    alt="celebrateIcon"
                    preview={false}
                  />
                  <p className={styles.celebrateSetting__desc}>Thông báo</p>
                </div>
                <div
                  className={styles.celebrateSettingItem}
                  onClick={() => {
                    setIsModalHideEveryone(true);
                  }}
                >
                  <Image
                    src="/img/kyniem/memory_hide_all.svg"
                    width={50}
                    height={50}
                    alt="celebrateIcon"
                    preview={false}
                  />
                  <p className={styles.celebrateSetting__desc}>Ẩn mọi người</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className={styles.ColTablet}>
            <div className={styles.menuColTablet}>
              <Image
                src="/img/kyniem/all_memory.svg"
                width={50}
                height={50}
                alt="celebrateIcon"
                preview={false}
              />
              <Image
                src="/img/kyniem/memory_notify.svg"
                width={50}
                height={50}
                alt="celebrateIcon"
                preview={false}
                onClick={() => {
                  setIsModalThongBao(true);
                }}
              />
              <Image
                src="/img/kyniem/memory_hide_all.svg"
                width={50}
                height={50}
                alt="celebrateIcon"
                preview={false}
                onClick={() => {
                  setIsModalHideEveryone(true);
                }}
              />
            </div>
          </Col>
          {isModalThongBao && (
            <ModalThongBao
              isOpen={isModalThongBao}
              onClose={() => setIsModalThongBao(false)}
            />
          )}
          {isModalHideEveryone && (
            <ModalHideEveryone
              isOpen={isModalHideEveryone}
              onClose={() => setIsModalHideEveryone(false)}
            />
          )}
          <Col lg={14} md={21} sm={24} xs={24}>
            <div className={styles.center}>
              <div className={styles.centerDetail}>
                <div className={styles.centerDetailHeader}>
                  <Image
                    src="/img/kyniem/memory_header.png/"
                    alt=""
                    preview={false}
                  />
                  <div className={styles.centerDetailHeader__content}>
                    <p>
                      Chúng tôi hy vọng bạn thích ôn lại và chia sẻ kỷ niệm trên
                      Truyền thông văn hóa, từ các kỷ niệm gần đây nhất đến
                      những kỷ niệm ngày xa xưa.
                    </p>
                  </div>
                </div>
                <div className={styles.centerBody}>
                  <div className={styles.centerBodyMemory}>
                    <h3 className={styles.centerBodyTitle}>Vào ngày này</h3>
                    <p className={styles.centerBodyTime}>1 năm trước</p>
                  </div>
                </div>
                <Post />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KyNiem;
