import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Input, Dropdown, Table } from "antd";
import NewFeedContent from "../../../../../components/thuc_components/newFeed/newFeedContent/newFeedContent";

const File = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const handleInputClick = () => {
      setIsModalOpen(true);
   };
   const handleModalClose = () => {
      setIsModalOpen(false);
   };
   const items = [
      {
         key: "1",
         label: "Tải xuống",
      },
      {
         key: "2",
         label: "Xem bài viết",
      },
   ];
   const columns = [
      {
         title: "Tên file",
         key: "name",
         render: (_, record) => (
            <>
               <div className={styles.table_fl}>
                  <Image alt="" src={record?.img} width={25} height={25} preview={false} />

                  <p>{record?.name}</p>
               </div>
            </>
         ),
      },
      {
         title: "Loại",
         dataIndex: "file",
         key: "file",
      },
      {
         title: "Tác giả",
         key: "author",
         render: (_, record) => (
            <>
               <div>
                  <p className={styles.table_p}>{record?.author}</p>
                  <p>{record?.times}</p>
               </div>
            </>
         ),
      },

      {
         title: "",
         key: "action",
         render: (_, record) => (
            <Dropdown
               menu={{
                  items,
               }}
               trigger="click"
               placement="bottomRight"
               arrow>
               <Image alt="" src="/img/group/dot11.svg" preview={false} />
            </Dropdown>
         ),
      },
   ];
   const data = [
      {
         key: "1",
         name: "Cv_xin_viec.pdf",
         file: "Tài liệu",
         author: "Nguyễn Hoàng Việt",
         times: "17:04 23, tháng 09, 2023",
         img: "/img/group/txt.svg",
      },
      {
         key: "2",
         name: "Bao_cao_luong.docx",
         file: "Tài liệu",
         author: "Thức Đẹp Trai",
         times: "15:04 23, tháng 08, 2023",
         img: "/img/group/doc.svg",
      },
      {
         key: "3",
         name: "file_mau_excel.xlsx",
         file: "Tài liệu",
         author: "Nguyễn Thế Đạt",
         times: "12:04 23, tháng 06, 2023",
         img: "/img/group/excel.svg",
      },
   ];
   return (
      <>
         <div className={styles.container}>
            <div className={styles.header}>
               <h2>File</h2>
               <div className={styles.search}>
                  <Input className={`thuc_input_search`} placeholder="Tìm kiếm theo tên file"></Input>
                  <button className={styles.btn_up} onClick={handleInputClick}>
                     Tải file lên
                  </button>
               </div>
            </div>
            <div className={styles.table}>
               <Table className={`thuc_table`} columns={columns} dataSource={data} scroll={{ x: 1000 }} />
            </div>
         </div>
         <NewFeedContent isOpen={isModalOpen} onClose={handleModalClose} />
      </>
   );
};
export default File;
