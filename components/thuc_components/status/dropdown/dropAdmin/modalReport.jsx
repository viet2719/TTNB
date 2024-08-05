import React, { useState } from "react";
import styles from "./dropAdmin.module.css";
import { Button, Image, Modal } from "antd";

const ModalReport = ({ isOpen, isClose }) => {
   const dataReport = [
      {
         key: 1,
         name: "Vi phạm quy tắc nhóm",
      },
      {
         key: 2,
         name: "Nội dung không liên quan",
      },
      {
         key: 3,
         name: "Tin giả",
      },
      {
         key: 4,
         name: "Xung đột giữa các thành viên",
      },
      {
         key: 5,
         name: "Spam",
      },
      {
         key: 6,
         name: "Quấy rối",
      },
      {
         key: 7,
         name: "Ngôn từ gây thù ghét",
      },
      {
         key: 8,
         name: "Ảnh khỏa thân hoặc hành động tình dục",
      },
      {
         key: 9,
         name: "Bạo lực",
      },
      {
         key: 10,
         name: "Các vấn đề khác",
      },
   ];
   const dataNude = [
      {
         key: 11,
         name: "Khỏa thân người lớn",
      },
      {
         key: 12,
         name: "Gợi dục",
      },
      {
         key: 13,
         name: "Hoạt động tình dục",
      },
      {
         key: 14,
         name: "Bóc lột tình dục",
      },
      {
         key: 15,
         name: "Dịch vụ tình dục",
      },
      {
         key: 16,
         name: "Liên quan đến trẻ em",
      },
      {
         key: 17,
         name: "Chia sẻ hình ảnh riêng tư",
      },
   ];
   const handleClick = (key) => {
      if (key === 1) {
         showModalRule();
      }
      if (key === 2) {
         showModalThanks();
      }
      if (key === 3) {
         showModalThanks();
      }
      if (key === 4) {
         showModalThanks();
      }
      if (key === 5) {
         showModalThanks();
      }
      if (key === 6) {
         showModalThanks();
      }
      if (key === 7) {
         showModalThanks();
      }
      if (key === 8) {
         showModalNude();
      }
      if (key === 9) {
         showModalThanks();
      }
      if (key === 10) {
         showModalThanks();
      }
      if (key === 11) {
         showModalThanks();
      }
      if (key === 12) {
         showModalThanks();
      }
      if (key === 13) {
         showModalThanks();
      }
      if (key === 14) {
         showModalThanks();
      }
      if (key === 15) {
         showModalThanks();
      }
      if (key === 16) {
         showModalThanks();
      }
      if (key === 17) {
         showModalThanks();
      }
   };
   //modal cảm ơn đã báo cáo
   const [isModalThanksOpen, setIsModalThanksOpen] = useState(false);
   const showModalThanks = () => {
      setIsModalThanksOpen(true);
      setIsModalRuleOpen(false);
      setIsModalNudeOpen(false);
   };
   const handleThanksCancel = () => {
      setIsModalThanksOpen(false);
   };
   //modal quy tắc nhóm
   const [isModalRuleOpen, setIsModalRuleOpen] = useState(false);
   const showModalRule = () => {
      setIsModalRuleOpen(true);
   };
   const handleRuleCancel = () => {
      setIsModalRuleOpen(false);
   };
   //modal Ảnh khỏa thân hoặc hành động tình dục
   const [isModalNudeOpen, setIsModalNudeOpen] = useState(false);
   const showModalNude = () => {
      setIsModalNudeOpen(true);
   };
   const handleNudeCancel = () => {
      setIsModalNudeOpen(false);
   };
   return (
      <>
         <Modal className={`thuc_modal`} title="Báo cáo bình luận với quản trị viên nhóm" open={isOpen} onCancel={isClose} footer={null}>
            <div className={styles.modal_container}>
               <h3>Hãy chọn vấn đề</h3>
               <p>Hãy cho quản trị viên biết bình luận này có vấn đề gì. Chúng tôi sẽ không thông báo cho người đăng bình luận rằng bạn đã báo cáo.</p>
               <div className={styles.scroll_friend}>
                  {dataReport.map((item) => {
                     return (
                        <div className={styles.recently} key={item.key} onClick={() => handleClick(item.key)}>
                           <div>
                              <h3>{item.name}</h3>
                           </div>
                           <div className={styles.img}>
                              <Image alt="" src="/img/group/drop_right.svg" preview={false}></Image>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </Modal>
         <Modal className={`thuc_modal`} title="Cảm ơn bạn đã báo cáo bình luận này" open={isModalThanksOpen} onCancel={handleThanksCancel} footer={null}>
            <div className={styles.modal_container}>
               <div className={styles.name}>
                  <p className={styles.name_rule}>Vi phạm quy tắc nhóm</p>
               </div>
               <div className={styles.name}>
                  <p>Bạn đã báo cáo bình luận này với quản trị viên nhóm.</p>
               </div>
               <h3>Các bước mà bạn có thể thực hiện</h3>
               <div className={styles.all_name}>
                  <div className={styles.none_fl}>
                     <div>
                        <Image alt="" src="/img/group/fl1.svg" preview={false}></Image>
                     </div>
                     <div>
                        <p className={styles.img_p}>Chặn trang cá nhân của Nguyễn Văn Thức</p>
                        <p className={styles.img_p2}>Các bạn sẽ không thể nhìn thấy hoặc liên hệ với nhau.</p>
                     </div>
                  </div>
                  <div className={styles.none_fl}>
                     <div>
                        <Image alt="" src="/img/group/fl2.svg" preview={false}></Image>
                     </div>
                     <div>
                        <p className={styles.img_p}>Ẩn tất cả từ Nguyễn Văn Thức</p>
                        <p className={styles.img_p2}>Không xem bài viết từ người này nữa</p>
                     </div>
                  </div>
                  <div className={styles.none_fl}>
                     <div>
                        <Image alt="" src="/img/group/fl3.svg" preview={false}></Image>
                     </div>
                     <div>
                        <p className={styles.img_p}>Hủy kết bạn</p>
                        <p className={styles.img_p2}>Xóa bạn bè khỏi danh sách bạn bè</p>
                     </div>
                  </div>
               </div>
               <div className={styles.name}>
                  <Button className={`btn_ok`}>Xong</Button>
               </div>
            </div>
         </Modal>
         <Modal className={`thuc_modal`} title="Báo cáo" open={isModalRuleOpen} onCancel={handleRuleCancel} footer={null}>
            <div className={styles.modal_container}>
               <div className={styles.none_fl}>
                  <Image alt="" src="/img/group/error_red.svg" preview={false}></Image>
                  <h3>Họ vi phạm quy tắc nhóm nào</h3>
               </div>
               <div className={styles.rule}>
                  <input type="radio" className={styles.radio} onClick={showModalThanks} />
                  <div>
                     <h3>Công lý</h3>
                     <p>Công lý nằm trong tay kẻ mạnh</p>
                  </div>
               </div>
               <div className={styles.rule}>
                  <input type="radio" className={styles.radio} onClick={showModalThanks} />
                  <div>
                     <h3>Kiêu ngạo</h3>
                     <p>Kiêu ngạo là đặc quyền của người có thực lực</p>
                  </div>
               </div>
            </div>
         </Modal>
         <Modal className={`thuc_modal`} title="Báo cáo" open={isModalNudeOpen} onCancel={handleNudeCancel} footer={null}>
            <div className={styles.modal_container}>
               <div className={styles.none_fl}>
                  <Image alt="" src="/img/group/error_red.svg" preview={false}></Image>
                  <h3>Ảnh khỏa thân hoặc hành động tình dục</h3>
               </div>
               <p>Hãy cho quản trị viên biết bài viết này có vấn đề gì. Chúng tôi sẽ không thông báo cho người đăng rằng bạn đã báo cáo.</p>
               <div className={styles.scroll_friend}>
                  {dataNude.map((item) => {
                     return (
                        <div className={styles.recently} key={item.key} onClick={() => handleClick(item.key)}>
                           <div>
                              <h3>{item.name}</h3>
                           </div>
                           <div className={styles.img}>
                              <Image alt="" src="/img/group/drop_right.svg" preview={false}></Image>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </Modal>
      </>
   );
};
export default ModalReport;
