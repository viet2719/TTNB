import React from "react";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Searchpers from "@/components/headerperson/search_personal";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      label: <Searchpers />,
      key: "0",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", padding: "5px 10px" }}
          onClick={() => {
            router.push("/addstory24h/WarehouseStory/WareHouseStory");
          }}
        >
          <Image
            style={{ marginRight: 10 }}
            width={20}
            height={21}
            alt="search"
            src={"/img/tabs_block/kho-luu-tru-tin.svg"}
          />
          Kho tin lưu trữ
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", padding: "5px 10px" }}
        >
          <Image
            style={{ marginRight: 10 }}
            width={20}
            height={21}
            alt="search"
            src={"/img/tabs_block/nv_video.svg"}
          />
          Nhật ký hoạt động
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", padding: "5px 10px" }}
          onClick={() => {
            router.push("/personal_page/SettingPer");
          }}
        >
          <Image
            style={{ marginRight: 10 }}
            width={20}
            height={21}
            alt="search"
            src={"/img/tabs_block/nv_cai-dat-tren-ca-nhan.svg"}
          />
          Cài đặt trang cá nhân
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Image
        onClick={(e) => e.preventDefault()}
        width={40}
        height={43}
        alt="search"
        src={"/img/tabs_block/nv_more.svg"}
      />
    </Dropdown>
  );
};

export default App;
