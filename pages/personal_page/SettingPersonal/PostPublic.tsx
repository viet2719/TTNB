import React, { useState } from "react";
import { Divider } from "antd";
import styles from "./SettingPersonal.module.scss";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";

const PostPublic = () => {
  const postPublic = [
    {
      id: 1,
      title: "Ai có thể theo dõi tôi",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content:
            "Người theo dõi sẽ nhìn thấy bài viết, thước phim, tin và đoạn âm thanh của bạn trong Bảng tin. Theo mặc định thì bạn bè sẽ theo dõi bài viết, thước phim, tin và đoạn âm thanh của bạn, nhưng bạn cũng có thể cho phép những người không phải là bạn bè theo dõi bài viết, thước phim, tin và đoạn âm thanh công khai của mình. Hãy dùng cài đặt này để chọn đối tượng có thể theo dõi bạn.",
        },
      ],
    },
    {
      id: 2,
      title: "Bình luận về bài viết công khai",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content: "Ai có thể bình luận về những bài viết công khai  của bạn",
        },
      ],
    },
    {
      id: 3,
      title: "Thông báo về bài viết công khai",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content: "Nhận thông báo",
        },
      ],
    },
    {
      id: 4,
      title: "Thông tin công khai trên trang cá nhân",
      item: [
        {
          id: 1,
          regime: "Bạn bè",
          content:
            "Ai có thể thích, bình luận về các thông tin công khai của bạn trên trang cá nhân.",
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
        <h4>Bộ lọc và công cụ của bài viết trên trang</h4>
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
          // add props
        )}
      </main>
    </>
  );
};

export default PostPublic;
