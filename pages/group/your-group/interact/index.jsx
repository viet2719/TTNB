import React from "react";
import styles from "./index.module.css";
import { Tabs, Dropdown, Image } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import Head from "next/head";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Interact = () => {
   const dataChart = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Bài viết",
            data: [0, 6, 4, 12, 2, 8, 4],
            fill: false,
            borderColor: "#ffa800",
         },
      ],
   };
   const dataChartComment = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Bình luận",
            data: [3, 6, 2, 12, 6, 8, 4],
            fill: false,
            borderColor: "#ffa800",
         },
      ],
   };
   const dataChartFeel = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Cảm xúc",
            data: [3, 8, 4, 9, 7, 8, 6],
            fill: false,
            borderColor: "#ffa800",
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
   const dataChartMember = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Thành viên",
            data: [0, 6, 4, 7, 4, 0, 4],
            fill: false,
            borderColor: "#ffa800",
         },
      ],
   };
   const optionMember = {
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
   const onChange = (key) => {
      console.log(key);
   };
   const itemsTabs = [
      {
         key: "1",
         label: "Bài viết",
         children: <Line data={dataChart} options={options} />,
      },
      {
         key: "2",
         label: "Bình luận",
         children: <Line data={dataChartComment} options={options} />,
      },
      {
         key: "3",
         label: "Cảm xúc",
         children: <Line data={dataChartFeel} options={options} />,
      },
   ];
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
               <h2>Tương tác</h2>
            </div>
         </div>
         <Head>
            <title>Tương tác</title>
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
                  <input type="date" className={styles.date} />
                  <input type="date" className={styles.date} />
               </div>

               <div className={styles.tabs}>
                  <h2>Bài viết</h2>
                  <Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange} />
               </div>

               <div className={styles.line}>
                  <h2>Thành viên hoạt động </h2>
                  <Line data={dataChartMember} options={optionMember} />
               </div>
            </div>
         </div>
      </>
   );
};
export default Interact;
