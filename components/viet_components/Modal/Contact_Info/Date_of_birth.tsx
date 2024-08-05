import React, { useState } from "react";
import { Image, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";

const DateOfBirth = (props: any) => {
  const { onBirthDateChange } = props;
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
  const [birthDate, setBirthDate] = useState("");

  const handleDateChange = (event: any) => {
    const newBirthDate = event.target.value;
    setBirthDate(newBirthDate);

    // Call the callback function to update the birth date in the parent component
    onBirthDateChange(newBirthDate);
  };

  return (
    <>
      <Image
        alt=""
        src={"/img/chinh-sua.svg"}
        onClick={showModal}
        preview={false}
      />
      <Modal
        title="Ngày sinh"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          {" "}
          <span className="title_contact_info">Ngày sinh</span>
          <input
            type="date"
            placeholder="Nhập Email"
            value={birthDate}
            onChange={handleDateChange}
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
    </>
  );
};

export default DateOfBirth;
