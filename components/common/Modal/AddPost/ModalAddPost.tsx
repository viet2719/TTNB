import React, { useState } from "react";
import { Modal, Button, Image, Input } from "antd";
import styles from "./ModalAddPost.module.css";
import ModalUploadFile from "../UploadFile/UploadFile";
import ModalLocation from "../Location/ModalLocation";
import ModalRegime from "../Regime/ModalRegime";
import Link from "next/link";
import ModalTag from "../Tag/ModalTag";
import ModalEmotions from "../Emotions/ModalEmotions";

interface ModalAddPostProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRegime: number | null;
}

const ModalAddPost: React.FC<ModalAddPostProps> = ({ isOpen, onClose }) => {
  const [isUploadFileOpen, setIsUploadFileOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isRegimeModalOpen, setIsRegimeModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [isEmotionsModalOpen, setIsEmotionsModalOpen] = useState(false);
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedFriendNames, setSelectedFriendNames] = useState<string[]>([]);
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const [selectedRegimeData, setSelectedRegimeData] = useState(null);
  const [selectedRegimeTitle, setSelectedRegimeTitle] = useState<string | null>(null);
  const [selectedRegimeImage, setSelectedRegimeImage] = useState<string | null>(null);

  const handleRegimeSelect = (selectedRegimeData: any) => {
    setSelectedRegimeData(selectedRegimeData);
    const { title } = selectedRegimeData;
    const { imageSrc } = selectedRegimeData;
    setSelectedRegimeTitle(title);
    setSelectedRegimeImage(imageSrc);
  };

  const handleFriendNamesSelect = (selectedNames: string[]) => {
    setSelectedFriendNames(selectedNames);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleEmotionSelect = (selectedEmotion: string) => {
    setSelectedEmotion(selectedEmotion);
  };

  const handleActivitySelect = (selectedActivity: string) => {
    setSelectedActivity(selectedActivity);
  };

  const handleTagClick = () => {
    setIsTagModalOpen(true);
  };

  const handleEmotionsClick = () => {
    setIsEmotionsModalOpen(true);
  };
  return (
    <Modal
      title="Đăng tin mới"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      className={`${styles.modal} modal__addPost`}
    >
      <div className={styles.modal__container}>
        <div className={styles.modal__body}>
          <div className={styles.modal__body__left}>
            <Image
              src="/img/c.png"
              alt="avatar"
              width={50}
              height={50}
              preview={false}
              className={styles.modalAvatar}
            />
          </div>
          <div className={styles.modal__body__right}>
            <div className={`${styles.content_tag} `}>
              <Link href="/" style={{ display: 'inline' }}>Nguyễn Thế Đạt </Link>
              {selectedEmotion ? `đang cảm thấy ${selectedEmotion}` : ''}
              {selectedActivity ? `đang chúc mừng ${selectedActivity}` : ''}

              {selectedFriendNames ? <span> {selectedFriendNames.length > 0 && (
                <span> cùng với <p style={{ display: 'inline' }}>  {selectedFriendNames.join(', ')}</p></span>
              )}</span> : null}

              {selectedLocation ? <span> tại <p style={{ display: 'inline' }}>{selectedLocation}</p></span> : null}
            </div>
            <div
              className={styles.modal__body__right_regime}
              onClick={() => {
                setIsRegimeModalOpen(true);
              }}
            >
              <Image
                src={selectedRegimeImage ? selectedRegimeImage : "/img/img-home/regime/regime1.svg"}
                alt=""
                width={20}
                height={20}
                preview={false}
              />
              <p>{selectedRegimeTitle ? selectedRegimeTitle : 'Công khai'} </p>
              <Image
                src="/img/img-home/ls_dropdown_ep_index.svg"
                alt=""
                width={12}
                height={12}
                preview={false}
                style={{ position: "absolute", top: "6px" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.modal__input}>
          <Input.TextArea
            placeholder="Hãy biết cảm nghĩ của bạn"
            bordered={false}
            size="large"
            className={styles.modal__input__content}
            onChange={(e) => {
              setIsTextAreaEmpty(e.target.value.trim() === '');
            }}
          />
          {isOpen && <ModalUploadFile isUploadFileVisible={isUploadFileOpen} />}
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
              onClick={handleTagClick}
            />
            <Image
              src="/img/img-home/nv_icon_post_footer_active.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__active} `}
              onClick={handleEmotionsClick}
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
        {isLocationModalOpen && (
          <ModalLocation
            isOpen={isLocationModalOpen}
            onClose={() => setIsLocationModalOpen(false)}
            onLocationSelect={handleLocationSelect}
          />
        )}
        {isRegimeModalOpen && (
          <ModalRegime
            isOpen={isRegimeModalOpen}
            onClose={() => setIsRegimeModalOpen(false)}
            onRegimeSelect={handleRegimeSelect}
          />
        )}
        {isTagModalOpen && (
          <ModalTag
            isOpen={isTagModalOpen}
            onClose={() => setIsTagModalOpen(false)}
            onFriendNamesSelect={handleFriendNamesSelect}
          />
        )}
        {isEmotionsModalOpen && (
          <ModalEmotions
            isOpen={isEmotionsModalOpen}
            onClose={() => setIsEmotionsModalOpen(false)}
            onEmotionSelect={handleEmotionSelect}
            onActivitySelect={handleActivitySelect}
          />
        )}
        <div className={styles.modal__footer__right__btn}>
          <Button className={`${styles.modal__btn} ${isTextAreaEmpty ? styles.disabledButton : ''}`}>Đăng</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddPost;
