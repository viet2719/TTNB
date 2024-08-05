import { Button, Input, Modal, Image } from "antd";
import { useState } from "react";
import ModalLocation from "../../Location/ModalLocation";
import ModalRegime from "../../Regime/ModalRegime";
import ContentPostShare from "../../Share/ContentPostShare/ContentPostShare";
import styles from "./ModalEditPost.module.css";
import Link from "next/link";

interface ModalEditPostProps {
  selectedModal: string | null;
  closeSelectedModal: () => void;
}

function ModalEditPost({
  selectedModal,
  closeSelectedModal,
}: ModalEditPostProps) {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isRegimeModalOpen, setIsRegimeModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
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
  return (
    <Modal
      title="Chỉnh sửa bài viết"
      open={selectedModal === "editPost"}
      onCancel={closeSelectedModal}
      footer={null}
      className={`${styles.ModalEditPost} ModalShare`}
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
            <Link href="/">Nguyễn Thế Đạt</Link>
            <div
              className={styles.modal__body__right_regime}
              onClick={() => {
                setIsRegimeModalOpen(true);
              }}
            >
              <Image
                src="/img/img-home/regime/regime1.svg"
                alt=""
                width={20}
                height={20}
                preview={false}
              />
              <p> Công khai </p>
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
          <Input
            placeholder="Hãy biết cảm nghĩ của bạn"
            bordered={false}
            size="large"
            className={styles.modal__input__content}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ContentPostShare />
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
            />
            <Image
              src="/img/img-home/nv_icon_post_footer_active.svg"
              alt="avatar"
              width={26}
              height={26}
              preview={false}
              className={`${styles.modal__footer__right__img} ${styles.modal__active} `}
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
            onClose={() => setIsLocationModalOpen(false)} onLocationSelect={function (location: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
        {isRegimeModalOpen && (
          <ModalRegime
            isOpen={isRegimeModalOpen}
            onClose={() => setIsRegimeModalOpen(false)}
            onRegimeSelect={handleRegimeSelect}
          />
        )}
        <div className={styles.modal__footer__right__btn}>
          <Button
            className={styles.modal__btn}
            style={{ backgroundColor: inputValue ? "#4C5BD4" : "#ccc" }}
          >
            Đăng
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEditPost;
