import React, { useState } from "react";
import { Image, Modal, Select } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./Contact_Info.module.scss";
import type { SizeType } from "antd/es/config-provider/SizeContext";
interface LangualeProps {
  language: boolean; // Định nghĩa prop language với kiểu boolean
  setLanguage: (value: boolean) => void;
}
const Languale: React.FC<LangualeProps> = ({ language, setLanguage }) => {
  const handleOk = () => {
    setLanguage(false);
  };
  const handleCancel = () => {
    setLanguage(false);
  };
  const onChange = (value: string) => {
    // console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    // console.log("search:", value);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const languageOptions = [
    {
      value: "tiếng anh",
      label: "Tiếng Anh",
    },
    {
      value: "tây ban nha",
      label: "Tiếng Tây Ban Nha",
    },
    {
      value: "trung quốc",
      label: "Tiếng Trung Quốc",
    },
    {
      value: "hindi",
      label: "Tiếng Hindi",
    },
    {
      value: "tiếng ả rập",
      label: "Tiếng Ả Rập",
    },
    {
      value: "bồ đào nha",
      label: "Tiếng Bồ Đào Nha",
    },
    {
      value: "nga",
      label: "Tiếng Nga",
    },
    {
      value: "nhật",
      label: "Tiếng Nhật",
    },

    {
      value: "tiếng đức",
      label: "Tiếng Đức",
    },
    {
      value: "pháp",
      label: "Tiếng Pháp",
    },
    {
      value: "hàn quốc",
      label: "Tiếng Hàn Quốc",
    },
    {
      value: "ý",
      label: "Tiếng Ý",
    },
    {
      value: "tiếng hà lan",
      label: "Tiếng Hà Lan",
    },
    {
      value: "thái lan",
      label: "Tiếng Thái Lan",
    },
    {
      value: "Thụy điển",
      label: "Tiếng Thụy Điển",
    },
    {
      value: "đan mạch",
      label: "Tiếng Đanh Mạch",
    },
    {
      value: "tiếng na uy",
      label: "Tiếng Phần Lan",
    },
    {
      value: "ba lan",
      label: "Tiếng Ba Lan",
    },
  ];
  return (
    <>
      <Modal
        title="Ngôn ngữ"
        open={language}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          {" "}
          <span className="title_contact_info">Ngôn ngữ</span>
          <Select
            style={{ width: "100%" }}
            mode="multiple"
            showSearch
            placeholder="Ngôn ngữ"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={languageOptions}
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

export default Languale;
