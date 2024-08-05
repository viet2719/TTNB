import { Checkbox, Form, Input, Upload, Image, Button, Popover } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import TruyenThongNoiBo from "..";
import AnhBia from "../../../components/AnhBia";
import { SearchOutlined } from "@ant-design/icons";
import Post from "../../../components/Post";
import Head from "next/head";
import BaiVietTTNB from "@/components/baivietTTNB/BaiVietTTNB";
interface DanhSachItem {
  id: number;
  name: string;
  soluong: number;
}

export default function Nhomthaoluan() {
  const danhsach: DanhSachItem[] = [
    { id: 1, name: "Biên tập", soluong: 10 },
    { id: 2, name: "Kinh doanh", soluong: 10 },
    { id: 3, name: "Phòng SEO", soluong: 3 },
    { id: 4, name: "Phòng đào tạo", soluong: 3 },
    { id: 5, name: "Phòng sáng tạo", soluong: 4 },
    { id: 6, name: "Phòng tài vụ", soluong: 3 },
    { id: 7, name: "Phòng nhân sự", soluong: 4 },
  ];
  const member = [
    {
      id: 1,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 2,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
    {
      id: 3,
      name: "Nguyễn Thế Đạt",
      image: "/img/c.png",
      ID: "42134234",
      chucvu: "Thành viên",
    },
  ];
  const [selectedItem, setSelectedItem] = useState<DanhSachItem | null>(
    danhsach.find((item) => item.id === 1) || null
  );
  const handleItemClick = (id: number) => {
    // Tìm mục tương ứng trong danh sách danhsach dựa trên id
    const selectedItem = danhsach.find((item) => item.id === id) || null;
    setSelectedItem(selectedItem);
  };

  const childrenContentLeft = (
    <div className={styles.thutuceoContainer}>
      <div className={styles.thutuceoContainerHeader}>
        {selectedItem && (
          <AnhBia ten={selectedItem.name} soluong={selectedItem.soluong} />
        )}
      </div>
      <div className={`${styles.undefined_search} undefined_search`}>
        <Input
          placeholder="Tìm kiếm bài viết"
          suffix={<SearchOutlined rev={undefined} />}
        />
      </div>
      <div>
        <Post />
      </div>
      <div>
        <BaiVietTTNB />
      </div>
    </div>
  );
  const childrenContentRight = (
    <div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Danh sách nhóm - thảo luận</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <ul>
              {danhsach.map((list, index) => (
                <li
                  key={index}
                  className={styles.list_gr}
                  onClick={() => handleItemClick(list.id)}
                >
                  <p>{list.name}</p>
                  <Image
                    alt="phanh"
                    src={"/img/TTNB/icon_n.png"}
                    preview={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Giới thiệu</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <div className={styles.list_gr}>
              Quản trị: <span className={styles.list_item}>Chưa cập nhật</span>
            </div>
            <div className={styles.list_gr}>
              Quản lý trực tiếp:{" "}
              <span className={styles.list_item}>Chưa cập nhật</span>
            </div>
            <div className={styles.list_gr}>
              Chế độ nhóm: <span className={styles.list_item}>Công khai</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thutuceoContainerContentRight}>
        <div className={styles.thutuceoContainerContentRightHeader}>
          <p>Thành viên ({member.length})</p>
        </div>
        <div className={styles.thutuceoContainerContentRightContent}>
          <div className={styles.thutuceoContainerContentRightContentItem}>
            <div className={styles.thanhvien}>
              {member.map((mem, index) => (
                <div key={index} className={styles.member}>
                  <Popover
                    content={
                      <div className={styles.chitiet}>
                        <div className={styles.chitietmem}>
                          <div className={styles.phanh}>
                            <span>{mem.name}</span>

                            <span>{mem.chucvu}</span>

                            <span>{mem.ID}</span>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <Image
                      width={50}
                      alt="phanh"
                      src={mem.image}
                      preview={false}
                    />
                  </Popover>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Head>
        <title>Nhóm thảo luận</title>
      </Head>
      <TruyenThongNoiBo
        childrenContentLeft={childrenContentLeft}
        childrenContentRight={childrenContentRight}
        keyduocchon="2"
      />
    </>
  );
}
