import React, { useState } from "react";
import { Input, Modal, Select, Image } from "antd";
import styles from "./tuychinh.module.scss";
const Taokhenthuong = (props: any) => {
  const { khenthuong, setKhenthuong } = props;

  const handleOk = () => {
    setKhenthuong(false);
  };

  const handleCancel = () => {
    setKhenthuong(false);
  };

  const onChange = (value: string) => {};
  const onSearch = (value: string) => {};
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const initialBonus = [
    {
      id: 1,
      image: "/img/TTNB/loai_1.png",
      text: "Khen thưởng",
      width: 57,
      heigth: 56,
      active: false,
    },
    {
      id: 2,
      image: "/img/TTNB/loai_2.png",
      text: "Nhân viên xuất sắc nhất tháng",
      width: 44,
      heigth: 57,
      active: false,
    },
    {
      id: 3,
      image: "/img/TTNB/loai_3.png",
      text: "Nhân viên xuất sắc nhất quý",
      width: 34,
      heigth: 57,
      active: false,
    },
    {
      id: 4,
      image: "/img/TTNB/loai_4.png",
      text: "Nhân viên xuất sắc nhất năm",
      width: 57,
      heigth: 56,
      active: false,
    },
  ];
  const [bonus, setBonus] = useState(initialBonus);

  const handleItemClick = (index: number) => {
    // Tạo một bản sao của mảng initialBonus để tránh sửa trạng thái trực tiếp
    const updatedBonus = [...initialBonus];

    // Chuyển đổi trạng thái "active" của mục được nhấp
    updatedBonus[index].active = !updatedBonus[index].active;

    setBonus(updatedBonus);
  };

  return (
    <>
      <Modal
        title="Tạo khen thưởng"
        open={khenthuong}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham w670px"
      >
        <div>
          <h4 className={styles.title_name}>
            Thành viên được vinh danh<span style={{ color: "red" }}>*</span>
          </h4>
          <Select
            showSearch
            placeholder="Chọn thành viên"
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
          <h4 className={styles.title_name}>
            Vị trí gửi tin khen thưởng<span style={{ color: "red" }}>*</span>
          </h4>
          <Select
            showSearch
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
          <h4 className={styles.title_name}>
            Lời nhắn cho người được khen thưởng
            <span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            rows={5}
            placeholder="Nhập lơi nhắn"
            className={styles.input_title_notif}
          />
        </div>
        <div>
          <h4 className={styles.title_name}>Chọn tệp đính kèm</h4>
          <Input className={styles.input_title_notif} required type="file" />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Loại hình vinh danh<span style={{ color: "red" }}>*</span>
          </h4>
          <div className={styles.loaikhenthuong}>
            {bonus.map((bonuss, index) => (
              <div
                className={`${styles.item} ${
                  bonuss.active ? styles.active : ""
                }`}
                key={index}
                onClick={() => handleItemClick(index)}
              >
                <Image
                  alt="phanh"
                  src={bonuss.image}
                  width={bonuss.width}
                  height={bonuss.heigth}
                  preview={false}
                />
                <p>{bonuss.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={styles.ok} onClick={handleOk}>
            Tạo khen thưởng
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Taokhenthuong;
