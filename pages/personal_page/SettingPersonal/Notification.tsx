"use client";
import { Switch } from "antd";
import styles from "./SettingPersonal.module.scss";
const Notif = () => {
  const onChange = (checked: boolean) => {
    // console.log(`switch to ${checked}`);
  };
  const action = [
    { id: 1, name: "Bình luận" },
    { id: 2, name: "Thẻ" },
    { id: 3, name: "Nhắc nhở" },
    {
      id: 4,
      name: "Hoạt động khác về bạn",
      other:
        "Đây là thông báo về bài viết trên dòng thời gian của bạn, về Lượt thích và các Cảm xúc dành cho bài viết, v.v",
    },
    { id: 5, name: "Cập nhật từ bạn bè" },
    { id: 6, name: "Thẻ" },
    { id: 7, name: "Lời mời kết bạn" },
    { id: 8, name: "Những người, nhóm bạn có thể biết" },
    { id: 9, name: "Sinh nhật" },
    { id: 10, name: "Nhóm" },
    { id: 11, name: "Sự kiện" },
  ];
  return (
    <>
      <div className={styles.cdc}>
        <h4>Cài đặt thông báo</h4>
        {action.map((item, index) => (
          <div key={index} className={styles.contact}>
            <span className={styles.lienhe}>
              {item.name}
              <p className={styles.other}>{item.other}</p>
            </span>
            <span className={styles.info}>
              <Switch defaultChecked onChange={onChange} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
export default Notif;
