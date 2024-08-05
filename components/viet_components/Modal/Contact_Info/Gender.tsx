import React, { useState } from "react";
import { Image, Modal, Select } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";
interface GenderProps {
  gender: boolean; // Định nghĩa prop language với kiểu boolean
  setGender: (value: boolean) => void;
}
const Gender: React.FC<GenderProps> = ({ gender, setGender }) => {
  const handleOk = () => {
    setGender(false);
  };

  const handleCancel = () => {
    setGender(false);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Modal
        title="Giới tính"
        open={gender}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          {" "}
          <span className="title_contact_info">Giới tính</span>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Select a gender"
            optionFilterProp="children"
            filterOption={filterOption}
            options={[
              {
                value: "nam",
                label: "Nam",
              },
              {
                value: "nữ",
                label: "Nữ",
              },
            ]}
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

export default Gender;
