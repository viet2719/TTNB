import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Menu, Input } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Head from "next/head";
import { useRouter } from "next/router";
const AddMember = () => {
   const router = useRouter();
   //modal từ chối
   const [isModalRefuseOpen, setIsModalRefuseOpen] = useState(false);
   const showModalRefuse = () => {
      setIsModalRefuseOpen(true);
   };
   const handleRefuseCancel = () => {
      setIsModalRefuseOpen(false);
   };
   //modal xem câu trả lời
   const [isModalAskOpen, setIsModalAskOpen] = useState(false);
   const showModalAsk = () => {
      setIsModalAskOpen(true);
   };
   const handleAskCancel = () => {
      setIsModalAskOpen(false);
   };
   const handleDropdownClick = (key) => {
      if (key === "2") {
         router.push("/personal_page");
      }
      if (key === "3") {
         showModalAsk();
      }
      if (key === "4") {
         showModalRefuse();
      }
   };
   const itemAsk = [
      {
         key: "1",
         name: "Tôn trọng mọi người",
         label: "ok",
      },
      {
         key: "2",
         name: "ĐCSVN Quang vinh muôn năm",
         label: "Muôn năm",
      },
   ];
   const itemsDrop = [
      {
         key: "1",
         label: "Nhắn tin cho Nguyễn Thế Đạt",
      },
      {
         key: "2",
         label: "Xem trang cá nhân",
      },
      {
         key: "3",
         label: "Xem Câu trả lời",
      },
      {
         key: "4",
         label: "Từ chối kèm theo ý kiến đóng góp",
      },
      {
         key: "5",
         label: "Từ chối và cấm Nguyễn Thế Đạt",
      },
   ];

   const [data, setData] = useState([
      {
         key: "1",
         img: "/img/group/tq5.jpg",
         name: "Nguyễn Thế Đạt",
         active: "15 phút trước",
      },
      {
         key: "2",
         img: "/img/group/tq3.jpg",
         name: "Nguyễn Hoàng Việt",
         active: "1 ngày trước",
      },
      {
         key: "3",
         img: "/img/group/tq2.jpg",
         name: "Thức Đẹp Trai",
         active: "30 phút trước",
      },
   ]);
   const handleApproveClickOk = (key) => {
      alert("Phê duyệt thành công");
      const updatedData = data.filter((item) => item.key !== key);
      setData(updatedData);
   };
   const handleApproveClickCancer = (key) => {
      alert("Đã từ chối yêu cầu");
      const updatedData = data.filter((item) => item.key !== key);
      setData(updatedData);
   };
   // ẩn hiện nội dung
   const [isHide, setIsHide] = useState(true);
   const [isBlock, setIsBlock] = useState(false);
   const showContent = () => {
      if (data.length > 0) {
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
               <h2>Yêu cầu làm thành viên</h2>
            </div>
         </div>
         <Head>
            <title>Yêu cầu làm thành viên</title>
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
                        <h2>Yêu cầu làm thành viên. (10)</h2>
                        <div className={styles.header_input}>
                           <Input className={`thuc_input_full`} placeholder="Tìm kiếm theo tên"></Input>
                        </div>
                     </div>
                     {data.map((item) => {
                        return (
                           <div className={styles.content} key={item.key}>
                              <div className={styles.content_flex}>
                                 <Image alt="" src={item.img} preview={false} width={50} height={50} style={{ borderRadius: "50%" }} />
                                 <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.active}</p>
                                 </div>
                              </div>
                              <div className={styles.content_btn}>
                                 <button className={styles.btn_ok} onClick={() => handleApproveClickOk(item.key)}>
                                    Phê duyệt
                                 </button>
                                 <button className={styles.btn_cancer} onClick={() => handleApproveClickCancer(item.key)}>
                                    Từ chối
                                 </button>
                                 <Dropdown
                                    overlay={
                                       <Menu onClick={({ key }) => handleDropdownClick(key)}>
                                          {itemsDrop.map((item) => (
                                             <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                          ))}
                                       </Menu>
                                    }
                                    trigger="click"
                                    placement="bottomRight"
                                    arrow>
                                    <Image alt="" src="/img/group/dot11.svg" preview={false} />
                                 </Dropdown>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               )}
            </div>

            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalRefuseOpen} onCancel={handleRefuseCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Lý do từ chối</h3>
                     <p>Ý kiến này sẽ được chia sẻ với Nguyễn Thế Đạt sau khi bạn từ chối yêu cầu của họ. Họ sẽ không thấy tên hoặc thông tin cá nhân khác của bạn.</p>
                     <textarea placeholder="Đóng góp ý kiến" name="" id="" cols="10" rows="5" className={styles.textarea}></textarea>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleRefuseCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Xác nhận</Button>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal`} title="Câu trả lời của Nguyễn Hoàng Việt" open={isModalAskOpen} onCancel={handleAskCancel} footer={null}>
                  <div className={styles.modal_container}>
                     {itemAsk.map((item) => {
                        return (
                           <div className={styles.modal_flex} key={item.id}>
                              <h3>{item.name}</h3>
                              <p>{item.label}</p>
                           </div>
                        );
                     })}
                     <div className={styles.content_btn}>
                        <button className={styles.btn_ok} onClick={() => handleApproveClickOk}>
                           Phê duyệt
                        </button>
                        <button className={styles.btn_cancer} onClick={() => handleApproveClickCancer}>
                           Từ chối
                        </button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default AddMember;
