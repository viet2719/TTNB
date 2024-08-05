import React, { useState } from "react";
import styles from "./SettingPersonal.module.scss";
import { Modal } from "antd";
const Story = () => {
  const [ishowModal, setShowModal] = useState(false);
  const [option, setOption] = useState("Cho phép"); // Trạng thái cho ô radio
  const [option1, setOption1] = useState(true); // Trạng thái cho ô input "Cho phép"
  const [option2, setOption2] = useState(false);
  const handleOptionChange = (e: any) => {
    if (e.target.id === "action") {
      setOption("Cho phép");
      setOption1(true);
      setOption2(false);
      setShowModal(false);
    } else if (e.target.id === "no-action") {
      setOption("Không cho phép");
      setOption1(false);
      setOption2(true);
      setShowModal(false);
    }
  };
  const openmodal = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.cdc}>
      <h4>Cài đặt tin</h4>
      <div className={styles.setting}>
        <span className={styles.options}> Tùy chọn chia sẻ</span>
        <span className={styles.lienhe}>
          Bạn có muốn người khác chia sẻ tin công khai của bạn lên tin của họ
          không?
        </span>
        <span className={styles.info}>{option}</span>
        <div className={styles.set} onClick={openmodal}>
          Chỉnh sửa
        </div>
      </div>
      <Modal
        open={ishowModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.option}>
          <label htmlFor="action">
            Cho phép
            <input
              type="radio"
              name="check"
              id="action"
              // checked={option1}
              onChange={handleOptionChange}
              hidden
              checked={option === "Cho phép"}
            />
          </label>
          <label htmlFor="no-action">
            Không cho phép
            <input
              type="radio"
              name="check"
              id="no-action"
              // checked={option2}
              checked={option === "Không cho phép"}
              onChange={handleOptionChange}
              hidden
            />
          </label>
        </div>
      </Modal>
    </div>
  );
};
export default Story;
