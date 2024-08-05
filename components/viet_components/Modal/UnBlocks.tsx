import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./Modal.module.scss";

const UnBlocks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [block, setBlock] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setBlock(!block);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span className={styles.btn_blocks} onClick={showModal}>
        {block ? "Bỏ chặn" : "Chặn"}
      </span>
      <Modal
        title="Bỏ chặn"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p className={styles.p1}>
          Bạn có chắc chắn muốn bỏ chặn Thu Phương không?
        </p>
        <p className={styles.p}>
          Phương có thể xem dòng thời gian của bạn hoặc liên hệ với bạn, tùy
          thuộc vào cách bạn cài đặt quyền riêng tư Có thể khôi phục các thẻ mà
          trước đó bạn và Phương đã thêm cho nhau Bạn có thể gỡ thẻ của chính
          mình trên nhật ký hoạt động.
        </p>
        <p className={styles.p1}>
          Hãy nhớ rằng bạn sẽ phải đợi 48 giờ thì mới có thể chặn lại Phương.
        </p>
        <div className={styles.btn_Name}>
          <button className={styles.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={styles.luu} onClick={handleOk}>
            Xác nhận
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UnBlocks;
