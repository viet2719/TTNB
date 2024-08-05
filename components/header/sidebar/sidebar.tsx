import { ConfigProvider, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
} from "../iconheader";

interface Props {
  closePopover: () => void;
}

export default function SideBar({ closePopover }: Props): JSX.Element {
  const pathname = usePathname();
  const handleItemClick = () => {
    closePopover();
  };
  return (
    <div className={`${styles.MenuSidebar} ${styles.fixedMenu} MenuSidebar`}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              darkItemBg: "#4c5bd4",
              darkItemHoverBg: "#2e3994",
              darkItemSelectedBg: "#2e3994",
              darkSubMenuItemBg: "#4c5bd4",
              colorText: "black",
            },
          },
        }}
      >
        <Menu
          mode="inline"
          id="NavMenu"
          defaultSelectedKeys={["1"]}
          theme="dark"
          className={`${styles.ItemMenuSidebar} ItemMenuSidebar`}
          items={[
            {
              label: (
                <Link
                  className={
                    pathname === "/" ? styles.MenuItemActive : styles.MenuItem
                  }
                  href="/"
                  onClick={handleItemClick}
                >
                  Trang chủ
                </Link>
              ),
              key: "1",
              icon: <Icon1 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href="/truyenthongnoibo/trangcongty"
                  onClick={handleItemClick}
                >
                  Truyền thông nội bộ
                </Link>
              ),
              key: "truyenthongnoibo",
              icon: <Icon2 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href="/vanhoadoanhnghiep/thutuceo"
                  onClick={handleItemClick}
                >
                  Văn hóa doanh nghiệp
                </Link>
              ),
              key: "vanhoadn",
              icon: <Icon3 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href="/quantritrithuc"
                  onClick={handleItemClick}
                >
                  Quản trị tri thức
                </Link>
              ),
              key: "quantritrithuc",
              icon: <Icon4 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href=""
                  onClick={handleItemClick}
                >
                  Quản lý cuộc họp
                </Link>
              ),
              key: "quanlycuochop",
              icon: <Icon5 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href="/dulieudaxoa"
                  onClick={handleItemClick}
                >
                  Dữ liệu đã xóa gần đây
                </Link>
              ),
              key: "dulieudaxoaganday",
              icon: <Icon6 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href="/setting"
                  onClick={handleItemClick}
                >
                  cài đặt
                </Link>
              ),
              key: "caidat",
              icon: <Icon7 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href=""
                  onClick={handleItemClick}
                >
                  Chuyển đối số 365
                </Link>
              ),
              key: "chuyendoiso",
              icon: <Icon8 />,
            },
            {
              label: (
                <Link
                  className={styles.MenuItem}
                  href=""
                  onClick={handleItemClick}
                >
                  Cài đặt chung
                </Link>
              ),
              key: "caidatchung",
              icon: <Icon9 />,
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
}
