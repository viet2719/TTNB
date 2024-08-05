import React, { useEffect, useState } from "react";
import { Modal, Dropdown, Menu, Image, MenuProps } from "antd";
import styles from "./address.module.css";
import ModalThemMoi from "./ModalThemMoi";
import Serfdom from "../Serfdom/Serfdom";

export default function AddressWork(): JSX.Element {
  const [sua, setSua] = useState(false);
  const suaOK = () => {
    setSua(false);
  };
  const suaCancel = () => {
    setSua(false);
  };
  const [xoa, setXoa] = useState(false);
  const xoaOK = () => {
    setXoa(false);
  };
  const xoaCancel = () => {
    setXoa(false);
  };
  const items: MenuProps["items"] = [
    {
      label: <ModalThemMoi />,
      key: "0",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setSua(true);
          }}
        >
          <Image alt="anh-loi" src={"/img/nv_pen.svg"} preview={false} />
          Chỉnh sửa
        </div>
      ),
      key: "1",
    },

    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setXoa(true);
          }}
        >
          <Image alt="anh-loi" src={"/img/public_del.svg"} preview={false} />
          Xóa nơi làm việc
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <div>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div className={styles.item} onClick={(e) => e.preventDefault()}>
            <Image alt="" src={"/img/xem-them.svg"} preview={false} />
          </div>
        </Dropdown>
      </div>

      {/*--------------------------------------------- chỉnh sửa --------------------------------------- */}
      <Modal
        className="addressbacham"
        title="Chỉnh sửa nơi làm việc"
        open={sua}
        onOk={suaOK}
        onCancel={suaCancel}
        footer={null}
      >
        <div className={styles.modal_body}>
          <div className={styles.company}>
            <p className={styles.title}>
              Công ty <span className={styles.red_dot}>*</span>
            </p>
            <input type="text" placeholder="Nhập tên công ty" />
          </div>
          <div className={styles.add}>
            <p className={styles.title}>
              Thành phố / Thị xã <span className={styles.red_dot}>*</span>
            </p>
            <input type="text" placeholder="Nhập thành phố thị xã" />
          </div>
          <div className={styles.serfdom}>
            Chế độ :
            <Serfdom />
          </div>
          <div className={styles.btn__btn}>
            <button
              className={`${styles.huy} ${styles.btn}`}
              onClick={suaCancel}
            >
              Hủy
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={suaOK}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
      {/*----------------------------------------------- Xóa ------------------------------- */}
      <Modal
        className="addressbacham"
        title="Xóa nơi làm việc"
        open={xoa}
        onOk={xoaOK}
        onCancel={xoaCancel}
        footer={null}
      >
        <div className={styles.modal_body}>
          <p className="text-center">
            Bạn có chắc chắn muốn xóa nơi làm việc này khỏi trang cá nhân của
            mình không
          </p>
          <div className={styles.btn__btn}>
            <button
              className={`${styles.huy} ${styles.btn}`}
              onClick={xoaCancel}
            >
              Hủy
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={xoaOK}>
              Xóa
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
