import React, { useState } from "react";
import { Divider, Modal } from "antd";
import Image from "next/image";
import styles from "./EditPerPages.module.scss";
import CoverImage from "@/components/headerperson/UpdateImageWall";
import Avatar from "@/components/headerperson/Avatar";
import EditStory from "./EditStory";
import { useRouter } from "next/router";
import Interest from "../Interest/Interest";
interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}
const EditPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eidtImageWall, setEidtImageWall] = useState(false);
  const [updateAvt, setUpdateAvt] = useState(false);
  const [avatarImageSrc, setAvatarImageSrc] = useState("/img/c.png");
  const handleAvatarImageUpdate = (newImageSrc: any) => {
    setAvatarImageSrc(newImageSrc); // Cập nhật đường dẫn ảnh đại diện mới
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();
  const edit_intro = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={showModal} className={styles.setting_per}>
        <Image width={20} height={20} alt="pencel" src={"/img/nv_pen.svg"} />
        Chỉnh sửa trang cá nhân
      </button>

      <Modal
        title="Chỉnh sửa trang cá nhân"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div className={styles.anhdaidien}>
            <p className={styles.anhdaidien_lable}>
              <span className={styles.anhdaidien_title}>Ảnh đại diện</span>
              <span
                className={styles.anhdaidien_edit}
                onClick={() => setUpdateAvt(true)}
              >
                Chỉnh sửa
              </span>
              {updateAvt && (
                <Avatar
                  isOpen={updateAvt}
                  onClose={() => setUpdateAvt(false)}
                />
              )}
            </p>
            <div className={styles.anhdaidien_img}>
              <Image width={150} height={150} alt="" src={"/img/c.png"} />
            </div>
          </div>
          <div className={styles.anhbia}>
            <p className={styles.anhbia_lable}>
              <span className={styles.anhbia_title}>Ảnh bìa</span>
              <span
                className={styles.anhbia_edit}
                onClick={() => {
                  setEidtImageWall(true);
                }}
              >
                Chỉnh sửa
              </span>
              {eidtImageWall && (
                <CoverImage
                  isOpen={eidtImageWall}
                  onClose={() => setEidtImageWall(false)}
                />
              )}
            </p>
            <div className={styles.anhbia_img}>
              <Image width={150} height={150} alt="" src={avatarImageSrc} />
            </div>
          </div>
          <div className={styles.edit_story}>
            <EditStory />
          </div>
          <div className={styles.edit_intro}>
            <span>Chỉnh sửa phần giới thiệu</span>
            <p style={{ cursor: "pointer" }}>Chỉnh sửa</p>
          </div>
          <div>
            <p>Sở thích</p>

            <Interest />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditPages;
