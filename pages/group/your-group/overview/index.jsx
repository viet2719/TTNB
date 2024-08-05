import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Menu } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";
import Head from "next/head";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Overview = () => {
   const router = useRouter();
   const data = [
      {
         key: "1",
         text: "Bài viết",
         img: "/img/group/bl1.svg",
         sl: "3",
      },
      {
         key: "2",
         text: "Bình luận",
         img: "/img/group/bl2.svg",
         sl: "5",
      },
      {
         key: "1",
         text: "Cảm xúc",
         img: "/img/group/bl3.svg",
         sl: "7",
      },
   ];

   const dataChart = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Thành viên",
            data: [0, 6, 4, 12, 2, 8, 4],
            fill: false,
            borderColor: "rgba(75,192,192,1)",
         },
      ],
   };
   const options = {
      scales: {
         xAxes: [
            {
               type: "category",
               labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
            },
         ],
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };

   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftNav />
               </div>
            </div>
         ),
      },
   ];
   return (
      <>
         <div className={styles.right_none}>
            <div className={styles.right_menu}>
               <Dropdown
                  menu={{
                     items,
                  }}
                  placement="bottomRight"
                  trigger="click">
                  <Image src="/img/group/menuu.png" alt="icon" width={40} height={40} preview={false} />
               </Dropdown>
               <h2>Tổng quan</h2>
            </div>
         </div>
         <Head>
            <title>Tổng quan</title>
            <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
         </Head>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.header}>
                  <h2>Cần xem xét</h2>
                  <p>Không có thông tin mới hôm nay</p>
                  <div className={styles.right_content}>
                     <div className={styles.right_flex}>
                        <div className={styles.right_img}>
                           <Image alt="" src="/img/group/ln8.png" preview={false} />
                        </div>
                        <div className={styles.right_text}>
                           <h3>Nội dung thành viên báo cáo</h3>
                           <p>0 tin mới hôm nay</p>
                        </div>
                     </div>
                     <div className={styles.right_flex}>
                        <div className={styles.right_img2}>
                           <Image alt="" src="/img/group/ln5.png" preview={false} />
                        </div>
                        <div className={styles.right_text}>
                           <h3>Bài viết đang chờ</h3>
                           <p>0 bài viết mới hôm nay</p>
                        </div>
                     </div>
                     <div className={styles.right_flex}>
                        <div className={styles.right_img3}>
                           <Image alt="" src="/img/group/ln3.png" preview={false} />
                        </div>
                        <div className={styles.right_text}>
                           <h3>Yêu cầu làm thành viên</h3>
                           <p>0 yêu cầu mới hôm nay</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.bottom_left}>
                     <h2>Tóm tắt thông tin chi tiết</h2>
                     <p>Trong 7 ngày qua</p>
                     {data.map((item) => {
                        return (
                           <div className={styles.bottom_left_content} key={item.key}>
                              <div className={styles.bottom_left_flex}>
                                 <Image alt="" src={item.img} preview={false} />

                                 <h3>{item.text}</h3>
                              </div>
                              <p>{item.sl}</p>
                           </div>
                        );
                     })}
                  </div>
                  <div className={styles.bottom_right}>
                     <div>
                        <h2>Thành viên hoạt động tuần qua</h2>
                        <p>Trong 7 ngày qua</p>
                        <div className={styles.line}>
                           <Line data={dataChart} options={options} />
                        </div>
                     </div>
                  </div>
               </div>
               <Button className={`thuc_btn_full`} onClick={() => router.push("/group/your-group/growth")}>
                  Xem thông tin chi tiết về lượt tương tác
               </Button>
            </div>
         </div>
      </>
   );
};
export default Overview;
