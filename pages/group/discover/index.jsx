import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Card, Dropdown } from "antd";
import { useRouter } from "next/router";
import LeftNavGroup from "../../../components/thuc_components/left-nav/leftNavGroup";
import Head from "next/head";
import ModalAsk from "../../../components/thuc_components/modalQuesstion/modalAsk";
const App = () => {
   const router = useRouter();

   const data = [
      {
         id: "1",
         img: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "2",
         img: "/img/group/mu2.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "3",
         img: "/img/group/mu3.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "4",
         img: "/img/group/mu4.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "5",
         img: "/img/group/mu1.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "6",
         img: "/img/group/mu2.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "7",
         img: "/img/group/mu3.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
      },
      {
         id: "8",
         img: "/img/group/mu4.jpg",
         name: "Fan MU Việt Nam",
         friend: "1 triệu thành viên",
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

   const [buttonStates, setButtonStates] = useState(data.map(() => false));
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
               <title>Khám phá</title>
               <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
            </Head>
            <div className={styles.left_container}>
               <div className={styles.left_cd}>
                  <LeftNavGroup />
               </div>
            </div>
            <div className={styles.right}>
               <div>
                  <p className={styles.add_p}>Gợi ý</p>
               </div>

               <div className={styles.all_card}>
                  {data.map((item, index) => {
                     return (
                        <Card key={index} className={`thuc_card ${styles.card}`}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <p className={styles.name}>{item.name}</p>
                           <p className={styles.friend}>{item.friend}</p>
                           <div className={styles.friend_btn}>
                              <button
                                 key={index}
                                 className={buttonStates[index] ? styles.btn_cancel : styles.btn_acp}
                                 onClick={() => handleButtonClick(index)}
                                 style={{
                                    backgroundColor: buttonStates[index] ? "#ccc" : "",
                                    color: buttonStates[index] ? "#474747" : "",
                                    height: "36px",
                                    borderRadius: "10px",
                                    width: "89%",
                                    margin: "auto",
                                    border: "none",
                                 }}>
                                 {buttonStates[index] ? "Hủy yêu cầu" : "Tham gia nhóm"}
                              </button>
                           </div>
                        </Card>
                     );
                  })}
               </div>
            </div>
            {isModalAskQuestionOpen && selectedGroupIndex !== null && <ModalAsk isOpen={isModalAskQuestionOpen} onClose={handleAskQuestionCancel} selectedGroup={data[selectedGroupIndex]} />}
         </div>
      </>
   );
};

export default App;
