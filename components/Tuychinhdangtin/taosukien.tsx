import React, { useState } from "react";
import { Image, Input, Modal, Select } from "antd";
import styles from "./tuychinh.module.scss";

const CreEvent = (props: any) => {
  const { event, setEvent } = props;
  const [doinoi, setDoinoi] = useState(false);
  const [doingoai, setDoingoai] = useState(false);
  const handleOk = () => {
    setEvent(false);
  };
  const handleCancel = () => {
    setEvent(false);
  };
  //nội bộ
  const doinoiOk = () => {
    setDoinoi(false);
  };
  const doinoiCancel = () => {
    setDoinoi(false);
  };
  //đối ngoại
  const okdoingoai = () => {
    setDoingoai(false);
  };

  const canceldoingoai = () => {
    setDoingoai(false);
  };
  const onChange = (value: string) => {};
  const onSearch = (value: string) => {};
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const [rowCount, setRowCount] = useState(1); // Số hàng hiện tại, bắt đầu từ 1

  const addRow = () => {
    setRowCount(rowCount + 1);
  };
  return (
    <>
      <Modal
        title="Tạo sự kiện"
        open={event}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <div
            className={styles.event}
            onClick={() => {
              setDoinoi(true);
            }}
          >
            <Image alt="phanh" src="/img/TTNB/sk_1.png" preview={false} />
            Tạo sự kiện nội bộ
            <Image alt="phanh" src="/img/TTNB/sk_3.png" preview={false} />
          </div>
          <div
            className={styles.event}
            onClick={() => {
              setDoingoai(true);
            }}
          >
            <Image alt="phanh" src="/img/TTNB/sk_2.png" preview={false} />
            Tạo sự kiện đối ngoại
            <Image alt="phanh" src="/img/TTNB/sk_3.png" preview={false} />
          </div>
        </div>
      </Modal>
      {/* ///////////// */}
      <Modal
        title="Tạo sự kiện nội bộ"
        open={doinoi}
        onOk={doinoiOk}
        onCancel={doinoiCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <h4 className={styles.title_name}>
            Tên sự kiện <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tên sự kiện"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div>
          <h4 className={styles.title_name}>Thời gian diễn ra</h4>
          <div className={styles.input_dt}>
            <input type="date" className={styles.input_datetime} />
            <input type="time" className={styles.input_datetime} />
          </div>
        </div>
        <div>
          <h4 className={styles.title_name}>
            Ảnh đại diện sự kiện <span style={{ color: "red" }}>*</span>
          </h4>
          <Input
            prefix={
              <Image alt="phanh" src="/img/TTNB/img39.png" preview={false} />
            }
            placeholder="Tải lên tệp đính kèm"
            type="file"
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Miêu tả sự kiện<span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            className={styles.textarea}
            name=""
            id=""
            placeholder="Miêu tả sự kiện"
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
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Vị trí đăng sự kiện<span style={{ color: "red" }}>*</span>
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
        <div className={styles.btn}>
          <button className={styles.huy} onClick={doinoiCancel}>
            Hủy
          </button>
          <button className={styles.ok} onClick={doinoiOk}>
            Tạo sự kiện
          </button>
        </div>
      </Modal>
      {/* ///////// */}
      <Modal
        title="Tạo sự kiện đối ngoại"
        open={doingoai}
        onOk={okdoingoai}
        onCancel={canceldoingoai}
        footer={null}
        className="addressbacham w670px"
      >
        <div>
          <h4 className={styles.title_name}>
            Tên sự kiện <span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="text"
            placeholder="Nhập tên sự kiện"
            className={styles.input_title_notif}
            required
          />
        </div>
        <div className={styles.info_diengia}>
          <h4 className={styles.title_name}>
            Thông tin diễn giả<span style={{ color: "red" }}>*</span>
          </h4>
          <input
            type="file"
            placeholder="Chưa có tệp nào được chọn"
            className={styles.input_title_notif}
            required
          />
          <input
            type="text"
            className={styles.input_title_notif}
            placeholder="Nhập họ tên diễn giả"
            required
          />
          <input
            type="text"
            className={styles.input_title_notif}
            placeholder="Nhập chức vụ diễn giả"
            required
          />
          <input
            type="text"
            className={styles.input_title_notif}
            placeholder="Nhập SĐT diễn giả"
            required
          />
          <input
            type="email"
            className={styles.input_title_notif}
            placeholder="Nhập Email diễn giả"
            required
          />
        </div>
        <div className={styles.khachmoi}>
          <h4 className={styles.title_name}>Khách mời tham gia</h4>
          <table className={styles.tbl_khachmoi}>
            <tr>
              <th className={styles.id}>STT</th>
              <th className={styles.th}>Họ và tên</th>
              <th className={styles.th}>Tên công ty</th>
              <th className={styles.th}>Chức vụ</th>
            </tr>
            {Array.from({ length: rowCount }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    className={styles.td}
                    type="text"
                    placeholder="Tên khách mời"
                  />
                </td>
                <td>
                  <input
                    className={styles.td}
                    type="text"
                    placeholder="Tên công ty"
                  />
                </td>
                <td>
                  <input
                    className={styles.td}
                    type="text"
                    placeholder="Chức vụ"
                  />
                </td>
              </tr>
            ))}
          </table>
          <p
            style={{
              borderBottom: "1px solid #4c5bd4",
              width: 150,
              textAlign: "center",
              cursor: "pointer",
              color: "#4c5bd4",
            }}
            id="addRowButton"
            onClick={addRow}
          >
            Thêm khách mời
          </p>
        </div>

        <div>
          <h4 className={styles.title_name}>Thời gian diễn ra</h4>
          <div className={styles.input_dt}>
            <input type="date" className={styles.input_datetime} />
            <input type="time" className={styles.input_datetime} />
          </div>
        </div>
        <div>
          <h4 className={styles.title_name}>
            Ảnh đại diện sự kiện <span style={{ color: "red" }}>*</span>
          </h4>
          <Input
            prefix={
              <Image alt="phanh" src="/img/TTNB/img39.png" preview={false} />
            }
            placeholder="Tải lên tệp đính kèm"
            type="file"
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Miêu tả sự kiện<span style={{ color: "red" }}>*</span>
          </h4>
          <textarea
            className={styles.textarea}
            name=""
            id=""
            placeholder="Miêu tả sự kiện"
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
          />
        </div>
        <div>
          <h4 className={styles.title_name}>
            Vị trí đăng sự kiện<span style={{ color: "red" }}>*</span>
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
        <div className={styles.btn}>
          <button className={styles.huy} onClick={canceldoingoai}>
            Hủy
          </button>
          <button className={styles.ok} onClick={okdoingoai}>
            Tạo sự kiện
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreEvent;
