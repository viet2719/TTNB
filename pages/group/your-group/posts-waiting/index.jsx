import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Select, Input, Space, Menu } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Head from "next/head";
const PostWaiting = () => {
   const [isModalNotificationOpen, setIsModalNotificationOpen] = useState(false);
   const showModalNotification = () => {
      setIsModalNotificationOpen(true);
   };
   const handleNotificationCancel = () => {
      setIsModalNotificationOpen(false);
   };

   const [isModalRefuseOpen, setIsModalRefuseOpen] = useState(false);
   const showModalRefuse = () => {
      setIsModalRefuseOpen(true);
   };
   const handleRefuseCancel = () => {
      setIsModalRefuseOpen(false);
   };
   const handleChange = (value) => {
      console.log(value);
   };
   const itemsDrop = [
      {
         key: "1",
         label: "Bật thông báo",
      },
   ];
   const itemMore = [
      {
         key: "2",
         name: "Từ chối kèm theo ý kiến đóng góp",
         img: "/img/group/no.svg",
         subtitle: (
            <p>
               Không cho đăng bài viết này trên nhóm
               <br /> và đóng góp ý kiến cho thành viên này
            </p>
         ),
      },
      {
         key: "3",
         name: "Từ chối và cấm tác giả",
         img: "/img/group/xoa.svg",
         subtitle: "Từ chối bài viết này và cấm tác giả đăng bài",
      },
   ];
   const handleDropdownClick = (key) => {
      if (key === "1") {
         showModalNotification();
      }
      if (key === "2") {
         showModalRefuse();
      }
   };
   const menuDrop = (
      <Menu onClick={({ key }) => handleDropdownClick(key)}>
         {itemMore.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.img} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <h3>{item.name}</h3>
                           <p className={styles.menu_subtitle}>{item.subtitle}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   const dataContent = [
      {
         name: "Nguyễn Thế Đạt",
         time: "4 giờ trước",
         text: "Bé Cún Cute",
         img: "/img/group/tq5.jpg",
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
               <h2>Bài viết đang chờ</h2>
            </div>
         </div>
         <Head>
            <title>Bài viết đang chờ</title>
            <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
         </Head>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.header}>
                  <div className={styles.header_content}>
                     <h2>Bài viết đang chờ (1)</h2>
                     <div className={styles.header_btn}>
                        <button className={styles.header_btn_ok}>Phê duyệt</button>
                        <button className={styles.header_btn_cancer}>Từ chối</button>
                     </div>
                  </div>
                  <div className={styles.header_search}>
                     <Input className={`thuc_input_search`} placeholder="Tìm kiếm nội dung theo bài viết"></Input>
                     <Select
                        defaultValue="Mới nhất"
                        style={{
                           width: 100,
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
                  <div className={styles.header_filter}>
                     <Input type="checkbox" className={`thuc_input_checkbox`}></Input>
                     <Input
                        type="date"
                        style={{
                           width: 250,
                        }}></Input>
                     <Select
                        defaultValue="Tác giả"
                        style={{
                           width: 100,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Tác giả",
                              label: "Tác giả",
                           },
                           {
                              value: "Thức Đẹp Trai",
                              label: "Thức Đẹp Trai",
                           },
                           {
                              value: "Nguyễn Thế Đạt",
                              label: "Nguyễn Thế Đạt",
                           },
                        ]}
                     />
                     <Select
                        defaultValue="Loại nội dung"
                        style={{
                           width: 150,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Loại nội dung",
                              label: "Loại nội dung",
                           },
                           {
                              value: "Tất cả",
                              label: "Tất cả",
                           },
                           {
                              value: "Ảnh",
                              label: "Ảnh",
                           },
                        ]}
                     />
                     <Button className={`thuc_btn_delete`}>Xóa bộ lọc</Button>
                  </div>
               </div>

               {dataContent.map((item, index) => {
                  return (
                     <div key={index} className={styles.content}>
                        <div className={styles.content_all}>
                           <div className={styles.content_fl}>
                              <input type="checkbox" className={styles.checkbox}></input>
                              <div className={styles.content_fl}>
                                 <Image alt="" src="/img/group/tq3.jpg" width={50} height={50} preview={false} style={{ borderRadius: "50%" }} />
                                 <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.time}</p>
                                 </div>
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
                           <button className={styles.content_btn_ok}>Phê duyệt</button>
                           <button className={styles.content_btn_cancer}>Từ chối</button>
                           <Dropdown overlay={menuDrop} placement="bottomLeft" trigger="click" className={`thuc_drop`}>
                              <div>
                                 <Image alt="" src="/img/group/dot12.svg" preview={false} />
                              </div>
                           </Dropdown>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Bật thông báo cho bài viết" open={isModalNotificationOpen} onCancel={handleNotificationCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Bạn có muốn nhận thông báo cho bài viết này?</h3>
                     <p>Tất cả các thay đổi mà bài viết cập nhật sẽ được gửi tới thông báo của bạn</p>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNotificationCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Bật thông báo</Button>
                     </div>
                  </div>
               </Modal>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalRefuseOpen} onCancel={handleRefuseCancel} footer={null}>
                  <div className={styles.modal_container2}>
                     <h3>Lý do từ chối</h3>
                     <p>Ý kiến này sẽ được chia sẻ với Nguyễn Thế Đạt sau khi bạn từ chối yêu cầu của họ. Họ sẽ không thấy tên hoặc thông tin cá nhân khác của bạn.</p>
                     <textarea name="" id="" cols="10" rows="5" placeholder="Đóng góp ý kiến" className={styles.textarea}></textarea>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleRefuseCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Xác nhận</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default PostWaiting;
