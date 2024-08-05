import React from "react";
import { Image, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";
function Special(props: any) {
  const { special, setSpecial } = props;
  const handleCancel = () => {
    setSpecial(false);
  };
  const handleOk = () => {
    setSpecial(false);
  };
  return (
    <div>
      <Modal
        title="Thêm biệt danh"
        open={special}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          <span className="title_contact_info">Biệt danh</span>
          <input
            type="text"
            placeholder="Nhập biệt danh"
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
    </div>
  );
}

export default Special;
