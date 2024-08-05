"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Modal, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./dropdown.module.css";

const DotFr = (props: any) => {
  const { removeFollower } = props;
  const router = useRouter();
  const [follow, setFollow] = useState(false);
  const onclickFolo = () => {
    setFollow(!follow);
  };
  const [block, setBlock] = useState(false);
  const onClickBlock = () => {
    setBlock(!block);
  };
  const handleClicknt = () => {
    router.push("https://chat365.timviec365.vn/");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    removeFollower();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <a onClick={handleClicknt} className={styles.item}>
          <Image
            width={20}
            height={21}
            alt="messenger"
            src={"/img/nhan-tin.svg"}
          />
          Nhắn tin
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a onClick={onclickFolo} className={styles.item}>
          <Image
            width={20}
            height={21}
            alt="messenger"
            src={"/img/bo-theo-doi.svg"}
          />
          {follow ? "Bỏ theo dõi" : "Theo dõi"}
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a onClick={onClickBlock} className={styles.item}>
          <Image width={20} height={21} alt="messenger" src={"/img/chan.svg"} />
          {block ? "Chặn" : "Bỏ chặn"}
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a onClick={showModal} className={styles.item}>
          <Image
            width={20}
            height={21}
            alt="messenger"
            src={"/img/nhan-tin.svg"}
          />
          Hủy kết bạn
        </a>
      ),
      key: "3",
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Image
          onClick={(e) => e.preventDefault()}
          width={24}
          height={25}
          alt=""
          src={"/img/ba-cham.svg"}
        />
      </Dropdown>
      <Modal
        title="Hủy kết bạn"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={styles.modal_content}>
          <p>
            Bạn có chắc chắn muốn xóa Nguyễn Hoàng Việt khỏi danh sách bạn bè
            không?
          </p>
        </div>
        <div className={styles.modal_footer}>
          <button onClick={handleCancel} className={styles.huy}>
            Hủy
          </button>
          <button onClick={handleOk} className={styles.xacnhan}>
            Xác nhận
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DotFr;
