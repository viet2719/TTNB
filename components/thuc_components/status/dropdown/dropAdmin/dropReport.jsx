import React, { useState } from "react";
import styles from "./dropAdmin.module.css";
import { Menu, Image, Dropdown, Button, Modal } from "antd";
import ModalReport from "./modalReport";
const DropReport = () => {
   const [comment, setComment] = useState("on");
   const menuOption = [
      {
         key: "1",
         icon: comment === "on" ? "/img/group/uncmt.svg" : "/img/group/cmt.svg",
         text: comment === "on" ? "Ẩn bình luận" : "Hiện bình luận",
      },

      {
         key: "2",
         icon: "/img/group/delete.svg",
         text: "Xóa bình luận",
      },
      {
         key: "3",
         icon: "/img/group/report.svg",
         text: (
            <p>
               Báo cáo bình luận với
               <br /> quản trị viên nhóm
            </p>
         ),
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

   // xóa bình luận
   const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
   const showModalDelete = () => {
      setIsModalDeleteOpen(true);
   };
   const handleDeleteCancel = () => {
      setIsModalDeleteOpen(false);
   };
   //modal report
   const [isModalReportOpen, setIsModalReportOpen] = useState(false);
   const handleReportCancel = () => {
      setIsModalReportOpen(false);
   };
   const showModalReport = () => {
      setIsModalReportOpen(true);
   };
   const handleDropdownClick = (key) => {
      if (key === "1") {
         if (comment === "on") {
            alert("Tắt tính năng bình luận thành công");
            setComment("off");
         } else {
            alert("Bật tính năng bình luận thành công");
            setComment("on");
         }
      }
      if (key === "2") {
         showModalDelete();
      }
      if (key === "3") {
         showModalReport();
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
            <Modal className={`thuc_modal`} title="Xóa bình luận" open={isModalDeleteOpen} onCancel={handleDeleteCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn có chắc muốn xóa bình luận này?</h3>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleDeleteCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xóa </Button>
                  </div>
               </div>
            </Modal>
            <ModalReport isOpen={isModalReportOpen} isClose={handleReportCancel} />
         </div>
      </>
   );
};
export default DropReport;
