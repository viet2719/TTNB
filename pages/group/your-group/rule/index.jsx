import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { Modal, Image, Input, Button, Dropdown } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Head from "next/head";
const Rule = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const [textareaValue, setTextareaValue] = useState("");
   const [isImpty, setIsImpty] = useState(true);
   const [isRule, setIsRule] = useState(false);
   const [isValue, setIsValue] = useState(false);
   const [formData, setFormData] = useState({
      title: "",
      description: "",
   });

   const [dataList, setDataList] = useState([]);
   const showModal = () => {
      setIsModalOpen(true);
      setInputValue("");
      setTextareaValue("");
   };

   const handleModalCancer = () => {
      setIsModalOpen(false);
   };

   const handleSave = () => {
      setIsImpty(false);
      setIsRule(true);
      setIsValue(true);
      setIsModalOpen(false);
      setDataList([...dataList, formData]);
      setFormData({
         title: "",
         description: "",
      });
   };
   const showEdit = () => {
      setIsModalOpen(true);
      setInputValue(dataList.inputValue);
      setTextareaValue(dataList.textareaValue);
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
               <h2>Quy tắc nhóm</h2>
            </div>
         </div>
         <Head>
            <title>Quy tắc nhóm</title>
            <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
         </Head>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               {isImpty && (
                  <div className={styles.right_error}>
                     <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                     <h3>Không có bài viết nào</h3>
                     <p>Hãy tạo nhóm hoặc tham gia nhóm để xem bài viết nhóm.</p>
                     <button className={styles.btn_err} onClick={showModal}>
                        Bắt đầu
                     </button>
                  </div>
               )}
               {isRule && (
                  <div className={styles.header}>
                     <h3>Quy tắc nhóm</h3>
                     <button className={styles.btn_err} onClick={showModal}>
                        Tạo quy tắc nhóm
                     </button>
                  </div>
               )}
               {isValue && (
                  <div className={styles.all_content}>
                     {dataList.map((item, index) => {
                        return (
                           <div key={index} className={styles.content}>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <div className={styles.content_btn}>
                                 <Button className={`thuc_btn_question_edit`} onClick={showEdit}>
                                    Chỉnh sửa
                                 </Button>
                                 <Button className={`thuc_btn_question_delete`}>Xóa</Button>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               )}
            </div>
            <div>
               <Modal className={`thuc_modal`} title="Tạo quy tắc" open={isModalOpen} onCancel={handleModalCancer} footer={null}>
                  <div className={styles.modal_container}>
                     <h3>Viết quy tắc</h3>
                     <Input type="text" placeholder="Tiêu đề" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                     <textarea placeholder="Mô tả" className={styles.textarea} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                     <div className={styles.modal_btn}>
                        <Button className={`btn_cancer`} onClick={handleModalCancer}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`} onClick={handleSave}>
                           Lưu
                        </Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};

export default Rule;
