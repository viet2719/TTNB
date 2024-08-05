import React from "react";
import { Image, Input } from "antd";
import { LeftOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./event.module.css";
import TableEvent from "./TableEvent";
import Link from "next/link";

const NoiBoContent: React.FC = () => {
  return (
    <>
      <div className={styles.sukiennoibo_container}>
        <div className={styles.sukiennoibo__content}>
          <div className={styles.sukiennoibo__content__header}>
            <div className={styles.sukiennoibo__content__header__left}>
              <Link href="/truyenthongnoibo/sukien">
                <LeftOutlined rev={undefined} />
                <span
                  className={styles.sukiennoibo__content__header__left__text}
                >
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
                    className={
                      styles.sukiennoibo__sapdienra__TotalEventTitleText
                    }
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
                  <p
                    className={styles.sukiennoibo__ketthuc__TotalEventTitleText}
                  >
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
    </>
  );
};

export default NoiBoContent;
