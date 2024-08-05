import React from "react";
import styles from "./dropThree.module.css";
import { Input, Image, Dropdown } from "antd";

const DropThree = () => {
   const items = [
      {
         key: "1",
         label: "Gỡ lời mời",
      },
      {
         key: "2",
         label: "Gửi lời nhắc",
      },
   ];
   return (
      <>
         <Dropdown menu={{ items }} placement="bottomRight" trigger="click">
            <div>
               <Image alt="" src="/img/group/more2.svg" preview={false} />
            </div>
         </Dropdown>
      </>
   );
};
export default DropThree;
