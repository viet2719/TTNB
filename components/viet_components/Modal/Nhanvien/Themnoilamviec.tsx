"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Serfdom from "@/components/common/Modal/Serfdom/Serfdom";
import styles from "./nhanvien.module.scss";

const Themnoilamviec = (props: any) => {
  const { nhanvien, setNhanvien } = props;

  const handleOk = () => {
    setNhanvien(false);
  };

  const handleCancel = () => {
    setNhanvien(false);
  };

  return (
    <>
      <Modal
        title="Thêm nơi làm việc"
        open={nhanvien}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.container}>
          <div className={styles.item}>
            <span>Công Ty *</span>
            <input type="text" placeholder="Nhập tên công ty" />
          </div>
          <div className={styles.item}>
            <span>Chức vụ *</span>
            <input type="text" placeholder="Nhập chức vụ" />
          </div>
          <div className={styles.item}>
            <span>Thành phố / Thị xã *</span>
            <input type="text" placeholder="Nhập thành phố thị xã " />
          </div>
          <div className={styles.chedo}>
            <Serfdom />
          </div>
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            Tôi đang làm việc ở đây
          </label>

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

export default Themnoilamviec;
