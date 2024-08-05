import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import styles from "./Serfdoom.module.scss";
import ModalFriendExcept from "../Regime/ModalFriendExcept";
import ModalFriendSpecific from "../Regime/ModalFriendSpecific";
import { Friend } from "../Regime/ModalRegime";

const Serfdom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("congkhai");
  const [showFriendExceptModal, setShowFriendExceptModal] = useState(false);
  const [showFriendSpecificModal, setShowFriendSpecificModal] = useState(false);
  const toggleSecondaryModal = () => {
    setShowFriendExceptModal(!showFriendExceptModal);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  const [selectedFriendsExcept, setSelectedFriendsExcept] = useState<Friend[]>(
    []
  );
  const [selectedFriendsSpecific, setSelectedFriendsSpecific] = useState<
    Friend[]
  >([]);
  const [tempSelectedFriendsExcept, setTempSelectedFriendsExcept] = useState<
    Friend[]
  >([]);
  const [tempSelectedFriendsSpecific, setTempSelectedFriendsSpecific] =
    useState<Friend[]>([]);
  return (
    <>
      <button onClick={showModal} className={styles.modal__serfdom}>
        <Image width={20} height={20} alt="che-do" src={"/img/earth.svg"} />
        {selectedOption === "congkhai"
          ? "Công khai"
          : selectedOption === "friend"
          ? "Bạn bè"
          : selectedOption === "except"
          ? "Bại bè ngoại trừ"
          : selectedOption === "onlyme"
          ? "Chỉ mình tôi"
          : selectedOption === "except_only"
          ? "Bạn bè ngoại trừ"
          : ""}

        <Image
          width={12}
          height={12}
          alt="che-do"
          src={"/img/ls_dropdown_ep_index.svg"}
        />
      </button>

      <Modal
        title="Chế độ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="chedo"
      >
        <div className={styles.serfdom_content}>
          <div className={styles.thongtin}>
            <span>Ai có thể xem bài viết của bạn?</span>
            <p>
              Bài viết của bạn sẽ hiển thị ở Bảng tin, trang cá nhân và kết quả
              tìm kiếm.
            </p>
          </div>
          <label
            className={styles.congkhai}
            htmlFor="congkhai"
            onClick={handleOk}
          >
            <div className={styles.congkhai_img}>
              <Image
                width={20}
                height={20}
                alt="che-do"
                src={"/img/earth.svg"}
              />
              Công khai
            </div>
            <input
              type="radio"
              name=""
              id="congkhai"
              className={styles.input}
              checked={selectedOption === "congkhai"}
              onChange={handleRadioChange}
            />
          </label>
          <label
            className={styles.friend}
            htmlFor="congkhai"
            onClick={handleOk}
          >
            <div className={styles.friend_img}>
              <Image
                width={20}
                height={20}
                alt="che-do"
                src={"/img/friend.svg"}
              />
              Bạn bè
            </div>
            <input
              type="radio"
              name=""
              id="friend"
              checked={selectedOption === "friend"}
              onChange={handleRadioChange}
              className={styles.input}
            />
          </label>
          <label
            className={styles.friend}
            onClick={() => setShowFriendExceptModal(true)}
          >
            <div className={styles.friend_img}>
              <Image
                width={20}
                height={20}
                alt="che-do"
                src={"/img/except.svg"}
              />
              <div className={styles.except}>
                <span>Bạn bè ngoại trừ...</span>
                <p className={styles.except_friend}>
                  Bạn bè;ngoại trừ:<span>fggfgfg</span>
                </p>
              </div>
            </div>
            <Image width={22} height={22} alt="che-do" src={"/img/next.svg"} />
          </label>
          <label className={styles.friend} htmlFor="onlyme" onClick={handleOk}>
            <div className={styles.friend_img}>
              <Image
                width={20}
                height={20}
                alt="che-do"
                src={"/img/onlyme.svg"}
              />
              Chỉ mình tôi
            </div>
            <input
              type="radio"
              name=""
              id="onlyme"
              checked={selectedOption === "onlyme"}
              onChange={handleRadioChange}
              className={styles.input}
            />
          </label>
          <label
            className={styles.friend}
            onClick={() => setShowFriendSpecificModal(true)}
          >
            <div className={styles.friend_img}>
              <Image
                width={20}
                height={20}
                alt="che-do"
                src={"/img/cuthe.svg"}
              />
              <div className={styles.except_only}>
                <span>Bạn bè cụ thể</span>
                <p className={styles.except_friend_only}>
                  Hiển thị với một số bạn bè:<span>fggfgfg</span>
                </p>
              </div>
            </div>
            <Image width={22} height={22} alt="che-do" src={"/img/next.svg"} />
          </label>

          {showFriendExceptModal && (
            <ModalFriendExcept
              isOpen={showFriendExceptModal}
              onClose={() => setShowFriendExceptModal(false)}
              onSave={(selectedFriends) => {
                setSelectedFriendsExcept(selectedFriends);
              }}
              selectedFriendsExcept={tempSelectedFriendsExcept}
            />
          )}
          {showFriendSpecificModal && (
            <ModalFriendSpecific
              isOpen={showFriendSpecificModal}
              onClose={() => setShowFriendSpecificModal(false)}
              onSave={(selectedFriends) => {
                setSelectedFriendsSpecific(selectedFriends);
              }}
              selectedFriendsSpecific={tempSelectedFriendsSpecific}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Serfdom;
