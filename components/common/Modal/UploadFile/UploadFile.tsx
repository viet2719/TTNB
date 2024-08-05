import React, { useState } from "react";
import { Modal, Button, Image, Input } from "antd";
import styles from "./UploadFile.module.css";

interface ModalUploadFileProps {
  isUploadFileVisible: boolean;
}
const ModalUploadFile: React.FC<ModalUploadFileProps> = ({
  isUploadFileVisible,
}) => {
  return (
    <div
      className={`${styles.uploadFile} ${
        isUploadFileVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.uploadFileItem}>
        <div className={styles.uploadFileItemIcon}>
          <Image
            src="./img/img-home/post_new_upload_file.svg"
            alt=""
            preview={false}
          />
        </div>
        <p className={styles.uploadFileItemTitle}>Thêm ảnh/video/tệp</p>
      </div>
      {/* <Image
                            src='./img/img-home/nv_close_uploadfile.svg'
                            alt=''
                            preview={false}
                            className={styles.close_upload_file}
                        /> */}
    </div>
  );
};
export default ModalUploadFile;
