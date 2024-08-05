import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./modal.module.css";
import Image from "next/image";
import Update from "@/components/common/Modal/UpdateCoverImage/Update";
import UploadFile from "@/components/viet_components/Btn/UploadFile";

interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function App({
  isOpen,
  onClose,
}: FriendExceptProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  const img = [
    {
      id: 1,
      imgSrc: "/img/c.png",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
    },
  ];
  return (
    <>
      <Modal
        title="Cập nhật ảnh bìa"
        open={isOpen}
        onOk={handleOk}
        onCancel={onClose}
        footer={null}
      >
        <UploadFile isOpen={false} onClose={() => setUpdate(false)} />
        <p className={styles.anh_updated}>Ảnh đã tải lên</p>
        <div className={styles.gridStyles}>
          {img.map((image) => (
            <div className={styles.img_img} key={image.id}>
              <Image
                className={styles.img}
                onClick={() => setUpdate(true)}
                width={150}
                height={150}
                alt="anh-bia"
                src={image.imgSrc}
              />
            </div>
          ))}
        </div>
        {update && (
          <Update
            isOpen={update}
            onClose={() => setUpdate(false)}
            coverImageSrc={selectedImage}
          />
        )}
      </Modal>
    </>
  );
}
