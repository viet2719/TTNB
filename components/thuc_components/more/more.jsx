import React, { useState } from "react";
import styles from "./more.module.css";
import { Image, Button } from "antd";
const MoreIntroduce = () => {
   return (
      <>
         <div className={styles.introducee}>
            <p className={styles.introduce_p}>Giới thiệu</p>
            <div className={styles.introduce_content}>
               <p>Đây là nhóm Fan MU Việt Nam</p>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/earth.png" className={`more_img`} preview={false} />
                  <div>
                     <h3>Công khai</h3>
                     <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                  </div>
               </div>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/eye.png" preview={false} />
                  <div>
                     <h3>Hiển thị</h3>
                     <p>Ai cũng có thể tìm nhóm này.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.introducee}>
            <p className={styles.introduce_p}>Thành viên</p>
            <div className={styles.introduce_content}>
               <div className={styles.introduce_flex2}>
                  <div className={styles.img}>
                     <Image alt="/" src="/img/group/mu1.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                     <Image alt="/" src="/img/group/mu2.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                  </div>
                  <div>
                     <p>Công ty Cổ phần Thanh toán Hưng Hà và 1 người khác đã tham gia nhóm</p>
                  </div>
               </div>
               <div className={styles.introduce_flex2}>
                  <Image alt="/" src="/img/group/mu2.jpg" width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                  <div>
                     <p>Công ty Cổ phần Thanh toán Hưng Hà là quản trị viên.</p>
                  </div>
                  <Button className={`thuc_btn_full`}>Xem tất cả</Button>
               </div>
            </div>
         </div>
         <div className={styles.introducee}>
            <p className={styles.introduce_p}>Hoạt động</p>
            <div className={styles.introduce_content}>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/f1.svg" preview={false} />

                  <p className={styles.p_bold}>Hôm nay có 0 bài viết mới</p>
               </div>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/f2.svg" preview={false} />

                  <p className={styles.p_bold}>Tổng cộng 2 thành viên</p>
               </div>
               <div className={styles.introduce_flex}>
                  <Image alt="/" src="/img/group/f3.svg" preview={false} />

                  <p className={styles.p_bold}>Ngày tạo: 20 ngày trước</p>
               </div>
            </div>
         </div>
         <div className={styles.introducee}>
            <p className={styles.introduce_p}>Quy tắc</p>
            <div className={styles.introduce_content}>
               <div>
                  <div className={styles.introduce_flex}>
                     <p className={styles.p_bold}>1</p>
                     <p className={styles.p_bold}>ABC</p>
                  </div>
                  <p>XYZ</p>
               </div>
               <div>
                  <div className={styles.introduce_flex}>
                     <p className={styles.p_bold}>2</p>
                     <p className={styles.p_bold}>Xong rồi</p>
                  </div>
                  <p>Ok</p>
               </div>
            </div>
         </div>
      </>
   );
};
export default MoreIntroduce;
