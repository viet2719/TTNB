import React, { useState } from "react";
import { Image, Modal } from "antd";
import styles from "./Modal.module.scss";

const AddEmail: React.FC = () => {
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

  return (
    <>
      <div className={styles.btn_Addemail} onClick={showModal}>
        <Image alt="" src="/img/nv_add-circle_blue.svg" preview={false} />
        Thêm email khác
      </div>
      <Modal
        title="Thêm email khác"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.content_addemail}>
          <div className={styles.input_email}>
            <span className={styles.label_email}>Email mới</span>
            <input type="text" placeholder="Nhập email mới" />
          </div>
          <p>
            Khi thêm email đang dùng vào tài khoản Truyền thông văn hóa của
            mình, bạn có thể đăng nhập và nhận thông báo cũng như đặt lại mật
            khẩu một cách dễ dàng. Việc đó cũng hỗ trợ chúng tôi kết nối mọi
            người, cung cấp và cải thiện chức năng của Truyền thông văn hóa. Chỉ
            bạn mới nhìn thấy email của mình trên trang cá nhân
          </p>
          <div className={styles.btn_Name}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.luu} onClick={handleOk}>
              Lưu
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddEmail;
