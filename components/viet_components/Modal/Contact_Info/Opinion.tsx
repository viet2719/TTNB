import React from "react";
import { Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";
interface LangualeProps {
  opinion: boolean; // Định nghĩa prop language với kiểu boolean
  setOpinion: (value: boolean) => void;
}
const Opinion: React.FC<LangualeProps> = ({ opinion, setOpinion }) => {
  const handleOk = () => {
    setOpinion(false);
  };

  const handleCancel = () => {
    setOpinion(false);
  };

  return (
    <>
      <Modal
        title="Quan điểm tôn giáo"
        open={opinion}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          <input
            type="text"
            placeholder="Quan điểm tôn giáo"
            className={styles.input}
          />
          <textarea placeholder="Mô tả" className={styles.input2} />
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

export default Opinion;
