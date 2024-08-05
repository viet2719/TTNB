import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./exitstory.module.scss";
import { useRouter } from "next/router";

const App: React.FC = () => {
  const router = useRouter();
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
  const handleCan = () => {
    setIsModalOpen(false);
    router.reload();
  };

  return (
    <>
      <button className={styles.bo} onClick={showModal}>
        Bỏ
      </button>
      <Modal
        title="Bỏ tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content_modal}>
          <p>Bạn có chắc chắn bỏ tin này không?</p>
          <p>Hệ thống sẽ không lưu tin của bạn.</p>
        </div>
        <div className={styles.btn}>
          <button className={`${styles.tieptucchinhsua} `} onClick={handleOk}>
            Tiếp tục chỉnh sửa
          </button>
          <button className={`${styles.bo} `} onClick={handleCan}>
            Bỏ
          </button>
        </div>
      </Modal>
    </>
  );
};

export default App;
