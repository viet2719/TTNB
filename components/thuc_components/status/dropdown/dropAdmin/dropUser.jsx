import React, { useState } from "react";
import styles from "./dropAdmin.module.css";
import { Menu, Image, Dropdown, Button, Modal } from "antd";
import ModalReport from "./modalReport";
const DropUser = () => {
   const menuOption = [
      {
         key: "1",
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
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
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

         <ModalReport isOpen={isModalReportOpen} isClose={handleReportCancel} />
      </>
   );
};
export default DropUser;
