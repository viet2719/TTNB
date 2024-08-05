import { Button, Input, Modal, Image, Tooltip } from "antd";
import { useState } from "react";
import ModalLocation from "../../../common/Modal/Location/ModalLocation";
import styles from "./shareNewFeed.module.css";
import Link from "next/link";
import Tags from "../../newFeed/tag/tag";
import Emotions from "../../../common/Modal/Emotions/ModalEmotions";

const ShareFriend = ({ isOpen, isClose }) => {
   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
   const [isTagOpen, setIsTagOpen] = useState(false);

   const [isEmotionsOpen, setIsEmotionsOpen] = useState(false);
   return (
      <Modal title="Chia sẻ nhóm" footer={null} className={`${styles.ModalShareOnTime} ModalShare`} open={isOpen} onCancel={isClose}>
         <div className={styles.modal__container}>
            <div className={styles.modal__body}>
               <div className={styles.modal__body__left}>
                  <Image src="/img/c.png" alt="avatar" width={50} height={50} preview={false} className={styles.modalAvatar} />
               </div>
               <div className={styles.modal__body__right}>
                  <div className={styles.modal_flex}>
                     <Link href="/">Nguyễn Văn Thức</Link>
                     <Image src="/img/group/right.svg" alt="" preview={false} />
                     <Link href="/">Nguyễn Hoàng Việt</Link>
                  </div>
                  <div className={styles.modal_fl}>
                     <Image src="/img/group/share_friend.svg" alt="" preview={false} />
                     <p>Bạn bè</p>
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
                  <p>Thêm vào bài viết</p>
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
            <div className={styles.modal__footer__right__btn}>
               <Button className={styles.modal__btn}>Đăng</Button>
            </div>
            {isTagOpen && <Tags isOpen={isTagOpen} onClose={() => setIsTagOpen(false)} />}

            {isEmotionsOpen && <Emotions isOpen={isEmotionsOpen} onClose={() => setIsEmotionsOpen(false)} />}
         </div>
      </Modal>
   );
};

export default ShareFriend;
