import React, { useState } from "react";
import styles from "./dropStatus.module.css";
import { Menu, Image, Dropdown, Button, Modal } from "antd";
import EditPost from "../../../shareGroup/shareNewfeed/editModalPost";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";
const DropPostUser = () => {
   const [isModalEdit, setIsModalEdit] = useState(false);
   const showEdit = () => {
      setIsModalEdit(true);
   };
   const handleEditCancel = () => {
      setIsModalEdit(false);
   };
   const [notificationStatus, setNotificationStatus] = useState("on");
   const [comment, setComment] = useState("on");
   const menuOption = [
      {
         key: "1",
         icon: "/img/group/save.svg",
         text: "Lưu bài viết",
      },
      {
         key: "2",
         icon: notificationStatus === "on" ? "/img/group/unring.svg" : "/img/group/ring.svg",
         text: notificationStatus === "on" ? "Tắt thông báo" : "Bật thông báo",
      },
      {
         key: "3",
         icon: comment === "on" ? "/img/group/cmt.svg" : "/img/group/uncmt.svg",
         text: comment === "on" ? "Tắt tính năng bình luận" : "Bật tính năng bình luận",
      },
      {
         key: "4",
         icon: "/img/group/pen.svg",
         text: "Chỉnh sửa bài viết",
      },
      {
         key: "5",
         icon: "/img/group/delete.svg",
         text: "Xóa bài viết",
      },
      {
         key: "6",
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

   // xóa thành viên
   const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
   const showModalDelete = () => {
      setIsModalDeleteOpen(true);
   };
   const handleDeleteCancel = () => {
      setIsModalDeleteOpen(false);
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
   const handleDropdownClick = (key) => {
      if (key === "1") {
         openModalSave();
      }
      if (key === "2") {
         if (notificationStatus === "on") {
            alert("Tắt thông báo thành công");
            setNotificationStatus("off");
         } else {
            alert("Bật thông báo thành công");
            setNotificationStatus("on");
         }
      }
      if (key === "3") {
         if (comment === "on") {
            alert("Tắt tính năng bình luận thành công");
            setComment("off");
         } else {
            alert("Bật tính năng bình luận thành công");
            setComment("on");
         }
      }
      if (key === "4") {
         showEdit();
      }
      if (key === "5") {
         showModalDelete();
      }
      if (key === "6") {
         alert("Bỏ theo dõi nhóm thành công");
      }
   };

   return (
      <>
         <Dropdown overlay={menuDrop} placement="bottomRight" trigger="click">
            <div>
               <Image alt="" src="/img/group/more2.svg" preview={false} />
            </div>
         </Dropdown>
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
export default DropPostUser;
