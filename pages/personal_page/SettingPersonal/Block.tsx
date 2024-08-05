import React, { useState } from "react";
import { Divider } from "antd";
import styles from "./SettingPersonal.module.scss";
import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";
import UnBlocks from "@/components/viet_components/Modal/UnBlocks";

const Block = () => {
  const blocks = [
    {
      id: 1,
      title: "Chặn người dùng",
      item: [
        {
          id: 1,
          content:
            "Ngay khi bạn chặn ai đó, người này không thể xem nội dung đăng trên dòng thời gian của bạn, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn hay thêm bạn vào danh sách bạn bè nữa. Lưu ý: Không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người này đều tham gia.",
          list: [
            { id: 1, name: "Dr. Cesar Mann" },
            { id: 2, name: "Jodi Kris" },
            { id: 3, name: "Edmund Rowe" },
            { id: 4, name: "Susie Weissnat" },
            { id: 5, name: "Merle Stiedemann V" },
            { id: 6, name: "Forrest Hoeger" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Chặn tin nhắn",
      item: [
        {
          id: 1,
          content:
            "Nếu bạn chặn tin nhắn và cuộc gọi video từ ai đó tại đây, họ sẽ không thể liên hệ với bạn trong ứng dụng Messenger. Trừ khi bạn chặn trang cá nhân của ai đó, nếu không họ có thể đăng lên dòng thời gian của bạn, gắn thẻ bạn và bình luận về bài viết hoặc bình luận của bạn.  ",
          list: [
            { id: 1, name: "Dr. Cesar Mann" },
            { id: 2, name: "Jodi Kris" },
            { id: 3, name: "Edmund Rowe" },
            { id: 4, name: "Susie Weissnat" },
            { id: 5, name: "Merle Stiedemann V" },
            { id: 6, name: "Forrest Hoeger" },
          ],
        },
      ],
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <main className={styles.qrt}>
        <h4>Quản lý chặn</h4>

        <div>
          {blocks.map((item, index) => (
            <div key={index} className={styles.unfriend}>
              <span>{item.title}</span>
              <div className={styles.unfriend_right}>
                {item.item.map((items, index) => (
                  <div key={index} className={styles.item}>
                    <p className={styles.goiy}>{items.content}</p>
                    <span className={styles.label_list_blocks}>
                      Danh sách chặn
                    </span>
                    <span className={styles.input}>
                      Nhập tên của một người bạn mà bạn muốn chặn
                    </span>
                    <input
                      type="text"
                      placeholder="Nhập tên"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className={styles.list_name_blocks}>
                      {items.list
                        .filter((name) =>
                          name.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                        .map((name, idx) => (
                          <div className={styles.list_name} key={idx}>
                            <span>{name.name}</span>
                            <UnBlocks />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
                <Divider />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Block;
