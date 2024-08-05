import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import styles from "./layout.module.css";
import Header from "./header/Header";
import HeaderNew from "./newHeader/newHeader";
import NewHeader from "./newHeader/newHeader";
import NewSidebar from "./newHeader/newSidebar/newSidebar";
import Sidebar from "./header/sidebar/sidebar";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isCompanyUrl, setIsCompanyUrl] = useState(false);

  useEffect(() => {
    if (router.pathname.includes("/login")) {
      setIsCompanyUrl(true);
    } else if (router.pathname.includes("/tutorial")) {
      setIsCompanyUrl(true);
    } else {
      setIsCompanyUrl(false);
    }
  }, [router.pathname]);
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const closePopover = () => {
    setShowPopover(false);
  };
  const renderHeader = () => {
    if (isCompanyUrl) {
      return null;
    } else {
      const pagesWithNewHeader = [
        "/settings",
        // "/truyenthongnoibo/trangcongty",
        // "/truyenthongnoibo/nhomthaoluan",
        // "/truyenthongnoibo/sinhnhat",
      ];
      if (pagesWithNewHeader.includes(router.pathname)) {
        return <NewHeader collapsed={false} />;
      } else {
        return <Header />;
      }
    }
  };
  const renderNavbar = () => {
    const pagesWithNewSidebar = [
      "/setting",
    ];

    if (pagesWithNewSidebar.includes(router.pathname)) {
      return <Sidebar closePopover={closePopover} />;
    } else {
      return null;
    }
  };

  return (
    <div
      className="main"
      style={{
        overflow: "hidden",
      }}
    >
      <div className={styles.body}>
        <div className={styles.header}>{renderHeader()}</div>
        <div
          className={`${styles.content} ${renderNavbar() ? "flex-container" : ""
            }`}
        >
          <div className={`${styles.navbar} navbar `}>
            <div className={`${styles.nav} nav `}>{renderNavbar()}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
