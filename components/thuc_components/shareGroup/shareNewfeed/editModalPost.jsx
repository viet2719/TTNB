import { Button, Input, Modal, Image, Tooltip } from "antd";
import { useState } from "react";
import ModalLocation from "../../../common/Modal/Location/ModalLocation";
import styles from "./shareNewFeed.module.css";
import Link from "next/link";
import Tags from "../../newFeed/tag/tag";
import Emotions from "../../../common/Modal/Emotions/ModalEmotions";
import ModalRegime from "../../../common/Modal/Regime/ModalRegime";
import UploadFile from "../../newFeed/upLoad/upLoad";
import Opinion from "../../newFeed/opinion/opinion";
const EditPost = ({ isOpen, isClose }) => {
   const [isUploadFileOpen, setIsUploadFileOpen] = useState(false);
   const [isOpinionOpen, setIsOpinionOpen] = useState(false);
   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
   const [isTagOpen, setIsTagOpen] = useState(false);
   const [isRegimeModalOpen, setIsRegimeModalOpen] = useState(false);
   const [isEmotionsOpen, setIsEmotionsOpen] = useState(false);
   
   const [selectedRegimeData, setSelectedRegimeData] = useState(null);
  const [selectedRegimeTitle, setSelectedRegimeTitle] = useState(null);
  const [selectedRegimeImage, setSelectedRegimeImage] = useState(null);

  const handleRegimeSelect = (selectedRegimeData) => {
    setSelectedRegimeData(selectedRegimeData);
    const { title, imageSrc } = selectedRegimeData;
    setSelectedRegimeTitle(title);
    setSelectedRegimeImage(imageSrc);
  };
  
   return (
      <Modal title="Chỉnh sửa bài viết" footer={null} className={`${styles.ModalShareOnTime} ModalShare`} open={isOpen} onCancel={isClose}>
         <div className={styles.modal__container}>
            <div className={styles.modal__body}>
               <div className={styles.modal__body__left}>
                  <Image src="/img/c.png" alt="avatar" width={50} height={50} preview={false} className={styles.modalAvatar} />
               </div>
               <div className={styles.modal__body__right}>
                  <Link href="/">Thức Đẹp Trai</Link>
                  <p className={styles.modal__p}>11:13 27/09/2023</p>
               </div>
            </div>
            <div className={styles.modal__input}>
               <Input placeholder="Hãy biết cảm nghĩ của bạn" bordered={false} size="large" className={styles.modal__input__content} />
               <div className={styles.content}>
                  <Image src="/img/group/tq4.jpg" alt="" preview={false} />
               </div>
               {isOpen && <UploadFile isUploadFileVisible={isUploadFileOpen} />}
               {isOpen && <Opinion isOpinionVisible={isOpinionOpen} />}
            </div>
            <div className={styles.modal__footer}>
               <div className={styles.modal__footer__left}>
                  <p>Thêm vào bài viết</p>
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
               </div>
            </div>
            {isLocationModalOpen && <ModalLocation isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />}
            {isRegimeModalOpen && <ModalRegime 
            isOpen={isRegimeModalOpen} 
            onClose={() => setIsRegimeModalOpen(false)} 
            onRegimeSelect={handleRegimeSelect} />}
            <div className={styles.modal__footer__right__btn}>
               <Button className={styles.modal__btn}>Đăng</Button>
            </div>
            {isTagOpen && <Tags isOpen={isTagOpen} onClose={() => setIsTagOpen(false)} />}

            {isEmotionsOpen && <Emotions isOpen={isEmotionsOpen} onClose={() => setIsEmotionsOpen(false)} />}
         </div>
      </Modal>
   );
};

export default EditPost;
