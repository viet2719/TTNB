import React, { useState } from "react";
import styles from "./index.module.css";
import Introduce from "../../../../../components/thuc_components/introduce/introduce";
import Media from "../../../../../components/thuc_components/media/media";
import Status from "../../../../../components/thuc_components/status/status";

const PinStatus = () => {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.content_top}>
                  <div className={styles.all_status}>
                     <Status />
                  </div>
               </div>
               <div className={styles.content_bot}>
                  <div className={styles.introduce}>
                     <Introduce />
                  </div>
                  <div className={styles.introduce}>
                     <Media />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default PinStatus;
