import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Image, Modal } from "antd";
import styles from "./nhanvien.module.scss";
import School from "./School";
import EditSchool from "./EditSchool";

const DropSchool = (props: any) => {
  const { school, setSchool } = props;
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const okdel = () => {
    setDel(false);
  };
  const canceldel = () => {
    setDel(false);
  };
  const onClickSchool = () => {
    setSchool(true);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className={styles.item} onClick={onClickSchool}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm trường học
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className={styles.item} onClick={() => setEdit(true)}>
          <Image alt="anh-loi" src={"/img/nv_pen.svg"} preview={false} />
          Chỉnh sửa
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setDel(true);
          }}
        >
          <Image alt="anh-loi" src={"/img/public_del.svg"} preview={false} />
          Xóa trường học
        </div>
      ),
      key: "2",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div onClick={(e) => e.preventDefault()}>
        <div className={styles.item}>
          <Image alt="" src={"/img/xem-them.svg"} preview={false} />
        </div>
        {school && <School school={school} setSchool={setSchool} />}
        {edit && <EditSchool edit={edit} setEdit={setEdit} />}
        <Modal
          className="addressbacham"
          title={"Xóa trường học"}
          open={del}
          onOk={okdel}
          onCancel={canceldel}
          footer={null}
        >
          <div className={styles.modal_body}>
            <p className="text-center">
              Bạn có chắc chắn muốn xóa trường học này khỏi trang cá nhân của
              mình không
            </p>
            <div className={styles.button}>
              <button className={styles.huy} onClick={canceldel}>
                Hủy
              </button>
              <button className={styles.ok} onClick={okdel}>
                Xóa
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </Dropdown>
  );
};

export default DropSchool;
