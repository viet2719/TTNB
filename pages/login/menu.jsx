import React from "react";
import styles from "./index.module.css";
import { Image } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon1, Icon8 } from "../../components/header/iconheader";
const Menunav = () => {
   const pathname = usePathname();
   return (
      <>
         <div className={styles.MenuSidebar}>
            <Menu
               mode="inline"
               id="NavMenu"
               defaultSelectedKeys={["1"]}
               theme="dark"
               items={[
                  {
                     label: (
                        <Link className={pathname === "/" ? styles.MenuItemActive : styles.MenuItem} href="/">
                           Trang chủ
                        </Link>
                     ),
                     key: "1",
                     icon: <Icon1 />,
                  },
                  {
                     label: (
                        <Link className={styles.MenuItem} href="">
                           Hướng dẫn
                        </Link>
                     ),
                     key: "huongdan",
                     icon: <Image height={29} width={30} alt="/" src={"/img/before_login/menu2.png"} preview={false} />,
                  },
                  {
                     label: (
                        <Link className={styles.MenuItem} href="">
                           Tin tức
                        </Link>
                     ),
                     key: "tintuc",
                     icon: <Image height={29} width={30} alt="/" src={"/img/before_login/menu3.png"} preview={false} />,
                  },
                  {
                     label: (
                        <Link className={styles.MenuItem} href="">
                           Chuyển đối số
                        </Link>
                     ),
                     key: "chuyendoiso",
                     icon: <Icon8 />,
                  },
                  {
                     label: (
                        <Link className={styles.MenuItem} href="">
                           Đăng nhập
                        </Link>
                     ),
                     key: "dangnhap",
                     icon: <Image height={29} width={30} alt="/" src={"/img/before_login/menu5.png"} preview={false} />,
                  },
                  {
                     label: (
                        <Link className={styles.MenuItem} href="">
                           Đăng ký
                        </Link>
                     ),
                     key: "dangky",
                     icon: <Image height={29} width={30} alt="/" src={"/img/before_login/menu6.png"} preview={false} />,
                  },
               ]}
            />
         </div>
      </>
   );
};
export default Menunav;
