import React from "react";
import { Modal, Button } from "antd";
import styles from "./feedContent.module.css";

const Time = ({ isOpen, onClose }) => {
   return (
      <>
         <Modal title="Lịch đăng bài" open={isOpen} onCancel={onClose} footer={null} className={`${styles.modal} thuc_modal`}>
            <div className={styles.modal_container}>
               <p>Chọn ngày và giờ trong tương lai mà bạn muốn đăng bài viết của mình.</p>
               <div className={styles.modal_calender}>
                  <input type="date" className={styles.modal_input} />
                  <input type="time" className={styles.modal_input} />
               </div>
               <Button className={`thuc_btn_full`}>Lưu lịch đăng</Button>
            </div>
         </Modal>
      </>
   );
};

export default Time;
