"use client";
import React, { useState } from "react";
import styles from "./Intro.module.scss";
import x from "@/components/viet_components/Modal/Contact_Info/Contact_Info.module.scss";
import { Dropdown, Image, Modal } from "antd";
import type { MenuProps } from "antd";
import Family from "@/components/viet_components/Modal/Contact_Info/Family";

export default function Family_and_relationships() {
  const [userRole, setUserRole] = useState("admin");
  const [family, setFamily] = useState(false);
  const [del, setDel] = useState(false);
  const showModal = () => {
    setFamily(true);
  };
  const handleOk = () => {
    setDel(false);
  };
  const handleCancel = () => {
    setDel(false);
  };
  const handleShowDel = () => {
    setDel(true);
  };

  const fa = [
    { id: 1, imgSrc: "/img/c.png", name: "jack", relationship: "đồng nghiệp" },
  ];

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => setFamily(true)}
          style={{ display: "flex", gap: 10 }}
        >
          <Image alt="phanh" src={"/img/chinh-sua.svg"} preview={false} /> Chỉnh
          sửa thành viên trong gia đình
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div onClick={handleShowDel} style={{ display: "flex", gap: 10 }}>
          <Image
            width={17}
            height={19}
            alt="phanh"
            src={"/xoa-noi-lam-viec.svg"}
            preview={false}
          />
          Xóa thành viên
        </div>
      ),
      key: "1",
    },
  ];
  if (userRole === "admin") {
    return (
      <div className={styles.overview}>
        <h4>Thông tin cơ bản</h4>
        <div className={styles.add_family} onClick={showModal}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm người thân
        </div>
        {fa.map((fas, index) => (
          <div key={index} className={styles.family}>
            <Image
              className={styles.img}
              alt="anh-loi"
              width={40}
              src={fas.imgSrc}
              preview={false}
            />
            <div className={styles.info}>
              <span>{fas.name}</span>
              <span>{fas.relationship}</span>
            </div>
            <span className={styles.congkhai}>Công khai</span>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Image
                onClick={(e) => e.preventDefault()}
                className={styles.dot}
                alt="anh-loi"
                src={"/img/xem-them.svg"}
                preview={false}
              />
            </Dropdown>
          </div>
        ))}

        {family && <Family family={family} setFamily={setFamily} />}
        <Modal
          title="Xóa thành viên trong gia đình"
          open={del}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          className="addressbacham"
        >
          <div className={x.content}>
            <p>
              Bạn có chắc chắn muốn xóa thành viên khỏi trang cá nhân của mình
              không?
            </p>
            <div className={x.button}>
              <button className={x.huy} onClick={handleCancel}>
                Hủy
              </button>
              <button className={x.ok} onClick={handleOk}>
                Xóa
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <p>Bạn không có quyền truy cập vào thành phần này.</p>
      </div>
    );
  }
}
