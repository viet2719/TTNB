import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import styles from "./follower.module.scss";
type BtnActionProps = {
  removeFollower: () => void;
};

const BtnAction = (prop: any) => {
  const { removeFollower } = prop;
  const items: MenuProps["items"] = [
    {
      label: <a onClick={removeFollower}>Chấp nhận</a>,
      key: "0",
    },
    {
      label: <a onClick={removeFollower}>Xóa lời mời</a>,
      key: "1",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button onClick={(e) => e.preventDefault()} className={styles.feedback}>
        Phản hồi
      </button>
    </Dropdown>
  );
};

export default BtnAction;
