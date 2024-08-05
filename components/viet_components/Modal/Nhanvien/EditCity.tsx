"use client";
import React, { useState } from "react";
import { Button, Modal, Select } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./nhanvien.module.scss";

const EditCity = (props: any) => {
  const { city, setCity } = props;
  const handleOk = () => {
    setCity(false);
  };
  const handleCancel = () => {
    setCity(false);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const onChange = (value: string) => {};

  const onSearch = (value: string) => {};

  return (
    <>
      <Modal
        title="Cập nhật thành phố hiện tại"
        open={city}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.container}>
          <div className={styles.item}>
            <span>Thành phố hiện tại</span>
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="--Chọn tỉnh,Thành phố--"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
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
    </>
  );
};

export default EditCity;
