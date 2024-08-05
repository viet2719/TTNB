import SideBar from "@/components/header/sidebar/sidebar";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Menu, Image, Button, Popover, Drawer } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./index.module.scss";
import Head from "next/head";
import SideBarNew from "@/components/header/sidebarNew/sidebarNew";
const SelectOptions = [
  {
    key: "1",
    value: "Trang công ty",
    img: "/img/TTNB/sbp_1.png",
  },
  {
    key: "2",
    value: "Nhóm thảo-luận",
    img: "/img/TTNB/sbp_2.png",
  },

  {
    key: "3",
    value: "Sinh nhật",
    img: "/img/TTNB/sbp_3.png",
  },
  {
    key: "4",
    value: "Sự kiện",
    img: "/img/TTNB/sbp_4.png",
  },
];

interface SelectOptions {
  key: string;
  value: string;
  img: string;
}

interface TTNBProps {
  childrenContentLeft?: React.ReactNode;
  childrenContentRight?: React.ReactNode;
  keyduocchon: string;
}

export default function TruyenThongNoiBo({
  childrenContentLeft,
  childrenContentRight, keyduocchon
}: TTNBProps) {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    SelectOptions.find((option) => option.key === keyduocchon) || SelectOptions[0]
  );
  const handleMouseEnter = () => {
    setSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubMenuOpen(false);
  };

  const handleMenuClick = (option: any) => {
    setSelectedOption(option);
    setSubMenuOpen(false);

    if (option.key === "1") {
      router.push("/truyenthongnoibo/trangcongty");
    }
    if (option.key === "2") {
      router.push("/truyenthongnoibo/nhomthaoluan");
    }
    if (option.key === "3") {
      router.push("/truyenthongnoibo/sinhnhat");
    }
    if (option.key === "4") {
      router.push("/truyenthongnoibo/sukien");
    }
  };

  const remainingOptions = SelectOptions.filter(
    (option) => option.key !== selectedOption.key
  );
  const handleSelectedOptionClick = () => {
    //router.push('/vanhoadoanhnghiep/thutuceo');
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <>
      <div className={`${styles.VHDNContainer} VHDNContainer flex`}>
        <div className={`${styles.sidebar}`}>
          <SideBarNew closePopover={closePopover} />
        </div>
        <div className={`${styles.subSidebar}`}></div>
        <div className={`${styles.VHDNContent} VHDNContent`}>
          <div className={`${styles.VHDNContentHeader} VHDNContentHeader flex`}>
            <div className={`${styles.VHDNSearchInput} VHDNSearchInput `}>
              {childrenContentLeft}
            </div>
            <div className={styles.contentRightContainer}>
              <div className={styles.menuOptionSmall}>
                <div
                  className={`${styles.VHDNcontentRight} VHDNcontentRight`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`${styles.selectedOptionContainer}`}>
                    <div
                      className={`${styles.selectedOption} cursor-pointer`}
                      onClick={handleSelectedOptionClick}
                    >
                      <Image
                        src={selectedOption.img}
                        alt={selectedOption.value}
                        preview={false}
                        width={25}
                      />
                      <span className={`${styles.optionText} cursor-pointer`}>
                        {selectedOption.value}
                      </span>
                    </div>
                    <Menu
                      style={{
                        display: subMenuOpen ? "block" : "none",
                        zIndex: 1000000000000,
                      }}
                      onClick={(e) =>
                        handleMenuClick(
                          remainingOptions.find(
                            (option) => option.key === e.key
                          )
                        )
                      }
                    >
                      {remainingOptions.map((option) => (
                        <Menu.Item key={option.key}>
                          <div
                            style={{
                              display: "flex",
                              gap: "20px",
                            }}
                          >
                            <Image
                              src={option.img}
                              alt={option.value}
                              preview={false}
                              width={25}
                            />
                            <span className={styles.optionText}>
                              {option.value}
                            </span>
                          </div>
                        </Menu.Item>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div
                  className={`${styles.VHDNSmallMenu} VHDNSmallMenu`}
                  onClick={showDrawer}
                >
                  <Image
                    src="/img/VHDN/icon_small_menu.png"
                    alt="v_7"
                    preview={false}
                  />
                </div>
              </div>
              <Drawer
                title={
                  <div className="flex flex-end">
                    <Image
                      src="/img/QTTT/smallMenu.png"
                      alt="smallMenu"
                      preview={false}
                    />
                  </div>
                }
                placement="right"
                onClose={onClose}
                open={openDrawer}
                width={300}
              >
                <div
                  style={{
                    width: "260px",
                  }}
                  className={`${styles.DrawerVHDNContentRight} sVHDNContentRight`}
                >
                  {childrenContentRight}
                </div>
              </Drawer>
              <div
                style={{
                  position: "fixed",
                  top: "160px",
                  zIndex: -3,
                  width: "360px",
                  overflow: "scroll",
                  height: "calc(100vh - 160px)",
                }}
                className={`${styles.VHDNContentRight} VHDNContentRight`}
              >
                {childrenContentRight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
