import React from "react";
import { Image, Input } from "antd";
import { LeftOutlined, SearchOutlined } from "@ant-design/icons";

import styles from "./event.module.css";
import TableEvent from "./TableEvent";
import Link from "next/link";

const DoiNgoaiContent: React.FC = () => {
  return (
    <>
      <div className={styles.sukiendoingoai_container}>
        <div className={styles.sukiendoingoai__content}>
          <div className={styles.sukiendoingoai__content__header}>
            <div className={styles.sukiendoingoai__content__header__left}>
              <Link href="/truyenthongnoibo/sukien">
                <LeftOutlined rev={undefined} />
                <span
                  className={styles.sukiendoingoai__content__header__left__text}
                >
                  Sự kiện đối ngoại
                </span>
              </Link>
            </div>
            <div className={styles.sukiendoingoai__content__header__right}>
              <div className={styles.sukiendoingoai__search}>
                <Input
                  className={styles.sukiendoingoai__search__input}
                  placeholder="Tìm kiếm"
                  bordered={false}
                  suffix={<SearchOutlined rev={undefined} />}
                />
              </div>
            </div>
          </div>
          <div className={styles.sukiendoingoai__content__body}>
            <div className={styles.sukiendoingoai__all}>
              <div className={styles.sukiendoingoai__sapdienra}>
                <div
                  className={styles.sukiendoingoai__sapdienra__TotalEventTitle}
                >
                  <p
                    className={
                      styles.sukiendoingoai__sapdienra__TotalEventTitleText
                    }
                  >
                    Sự kiện sắp diễn ra (1)
                  </p>
                </div>
                <div className={`${styles.TableEvent} TableEvent`}>
                  <TableEvent />
                </div>
              </div>
              <div className={styles.sukiendoingoai__ketthuc}>
                <div
                  className={styles.sukiendoingoai__ketthuc__TotalEventTitle}
                >
                  <p
                    className={
                      styles.sukiendoingoai__ketthuc__TotalEventTitleText
                    }
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

export default DoiNgoaiContent;
