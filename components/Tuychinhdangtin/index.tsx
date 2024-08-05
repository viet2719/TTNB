import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Image } from "antd";
import styles from "../Post/post.module.scss";
import CreateModalNotifical from "./taothongbao";
import HeloMember from "./chaodonthanhvienmoi";
import CreEvent from "./taosukien";
import CreateDiscussion from "./taothaoluan";
import Chiaseytuong from "./chiaseytuong";
import BinhChon from "./taobinhchon";
import Taokhenthuong from "./taokhenthuong";
import NewPrivate from "./taotintucnoibo";

const Tuychinhdangtin: React.FC = () => {
  const [createNotif, setCreateNotif] = useState(false);
  const [helomem, setHelomem] = useState(false);
  const [event, setEvent] = useState(false);
  const [createDiscussion, setCreateDiscussion] = useState(false);
  const [shareIdea, setShareIdea] = useState(false);
  const [binhchon, setBinhchon] = useState(false);
  const [khenthuong, setKhenthuong] = useState(false);
  const [newPrivate, setNewPrivate] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => {
            setCreateNotif(true);
          }}
          className={styles.item}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_1.png" preview={false} />
          Tạo thông báo
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setHelomem(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_2.png" preview={false} />
          Chào đón thành viên mới
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setEvent(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_3.png" preview={false} />
          Tạo sự kiện
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setCreateDiscussion(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_4.png" preview={false} />
          Tạo thảo luận
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setShareIdea(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_5.png" preview={false} />
          Chia sẻ ý tưởng
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setBinhchon(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_6.png" preview={false} />
          Tạo bình chọn
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setKhenthuong(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_7.png" preview={false} />
          Tạo khen thưởng
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <div
          className={styles.item}
          onClick={() => {
            setNewPrivate(true);
          }}
        >
          <Image alt="phanh" src="/img/TTNB/tuychinh_8.png" preview={false} />
          Tạo tin tức nội bộ
        </div>
      ),
      key: "7",
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div
          onClick={(e) => e.preventDefault()}
          className={styles.footer_post_item}
        >
          <Image
            alt="phanh"
            src="/img/TTNB/icon_tuychinh.png"
            preview={false}
          />
          Tùy chỉnh đăng tin
        </div>
      </Dropdown>
      {createNotif && (
        <CreateModalNotifical
          createNotif={createNotif}
          setCreateNotif={setCreateNotif}
        />
      )}
      {helomem && <HeloMember helomem={helomem} setHelomem={setHelomem} />}
      {event && <CreEvent event={event} setEvent={setEvent} />}
      {createDiscussion && (
        <CreateDiscussion
          createDiscussion={createDiscussion}
          setCreateDiscussion={setCreateDiscussion}
        />
      )}
      {shareIdea && (
        <Chiaseytuong shareIdea={shareIdea} setShareIdea={setShareIdea} />
      )}
      {binhchon && <BinhChon binhchon={binhchon} setBinhchon={setBinhchon} />}
      {khenthuong && (
        <Taokhenthuong khenthuong={khenthuong} setKhenthuong={setKhenthuong} />
      )}
      {newPrivate && (
        <NewPrivate newPrivate={newPrivate} setNewPrivate={setNewPrivate} />
      )}
    </>
  );
};

export default Tuychinhdangtin;
