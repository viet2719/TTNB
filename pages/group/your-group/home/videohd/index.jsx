import React, { useRef, useContext } from "react";
import styles from "./index.module.css";
import Introduce from "../../../../../components/thuc_components/introduce/introduce";
import Media from "../../../../../components/thuc_components/media/media";
import Status from "../../../../../components/thuc_components/status/status";
import { StatusCOntext } from "../../../../../components/context/statusContext";
const VideoHd = () => {
   const { dataStatusContext, setDataStatusContext } = useContext(StatusCOntext);
   const filteredDataStatus = dataStatusContext.filter((item) => {
      return item.videoSrc === null || item.videoSrc === "";
   });
   return (
      <>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.content_top}>
                  <Status dataStatusContext={filteredDataStatus} />
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
export default VideoHd;
