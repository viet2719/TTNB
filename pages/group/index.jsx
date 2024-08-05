import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Input, Modal, Select, Button, Dropdown } from "antd";
import { useRouter } from "next/router";
import { RightOutlined } from "@ant-design/icons";
import Head from "next/head";
import LeftNavGroup from "../../components/thuc_components/left-nav/leftNavGroup";
import Status from "../../components/thuc_components/status/status";
import ModalAsk from "../../components/thuc_components/modalQuesstion/modalAsk";
const App = () => {
   const router = useRouter();
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   //data danh sách nhóm
   const dataListGroup = [
      {
         avatar: "/img/group/tq5.jpg",
         name: "Fan MU Việt Nam",
         members: "1 tr",
         img: "/img/group/mu1.jpg",
         nameMember: "HHP",
      },
      {
         avatar: "/img/group/tq2.jpg",
         name: "Fan MU Hà Nội",
         members: "500 nghìn",
         img: "/img/group/mu3.jpg",
         nameMember: "HHP",
      },
      {
         avatar: "/img/group/tq3.jpg",
         name: "Tìm việc 365",
         members: "20",
         img: "/img/group/tq4.jpg",
         nameMember: "HHP",
      },
   ];
   // modal trả lời quy tắc nhóm
   const [selectedGroupIndex, setSelectedGroupIndex] = useState(null);
   const [isModalAskQuestionOpen, setIsModalAskQuestionOpen] = useState(false);
   const handleAskQuestionCancel = () => {
      setIsModalAskQuestionOpen(false);
      setSelectedGroupIndex(null);
   };
   const showModalAskQuestion = () => {
      setIsModalAskQuestionOpen(true);
   };

   // modal thêm nhóm mới
   const [isModalNewOpen, setIsModalNewOpen] = useState(false);
   const handleNewCancel = () => {
      setIsModalNewOpen(false);
   };
   const showModalNew = () => {
      setIsModalNewOpen(true);
   };

   const [buttonStates, setButtonStates] = useState(dataListGroup.map(() => false));

   const handleButtonClick = (index) => {
      const newButtonStates = [...buttonStates];
      if (newButtonStates[index]) {
         newButtonStates[index] = false;
      } else {
         newButtonStates[index] = true;
         setSelectedGroupIndex(index);
         showModalAskQuestion();
      }
      setButtonStates(newButtonStates);
   };

   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftNavGroup />
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
               <h3>Nhóm</h3>
            </div>
         </div>
         <div className={styles.container}>
            <Head>
               <title>Nhóm</title>
               <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
            </Head>
            <div className={styles.left_container}>
               <div className={styles.left_cd}>
                  <LeftNavGroup />
               </div>
            </div>

            <div className={styles.right}>
               <div className={styles.right_error}>
                  <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                  <h3>Không có bài viết nào</h3>
                  <p>Hãy tạo nhóm hoặc tham gia nhóm để xem bài viết nhóm.</p>
                  <button className={styles.btn_err} onClick={showModalNew}>
                     Tạo nhóm mới
                  </button>
               </div>
               <div className={styles.right_content}>
                  <div className={styles.all_status}>
                     <Status />
                  </div>
                  <div className={styles.right_more}>
                     <div className={styles.right_more_content}>
                        <div className={styles.more_fl}>
                           <p>Những nhóm bạn có thể biết</p>
                           <button className={styles.more_btn} onClick={() => router.push("/group/discover")}>
                              Xem thêm <RightOutlined />
                           </button>
                        </div>
                        <div className={styles.all_scroll}>
                           <div className={styles.scroll}>
                              {dataListGroup.map((item, index) => {
                                 return (
                                    <div key={index} className={styles.scroll_content}>
                                       <Image alt="/" src={item.avatar} preview={false} />
                                       <div>
                                          <h3>{item.name}</h3>
                                          <p>{item.members} thành viên</p>
                                       </div>
                                       <div className={styles.more2_fl}>
                                          <Image alt="/" src={item.img} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                          <p>{item.nameMember} đã tham gia nhóm</p>
                                       </div>
                                       <div className={styles.btn_fl}>
                                          <button
                                             key={index}
                                             className={buttonStates[index] ? styles.btn_cancel : styles.btn_acp}
                                             onClick={() => handleButtonClick(index)}
                                             style={{
                                                backgroundColor: buttonStates[index] ? "#ccc" : "",
                                                color: buttonStates[index] ? "#474747" : "",
                                                height: "36px",
                                                borderRadius: "10px",
                                                width: "75%",

                                                border: "none",
                                             }}>
                                             {buttonStates[index] ? "Hủy yêu cầu" : "Tham gia nhóm"}
                                          </button>
                                          <button className={styles.more_out}>Gỡ</button>
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <Modal className={`thuc_modal ${styles.modal_new}`} title="Tạo nhóm mới" open={isModalNewOpen} onCancel={handleNewCancel} footer={null}>
                     <div className={styles.modal_container_new}>
                        <div>
                           <p className={styles.p_new}>Tên nhóm</p>
                           <Input placeholder="Tên nhóm mới"></Input>
                        </div>
                        <div>
                           <p className={styles.p_new}>Quyền riêng tư</p>
                           <div className={styles.select_new}>
                              <Select
                                 defaultValue="Chọn"
                                 onChange={handleChange}
                                 className={styles.select_new}
                                 options={[
                                    {
                                       label: "Công khai",
                                       value: "Công khai",
                                    },

                                    {
                                       label: "Riêng tư",
                                       value: "Riêng tư",
                                    },
                                 ]}
                              />
                           </div>
                        </div>
                        <div>
                           <p className={styles.p_new}>Mời bạn bè</p>
                           <Input></Input>
                        </div>
                        <div className={styles.btn_new}>
                           <Button className={`thuc_btn ${styles.btn_cancer}`} onClick={handleNewCancel}>
                              Hủy
                           </Button>
                           <Button className={`thuc_btn ${styles.btn_ok}`}>Tạo</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
            </div>
            {isModalAskQuestionOpen && selectedGroupIndex !== null && <ModalAsk isOpen={isModalAskQuestionOpen} onClose={handleAskQuestionCancel} selectedGroup={dataListGroup[selectedGroupIndex]} />}
         </div>
      </>
   );
};

export default App;
