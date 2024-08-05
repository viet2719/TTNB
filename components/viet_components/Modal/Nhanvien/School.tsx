"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./nhanvien.module.scss";

const School = (props: any) => {
  const { school, setSchool } = props;
  const handleOk = () => {
    setSchool(false);
  };
  const handleCancel = () => {
    setSchool(false);
  };

  return (
    <>
      <Modal
        title="Thêm trường học"
        open={school}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.container}>
          <div className={styles.item}>
            <span>Trường học *</span>
            <input type="text" placeholder="Nhập tên trường học" />
          </div>
          <div className={styles.item}>
            <span>Khoảng thời gian *</span>
            <div className={styles.item_input}>
              <input type="date" />
              <span>Đến</span>
              <input type="date" />
            </div>
          </div>
          <div className={styles.item}>
            <label htmlFor="graduate">
              <input type="checkbox" id="graduate" />
              Đã tốt nghiệp
            </label>
          </div>
          <div className={styles.item}>
            <span>Chuyên ngành</span>
            <input type="text" placeholder="Nhập chuyên ngành" />
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

export default School;
