import React, { useState } from "react";
import { Button, Image, Input } from "antd";
import { LeftOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import Link from "next/link";
import TableEvent from "@/components/Event/TableEvent";
import Head from "next/head";
import TruyenThongNoiBo from "../..";
import ModalJoinEvent from "@/components/dat/Modal/TTNB/ModalJoinEvent";
import ModalViewDetail from "@/components/dat/Modal/TTNB/ModalViewDetail";

const NoiBoContent: React.FC = () => {
  const childrenContentLeft = (
    <div className={styles.sukiennoibo_container}>
      <div className={styles.sukiennoibo__content}>
        <div className={styles.sukiennoibo__content__header}>
          <div className={styles.sukiennoibo__content__header__left}>
            <Link href="/truyenthongnoibo/sukien">
              <LeftOutlined rev={undefined} />
              <span className={styles.sukiennoibo__content__header__left__text}>
                Sự kiện nội bộ
              </span>
            </Link>
          </div>
          <div className={styles.sukiennoibo__content__header__right}>
            <div className={styles.sukiennoibo__search}>
              <Input
                className={styles.sukiennoibo__search__input}
                placeholder="Tìm kiếm"
                bordered={false}
                suffix={<SearchOutlined rev={undefined} />}
              />
            </div>
          </div>
        </div>
        <div className={styles.sukiennoibo__content__body}>
          <div className={styles.sukiennoibo__all}>
            <div className={styles.sukiennoibo__sapdienra}>
              <div className={styles.sukiennoibo__sapdienra__TotalEventTitle}>
                <p
                  className={styles.sukiennoibo__sapdienra__TotalEventTitleText}
                >
                  Sự kiện sắp diễn ra (1)
                </p>
              </div>
              <div className={`${styles.TableEvent} TableEvent`}>
                <TableEvent />
              </div>
            </div>
            <div className={styles.sukiennoibo__ketthuc}>
              <div className={styles.sukiennoibo__ketthuc__TotalEventTitle}>
                <p className={styles.sukiennoibo__ketthuc__TotalEventTitleText}>
                  Sự kiện đã kết thúc (1)
                </p>
              </div>
              <div className={`${styles.TableEvent} TableEvent`}>
                <TableEvent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const [isModalJoinEventOpen, setIsModalJoinEventOpen] = useState(false);
  const [isModalViewDetailOpen, setIsModalViewDetailOpen] = useState(false);

  const handleModalJoinEventOpen = () => {
    setIsModalJoinEventOpen(true);
  };

  const handleModalViewDetailOpen = () => {
    setIsModalViewDetailOpen(true);
  };

  const childrenContentRight = (
    <div className={styles.containerRight}>
      <div className={styles.RItem}>
        <div className={styles.RTitle}>
          <p className={styles.RTitleText}>a</p>
        </div>
        <div className={styles.RContent}>
          <p>
            Nội dung sự kiện: <span>a</span>
          </p>
          <p>
            Vị trí đăng sự kiện:{" "}
            <span>PHÒNG 3: PHÒNG KỸ THUẬT SỐ 3- Đ/C THU HẰNG</span>
          </p>
          <p>Thành viên tham gia</p>
          <p>Danh sách câu hỏi trong sự kiện</p>
        </div>
        <div className={styles.RFooter}>
          <Button
            className={styles.RFooterButtonJoin}
            onClick={handleModalJoinEventOpen}
          >
            Tham gia
          </Button>
          <Button
            className={styles.RFooterButtonView}
            onClick={handleModalViewDetailOpen}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>

      <ModalJoinEvent
        open={isModalJoinEventOpen}
        onClose={() => setIsModalJoinEventOpen(false)}
      />
      <ModalViewDetail
        open={isModalViewDetailOpen}
        onClose={() => setIsModalViewDetailOpen(false)}
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>Sự Kiện Nội Bộ</title>
      </Head>
      <TruyenThongNoiBo
        childrenContentLeft={childrenContentLeft}
        childrenContentRight={childrenContentRight}
        keyduocchon={"3"}
      />
    </>
  );
};

export default NoiBoContent;
