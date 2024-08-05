import React, { useState } from "react";
import { Modal, Button, Image, Input } from "antd";
import styles from "./feedContent.module.css";
import UploadFile from "../upLoad/upLoad";
import ModalLocation from "../../../common/Modal/Location/ModalLocation";
import Opinion from "../opinion/opinion";
import Emotions from "../../../common/Modal/Emotions/ModalEmotions";
import Tags from "../tag/tag";
import Link from "next/link";
import Time from "./time";
const NewFeedContent = ({ isOpen, onClose }) => {
   const [isUploadFileOpen, setIsUploadFileOpen] = useState(false);
   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
   const [isCalenderOpen, setIsCalenderOpen] = useState(false);
   const [isOpinionOpen, setIsOpinionOpen] = useState(false);
   const [isTagOpen, setIsTagOpen] = useState(false);
   const [isEmotionsOpen, setIsEmotionsOpen] = useState(false);

   return (
      <>
         <Modal title="Đăng tin mới" open={isOpen} onCancel={onClose} footer={null} centered className={`${styles.modal} modal__addPost`}>
            <div className={styles.modal__container}>
               <div className={styles.modal__body}>
                  <div className={styles.modal__body__left}>
                     <Image src="/img//group/mu1.jpg" alt="avatar" width={50} height={50} preview={false} className={styles.modalAvatar} />
                  </div>
                  <div className={styles.modal__body__right}>
                     <Link href="/">Thức Đẹp Trai</Link>
                     <div className={styles.modal__body__right_regime}>
                        <Image alt="/" src="/img/group/view.png" preview={false} />
                        <p>Fan MU Việt Nam</p>
                     </div>
                  </div>
               </div>
               <div className={styles.modal__input}>
                  <Input placeholder="Hãy biết cảm nghĩ của bạn" bordered={false} size="large" className={styles.modal__input__content} />

                  {isOpen && <UploadFile isUploadFileVisible={isUploadFileOpen} />}
                  {isOpen && <Opinion isOpinionVisible={isOpinionOpen} />}
               </div>
               <div className={styles.modal__footer}>
                  <div className={styles.modal__footer__left}>
                     <p className={styles.p_hide}>Thêm vào bài viết</p>
                  </div>
                  <div className={styles.modal__footer__right}>
                     <Image
                        src="/img/img-home/nv_upload_file.svg"
                        alt="avatar"
                        width={26}
                        height={26}
                        preview={false}
                        className={`${styles.modal__footer__right__img} ${styles.modal__uploadFile}`}
                        onClick={() => {
                           setIsUploadFileOpen(!isUploadFileOpen);
                        }}
                     />
                     <Image
                        src="/img/img-home/nv_post_feel_user_tag.svg"
                        alt="avatar"
                        width={26}
                        height={26}
                        preview={false}
                        className={`${styles.modal__footer__right__img} ${styles.modal__user__tag} `}
                        onClick={() => {
                           setIsTagOpen(!isTagOpen);
                        }}
                     />
                     <Image
                        src="/img/img-home/nv_icon_post_footer_active.svg"
                        alt="avatar"
                        width={26}
                        height={26}
                        preview={false}
                        className={`${styles.modal__footer__right__img} ${styles.modal__active} `}
                        onClick={() => {
                           setIsEmotionsOpen(!isEmotionsOpen);
                        }}
                     />
                     <Image
                        src="/img/img-home/nv_location.svg"
                        alt="avatar"
                        width={26}
                        height={26}
                        preview={false}
                        className={`${styles.modal__footer__right__img} ${styles.modal__location} `}
                        onClick={() => {
                           setIsLocationModalOpen(!isLocationModalOpen);
                        }}
                     />

                     <Image
                        src="/img/group/chart.png"
                        alt="avatar"
                        width={26}
                        height={26}
                        preview={false}
                        className={`${styles.modal__footer__right__img} ${styles.modal__location} `}
                        onClick={() => {
                           setIsOpinionOpen(!isOpinionOpen);
                        }}
                     />
                  </div>
               </div>
               {isLocationModalOpen && <ModalLocation isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />}
               {isTagOpen && <Tags isOpen={isTagOpen} onClose={() => setIsTagOpen(false)} />}

               {isEmotionsOpen && <Emotions isOpen={isEmotionsOpen} onClose={() => setIsEmotionsOpen(false)} />}
               <div className={styles.modal__footer__right__btn}>
                  <Button className={styles.modal__btn}>Đăng</Button>
                  <div
                     className={styles.img}
                     onClick={() => {
                        setIsCalenderOpen(!isCalenderOpen);
                     }}>
                     <Image alt="/" src="/img/group/calender.svg" preview={false} />
                  </div>
                  {isCalenderOpen && <Time isOpen={isCalenderOpen} onClose={() => setIsCalenderOpen(false)} />}
               </div>
            </div>
         </Modal>
         {/* <Modal title="Lịch đăng bài" open={isCalenderOpen} onCancel={calenderCancer} footer={null} className={`${styles.modal} thuc_modal`}>
            <div className={styles.modal_container}>
               <p>Chọn ngày và giờ trong tương lai mà bạn muốn đăng bài viết của mình.</p>
               <div className={styles.modal_calender}>
                  <input type="date" className={styles.modal_input} />
                  <input type="time" className={styles.modal_input} />
               </div>
               <Button className={`thuc_btn_full`}>Lưu lịch đăng</Button>
            </div>
         </Modal> */}
      </>
   );
};

export default NewFeedContent;
