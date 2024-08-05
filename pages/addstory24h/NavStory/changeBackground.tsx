import React, { useState } from "react";

export default function ChangeBackground(props: any) {
  const { colorButtons, value, updateTextarea1Content, colorButtonsText } =
    props;
  const handleTextarea2Change = (event: any) => {
    const newContent = event.target.value;
    // Gọi hàm từ component cha để cập nhật nội dung của textarea 1
    updateTextarea1Content(newContent);
  };
  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <textarea
            style={{ width: "100%", height: 100, padding: 10 }}
            value={value}
            onChange={handleTextarea2Change}
            placeholder="Nhập văn bản..."
          ></textarea>
        </div>

        <div>
          <span>Phông nền</span>
          <button style={{ marginBottom: 10 }}>{colorButtons}</button>
        </div>
        <div>
          <span>Màu chữ</span>
          <button style={{ marginBottom: 10 }}>{colorButtonsText}</button>
        </div>
      </div>
    </div>
  );
}
