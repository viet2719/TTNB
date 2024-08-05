import ModalLogOut from "@/components/common/Modal/common/LogOut/ModalLogOut";
import { CaretDownOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown, Image, Menu, Popover } from "antd";
import Link from "next/link";
import router from "next/router";
import { relative } from "path";
import React, { useState } from "react";
import styles from "./user.module.css";

export default function User(): JSX.Element {
  const [openModalLogOut, setOpenModalLogOut] = useState(false);

  const handleOpenModalLogOut = () => {
    setOpenModalLogOut(true);
    console.log("open");
  }

  const handleOkModalLogOut = () => {
    setOpenModalLogOut(false);
    router.push("/login");
  }

  const handleCancelModalLogOut = () => {
    setOpenModalLogOut(false);
  }

  const menuItems = [
    {
      key: "1",
      icon: "/img/c.png",
      label: "Nguyễn Thế Đạt",
      isFirstImage: true,
      link: "/personal_page",
    },
    {
      key: "2",
      icon: "/img/img-header/user/ep_icon_friend.svg",
      label: "Bạn bè",
      link: "/friend",
    },
    {
      key: "3",
      icon: "/img/img-header/user/ep_icon_group.svg",
      label: "Nhóm",
      link: "/group",
    },
    {
      key: "4",
      icon: "/img/img-header/user/ep_icon_save.svg",
      label: "Đã lưu",
      link: "/daluu",
    },
    {
      key: "5",
      icon: "/img/img-header/user/ep_info_event.svg",
      label: "Sự kiện",
      link: "/truyenthongnoibo/sukien",
    },
    {
      key: "6",
      icon: "/img/img-header/user/ep_info_mess.svg",
      label: "Tin nhắn",
      link: "/",
    },
    {
      key: "7",
      icon: "/img/img-header/user/ep_info_kn.svg",
      label: "Kỷ niệm",
      link: "/kyniem",
    },
    {
      key: "8",
      icon: "/img/img-header/user/v_header_info_acc.svg",
      label: "Thông tin tài khoản",
      link: "/",
    },
    {
      key: "9",
      icon: "/img/img-header/user/v_header_menu_danhgia.svg",
      label: "Đánh giá",
      link: "/",
    },
    {
      key: "10",
      icon: "/img/img-header/user/v_header_menu_error.svg",
      label: "Báo lỗi",
      link: "/",
    },
    {
      key: "11",
      icon: "/img/img-header/user/v_header_menu_huongdan.svg",
      label: "Hướng dẫn",
      link: "/tutorial",
    },
    {
      key: "12",
      icon: "/img/img-header/user/v_header_menu_logout.svg",
      label: "Đăng xuất",
      link: "/",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default behavior (page reload)
        handleOpenModalLogOut(); // Open the logout modal
      },
    }
  ];

  const userMenu = (
    <div>
      <Menu className={`${styles.MenuUser} MenuUser`}>
        {menuItems.map((item, index) => (
          <div key={item.key}>
            <div
              className={`${styles.menuItem} ${index >= 7 ? styles.itemWithSpacing : ""
                }`}
            >
              <Link
                href={item.link}
                className={styles.menuLink}
                onClick={item.onClick}
              >
                <Image
                  width={index >= 7 ? 25 : 40}
                  height={index >= 7 ? 25 : 40}
                  src={item.icon}
                  alt={item.label}
                  preview={false}
                  className={styles.menuIcon}
                  style={item.isFirstImage ? { borderRadius: "50%" } : {}}
                />
                <span
                  className={
                    index >= 7 ? styles.menuLabelAfter : styles.menuLabel
                  }
                >
                  {item.label}
                </span>
              </Link>
              {index >= 7 && (
                <RightOutlined
                  rev={undefined}
                  style={{
                    position: "absolute",
                    right: "20px",
                    fontSize: "16px",
                    top: "calc(50% - 7px)",
                  }}
                />
              )}
            </div>
            {index === 6 && (
              <Menu.Divider
                style={{
                  margin: "4px 16px",
                  height: "1px",
                  backgroundColor: "#000",
                }}
              />
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
  return (
    <>
      <Dropdown
        overlay={userMenu}
        placement="bottomRight"
        trigger={["click"]}
        className={`${styles.userDropdown} userDropdown`}
      >
        <div className={styles.userDropdownTrigger}>
          <Image
            src="/img/c.png"
            alt=""
            className={styles.avatar}
            width={40}
            height={40}
            preview={false}
          />
          <CaretDownOutlined
            style={{
              fontSize: "25px",
              color: "#999999",
              position: "relative",
              top: "8px",
              left: "2px",
            }}
            rev={undefined}
            className={styles.caretDown}
          />
        </div>
      </Dropdown>
      <ModalLogOut
        open={openModalLogOut}
        onCancel={handleCancelModalLogOut}
        onConfirm={handleOkModalLogOut}
        message="Bạn chắc chắn muốn đăng xuất?"
      />
    </>

  );
}
