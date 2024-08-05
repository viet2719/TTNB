import React, { useState } from "react";
import Image from "next/image";
import Popdot from "./popdot";
import styles from "./search_per.module.scss";
import { Input, Switch } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import Head from "next/head";
import Post from "@/components/homepage/ContentHome/Post/Post";

interface Info_post {
  id: number;
  name: string;
  date: string;
  avt: boolean;
  imgSrc: boolean;
  text: string;
  imgfr: boolean;
}
export default function Search_per() {
  const [time, setTime] = useState(false);
  const handleonClick = () => {
    setTime(!time);
  };

  const onChange = (checked: boolean) => {};
  return (
    <>
      <Head>
        <title>Tìm kiếm trong trang cá nhân</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className={styles.center}>
        <div className={styles.container}>
          <div className={styles.header_dn}>
            {" "}
            <div className={styles.dn}>
              <span className={styles.search_result}>Kết quả tìm kiếm</span>
              <p className={styles.in_person}>Trong trang cá nhân</p>
              <div className="search_per_input">
                <Input
                  suffix={<SearchOutlined rev={undefined} />}
                  placeholder="Tìm kiếm"
                />
              </div>

              <span className={styles.search_result}>Bộ lọc</span>
              <div className={styles.bv}>
                <span>Bài viết bạn đã xem</span>
                <Switch defaultChecked onChange={onChange} />
              </div>
              <div className={styles.bv}>
                <span>Gần đây nhất</span>
                <Switch defaultChecked onChange={onChange} />
              </div>
              <div className={styles.time_post}>
                <p>Thời gian đăng</p>
                <Image
                  width={23}
                  height={23}
                  src={"/img/next_dropdown.svg"}
                  alt={""}
                  onClick={handleonClick}
                />
              </div>
              {time ? (
                <div className={styles.time_post_year}>
                  <ul>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                    <li>Năm 2018</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
