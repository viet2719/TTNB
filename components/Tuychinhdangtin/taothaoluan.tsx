import React, { useState } from "react";
import { Button, Input, Modal, Select, SelectProps } from "antd";
import styles from "./tuychinh.module.scss";

const CreateDiscussion = (props: any) => {
  const { createDiscussion, setCreateDiscussion } = props;

  const handleOk = () => {
    setCreateDiscussion(false);
  };

  const handleCancel = () => {
    setCreateDiscussion(false);
  };
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const onChange = (value: string) => {};
  const onSearch = (value: string) => {};
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Modal
        title="Tạo thảo luận"
        open={createDiscussion}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <h4 className={styles.title_name}>
            Tên sự kiện <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tiêu đề thảo luận"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Nội dung thảo luận chi tiết <span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            rows={5}
            placeholder="Nhập nội dung thảo luận"
            className={styles.input_title_notif}
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Vị trí đăng bài <span style={{ color: "red" }}>*</span>
          </h4>
          <Select
            showSearch
            placeholder="Chọn nhóm"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            style={{ width: "100%" }}
            options={[
              {
                value: "Kĩ Thuật",
                label: "Kĩ Thuật",
              },
            ]}
          />
        </div>
        <div>
          <h4 className={styles.title_name}>Gắn thẻ thành viên</h4>
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
            Quyền riêng tư<span style={{ color: "red" }}>*</span>
          </h4>
          <Select
            placeholder=""
            defaultValue={[]}
            style={{ width: "100%" }}
            options={[
              {
                value: "Công khai",
                label: "Công khai",
              },
              {
                value: "Riêng tư",
                label: "Riêng tư",
              },
            ]}
          />
        </div>
        <div>
          <h4 className={styles.title_name}>Chọn tệp đính kèm</h4>
          <Input className={styles.input_title_notif} required type="file" />
        </div>
        <div className={styles.btn}>
          <button className={styles.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={styles.ok} onClick={handleOk}>
            Tạo thảo luận
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateDiscussion;
