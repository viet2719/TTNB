import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./modal.module.css";
import Image from "next/image";
import Update from "@/components/common/Modal/UpdateCoverImage/Update";
import UploadFile from "../viet_components/Btn/UploadFile";
import UpdateAvatar from "../common/Modal/UpdateCoverImage/UpdateAvatar";

interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Avatar({
  isOpen,
  onClose,
}: FriendExceptProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverImageSrc, onUpdateAvatarImage] = useState("/img/c.png");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [update, setUpdate] = useState(false);
  const handleImageUpdateAndSave = (newImageSrc: any) => {
    onUpdateAvatarImage(newImageSrc);
    onClose();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          onUpdateAvatarImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
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
        title="Cập nhật ảnh đại diện"
        open={isOpen}
        onOk={handleOk}
        onCancel={onClose}
        footer={null}
      >
        <UploadFile
          isOpen={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

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
          <UpdateAvatar
            isOpen={update}
            onClose={() => setUpdate(false)}
            coverImageSrc={selectedImage}
          />
        )}
      </Modal>
    </>
  );
}
