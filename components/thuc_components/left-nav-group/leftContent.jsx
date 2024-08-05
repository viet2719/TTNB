import React, { useState, useEffect, useRef } from "react";
import styles from "./leftnav.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Image, Menu } from "antd";
import { useRouter } from "next/router";
const LeftContent = () => {
   const router = useRouter();
   const [selectedLink, setSelectedLink] = useState("");
   const leftNavRef = useRef(null);
   const handleLinkClick = (path) => {
      router.push(path);
   };
   useEffect(() => {
      setSelectedLink(router.pathname);
   }, [router.pathname]);
   useEffect(() => {
      if (leftNavRef.current) {
         const leftNavBottom = leftNavRef.current.getBoundingClientRect().bottom;
         const selectedLinkElement = document.querySelector(`.${styles.selectedLink}`);
         if (selectedLinkElement) {
            const selectedLinkBottom = selectedLinkElement.getBoundingClientRect().bottom;
            if (selectedLinkBottom > leftNavBottom) {
               leftNavRef.current.scrollIntoView({ behavior: "smooth" });
            }
         }
      }
   }, [selectedLink]);
   return (
      <>
         <div className={styles.left_all}>
            <div onClick={() => router.push("/group/your-group")}>
               <h2>
                  <ArrowLeftOutlined /> Nhóm Fan MU Việt Nam
               </h2>
            </div>
            <div className={styles.your_content}>
               <h3>Nội dung của bạn</h3>
               <p>Quản lý và xem bài viết của bạn trong nhóm này.</p>
               <p>Quản trị viên và người kiểm duyệt có thể đóng góp ý kiến</p>
            </div>

            <div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/content-group/posted" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/content-group/posted")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/feed.svg"} />
                  </div>
                  <p className={styles.left_p3}>Đã đăng</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/content-group/unpined" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/content-group/unpined")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/deletegr.svg"} />
                  </div>
                  <p className={styles.left_p3}>Đã gỡ kèm theo ý kiến</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/content-group/calender-group" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/content-group/calender-group")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln6.png"} />
                  </div>
                  <p className={styles.left_p3}>Đã lên lịch</p>
               </div>
            </div>
         </div>
      </>
   );
};
export default LeftContent;
