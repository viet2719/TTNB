import React, { useState } from "react";
import { Dropdown, Image, Menu } from "antd";
import styles from "./tabsGr.module.scss";
import DropShare from "./DropShare";

export default function DotDrop() {
  const [unfollow, setUnfollow] = useState(false);

  const handleClick = () => {
    setUnfollow(!unfollow);
    console.log("dssfsf");
  };

  const onClickUnfollow = () => {
    const userConfirmed = window.confirm(
      "Bạn có chắc chắn bỏ theo dõi nhóm abcxyz không?"
    );
    if (userConfirmed) {
      alert("Bỏ theo dõi nhóm abcxyz thành công!");
    }
  };

  const onClickFollow = () => {
    alert("Theo dõi nhóm abcxyz thành công!");
  };

  const copyToClipboard = () => {
    const currentURL = window.location.href;
    const tempInput = document.createElement("input");
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("URL đã được sao chép: " + currentURL);
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key="0">
            <DropShare />
          </Menu.Item>
          <Menu.Item key="1">
            <a className={styles.dot_child}>
              <Image
                width={20}
                height={21}
                alt=""
                src={"/img/roi-khoi-nhom.svg"}
                preview={false}
              />
              Xóa nhóm
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a className={styles.dot_child} onClick={handleClick}>
              {!unfollow ? (
                <div className={styles.dot_child} onClick={onClickUnfollow}>
                  <Image
                    width={20}
                    height={21}
                    alt=""
                    src={"/img/bo-theo-doi.svg"}
                    preview={false}
                  />
                  Bỏ theo dõi nhóm
                </div>
              ) : (
                <div className={styles.dot_child} onClick={onClickFollow}>
                  <Image
                    width={20}
                    height={21}
                    preview={false}
                    alt=""
                    src={"/img/un_folow.svg"}
                  />
                  Theo dõi nhóm
                </div>
              )}
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <a className={styles.dot_child} onClick={copyToClipboard}>
              <Image
                width={20}
                height={21}
                alt=""
                preview={false}
                src={"/img/sao-chep-link.svg"}
              />
              Sao chép liên kết
            </a>
          </Menu.Item>
        </Menu>
      }
      trigger={["click"]}
    >
      <Image
        onClick={(e) => e.preventDefault()}
        width={24}
        height={25}
        alt=""
        preview={false}
        src={"/img/ba-cham.svg"}
      />
    </Dropdown>
  );
}
