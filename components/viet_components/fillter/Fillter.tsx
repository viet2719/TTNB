import React, { useState } from "react";
import { Image, Modal, Select } from "antd";
import styles from "./fillter.module.scss";

export default function Fillter() {
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
      <button
        onClick={showModal}
        className={`${styles.filter_post_btn} ${styles.btn_filter_post}`}
      >
        <Image
          width={24}
          height={24}
          alt=""
          src={"/img/nv_setting-4.svg"}
          preview={false}
        />
        Bộ lọc
      </button>

      <Modal
        title="Bộ lọc bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <p className={styles.tuto}>
          Dùng bộ lọc để tìm bài viết trên dòng thời gian của bạn.
          <br />
          <span>Mợi người vẫn nhìn thấy bảng tin của bạn như bình thường</span>
        </p>
        <div className={styles.body}>
          <div className={`${styles.components}`}>
            <span>Đi đến:</span>
            <div className={styles.datetime}>
              <Select
                defaultValue="Năm"
                style={{ maxWidth: 100 }}
                options={[{ value: "Năm" }]}
              />
              <Select
                defaultValue="Tháng"
                style={{ maxWidth: 100 }}
                options={[{ value: "Tháng" }]}
              />
              <Select
                defaultValue="Ngày"
                style={{ maxWidth: 100 }}
                options={[{ value: "Ngày" }]}
              />
            </div>
          </div>
          <div className={`${styles.components} option`}>
            <span>Người đăng:</span>
            <Select
              defaultValue="Bất kỳ ai"
              style={{ maxWidth: 250 }}
              options={[
                { value: "Bất kỳ ai", label: "Bất kỳ ai" },
                { value: "Bạn", label: "Bạn" },
                { value: "Người khác", label: "Người khác" },
              ]}
            />
          </div>
          <div className={`${styles.components} option`}>
            <span>Quyền riêng tư:</span>
            <Select
              defaultValue="Tất cả bài viết"
              style={{ maxWidth: 250 }}
              options={[
                { value: "Tất cả bài viết", label: "Tất cả bài viết" },
                { value: "Công khai", label: "Công khai" },
                { value: "Bạn bè", label: "Bạn bè" },
                { value: "Chỉ mình tôi", label: "Chỉ mình tôi" },
              ]}
            />
          </div>
          <div className={`${styles.components} option`}>
            <span>Bài viết được gắn thẻ:</span>
            <Select
              defaultValue="Tất cả bài viết"
              style={{ maxWidth: 250 }}
              options={[
                { value: "Tất cả bài viết", label: "Tất cả bài viết" },
                {
                  value: "Chỉ hiển thị bài viết tôi được gắn thẻ",
                  label: "Chỉ hiển thị bài viết tôi được gắn thẻ",
                },
              ]}
            />
          </div>
          <div className={styles.btn_btn}>
            <button
              className={`${styles.del} ${styles.btn}`}
              onClick={handleCancel}
            >
              Xóa
            </button>
            <button className={`${styles.ok} ${styles.btn}`} onClick={handleOk}>
              Xong
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
