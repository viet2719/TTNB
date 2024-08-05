import { Button, Input, Modal, Image, Tooltip } from "antd";
import { useState } from "react";
import ModalLocation from "../../../common/Modal/Location/ModalLocation";
import styles from "./shareNewFeed.module.css";
import Link from "next/link";
import Tags from "../../newFeed/tag/tag";
import Emotions from "../../../common/Modal/Emotions/ModalEmotions";
import ModalRegime from "../../../common/Modal/Regime/ModalRegime";

const ShareNewFeed = ({ isOpen, isClose }) => {
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
      <Modal title="Đăng tin mới" footer={null} className={`${styles.ModalShareOnTime} ModalShare`} open={isOpen} onCancel={isClose}>
         <div className={styles.modal__container}>
            <div className={styles.modal__body}>
               <div className={styles.modal__body__left}>
                  <Image src="/img/c.png" alt="avatar" width={50} height={50} preview={false} className={styles.modalAvatar} />
               </div>
               <div className={styles.modal__body__right}>
                  <Link href="/">Thức Đẹp Trai</Link>
                  <div
                     className={styles.modal__body__right_regime}
                     onClick={() => {
                        setIsRegimeModalOpen(true);
                     }}>
                     <Image src="/img/img-home/regime/regime1.svg" alt="" width={20} height={20} preview={false} />
                     <p> Công khai </p>
                     <Image src="/img/img-home/ls_dropdown_ep_index.svg" alt="" width={12} height={12} preview={false} style={{ position: "absolute", top: "6px" }} />
                  </div>
               </div>
            </div>
            <div className={styles.modal__input}>
               <Input placeholder="Hãy biết cảm nghĩ của bạn" bordered={false} size="large" className={styles.modal__input__content} />
               <div className={styles.content}>
                  <Image src="/img/group/tq4.jpg" alt="" width={70} height={70} preview={false} style={{ borderRadius: "8px" }} />
                  <div className={styles.content_flex}>
                     <h3> Fan MU Việt Nam </h3>
                     <div className={styles.content_fl}>
                        <p>Nhóm công khai</p>
                        <p>1 tr thành viên</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.modal__footer}>
               <div className={styles.modal__footer__left}>
                  <p className={styles.p_hide}>Thêm vào bài viết</p>
               </div>
               <div className={styles.modal__footer__right}>
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
            onRegimeSelect={handleRegimeSelect}
            />}
            <div className={styles.modal__footer__right__btn}>
               <Button className={styles.modal__btn}>Đăng</Button>
            </div>
            {isTagOpen && <Tags isOpen={isTagOpen} onClose={() => setIsTagOpen(false)} />}

            {isEmotionsOpen && <Emotions isOpen={isEmotionsOpen} onClose={() => setIsEmotionsOpen(false)} />}
         </div>
      </Modal>
   );
};

export default ShareNewFeed;
