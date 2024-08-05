import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Image, Modal, Radio } from "antd";
import { useState } from "react";

import styles from "@/components/common/Modal/Regime/ModalRegime.module.css";
import ModalFriendExcept from "@/components/common/Modal/Regime/ModalFriendExcept";
import ModalFriendSpecific from "@/components/common/Modal/Regime/ModalFriendSpecific";
import { Friend } from "@/components/common/Modal/Regime/ModalRegime";

interface RegimeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegimeType {
  id: number;
  key?: number;
  title: string;
  imageSrc: string;
  subtitle?: string;
}

const regimes: RegimeType[] = [
  {
    id: 1,
    key: 1,
    title: "Công khai",
    imageSrc: "/img/img-home/regime/regime1.svg",
  },
  {
    id: 2,
    key: 2,
    title: "Bạn bè",
    imageSrc: "/img/img-home/regime/regime2.svg",
  },
  {
    id: 3,
    key: 3,
    title: "Bạn bè ngoại trừ...",
    imageSrc: "/img/img-home/regime/regime3.svg",
    subtitle: "Bạn bè ;Ngoại trừ :",
  },
  {
    id: 4,
    key: 4,
    title: "Chỉ mình tôi",
    imageSrc: "/img/img-home/regime/regime4.svg",
  },
  {
    id: 5,
    key: 5,
    title: "Bạn bè cụ thể",
    imageSrc: "/img/img-home/regime/regime5.svg",
    subtitle: "Hiển thị với một số bạn bè",
  },
];

const PrivateStory: React.FC<RegimeProps> = ({ isOpen, onClose }) => {
  const [selectedRegime, setSelectedRegime] = useState<number | null>(null);
  const [showFriendExceptModal, setShowFriendExceptModal] = useState(false);
  const [showFriendSpecificModal, setShowFriendSpecificModal] = useState(false);
  const [selectedFriendsExcept, setSelectedFriendsExcept] = useState<Friend[]>([]);
  const [selectedFriendsSpecific, setSelectedFriendsSpecific] = useState<Friend[]>([]);
  const [tempSelectedFriendsExcept, setTempSelectedFriendsExcept] = useState<Friend[]>([]);
  const [tempSelectedFriendsSpecific, setTempSelectedFriendsSpecific] = useState<Friend[]>([]);
  const toggleSecondaryModal = () => {
    setShowFriendExceptModal(!showFriendExceptModal);
  };

  const handleItemClick = (regimeId: number, regimeKey?: number) => {
    setSelectedRegime(regimeId);
    setShowFriendExceptModal(regimeKey === 3);
    setShowFriendSpecificModal(regimeKey === 5);
  };
  return (
    <>
      <div className={`${styles.modalRegime} modalRegime`}>
        <div className={styles.modalRegime__container}>
          <div className={styles.modalRegime__content}>
            <div className={styles.modalRegime__content_title}>
              <p className={styles.modalRegime__content_mainTitle}>
                Ai có thể xem tin của bạn?
              </p>
              <p className={styles.modalRegime__content_subTitle}>
                Tin của bạn sẽ hiển thị trong 24 giờ.
              </p>
            </div>
            <div className={styles.modalRegime__content_listItem}>
              {regimes.map((regime) => (
                <label
                  key={regime.id}
                  className={styles.modalRegime__content_listItem_item}
                  onClick={() => handleItemClick(regime.id, regime.key)}
                >
                  <Image
                    src={regime.imageSrc}
                    alt={regime.title}
                    preview={false}
                    width={30}
                    height={30}
                    className={styles.iconRegime}
                  />
                  <div className={styles.itemTitle}>
                    <p>{regime.title}</p>
                    {regime.subtitle && (
                      <p
                        className={styles.subtitle}
                        onClick={toggleSecondaryModal}
                      >
                        {regime.subtitle}
                      </p>
                    )}
                  </div>
                  {regime.subtitle && (
                    <p
                      className={styles.subIcon}
                      onClick={toggleSecondaryModal}
                    >
                      <RightOutlined
                        style={{ marginRight: "8px" }}
                        rev={undefined}
                      />
                    </p>
                  )}

                  {!regime.subtitle && (
                    <Radio
                      value={regime.id}
                      checked={selectedRegime === regime.id}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default PrivateStory;
