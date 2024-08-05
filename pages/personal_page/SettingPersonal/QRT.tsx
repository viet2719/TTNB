"use client";
import React, { useState } from "react";
import { Divider } from "antd";
import styles from "./SettingPersonal.module.scss";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";
const QRT = () => {
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
        <h4>Quyền riêng tư</h4>
        {/* hoạt động của bạn */}
        <div className={styles.my_action}>
          <span>Hoạt động của bạn</span>
          <div className={styles.action_right}>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể xem bài viết của bạn trong tương lai
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(1)}>
                Chỉnh sửa
              </span>
            </div>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Xem tất cả bài viết của bạn và những nội dung mà bạn được gắn
                thẻ.
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(2)}>
                Chỉnh sửa
              </span>
            </div>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể nhìn thấy những người, Trang và danh sách mà bạn theo
                dõi.
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(3)}>
                Chỉnh sửa
              </span>
            </div>
          </div>
        </div>

        <Divider />
        {/* Cách mọi người tìm và liên hệ với bạn */}

        <div className={styles.search_conteact}>
          <span>Cách mọi người tìm và liên hệ với bạn</span>
          <div className={styles.action_right}>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể gửi lời mời kết bạn cho bạn
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(4)}>
                Chỉnh sửa
              </span>
            </div>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể xem danh sách bạn bè của bạn
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(5)}>
                Chỉnh sửa
              </span>
            </div>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể tìm kiếm bạn bằng địa chỉ Email mà bạn cung cấp.
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(6)}>
                Chỉnh sửa
              </span>
            </div>
            <div className={styles.item}>
              <p className={styles.goiy}>
                Ai có thể tìm kiếm bạn bằng số điện thoại mà bạn cung cấp.
              </p>
              <span className={styles.show}>Bạn bè</span>
              <span className={styles.edit} onClick={() => handleEditClick(7)}>
                Chỉnh sửa
              </span>
            </div>
          </div>
        </div>
        {editingId !== null && (
          <ModalRegime isOpen={true} onClose={handleCloseModal} onRegimeSelect={handleRegimeSelect} />
        )}
      </main>
    </>
  );
};
export default QRT;
