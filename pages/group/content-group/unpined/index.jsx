import React from "react";
import styles from "./index.module.css";
import { Image, Dropdown } from "antd";
import LeftContent from "../../../../components/thuc_components/left-nav-group/leftContent";
import Head from "next/head";
const App = () => {
   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftContent />
               </div>
            </div>
         ),
      },
   ];
   return (
      <>
         <div className={styles.right_none}>
            <div className={styles.right_menu}>
               <Dropdown
                  menu={{
                     items,
                  }}
                  placement="bottomRight"
                  trigger="click">
                  <Image src="/img/group/menuu.png" alt="icon" width={40} height={40} preview={false} />
               </Dropdown>
               <h3>Nội dung của bạn</h3>
            </div>
         </div>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <Head>
                  <title>Nội dung của bạn</title>
                  <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
               </Head>
               <div className={styles.left}>
                  <LeftContent />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.right_error}>
                  <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                  <h3>Không có nội dung nào</h3>
               </div>
            </div>
         </div>
      </>
   );
};

export default App;
