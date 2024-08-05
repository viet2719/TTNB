import { RightOutlined } from "@ant-design/icons";
import { Image, Modal, Radio } from "antd";
import { useState } from "react";
import ModalFriendExcept from "./ModalFriendExcept";
import ModalFriendSpecific from "./ModalFriendSpecific";

import styles from "./ModalRegime.module.css";

interface RegimeProps {
  isOpen: boolean;
  onClose: () => void;
  onRegimeSelect: (selectedRegimeData: any) => void;
}

interface RegimeType {
  id: number;
  key?: number;
  title: string;
  imageSrc: string;
  subtitle?: string;
}
export interface Friend {
  id: number;
  name: string;
  imageUrl: string;
}
const ModalRegime: React.FC<RegimeProps> = ({ isOpen, onClose, onRegimeSelect }) => {

  const [selectedRegime, setSelectedRegime] = useState<number | null>(null);
  const [showFriendExceptModal, setShowFriendExceptModal] = useState(false);
  const [showFriendSpecificModal, setShowFriendSpecificModal] = useState(false);

  const [selectedFriendsExcept, setSelectedFriendsExcept] = useState<Friend[]>([]);
  const [selectedFriendsSpecific, setSelectedFriendsSpecific] = useState<Friend[]>([]);

  const toggleSecondaryModal = () => {
    setShowFriendExceptModal(!showFriendExceptModal);
  };
  const [tempSelectedFriendsExcept, setTempSelectedFriendsExcept] = useState<Friend[]>([]);
  const [tempSelectedFriendsSpecific, setTempSelectedFriendsSpecific] = useState<Friend[]>([]);

  const handleItemClick = (regimeId: number, regimeKey?: number) => {
    setSelectedRegime(regimeId);

    if (regimeKey === 3) {
      setTempSelectedFriendsExcept(selectedFriendsExcept);
    } else if (regimeKey === 5) {
      setTempSelectedFriendsSpecific(selectedFriendsSpecific);
    }

    const selectedRegimeData = {
      regimeId,
      regimeKey,
      title: regimes.find((regime) => regime.id === regimeId)?.title,
      imageSrc: regimes.find((regime) => regime.id === regimeId)?.imageSrc,
    };

    onRegimeSelect(selectedRegimeData);
    if (regimeKey !== 3 && regimeKey !== 5) {
      onClose();
    }
  };

  const selectedFriendsExceptDisplay = selectedFriendsExcept.map(friend => friend.name).join(", ");
  const selectedFriendsSpecificDisplay = selectedFriendsSpecific.map(friend => friend.name).join(", ");
  const isExceptSelected = selectedRegime === 3;
  const isSpecificSelected = selectedRegime === 5;

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
      subtitle: isExceptSelected ? selectedFriendsExceptDisplay : "Bạn bè ;Ngoại trừ :",
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
      subtitle: isSpecificSelected ? selectedFriendsSpecificDisplay : "Bạn bè cụ thể :",
    },
  ];

  return (
    <>
      <Modal
        title="Chế độ xem"
        open={isOpen}
        onCancel={onClose}
        footer={null}
        className={`${styles.modalRegime} modalRegime`}
      >
        <div className={styles.modalRegime__container}>
          <div className={styles.modalRegime__content}>
            <div className={styles.modalRegime__content_title}>
              <p className={styles.modalRegime__content_mainTitle}>
                Ai có thể xem bài viết của bạn?

              </p>
              <p className={styles.modalRegime__content_subTitle}>
                Bài viết của bạn sẽ hiển thị ở Bảng tin, trang cá nhân và kết
                quả tìm kiếm.
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
                        {isExceptSelected ? tempSelectedFriendsExcept.map(friend => friend.name).join(", ")
                          : isSpecificSelected
                            ? tempSelectedFriendsSpecific.map(friend => friend.name).join(", ")
                            : regime.subtitle}
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
      </Modal>
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

export default ModalRegime;
