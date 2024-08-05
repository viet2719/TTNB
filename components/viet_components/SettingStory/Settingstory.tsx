import React, { useState } from "react";
import { Modal, Tabs } from "antd";
import type { TabsProps } from "antd";
import Install_news_archive from "./Install_news_archive";
import StoryTurnOff from "./StoryTurnOff";
import PrivateStory from "./PrivateStory";
import styles from "./SettingStory.module.scss";

const Settingstory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Cài đặt kho lưu trữ tin  ",
      children: <Install_news_archive />,
    },
    {
      key: "2",
      label: "Tin bạn đã tắt",
      children: <StoryTurnOff />,
    },
    {
      key: "3",
      label: "Quyền riêng tư của tin",
      children: (
        <PrivateStory
          isOpen={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ),
    },
  ];

  return (
    <>
      <span onClick={showModal} className={styles.setting}>
        Cài đặt
      </span>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1" items={items} />
      </Modal>
    </>
  );
};

export default Settingstory;
