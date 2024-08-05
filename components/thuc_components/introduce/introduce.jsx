import React, { useState } from "react";
import styles from "./introduce.module.css";
import { Image, Button } from "antd";
const Introduce = ({ onTabChange }) => {
   const handleNavigateToTab7 = () => {
      onTabChange("7");
   };

   return (
      <>
         <div className={styles.introducee}>
            <p className={styles.introduce_p}>Giới thiệu</p>
            <div className={styles.introduce_content}>
               <p>Đây là nhóm Fan MU Việt Nam</p>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/earth.png" preview={false} />
                  <div>
                     <h3>Công khai</h3>
                     <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                  </div>
               </div>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/eye.png" preview={false} />
                  <div>
                     <h3>Hiển thị</h3>
                     <p>Ai cũng có thể tìm nhóm này.</p>
                  </div>
               </div>
               <Button className={`thuc_btn_full`} onClick={handleNavigateToTab7}>
                  Tìm hiểu thêm
               </Button>
            </div>
         </div>
      </>
   );
};
export default Introduce;
