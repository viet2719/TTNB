import React, { useState } from "react";
import styles from "./dropStatus.module.css";
import { Menu, Image, Dropdown, Button, Modal, Switch, Select } from "antd";
import EditPost from "../../../shareGroup/shareNewfeed/editModalPost";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";
const DropStatus = () => {
   const [isModalEdit, setIsModalEdit] = useState(false);
   const showEdit = () => {
      setIsModalEdit(true);
   };
   const handleEditCancel = () => {
      setIsModalEdit(false);
   };
   const [selectedModal, setSelectedModal] = useState();
   const MODAL_OPTION_POST_SAVE = "save";
   const closeSelectedModal = () => {
      setSelectedModal(null);
   };
   const openModalSave = () => {
      setSelectedModal(MODAL_OPTION_POST_SAVE);
   };
   const renderModal = () => {
      switch (selectedModal) {
         case MODAL_OPTION_POST_SAVE:
            return <ModalSave selectedModal={selectedModal} closeSelectedModal={closeSelectedModal} />;
         default:
            return null;
      }
   };

   const [pinGroup, setPinGroup] = useState("on");
   const [notificationStatus, setNotificationStatus] = useState("on");
   const [comment, setComment] = useState("on");
   const menuOption = [
      {
         key: "1",
         icon: pinGroup === "on" ? "/img/group/dot22.svg" : "/img/group/dot21.svg",
         text: pinGroup === "on" ? "Ghim bài viết" : "Bỏ ghim bài viết",
      },
      {
         key: "2",
         icon: "/img/group/save.svg",
         text: "Lưu bài viết",
      },
      {
         key: "3",
         icon: notificationStatus === "on" ? "/img/group/unring.svg" : "/img/group/ring.svg",
         text: notificationStatus === "on" ? "Tắt thông báo" : "Bật thông báo",
      },
      {
         key: "4",
         icon: comment === "on" ? "/img/group/cmt.svg" : "/img/group/uncmt.svg",
         text: comment === "on" ? "Tắt tính năng bình luận" : "Bật tính năng bình luận",
      },
      {
         key: "5",
         icon: "/img/group/pen.svg",
         text: "Chỉnh sửa bài viết",
      },
      {
         key: "6",
         icon: "/img/group/delete.svg",
         text: "Xóa bài viết",
      },
      {
         key: "7",
         icon: "/img/group/hand.png",
         text: "Đóng góp ý kiến",
         subtitle: "Gợi ý thay đổi cho bài viết này",
      },
      {
         key: "8",
         icon: "/img/group/time.svg",
         text: "Bỏ theo dõi nhóm trong 30 ngày",
      },
   ];
   const menuDrop = (
      <Menu onClick={({ key }) => handleDropdownClick(key)}>
         {menuOption.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.icon} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <p>{item.text}</p>
                           <p>{item.subtitle}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   //modal mời làm người kiểm duyệt
   const [isModalCensorshipOpen, setIsModalCensorshipOpen] = useState(false);
   const showModalCensorship = () => {
      setIsModalCensorshipOpen(true);
   };
   const handleCensorshipCancel = () => {
      setIsModalCensorshipOpen(false);
   };

   // xóa thành viên
   const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
   const showModalDelete = () => {
      setIsModalDeleteOpen(true);
   };
   const handleDeleteCancel = () => {
      setIsModalDeleteOpen(false);
   };

   const handleDropdownClick = (key) => {
      if (key === "1") {
         if (pinGroup === "on") {
            alert("Ghim bài viết thành công");
            setPinGroup("off");
         } else {
            alert("Bỏ ghim bài viết thành công");
            setPinGroup("on");
         }
      }
      if (key === "2") {
         openModalSave();
      }
      if (key === "3") {
         if (notificationStatus === "on") {
            alert("Tắt thông báo thành công");
            setNotificationStatus("off");
         } else {
            alert("Bật thông báo thành công");
            setNotificationStatus("on");
         }
      }
      if (key === "4") {
         if (comment === "on") {
            alert("Tắt tính năng bình luận thành công");
            setComment("off");
         } else {
            alert("Bật tính năng bình luận thành công");
            setComment("on");
         }
      }
      if (key === "5") {
         showEdit();
      }
      if (key === "6") {
         showModalDelete();
      }
      if (key === "7") {
         showModalCensorship();
      }
      if (key === "8") {
         alert("Bỏ theo dõi nhóm thành công");
      }
   };
   const [isHide, setIsHide] = useState(true);
   const [isBlock, setIsBlock] = useState(false);
   const showContent = () => {
      setIsBlock(true);
      setIsHide(false);
   };
   const closeContent = () => {
      setIsBlock(false);
      setIsHide(true);
   };
   return (
      <>
         <Dropdown overlay={menuDrop} placement="bottomRight" trigger="click">
            <div>
               <Image alt="" src="/img/group/more2.svg" preview={false} />
            </div>
         </Dropdown>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Đóng góp ý kiến" open={isModalCensorshipOpen} onCancel={handleCensorshipCancel} footer={null}>
               <div className={styles.modal_container}>
                  <p>Hãy đưa ra gợi ý để hỗ trợ thành viên cải thiện bài viết của mình! Ý kiến đóng góp này sẽ đến từ quản trị viên ẩn danh, nên họ sẽ không biết bạn là người viết.</p>
                  <p>
                     Nếu <span className={styles.span}>Công ty Cổ phần Thanh toán Hưng Hà </span>chỉnh sửa thì bài viết này sẽ được đăng lại trong nhóm của bạn. Nếu không, bài viết vẫn sẽ ở trong
                     nhóm.
                  </p>
                  <div className={styles.content}>
                     <div className={styles.content_flex}>
                        <Image alt="/" src={"/img/group/tq4.jpg"} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                        <div className={styles.content_fl}>
                           <span className={styles.span}>Công ty Cổ phần Thanh toán Hưng Hà </span>
                           <p className={styles.content_p}>0 hành động kiểm duyệt đối với</p>
                        </div>
                     </div>
                     {isHide && (
                        <div>
                           <Button className={`thuc_btn_full`} onClick={showContent}>
                              Xem tất cả
                           </Button>
                        </div>
                     )}
                     {isBlock && (
                        <div className={styles.none}>
                           <div className={styles.none_flex}>
                              <div className={styles.none_fl}>
                                 <div className={styles.none_img}>
                                    <Image alt="/" src={"/img/group/gb.svg"} width={50} height={50} preview={false} />
                                 </div>
                                 <p className={styles.none_p}>Bài viết vị gỡ</p>
                              </div>
                              <p>0</p>
                           </div>
                           <div className={styles.none_flex}>
                              <div className={styles.none_fl}>
                                 <div className={styles.none_img}>
                                    <Image alt="/" src={"/img/group/gb2.svg"} width={50} height={50} preview={false} />
                                 </div>
                                 <p className={styles.none_p}>Lần bị đình chỉ</p>
                              </div>
                              <p>0</p>
                           </div>
                           <Button className={`thuc_btn_full`} onClick={closeContent}>
                              Thu gọn
                           </Button>
                        </div>
                     )}
                  </div>
                  <h3>Đóng góp ý kiến cho Công ty Cổ phần Thanh toán Hưng Hà</h3>
                  <p>
                     <span className={styles.span}>Công ty Cổ phần Thanh toán Hưng Hà </span> sẽ nhìn thấy tin nhắn ẩn danh này và được chọn xem có muốn cập nhật bài viết dựa trên ý kiến đóng góp của
                     bạn hay không.
                  </p>
                  <textarea name="" id="" cols="10" rows="5" placeholder="Viết ghi chú" className={styles.textarea}></textarea>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleCensorshipCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Gửi</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal`} title="Xóa bài viết" open={isModalDeleteOpen} onCancel={handleDeleteCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn có chắc muốn xóa bài viết này?</h3>
                  <p>Bài viết này sẽ không thể khôi phụ do không được lưu tại bộ nhớ tạm của hệ thống</p>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleDeleteCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xóa </Button>
                  </div>
               </div>
            </Modal>
            <EditPost isOpen={isModalEdit} isClose={handleEditCancel} />
            {renderModal()}
         </div>
      </>
   );
};
export default DropStatus;
