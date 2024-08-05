import React, { useState } from "react";
import styles from "./post.module.scss";
import { Divider, Dropdown, Image, MenuProps } from "antd";
import ModalAddPost from "./modalAddpost";
import Tuychinhdangtin from "../Tuychinhdangtin";
interface PostProps {
  modal: boolean;
  setOpenModal: () => void;
}
export default function Post() {
  const [modal, setOpenModal] = useState(false);
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <div className={styles.post}>
        <div className={styles.post_head}>
          <div>
            <Image
              preview={false}
              alt="phanh"
              src="/img/c.png"
              width={40}
              height={40}
            />
          </div>
          <input
            type="text"
            placeholder="Cập nhật công việc với các đồng nghiệp của bạn"
          />
          <button>Đăng</button>
        </div>
        <Divider />
        <div className={styles.footer_post}>
          <div
            className={styles.footer_post_item}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Image src="/img/TTNB/icon_anh.png" alt="anh loi" preview={false} />
            Tải lên ảnh/video/tệp
          </div>
          <div
            className={styles.footer_post_item}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Image
              src="/img/TTNB/icon_nhac.png"
              alt="anh loi"
              preview={false}
            />
            Nhắc tên thành viên
          </div>

          <Tuychinhdangtin />
          {modal && (
            <ModalAddPost
              modal={modal}
              setOpenModal={setOpenModal}
              showInput={showInput}
              setShowInput={setShowInput}
            />
          )}
        </div>
      </div>
    </div>
  );
}
