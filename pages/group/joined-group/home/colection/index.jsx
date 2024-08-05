import React from "react";
import styles from "./index.module.css";
import { Tabs } from "antd";
import Img from "./img";
import VideoColection from "./video";
import { useRouter } from "next/router";
const Colection = () => {
   const router = useRouter();
   const items = [
      {
         key: "1",
         label: "Ảnh",
         children: <Img />,
      },
      {
         key: "2",
         label: "Video",
         children: <VideoColection />,
      },
   ];

   return (
      <>
         <div className={styles.container}>
            <h2>File phương tiện</h2>
            <Tabs defaultValue={1} items={items} />
         </div>
      </>
   );
};
export default Colection;
