import React, { useState } from "react";
import styles from "./pin.module.css";
import { Image, Dropdown } from "antd";
const Pin = () => {
   const dataPin = [
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "1 tuần trước",
         title: "Win!!!",
         content: "/img/group/mu2.jpg",
      },
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "2 tuần trước",
         title: "ok!!!",
         content: "/img/group/mu3.jpg",
      },
      {
         avatar: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         position: "Quản trị viên",
         time: "1 tháng trước",
         title: "hihi!!!",
         content: "/img/group/mu4.jpg",
      },
   ];

   const items = [
      {
         key: "1",
         label: (
            <div className={styles.introduce_flex}>
               <Image alt="/" src="/img/group/dot21.svg" preview={false} />
               <p>Bỏ ghim bài viết</p>
            </div>
         ),
      },
      {
         key: "2",
         label: (
            <div className={styles.introduce_flex}>
               <Image alt="/" src="/img/group/dot10.png" width={20} height={20} preview={false} />
               <p>Ghim lên đầu</p>
            </div>
         ),
      },
   ];
   return (
      <>
         <div className={styles.pin}>
            <h3>Ghim bài viết</h3>
            <div className={styles.pin_container}>
               <div className={styles.all_pin}>
                  <div className={styles.pin_if}>
                     <Image alt="/" src="/img/group/gim.svg" preview={false} />
                     <p>Nêu bật những điều đáng chú ý nhất trong nhóm</p>
                     <p>Nêu bật những điều đáng chú ý nhất trong nhóm ở một nơi thuận tiện mà bạn có thể ghim bài viết</p>
                  </div>
                  {dataPin.map((item, index) => {
                     return (
                        <div key={index} className={styles.pin_if}>
                           <div className={styles.content}>
                              <div className={styles.introduce_flex}>
                                 <Image alt="/" src={item.avatar} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                 <div className={styles.name}>
                                    <h3>{item.name}</h3>
                                    <div className={styles.flex}>
                                       <p>{item.position}</p>
                                       <p>{item.time}</p>
                                    </div>
                                 </div>
                              </div>
                              <Dropdown menu={{ items }} placement="bottomRight" arrow trigger="click">
                                 <Image alt="/" src="/img/group/dot9.svg" preview={false} />
                              </Dropdown>
                           </div>
                           <p>{item.title}</p>
                           <Image alt="/" src={item.content} height={170} preview={false} />
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </>
   );
};
export default Pin;
