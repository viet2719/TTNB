import React, { useState } from "react";
import styles from "./dropFour.module.css";
import { Modal, Image, Dropdown, Button, Menu, Switch } from "antd";

const DropOut = () => {
   const items = [
      {
         key: "1",
         label: "Rời khỏi nhóm",
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
      if (key === "1") {
         showModalOut();
      }
   };
   const [reverse, setReverse] = useState(true);
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
            <Modal className={`thuc_modal`} title="Rời khỏi nhóm" open={isModalOutOpen} onCancel={handleOutCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn chắc chắn muốn rời khỏi nhóm Fan MU Việt Nam</h3>
                  <div className={styles.reverse}>
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
      </>
   );
};
export default DropOut;
