import React, { useRef } from "react";
import styles from "./index.module.css";

const VideoColection = () => {
   const videoRef = useRef(null);

   const handleVideoClick = () => {
      if (videoRef.current) {
         const promise = videoRef.current.requestFullscreen();

         promise
            .then(() => videoRef.current?.play())
            .catch((error) => {
               console.log("Error attempting to enable fullscreen:", error);
            });
      }
   };
   const dataVideo = [
      {
         key: "1",
         videoSrc: "/img/group/ta_xua.mp4",
      },
      {
         key: "2",
         videoSrc: "/img/group/ta_xua.mp4",
      },
      {
         key: "3",
         videoSrc: "/img/group/ta_xua.mp4",
      },
   ];
   return (
      <>
         <div className={styles.introduce_all_img}>
            {dataVideo.map((item) => {
               return (
                  <div className={styles.introduce_img} key={item.key}>
                     <div className={styles.post__content__video}>
                        <video ref={videoRef} controls onClick={handleVideoClick} className={styles.video}>
                           <source src={item.videoSrc} type="video/mp4" />
                        </video>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
};
export default VideoColection;
