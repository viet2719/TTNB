import { Input, Image } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import TruyenThongNoiBo from "..";
import AnhBia from "@/components/AnhBia";
import { SearchOutlined } from "@ant-design/icons";
import Post from "@/components/Post";
import BaiVietTTNB from "@/components/baivietTTNB/BaiVietTTNB";
import CreateModalNotifical from "@/components/Tuychinhdangtin/taothongbao";
import router from "next/router";
import Head from "next/head";

export default function Trangcongty() {
  const childrenContentLeft = (
    <div className={styles.thutuceoContaines}>
      <div className={styles.thutuceoContainerHeader}>
        <AnhBia />
      </div>
      <div className={styles.searchPost}>
        <Input
          className={styles.timkiembaiviet}
          placeholder="Tìm kiếm bài viết"
          suffix={<SearchOutlined rev={undefined} />}
          size="large"
        />
      </div>
      <div>
        <Post />
      </div>
      <BaiVietTTNB />
    </div>
  );
  const [createNotif, setCreateNotif] = useState(false);

  const handleClickXemThem = () => {
    router.push("/truyenthongnoibo/sukien");
  };
  const childrenContentRight = (
    <div className={styles.containerRight}>
      <div className={styles.SKSapToi}>
        <div className={styles.SKSapToi_header}>Sự kiện sắp tới</div>
        <div className={styles.SKSapToi_body}>
          <div className={styles.SKSapToi_body_tren}>
            <p>test1</p>
            <p>16h10 18.10.2023</p>
          </div>
          <div
            className={styles.SKSapToi_body_duoi}
            onClick={handleClickXemThem}
          >
            <p>Xem thêm sự kiện</p>
          </div>
        </div>
      </div>
      <div className={styles.BaiVietDanhDau}>
        <div className={styles.BaiVietDanhDau_header}>
          Bài viết đánh dấu mới nhất
        </div>
        <div className={`${styles.BaiVietDanhDau_body_container} `}>
          <div className={`${styles.BaiVietDanhDau_body} flex`}>
            <Image
              src="/img/c.png"
              alt="avatar"
              width={50}
              height={50}
              preview={false}
              className={styles.BaiVietDanhDau_body_avatar}
            />

            <div className={styles.info}>
              <p className={styles.name}>Nguyễn Thế Đạt</p>
              <p>14:11 17/10/2023</p>
            </div>
          </div>
          <p className={styles.namePost}>test1</p>
        </div>
      </div>
      <div className={styles.ThongBaoMoi}>
        <div className={`${styles.ThongBaoMoi_header} flex`}>
          <p>Thông báo mới</p>
          <p
            className={styles.ThongBaoMoi_header_add}
            onClick={() => setCreateNotif(true)}
          >
            Thêm
          </p>
        </div>
        <div className={styles.ThongBaoMoi_body}>
          <div className={styles.ThongBaoMoi_body_tren}>
            <p className={styles.ThongBaoMoi_body_title}>Thông báo: test</p>
            <p className={styles.ThongBaoMoi_body_time}>14h10 17.10.2023</p>
          </div>
          <p className={styles.ThongBaoMoi_body_duoi}>Hết thông báo</p>
        </div>
      </div>
      <CreateModalNotifical
        createNotif={createNotif}
        setCreateNotif={setCreateNotif}
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>Trang công ty</title>
      </Head>
      <TruyenThongNoiBo
        childrenContentLeft={childrenContentLeft}
        childrenContentRight={childrenContentRight}
        keyduocchon="1"
      />
    </>
  );
}
