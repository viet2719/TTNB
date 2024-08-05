import React, { useState } from "react";
import styles from "./drop.module.css";
import { Modal, Image, Dropdown, Button, Menu } from "antd";

const Drop = () => {
   const items = [
      {
         key: "1",
         label: "Xóa nhóm",
      },
   ];
   const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
   const showModalDelete = () => {
      setIsModalDeleteOpen(true);
   };
   const handleDeleteCancel = () => {
      setIsModalDeleteOpen(false);
   };

   const handleDropdownClick = (key) => {
      if (key === "1") {
         showModalDelete();
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
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Xóa nhóm" open={isModalDeleteOpen} onCancel={handleDeleteCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn chắc chắn muốn xóa nhóm Fan MU Việt Nam</h3>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleDeleteCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xóa nhóm</Button>
                  </div>
               </div>
            </Modal>
         </div>
      </>
   );
};
export default Drop;
