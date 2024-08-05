import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Select, Menu } from "antd";
import LeftContent from "../../../../components/thuc_components/left-nav-group/leftContent";
import Time from "../../../../components/thuc_components/newFeed/newFeedContent/time";
import Head from "next/head";
const App = () => {
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };

   const [isCalenderOpen, setIsCalenderOpen] = useState(false);
   const showModalTime = () => {
      setIsCalenderOpen(true);
   };
   const handleTimeCancel = () => {
      setIsCalenderOpen(false);
   };
   const handleDropdownClick = (key) => {
      if (key === "1") {
         if (notificationStatus === "on") {
            alert("Tắt thông báo thành công");
            setNotificationStatus("off");
         } else {
            showModalNotification();
         }
      }
      if (key === "3") {
         showModalUnFollow();
      }
   };
   const [notificationStatus, setNotificationStatus] = useState("on");
   const itemMore = [
      {
         key: "1",
         name: notificationStatus === "on" ? "Tắt thông báo" : "Bật thông báo",
         img: notificationStatus === "on" ? "/img/group/unring.svg" : "/img/group/ring.svg",
      },
      {
         key: "2",
         name: "Ẩn bài viết",
         img: "/img/group/no.svg",
      },
      {
         key: "3",
         name: "Bỏ theo dõi nhóm",
         img: "/img/group/unfl.svg",
      },
   ];
   const menuDrop = (
      <Menu onClick={({ key }) => handleDropdownClick(key)}>
         {itemMore.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.img} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <p>{item.name}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   const [isModalNotificationOpen, setIsModalNotificationOpen] = useState(false);
   const showModalNotification = () => {
      setIsModalNotificationOpen(true);
   };
   const handleNotificationCancel = () => {
      setIsModalNotificationOpen(false);
   };
   const handleOk = () => {
      setNotificationStatus("on");
      setIsModalNotificationOpen(false);
   };
   const [isModalUnFollowOpen, setIsModalUnFollowOpen] = useState(false);
   const showModalUnFollow = () => {
      setIsModalUnFollowOpen(true);
   };
   const handleUnFollowCancel = () => {
      setIsModalUnFollowOpen(false);
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
   const dataContent = [
      {
         group: "Fan MU Việt Nam",
         name: "Nguyễn Thế Đạt",
         time: "4 giờ trước",
         text: "Bé Cún Cute",
         img: "/img/group/tq5.jpg",
         videoSrc: "",
      },
      {
         group: "Fan MU Việt Nam",
         name: "Nguyễn Hoàng việt",
         time: "8 giờ trước",
         text: "du hí",
         img: "",
         videoSrc: "/img/group/ta_xua.mp4",
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
                        <Select
                           defaultValue="Mới nhất"
                           style={{
                              width: 150,
                           }}
                           onChange={handleChange}
                           options={[
                              {
                                 value: "Mới nhất",
                                 label: "Mới nhất",
                              },
                              {
                                 value: "Cũ nhất",
                                 label: "Cũ nhất",
                              },
                           ]}
                        />
                     </div>
                     {dataContent.map((item) => {
                        return (
                           <div className={styles.content} key={item.key}>
                              <div className={styles.content_all}>
                                 <div className={styles.content_fl}>
                                    <Image alt="" src="/img/group/tq5.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                    <div className={styles.drop_fl}>
                                       <h3>{item.group}</h3>
                                       <div className={styles.content_fl1}>
                                          <p>{item.name}</p>
                                          <p>{item.time}</p>
                                       </div>
                                    </div>
                                 </div>
                                 <Dropdown overlay={menuDrop} placement="bottomRight" trigger="click">
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
            <div>
               <Modal className={`thuc_modal`} title="Bỏ theo dõi nhóm" open={isModalUnFollowOpen} onCancel={handleUnFollowCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <p>Bạn có chắc muốn bỏ theo dõi nhóm Fan MU Việt Nam không?</p>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleUnFollowCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Xác nhận</Button>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal`} title="Bật thông báo cho bài viết" open={isModalNotificationOpen} onCancel={handleNotificationCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Bạn có muốn nhận thông báo cho bài viết này?</h3>
                     <p>Tất cả các thay đổi mà bài viết cập nhật sẽ được gửi tới thông báo của bạn</p>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNotificationCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`} onClick={handleOk}>
                           Bật thông báo
                        </Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default App;
