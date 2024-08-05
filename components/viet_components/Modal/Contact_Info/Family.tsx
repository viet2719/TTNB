import React, { useState } from "react";
import { Select, Modal } from "antd";
import styles from "./Contact_Info.module.scss";
import type { SelectProps } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";

function Family(props: any) {
  const { setFamily, family } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setFamily(false);
  };

  const handleCancel = () => {
    setFamily(false);
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

  return (
    <div>
      <Modal
        title="Người thân"
        open={family}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.content}>
          <div className={styles.selected}>
            <Select
              showSearch
              placeholder="Thành viên gia đình"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{ width: "100%" }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Mối quan hệ"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                { value: "bố", label: "Bố" },
                { value: "mẹ", label: "Mẹ" },
                { value: "con trai", label: "Con Trai" },
                { value: "con gái", label: "Con Gái" },
                { value: "cháu gái", label: "Cháu Gái" },
              ]}
            />
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

export default Family;
