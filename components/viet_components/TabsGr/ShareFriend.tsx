import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ShareFr = (props: any) => {
  const { setShareFr, shareFr } = props;

  const handleOk = () => {
    setShareFr(false);
  };

  const handleCancel = () => {
    setShareFr(false);
  };

  return (
    <>
      <Modal
        title="Chia sẻ lên trang cá nhân của bạn bè"
        open={shareFr}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <Input
          placeholder="Tìm kiếm"
          suffix={<SearchOutlined rev={undefined} />}
        />
        <h5 style={{ margin: "20px 0" }}>Tất cả bạn bè</h5>
      </Modal>
    </>
  );
};

export default ShareFr;
