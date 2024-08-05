import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Select, Input, Space, Menu } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Time from "../../../../components/thuc_components/newFeed/newFeedContent/time";
import NewFeedContent from "../../../../components/thuc_components/newFeed/newFeedContent/newFeedContent";
import Head from "next/head";
const PostWaiting = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const handleInputClick = () => {
      setIsModalOpen(true);
   };
   const handleModalClose = () => {
      setIsModalOpen(false);
   };

   const [isCalenderOpen, setIsCalenderOpen] = useState(false);
   const showModalTime = () => {
      setIsCalenderOpen(true);
   };
   const handleTimeCancel = () => {
      setIsCalenderOpen(false);
   };
   const itemsDrop = [
      {
         key: "1",
         label: "Chỉnh sửa bài viết",
      },
      {
         key: "2",
         label: "Xóa bài viết",
      },
   ];
   const handleDropdownClick = (key) => {
      if (key === "1") {
         handleInputClick();
      }
   };
   const dataContent = [
      {
         key: "1",
         name: "Nguyễn Thế Đạt",
         time: "1 ngày nữa",
         text: "Bé Cún Cute",
         img: "",
         videoSrc: "/img/group/ta_xua.mp4",
      },
      {
         key: "2",
         name: "Nguyễn Hoàng Việt",
         time: "3 ngày nữa",
         text: "húp",
         img: "/img/group/tq2.jpg",
         videoSrc: "",
      },
   ];
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
   const checkColection = (item) => {
      const checkImg = item.img;
      if (checkImg === null || checkImg === undefined || checkImg === "") {
         return null;
      } else {
         return (
            <>
               <div className={styles.introduce_img}>
                  <Image alt="/" src={item.img} preview={false} />
               </div>
            </>
         );
      }
   };
   const checkVideo = (item) => {
      const checkVideo = item.videoSrc;
      if (checkVideo === null || checkVideo === undefined || checkVideo === "") {
         return null;
      } else {
         return (
            <>
               <div className={styles.introduce_img}>
                  <div className={`${styles.post__content__video} ${styles.post__content__video_container}`}>
                     <video ref={videoRef} width="100%" height="200" controls onClick={handleVideoClick} className={styles.video}>
                        <source src={item.videoSrc} type="video/mp4" />
                     </video>
                  </div>
               </div>
            </>
         );
      }
   };

   const [isHide, setIsHide] = useState(true);
   const [isBlock, setIsBlock] = useState(false);
   const showContent = () => {
      if (dataContent.length > 0) {
         setIsBlock(true);
         setIsHide(false);
      } else {
         setIsBlock(false);
         setIsHide(true);
      }
   };
   useEffect(() => {
      showContent();
   }, []);
   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftNav />
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
               <h2>Bài viết đã lên lịch</h2>
            </div>
         </div>
         <Head>
            <title>Bài viết đã lên lịch</title>
            <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
         </Head>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               {isHide && (
                  <div className={styles.right_error}>
                     <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                     <h3>Không có nội dung nào</h3>
                  </div>
               )}
               {isBlock && (
                  <div>
                     <div className={styles.header}>
                        <h2>Bài viết đã lên lịch (1)</h2>
                     </div>
                     {dataContent.map((item) => {
                        return (
                           <div className={styles.content} key={item.key}>
                              <div className={styles.content_all}>
                                 <div className={styles.content_fl}>
                                    <Image alt="" src="/img/group/tq5.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                    <div>
                                       <h3>{item.name}</h3>
                                       <p>{item.time}</p>
                                    </div>
                                 </div>
                                 <Dropdown
                                    overlay={
                                       <Menu onClick={({ key }) => handleDropdownClick(key)}>
                                          {itemsDrop.map((item) => (
                                             <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                          ))}
                                       </Menu>
                                    }
                                    placement="bottomRight"
                                    trigger="click">
                                    <div>
                                       <Image alt="" src="/img/group/more.svg" preview={false} />
                                    </div>
                                 </Dropdown>
                              </div>
                              <div className={styles.colection}>
                                 <p> {item.text}</p>
                                 {checkColection(item)}
                                 {checkVideo(item)}
                              </div>
                              <div className={styles.content_btn}>
                                 <button className={styles.content_btn_ok} onClick={showModalTime}>
                                    Đổi lịch
                                 </button>
                                 <button className={styles.content_btn_cancer}>Đăng ngay</button>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               )}
            </div>
            <Time isOpen={isCalenderOpen} onClose={handleTimeCancel} />
            <NewFeedContent isOpen={isModalOpen} onClose={handleModalClose} />
         </div>
      </>
   );
};
export default PostWaiting;
