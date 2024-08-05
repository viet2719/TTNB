"use client";
import React, { useState } from "react";
import { Image, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";

const Update_address_on_system: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [regime, setRegime] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Image
        alt=""
        src={"/img/chinh-sua.svg"}
        onClick={showModal}
        preview={false}
      />
      <Modal
        title="Cập nhật địa chỉ liên hệ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          <span className="title_contact_info">Địa chỉ</span>
          <input
            type="text"
            placeholder="Nhập địa chỉ"
            className={styles.input}
          />
          <div className={styles.chedo}>
            <Serfdom />
          </div>
          <div className={styles.button}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.ok} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Update_address_on_system;
