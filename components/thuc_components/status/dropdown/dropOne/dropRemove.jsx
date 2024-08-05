import React, { useState } from "react";
import styles from "./drop.module.css";
import { Modal, Image, Dropdown, Button, Menu } from "antd";

const DropRemove = () => {
   const items = [
      {
         key: "1",
         label: "Gỡ vai trò quản trị viên",
      },
      {
         key: "2",
         label: "Xóa thành viên",
      },
   ];
   const [isModalOutOpen, setIsModalOutOpen] = useState(false);
   const showModalOut = () => {
      setIsModalOutOpen(true);
   };
   const handleOutCancel = () => {
      setIsModalOutOpen(false);
   };

   const handleDropdownClick = (key) => {
      if (key === "2") {
         showModalOut();
      }
   };
   return (
      <>
         <Dropdown
            overlay={
               <Menu onClick={({ key }) => handleDropdownClick(key)}>
                  {items.map((item) => (
                     <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
               </Menu>
            }
            placement="bottomRight"
            trigger="click">
            <div>
               <Image alt="" src="/img/group/more.svg" preview={false} />
            </div>
         </Dropdown>
         <div>
            <Modal className={`thuc_modal`} title="Xóa thành viên" open={isModalOutOpen} onCancel={handleOutCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn chắc chắn muốn xóa Thức Đẹp Trai ra khỏi nhóm Fan MU Việt Nam</h3>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleOutCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xóa</Button>
                  </div>
               </div>
            </Modal>
         </div>
      </>
   );
};
export default DropRemove;
