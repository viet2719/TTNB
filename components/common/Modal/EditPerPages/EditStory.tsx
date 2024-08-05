import React, { useState } from "react";
import styles from "@/components/viet_components/per_body/index.module.css";

export default function EditStory() {
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
  };
  return (
    <div>
      <div className={styles.story_modal}>
        <p>Tiểu sử</p>
        {isEditingBio ? (
          <>
            <span onClick={cancelEditingBio} style={{ cursor: "pointer" }}>
              Lưu
            </span>
          </>
        ) : (
          <span onClick={startEditingBio} style={{ cursor: "pointer" }}>
            Chỉnh sửa
          </span>
        )}
      </div>
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
    </div>
  );
}
