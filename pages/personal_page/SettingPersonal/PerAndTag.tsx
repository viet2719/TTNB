import React, { useState } from "react";
import { Divider } from "antd";
import styles from "./SettingPersonal.module.scss";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";

const PerAndTag = () => {
  const postPublic = [
    {
      id: 1,
      title: "Xem và chia sẻ",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content: "Ai có thể đăng lên trang cá nhân của bạn",
        },
        {
          id: 3,
          regime: "Bạn bè",
          content:
            "Ai có thể xem những gì người khác đăng lên trang cá nhân của bạn.",
        },
        {
          id: 3,
          regime: "Bạn bè",
          content:
            " Cho phép người khác chia sẻ bài viết của bạn lên tin của họ.",
        },
      ],
    },
    {
      id: 2,
      title: "Gắn thẻ",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content:
            "Ai có thể xem được bài viết mà bạn được gắn thẻ trên cá nhân.  ",
        },
        {
          id: 2,
          regime: "Bạn bè",
          content:
            "Khi bạn được gắn thẻ trong một bài viết,  bạn muốn thêm ai vào đối tượng của bài viết nếu họ chưa thể nhìn thấy bài viết?",
        },
      ],
    },
  ];

  const [editingId, setEditingId] = useState(null);

  const handleEditClick = (id: any) => {
    setEditingId(id);
  };

  const handleCloseModal = () => {
    setEditingId(null);
  };
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
    <>
      <main className={styles.qrt}>
        <h4>Trang cá nhân và gắn thẻ</h4>
        {postPublic.map((item, index) => (
          <div key={index}>
            <div className={styles.my_action}>
              <span>{item.title}</span>
              <div className={styles.action_right}>
                {item.item.map((subitem) => (
                  <div className={styles.item} key={subitem.id}>
                    <p className={styles.goiy}>{subitem.content}</p>
                    <span className={styles.show}>{subitem.regime}</span>
                    <span
                      className={styles.edit}
                      onClick={() => handleEditClick(subitem.id)}
                    >
                      Chỉnh sửa
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
          </div>
        ))}

        {editingId !== null && (
          <ModalRegime isOpen={true} onClose={handleCloseModal} onRegimeSelect={handleRegimeSelect} />
        )}
      </main>
    </>
  );
};

export default PerAndTag;
