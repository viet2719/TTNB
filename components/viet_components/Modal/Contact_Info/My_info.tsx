import { Modal } from "antd";
import React from "react";
import styles from "./Contact_Info.module.scss";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";

function My_info(props: any) {
  const { modal, setModal } = props;
  const handleCancel = () => {
    setModal(false);
  };
  const handleOk = () => {
    setModal(false);
  };

  return (
    <div>
      <Modal
        title="Cập nhật giới thiệu bản thân"
        open={modal}
        onCancel={handleCancel}
        onOk={handleOk}
        className="addressbacham"
        footer={null}
      >
        <div className={styles.content}>
          <div>
            <label htmlFor="" className="title_contact_info">
              Giới thiệu về bản thân <span>*</span>
            </label>
            <textarea className={styles.textarea}></textarea>
          </div>
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
    </div>
  );
}

export default My_info;
