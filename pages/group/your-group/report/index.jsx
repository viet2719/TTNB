import React from "react";
import styles from "./index.module.css";
import { Dropdown, Image, Select, Button } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Head from "next/head";
const Report = () => {
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const data = [
      {
         img: "/img/group/viet.jpg",
         name: "Nguyễn Hoàng Việt",
         user: "Ngọc Trinh",
         option: "Bình luận",
         report: " quấy rối",
         cmt: "xinh quá",
         time: "5 giờ trước",
      },
      {
         img: "/img/group/dat.jpg",
         name: "Nguyễn Thế Đạt",
         user: "Tiêu Viêm",
         option: "Bài viết",
         report: " vi phạm quy tắc nhóm: ABC",
         cmt: "haixxxxx",
         time: "12 ngày trước",
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
               <h2>Thành viên báo cáo</h2>
            </div>
         </div>
         <Head>
            <title>Nội dung thành viên báo cáo</title>
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
                  <div className={styles.header_content}>
                     <h3>Nội dung bị thành viên báo cáo</h3>
                     <div className={styles.header_fl}>
                        <button className={styles.btn_a}>Giữ lại tất cả</button>
                        <button className={styles.btn_b}>Gỡ tất cả</button>
                     </div>
                  </div>
                  <div className={styles.header_flex}>
                     <Select
                        defaultValue="Mới nhất"
                        style={{
                           width: 150,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Mới nhất",
                              label: "Mới nhất",
                           },
                           {
                              value: "Cũ nhất",
                              label: "Cũ nhất",
                           },
                        ]}
                     />
                     <Select
                        defaultValue="Định dạng"
                        style={{
                           width: 250,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Bài viết",
                              label: "Bài viết",
                           },
                           {
                              value: "Bình luận",
                              label: "Bình luận",
                           },
                        ]}
                     />
                  </div>
               </div>
               {data.map((item, index) => {
                  return (
                     <div className={styles.content} key={index}>
                        <p className={styles.content_p}>
                           <span className={styles.span}>{item.user}</span> đã báo cáo <span className={styles.span}>{item.option}</span> này của <span className={styles.span}>{item.name}</span> vì
                           {item.report}
                        </p>
                        <div className={styles.content_fl}>
                           <Image alt="" src={item.img} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                           <div>
                              <h3>{item.name}</h3>
                              <p>{item.time}</p>
                           </div>
                        </div>
                        <p>{item.cmt}</p>
                        <div className={styles.content_btn}>
                           <Button className={`thuc_btn_question_edit`}>Giữ lại</Button>
                           <Button className={`thuc_btn_question_delete`}>Gỡ</Button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default Report;
