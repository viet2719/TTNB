import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import styles from "./update.module.scss";
interface Update {
  isOpen: boolean;
  onClose: () => void;
  coverImageSrc: string | null;
}
const UpdateAvatar = ({ isOpen, onClose, coverImageSrc }: Update) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      <Modal open={isOpen} onOk={handleOk} onCancel={onClose} footer={null}>
        <h2 className={styles.title}>Cập nhật ảnh đại diện</h2>
        <textarea className={styles.text_mota} placeholder="Mô tả" />
        <Image
          className={styles.img_anhbia}
          width={800}
          height={800}
          alt="ảnh lỗi"
          src={coverImageSrc || "/img/c.png"}
        />
        <div className={styles.btn}>
          <button
            className={`${styles.btn_btn} ${styles.cancel}`}
            onClick={handleCancel}
          >
            Hủy
          </button>
          <button
            className={`${styles.btn_btn} ${styles.ok}`}
            onClick={handleOk}
          >
            Lưu
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateAvatar;
