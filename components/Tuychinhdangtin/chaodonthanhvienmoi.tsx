import React from "react";
import { Modal, Select, SelectProps } from "antd";
import styles from "./tuychinh.module.scss";
const HeloMember = (props: any) => {
  const { helomem, setHelomem } = props;
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleOk = () => {
    setHelomem(false);
  };

  const handleCancel = () => {
    setHelomem(false);
  };

  return (
    <>
      <Modal
        title="Chào đón thành viên mới"
        open={helomem}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <div>
            <h4 className={styles.title_name}>
              Chọn thành viên<span style={{ color: "red" }}>*</span>
            </h4>
            <Select
              mode="multiple"
              placeholder="Thêm thành viên"
              defaultValue={[]}
              style={{ width: "100%" }}
              options={options}
            />
          </div>
          <div>
            <h4 className={styles.title_name}>
              Tin nhắn chào mừng<span style={{ color: "red" }}>*</span>
            </h4>
            <textarea
              name=""
              id=""
              placeholder=" Nhập tin nhắn chào mừng"
              className={styles.textarea}
              rows={10}
            ></textarea>
          </div>
          <div className={styles.btn}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.ok} onClick={handleOk}>
              Đăng
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeloMember;
