import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import GrPrivate from "../TabsGr/GrPrivate";
import GrPublic from "../TabsGr/GrPublic";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Nhóm công khai",
    children: <GrPrivate />,
  },
  {
    key: "2",
    label: "Nhóm riêng tư",
    children: <GrPublic />,
  },
];

const App: React.FC = () => (
  <>
    <div className="tabsGroup">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  </>
);

export default App;
