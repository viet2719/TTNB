import React, { useState, useEffect, useRef } from "react";
import styles from "./leftnav.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Image, Menu } from "antd";
import { useRouter } from "next/router";
const LeftNav = () => {
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
            <div onClick={() => router.push("/group")}>
               <p className={styles.left_group_p}>
                  <ArrowLeftOutlined /> Nhóm
               </p>
            </div>
            <div>
               <div className={styles.my_group}>
                  <Image alt="/" src={"/img/group/mu2.jpg"} style={{ borderRadius: "8px" }} width={50} height={50} preview={false} />
                  <div>
                     <p className={styles.left_p3}>Fan MU Việt Nam</p>
                     <p>1 tr thành viên</p>
                  </div>
               </div>
            </div>
            <div className={styles.left_allcontent}>
               <div className={`${styles.left_content} ${selectedLink === "/group/your-group" ? styles.selectedLink : ""}`} onClick={() => handleLinkClick("/group/your-group")} ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln1.png"} />
                  </div>
                  <p className={styles.left_p3}>Trang chủ cộng đồng</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/overview" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/overview")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln2.png"} />
                  </div>
                  <p className={styles.left_p3}>Tổng quan</p>
               </div>
            </div>
            <div className={styles.left_allcontent2}>
               <p className={styles.p_qt}>Công cụ quản trị</p>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/add-member" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/add-member")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln3.png"} />
                  </div>
                  <div className={styles.left_all_flex}>
                     <p className={styles.left_p3}>Yêu cầu làm thành viên</p>
                     <p>10 yêu cầu mới ngày hôm nay</p>
                  </div>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/question" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/question")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln4.png"} />
                  </div>
                  <p className={styles.left_p3}>Câu hỏi chọn thành viên</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/posts-waiting" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/posts-waiting")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln5.png"} />
                  </div>
                  <p className={styles.left_p3}>Bài viết đang chờ</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/posts-calender" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/posts-calender")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln6.png"} />
                  </div>
                  <p className={styles.left_p3}>Bài viết đã lên lịch</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/rule" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/rule")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln7.png"} />
                  </div>
                  <p className={styles.left_p3}>Quy tắc nhóm</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/report" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/report")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln8.png"} />
                  </div>
                  <div className={styles.left_all_flex}>
                     <p className={styles.left_p3}>Nội dung thành viên báo cáo</p>
                     <p>0 tin mới ngày hôm nay</p>
                  </div>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/setup" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/setup")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln9.png"} />
                  </div>
                  <div className={styles.left_all_flex}>
                     <p className={styles.left_p3}>Cài đặt nhóm</p>
                     <p>Quản lý cuộc thảo luận, quyền, vai trò</p>
                  </div>
               </div>
            </div>
            <div className={styles.left_allcontent}>
               <p className={styles.p_qt}>Thông tin chi tiết</p>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/growth" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/growth")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln10.png"} />
                  </div>
                  <p className={styles.left_p3}>Mức độ tăng trưởng</p>
               </div>
               <div
                  className={`${styles.left_content} ${selectedLink === "/group/your-group/interact" ? styles.selectedLink : ""}`}
                  onClick={() => handleLinkClick("/group/your-group/interact")}
                  ref={leftNavRef}>
                  <div className={styles.left_icon3}>
                     <Image alt="/" src={"/img/group/ln11.png"} />
                  </div>
                  <p className={styles.left_p3}>Tương tác</p>
               </div>
            </div>
         </div>
      </>
   );
};
export default LeftNav;
