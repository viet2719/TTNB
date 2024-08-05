import { Tooltip, Image } from "antd";

import styles from "./ContentPostShare.module.css";
import Link from "next/link";
function ContentPostShare() {
  return (
    <div className={styles.contentPostShare}>
      <Image
        src="/img/c.png"
        alt="img"
        preview={false}
        className={styles.contentPostImg}
      />
      <div className={styles.name}>
        <Link href="/">Nguyễn Thế Đạt</Link>
      </div>
      <div className={styles.time}>
        <p>1 phút trước</p>
        <Tooltip title="Công khai" placement="bottomLeft">
          <Image
            src="/img/img-home/regime/regime1.svg"
            alt="icon"
            width={20}
            height={20}
            preview={false}
            className={styles.timeIcon}
          />
        </Tooltip>
      </div>
      <div className={styles.contentPostTitle}>
        <p>
          Chúng ta hãy cùng nhau xây dựng một cộng đồng Truyền thông nội bộ vững
          mạnh
        </p>
      </div>
    </div>
  );
}

export default ContentPostShare;
