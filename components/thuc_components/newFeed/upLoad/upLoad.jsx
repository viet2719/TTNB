import React from "react";
import { Image } from "antd";
import styles from "./upLoad.module.css";

const UploadFile = ({ isUploadFileVisible }) => {
   return (
      <div className={`${styles.uploadFile} ${isUploadFileVisible ? styles.visible : ""}`}>
         <div className={styles.uploadFileItem}>
            <div className={styles.uploadFileItemIcon}>
               <Image src="/img/img-home/post_new_upload_file.svg" alt="" width={50} height={50} preview={false} />
            </div>
            <p className={styles.uploadFileItemTitle}>Thêm ảnh/video/tệp</p>
         </div>
      </div>
   );
};
export default UploadFile;
