import { Modal, Image } from "antd";
import styles from "./address.module.css";
import Serfdom from "../Serfdom/Serfdom";
import { useState } from "react";

export default function ModalThemMoi() {
  const [openModal, setOpenModal] = useState(false);
  const handleOk = () => {
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className={styles.item} onClick={showModal}>
        <Image
          alt="anh-loi"
          src={"/img/nv_add-circle_blue.svg"}
          preview={false}
        />
        Thêm nơi làm việc
      </div>
      <Modal
        title="Thêm nơi làm việc"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className={` modalAddDocument`}
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
              onClick={handleCancel}
            >
              Hủy
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
