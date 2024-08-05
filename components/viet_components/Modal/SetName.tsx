import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./Modal.module.scss";

const SetName: React.FC = () => {
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

  return (
    <>
      <div onClick={showModal}>Chỉnh sửa</div>
      <Modal
        title="Sửa tên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.modal_content}>
          <div className={styles.title}>
            <span className={styles.span}>Họ*</span>
            <input type="text" placeholder="Nhập họ" />
          </div>
          <div className={styles.title}>
            <span className={styles.span}>Tên đệm*</span>
            <input type="text" placeholder="Nhập tên đệm" />
          </div>
          <div className={styles.title}>
            <span className={styles.span}>Tên*</span>
            <input type="text" placeholder="Nhập tên" />
          </div>
          <div className={styles.btn_Name}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.luu} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SetName;
