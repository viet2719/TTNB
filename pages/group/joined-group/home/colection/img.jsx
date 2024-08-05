import React from "react";
import styles from "./index.module.css";
import { Image } from "antd";
const Img = () => {
   const dataImg = [
      {
         key: "1",
         img: "/img/group/mu1.jpg",
      },
      {
         key: "2",
         img: "/img/group/mu2.jpg",
      },
      {
         key: "3",
         img: "/img/group/mu3.jpg",
      },
   ];
   return (
      <>
         <div className={styles.introduce_all_img}>
            {dataImg.map((item) => {
               return (
                  <div className={styles.introduce_img} key={item.key}>
                     <Image alt="/" src={item.img} className={`img_colection`} />
                  </div>
               );
            })}
         </div>
      </>
   );
};
export default Img;
