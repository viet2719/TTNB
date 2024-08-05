import React from "react";
import { Input, Modal, Select, Image } from "antd";
import styles from "./tuychinh.module.scss";
const CreateModalNotifical = (props: any) => {
  const { createNotif, setCreateNotif } = props;

  const handleOk = () => {
    setCreateNotif(false);
  };

  const handleCancel = () => {
    setCreateNotif(false);
  };
  const onChange = (value: string) => { };
  const onSearch = (value: string) => { };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>

      <Modal
        title="Tạo thông báo"
        open={createNotif}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <form action="">
          <p className={styles.text_title}>
            (Thông báo giúp bạn gửi các thông tin quan trọng tới toàn thể thành
            viên trong phòng/ban.)
          </p>
          <div>
            <h4 className={styles.title_name}>
              Bài đăng sẽ được đăng lên nhóm
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
                  value: "jack",
                  label: "Jack",
                },
              ]}
            />
          </div>
          <div>
            <h4 className={styles.title_name}>
              Tiêu đề thông báo <span style={{ color: "red" }}>*</span>
              <input
                className={styles.input_title_notif}
                type="text"
                placeholder="Nhập tiêu đề thảo luận"
              />
            </h4>
          </div>
          <div>
            <h4 className={styles.title_name}>
              Nội dung thông báo <span style={{ color: "red" }}>*</span>
            </h4>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className={styles.textarea}
            ></textarea>
          </div>
          <div>
            <h4 className={styles.title_name}>Tải lên tệp đính kèm</h4>
            <Input
              prefix={
                <Image alt="phanh" src="/img/TTNB/img39.png" preview={false} />
              }
              placeholder="Tải lên tệp đính kèm"
              type="file"
              multiple
            />
          </div>
          <div className={styles.btn}>
            <button className={styles.huy} onClick={handleCancel}>
              Hủy
            </button>
            <button className={styles.ok} onClick={handleOk}>
              Đăng
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateModalNotifical;
