import React, { useState } from "react";
import styles from "./index.module.css";
import { Input, Image, Dropdown, Modal, Switch, Button } from "antd";
const Member = () => {
   const [isInvited, setIsInvited] = useState(false);

   const handleButtonClick = () => {
      setIsInvited(!isInvited);
   };
   const [reverse, setReverse] = useState(true);
   const [isModalOutOpen, setIsModalOutOpen] = useState(false);
   const showModalOut = () => {
      setIsModalOutOpen(true);
   };
   const handleOutCancel = () => {
      setIsModalOutOpen(false);
   };
   const items = [
      {
         key: "1",
         label: <div onClick={showModalOut}>Rời khỏi nhóm</div>,
      },
   ];
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.left_content1}>
                  <h3>Thành viên (1)</h3>
                  <Input className={`thuc_input_full`} placeholder="Tìm kiếm thành viên "></Input>
               </div>
               <div className={styles.left_content2}>
                  <div className={styles.left_flex}>
                     <Image alt="" src="/img/group/mu3.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                     <div>
                        <p className={styles.p_bold}>Thức Đẹp Trai</p>
                     </div>
                  </div>
                  <div>
                     <Dropdown
                        menu={{
                           items,
                        }}
                        placement="bottomRight"
                        trigger="click">
                        <Image src="/img/group/more.svg" alt="icon" preview={false} />
                     </Dropdown>
                  </div>
               </div>

               <div className={styles.left_content3}>
                  <p className={styles.p_bold}>Quản trị viên kiểm duyệt</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu4.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                           <p className={styles.p_green}>Quản trị viên</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.left_content4}>
                  <p className={styles.p_bold}>Bạn bè</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.left_content5}>
                  <p className={styles.p_bold}>Thành viên mới vào nhóm</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu4.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu1.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Thế Đạt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <button className={styles.btn_add} onClick={handleButtonClick}>
                              <img alt="" src="/img/group/add_friend.svg" preview={false} />
                              {isInvited ? "Hủy lời mời" : "Thêm bạn bè"}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.left_content6}>
                  <p className={styles.p_bold}>Đã mời</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu4.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Thế Đạt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <button className={styles.btn_add} onClick={handleButtonClick}>
                              <img alt="" src="/img/group/add_friend.svg" preview={false} />
                              {isInvited ? "Hủy lời mời" : "Thêm bạn bè"}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <Modal className={`thuc_modal`} title="Rời khỏi nhóm" open={isModalOutOpen} onCancel={handleOutCancel} footer={null}>
                  <div className={styles.modal_container_notifical}>
                     <h3>Bạn chắc chắn muốn rời khỏi nhóm Fan MU Việt Nam</h3>
                     <div className={styles.modal_fl}>
                        <p>Ngăn mọi người mời bạn tham gia nhóm này</p>
                        <Switch size="small" checked={reverse} onChange={setReverse} />
                     </div>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleOutCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Rời khỏi nhóm</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default Member;
