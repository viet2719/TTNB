import React, { useState } from "react";
import type { TabsProps } from "antd";
import { Tabs, Image, Button, Drawer } from "antd";
import CDC from "./CDC";
import QRT from "./QRT";
import PerAndTag from "./PerAndTag";
import PostPublic from "./PostPublic";
import Block from "./Block";
import Story from "./Story";
import Notif from "./Notification";
import TabPane from "antd/lib/tabs/TabPane";

type TabPosition = "left" | "right" | "top" | "bottom";

const SidebarSetting: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="tabpane">
          <Image
            alt=""
            src="/img/ant-design_setting-filled.svg"
            preview={false}
          />
          Cài đặt chung
        </div>
      ),
      children: <CDC />,
    },
    {
      key: "2",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/bx_bxs-lock-alt.svg" preview={false} />
          Quyền riêng tư
        </div>
      ),
      children: <QRT />,
    },
    {
      key: "3",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/tag.svg" preview={false} />
          Trang cá nhân và gắn thẻ
        </div>
      ),
      children: <PerAndTag />,
    },
    {
      key: "4",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/gis_earth-australia-o.svg" preview={false} />
          Bài viết công khai
        </div>
      ),
      children: <PostPublic />,
    },
    {
      key: "5",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/Frame 627861.svg" preview={false} />
          Chặn
        </div>
      ),
      children: <Block />,
    },
    {
      key: "6",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/storyboard 1.svg" preview={false} />
          Tin đăng
        </div>
      ),
      children: <Story />,
    },
    {
      key: "7",
      label: (
        <div className="tabpane">
          <Image alt="" src="/img/Frame 627860.svg" preview={false} />
          Thông báo
        </div>
      ),
      children: <Notif />,
    },
  ];
  return (
    <div className="tabSetting">
      <Tabs tabPosition={tabPosition} items={items} />
      <div className="taban">
        <CDC />
        <QRT />
        <PerAndTag />
        <PostPublic />
        <Block />
        <Story />
        <Notif />
      </div>
    </div>
  );
};

export default SidebarSetting;
