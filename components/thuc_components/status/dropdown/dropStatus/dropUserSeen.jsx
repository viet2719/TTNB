import React, { useState } from "react";
import styles from "./dropStatus.module.css";
import { Menu, Image, Dropdown, Button, Modal } from "antd";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";
const DropUserSeen = () => {
   const [notificationStatus, setNotificationStatus] = useState("on");

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
         icon: "/img/group/dot7.svg",
         text: "Ẩn bài viết",
         subtitle: "Bài viết sẽ bị ẩn khỏi bảng tin.",
      },

      {
         key: "4",
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
                           <p className={styles.p_item}>{item.subtitle}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
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

      if (key === "4") {
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
         <div>{renderModal()}</div>
      </>
   );
};
export default DropUserSeen;
