import React from "react";
import { Modal, Button, Image } from "antd";
import styles from "./modalAsk.module.css";

const ModalAsk = ({ isOpen, onClose }) => {
   return (
      <>
         <Modal title="Câu hỏi dành cho người tham gia" open={isOpen} onCancel={onClose} footer={null} className={`thuc_modal`}>
            <div className={styles.modal_container}>
               <div className={styles.modal_calender}>
                  <Image alt="" src="/img/group/tq3.jpg" preview={false} width={70} height={70} style={{ borderRadius: "8px" }} />
                  <div>
                     <h3>Fan MU Việt Nam</h3>
                     <p>1 tr thành viên</p>
                  </div>
               </div>
               <h3>Bắt đầu bằng cách gửi yêu cầu tham gia</h3>
               <p>Quản trị viên sẽ xét duyệt mọi người trong nhóm công khai này trước khi họ có thể đăng hoặc bình luận lần đầu. Hãy đọc và đồng ý với các quy tắc nhóm để gửi yêu cầu.</p>
               <div className={styles.modal_scroll}>
                  <div className={styles.scroll}>
                     <div className={styles.content}>
                        <h3>ĐCSVN quang vinh muôn năm</h3>
                        <p className={styles.p}>Hãy viết câu trả lời</p>
                        <div className={styles.content_rule}>
                           <textarea className={styles.textarea} name="" id="" cols="10" rows="5" placeholder="Viết câu trả lời"></textarea>
                        </div>
                     </div>
                     <div className={styles.content}>
                        <h3>Nước CHXHCN VN quang vinh muôn năm</h3>
                        <p className={styles.p}>Bạn có thể chọn nhiều mục</p>
                        <div className={styles.content_input}>
                           <input type="checkbox" />
                           <p>Quyết thắng</p>
                        </div>
                        <div className={styles.content_input}>
                           <input type="checkbox" />
                           <p>Muôn năm</p>
                        </div>
                     </div>
                     <div className={styles.content}>
                        <h3>Chủ tịnh HCM vĩ đại sông mãi trong sự nghiệp của chúng ta</h3>
                        <p className={styles.p}>Bạn có thể chọn một mục</p>
                        <div className={styles.content_input}>
                           <input type="radio" />
                           <p>huraaaaa</p>
                        </div>
                        <div className={styles.content_input}>
                           <input type="radio" />
                           <p>Muôn năm</p>
                        </div>
                     </div>
                     <div className={styles.content}>
                        <h3>Quy tắc nhóm</h3>
                        <p className={styles.p}>Các thành viên nhóm đồng ý tuân thủ những quy tắc sau:</p>
                        <div className={styles.content_rule}>
                           <h3>Mỗi người chúng ta sinh ra đều có quyền hưởng tự do và bình đẳng</h3>
                           <p>Muôn năm</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.btn}>
                  <p>
                     Không nhập mật khẩu hoặc thông
                     <br /> tin nhạy cảm khác tại đây,
                     <br /> ngay cả khi quản trị viên nhóm yêu cầu.
                  </p>
                  <Button className={`btn_ok`}>Gửi</Button>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default ModalAsk;
