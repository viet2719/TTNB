import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./dulieudaxoa.module.scss";
import { Image } from "antd";
import SideBar from "@/components/header/sidebar/sidebar";
import Head from "next/head";
import SideBarNew from "@/components/header/sidebarNew/sidebarNew";

const App: React.FC = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(`/dulieudaxoa${path}`);
  };
  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <div>
      <Head>
        <title>Quản lý dữ liệu đã xóa</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="flex">
        <div className={`${styles.sidebar}`}>
          <SideBarNew closePopover={closePopover} />
        </div>
        <div className={`${styles.sidebarContent}`}></div>
        <div
          className={`${styles.dulieudaxoa} flex flex-space-around flex-wrap`}
        >
          <div
            className={`${styles.dulieudaxoa__TTNB} flex flex-align-center`}
            onClick={() => handleItemClick("/TTNB")}
          >
            <Image
              src="/img/dulieudaxoa/ttnb.png"
              alt="loi hinh anh"
              preview={false}
            />
            <div className={styles.dulieudaxoa__TTNB__content}>
              <div className={styles.dulieudaxoa__TTNB__number}>
                1<span>Tệp</span>
              </div>
              <p>Truyền thông nội bộ</p>
            </div>
          </div>
          <div
            className={`${styles.dulieudaxoa__VHDN} flex flex-align-center`}
            onClick={() => handleItemClick("/VHDN")}
          >
            <Image
              src="/img/dulieudaxoa/vhdn.png"
              alt="loi hinh anh"
              preview={false}
            />
            <div className={styles.dulieudaxoa__VHDN__content}>
              <div className={styles.dulieudaxoa__VHDN__number}>
                0<span>Tệp</span>
              </div>
              <p>Văn hóa doanh nghiệp</p>
            </div>
          </div>
          <div
            className={`${styles.dulieudaxoa__QLTT} flex flex-align-center`}
            onClick={() => handleItemClick("/QLTT")}
          >
            <Image
              src="/img/dulieudaxoa/qltt.png"
              alt="loi hinh anh"
              preview={false}
            />
            <div className={styles.dulieudaxoa__QLTT__content}>
              <div className={styles.dulieudaxoa__QLTT__number}>
                0<span>Tệp</span>
              </div>
              <p>Quản trị tri thức</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
