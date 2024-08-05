import React from "react";
import { Image, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";
import { flatMap } from "lodash";
function Quote(props: any) {
  const { qoute, setQoute } = props;
  const handleOk = () => {
    setQoute(false);
  };
  const handleCancel = () => {
    setQoute(false);
  };
  return (
    <div>
      <Modal
        title="Trích dẫn yêu thích"
        open={qoute}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          <span className="title_contact_info">Trích dẫn yêu thích *</span>

          <textarea
            placeholder="Thêm trích dẫn yêu thích"
            className={styles.input2}
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

export default Quote;
