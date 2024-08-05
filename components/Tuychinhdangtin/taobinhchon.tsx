import React, { useState } from "react";
import { Button, Input, Mentions, Modal } from "antd";
import styles from "./tuychinh.module.scss";
const BinhChon = (props: any) => {
  const { binhchon, setBinhchon } = props;
  const [options, setOptions] = useState(["", ""]);
  const handleOk = () => {
    setBinhchon(false);
  };

  const handleCancel = () => {
    setBinhchon(false);
  };
  const addOption = () => {
    if (options.length < 40) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <>
      <Modal
        title="Tạo bình chọn"
        open={binhchon}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        {" "}
        <div>
          <h4 className={styles.title_name}>
            Tên bình chọn<span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tên bình chọn"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Nội dung bình chọn<span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            rows={5}
            placeholder="Nhập nội dung bình chọn"
            className={styles.input_title_notif}
          />
        </div>
        <span>Số lượng phương án (tối đa 40 phương án)</span>
        {options.map((option, index) => (
          <div key={index}>
            <h4 className={styles.title_name}>Phương án {index + 1}</h4>
            <div className={`${styles.input_dt} ${styles.pore}`}>
              <input
                type="text"
                placeholder="Nội dung"
                className={styles.input_datetime}
              />
              <Input className={styles.input_datetime} required type="file" />
              {options.length > 2 && (
                <button
                  onClick={() => removeOption(index)}
                  className={styles.btn_xoa}
                >
                  X
                </button>
              )}
            </div>
          </div>
        ))}
        <div>
          <span onClick={addOption} className={styles.themphuongan}>
            Thêm phương án
          </span>
        </div>
        <div>
          <h4 className={styles.title_name}>Người theo dõi</h4>
          <Mentions
            style={{ width: "100%" }}
            placeholder="Dùng @ để thêm người theo dõi"
            options={[
              {
                value: "afc163",
                label: "afc163",
              },
              {
                value: "zombieJ",
                label: "zombieJ",
              },
              {
                value: "yesmeck",
                label: "yesmeck",
              },
            ]}
          />
        </div>
        <div>
          <h4 className={styles.title_name}>Thời hạn bình chọn</h4>
          <div className={styles.input_dt}>
            <input type="date" className={styles.input_datetime} />
            <input type="time" className={styles.input_datetime} />
          </div>
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

export default BinhChon;
