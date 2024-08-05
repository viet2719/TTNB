import React from "react";
import { Input, Modal, Select } from "antd";
import styles from "./tuychinh.module.scss";
const Chiaseytuong = (props: any) => {
  const { shareIdea, setShareIdea } = props;

  const handleOk = () => {
    setShareIdea(false);
  };

  const handleCancel = () => {
    setShareIdea(false);
  };
  const onChange = (value: string) => {};
  const onSearch = (value: string) => {};
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Modal
        title="Chia sẻ ý tưởng"
        open={shareIdea}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <h4 className={styles.title_name}>
            Tiêu đề ý tưởng<span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tiêu đề ý tưởng"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Miêu tả chi tiết ý tưởng<span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            rows={5}
            placeholder="Nhập nội dung ý tưởng"
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
          <h4 className={styles.title_name}>Chọn tệp đính kèm</h4>
          <Input className={styles.input_title_notif} required type="file" />
        </div>
        <div className={styles.btn}>
          <button className={styles.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={styles.ok} onClick={handleOk}>
            Đăng
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Chiaseytuong;
