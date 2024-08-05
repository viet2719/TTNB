import NewFeedContent from "./newFeedContent/newFeedContent";
import ModalTag from "@/components/common/Modal/Tag/ModalTag";
import Opinion from "./opinion/opinion";
import { Divider, Image, Input } from "antd";
import { useState } from "react";
import styles from "./index.module.css";

const NewFeed = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isTagModalOpen, setIsTagModalOpen] = useState(false);
   const [isOpinionOpen, setIsOpinionOpen] = useState(false);
   const handleInputClick = () => {
      setIsModalOpen(true);
   };

   const handleTagClick = () => {
      setIsTagModalOpen(true);
   };

   const handleModalClose = () => {
      setIsModalOpen(false);
   };
   const handleOpinionOpen = () => {
      setIsOpinionOpen(true);
      setIsModalOpen(true);
   };
   return (
      <>
         <div className={styles.posts}>
            <div className={styles.addPost}>
               <div className={styles.addPost__header}>
                  <div className={styles.addPost__header__left}>
                     <Image src="/img/group/mu1.jpg" alt="avatar" width={50} height={50} preview={false} className={styles.avatar} />
                  </div>
                  <div className={styles.addPost__header__right}>
                     <Input className={styles.input} placeholder="Bạn đang nghĩ gì?" bordered={false} size="large" onClick={handleInputClick} />
                  </div>
               </div>
               <Divider className={styles.divider} />
               <div className={styles.addPost__body}>
                  <div className={`${styles.addPost__body_item} ${styles.addPost__upload} `}>
                     <Image src="/img/img-home/nv_upload_file.svg" alt="avatar" width={30} height={30} preview={false} />
                     <span className={styles.addPost__body_title}>Ảnh/video/tệp</span>
                  </div>
                  <div className={`${styles.addPost__body_item} ${styles.addPost__tag} `} onClick={handleOpinionOpen}>
                     <Image src="/img/group/chart.png" alt="avatar" width={30} height={30} preview={false} />
                     <span className={styles.addPost__body_title}>Thăm dò ý kiến</span>
                  </div>
               </div>
            </div>
         </div>
         <NewFeedContent isOpen={isModalOpen} onClose={handleModalClose} />
         <ModalTag isOpen={isTagModalOpen} onClose={() => setIsTagModalOpen(false)} />
         <Opinion isOpen={isOpinionOpen} onClose={() => setIsOpinionOpen(false)} />
      </>
   );
};

export default NewFeed;
