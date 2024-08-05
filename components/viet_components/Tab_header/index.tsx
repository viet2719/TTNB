// "use client";
import React from "react";
import { Divider, Tabs } from "antd";
import type { TabsProps } from "antd";
import Dot from "../Dropdown/dot_tabs_block";
import Post from "../per_body/posts";
import Intro from "../per_body/Introduce/Intro";
import Friend from "../TabsFriend/FriendHome";
import TabsImage from "../TabsImage/TabsImage";
import Video from "@/components/viet_components/Video/Video";
import TabsGr from "../TabsGroup/TabsGr";
const operations = <Dot />;

const Center_nav: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Bài viết",
      children: <Post />,
    },
    {
      key: "2",
      label: "Giới thiệu",
      children: <Intro />,
    },
    {
      key: "3",
      label: "Bạn bè",
      children: <Friend />,
    },
    {
      key: "4",
      label: "Ảnh",
      children: <TabsImage />,
    },
    {
      key: "5",
      label: "Video",
      children: <Video />,
    },
    {
      key: "6",
      label: "Nhóm",
      children: <TabsGr />,
    },
  ];
  return (
    <div className="w100">
      <Divider />
      <div className="center_tab_block">
        <Tabs
          defaultActiveKey="1"
          tabBarExtraContent={operations}
          items={items}
        ></Tabs>
      </div>
    </div>
  );
};

export default Center_nav;
