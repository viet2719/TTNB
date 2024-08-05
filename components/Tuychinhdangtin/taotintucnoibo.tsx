import React, { useState } from "react";
import { Input, Modal } from "antd";
import styles from "./tuychinh.module.scss";
const NewPrivate = (props: any) => {
  const { newPrivate, setNewPrivate } = props;

  const handleOk = () => {
    setNewPrivate(false);
  };

  const handleCancel = () => {
    setNewPrivate(false);
  };

  return (
    <>
      <Modal
        title="Tạo tin tức nội bộ"
        open={newPrivate}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <h4 className={styles.title_name}>
            Tiêu đề <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tiêu đề"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Nội dung<span style={{ color: "red" }}>*</span>
          </h4>
          <textarea rows={5} className={styles.input_title_notif} />
        </div>
        <div>
          <h4 className={styles.title_name}>Chọn tệp đính kèm</h4>
          <Input className={styles.input_title_notif} required type="file" />
        </div>
        <div className={styles.btn}>
          <button className={styles.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={styles.ok} onClick={handleOk}>
            Tạo tin
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NewPrivate;
