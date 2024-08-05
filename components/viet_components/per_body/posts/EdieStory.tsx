import React, { useState } from "react";
import styles from "../index.module.css";
export default function EdieStory() {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState("alo alo");
  const [tempBio, setTempBio] = useState("");

  const startEditingBio = () => {
    setIsEditingBio(true);
    setTempBio(bio);
  };
  const saveBio = () => {
    setIsEditingBio(false);
    setBio(tempBio);
  };
  const cancelEditingBio = () => {
    setIsEditingBio(false);
    setTempBio(bio);
  };
  const handleBioChange = (e: any) => {
    const newText = e.target.value;
    setBio(newText);
    // Đếm số ký tự và hiển thị nó
    const charCount = newText.length;
    console.log("Số ký tự:", charCount);
  };
  return (
    <div>
      {isEditingBio ? (
        <div>
          <textarea
            className={styles.story}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            maxLength={100}
          />
          <div className={styles.kytu}>
            Số ký tự: {bio.length}/{100}
          </div>
        </div>
      ) : (
        <span className={styles.sp_story}>{bio}</span>
      )}
      {isEditingBio ? (
        <div className={styles.btn}>
          <button onClick={saveBio} className={styles.btn_huy}>
            Hủy
          </button>
          <button onClick={cancelEditingBio} className={styles.btn_ok}>
            Lưu
          </button>
        </div>
      ) : (
        <p onClick={startEditingBio} className={styles.edit_story}>
          Chỉnh sửa tiểu sử
        </p>
      )}
    </div>
  );
}
