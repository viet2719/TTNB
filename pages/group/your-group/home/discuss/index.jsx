import React from "react";
import styles from "./index.module.css";
import NewFeed from "../../../../../components/thuc_components/newFeed/newFeed";
import Status from "../../../../../components/thuc_components/status/status";
import Pin from "../../../../../components/thuc_components/pin/pin";
import Introduce from "../../../../../components/thuc_components/introduce/introduce";
import Media from "../../../../../components/thuc_components/media/media";

const Discuss = ({ onTabChange }) => {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.content_top}>
                  <div className={styles.upload}>
                     <NewFeed />
                  </div>

                  <div className={styles.pin}>
                     <Pin />
                  </div>
                  <div className={styles.all_status}>
                     <Status />
                  </div>
               </div>
               <div className={styles.content_bot}>
                  <div className={styles.content_bot_cl}>
                     <div className={styles.introduce}>
                        <Introduce onTabChange={onTabChange} />
                     </div>
                     <div className={styles.introduce}>
                        <Media onTabChange={onTabChange} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Discuss;
