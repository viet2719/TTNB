import React, { useState } from "react";
import styles from "@/components/headerperson/modal.module.css";
interface FriendExceptProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function UploadFile({
  isOpen,
  onClose,
}: FriendExceptProps): JSX.Element {
  const [coverImageSrc, onUpdateAvatarImage] = useState("/img/c.png");
  const handleImageUpdateAndSave = (newImageSrc: any) => {
    onUpdateAvatarImage(newImageSrc);

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
  return (
    <div>
      <label htmlFor="file-upload" className={styles.customUploadButton}>
        Tải ảnh lên
      </label>
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
}
