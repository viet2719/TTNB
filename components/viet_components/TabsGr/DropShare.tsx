import React, { useState } from "react";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import styles from "./tabsGr.module.scss";
import DropOtherShare from "./DropOthersShare";
import ShareGroup from "@/components/viet_components/ShareGroup/modalShare";
import ShareFr from "./ShareFriend";
interface ShareGroupProps {
  share: boolean;
  setShare: () => void;
}
const DropShare = () => {
  const [share, setShare] = useState(false);
  const [shareFr, setShareFr] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className={styles.dot_child}
          onClick={() => {
            setShare(true);
          }}
        >
          <Image
            width={25}
            height={24}
            alt="anh-loi"
            src={"/img/nv_share_your_wall.svg"}
          />{" "}
          Chia sẻ lên trang cá nhân(Của bạn)
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className={styles.dot_child}
          onClick={() => {
            setShareFr(true);
          }}
        >
          <Image
            width={25}
            height={24}
            alt="anh-loi"
            src={"/img/nv_share_others_wall.svg"}
          />
          Chia sẻ lên trang cá nhân (Bạn bè)
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className={styles.dot_child}>
          <Image
            width={25}
            height={24}
            alt="anh-loi"
            src={"/img/nv_send_via_chat365.svg"}
          />
          Gửi bằng Chat365
        </div>
      ),
      key: "2",
    },
    {
      label: <DropOtherShare />,
      key: "3",
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div className={styles.dot_child} onClick={(e) => e.preventDefault()}>
          <Image width={20} height={21} alt="" src={"/img/chia-se-ngay.svg"} />
          Chia sẻ ngay
        </div>
      </Dropdown>
      {share && (
        <div>
          <ShareGroup share={share} setShare={setShare} />
        </div>
      )}
      {shareFr && <ShareFr shareFr={shareFr} setShareFr={setShareFr} />}
    </div>
  );
};
export default DropShare;
