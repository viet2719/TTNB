import React, { useState } from "react";
import styles from "./dropTwo.module.css";
import { Menu, Image, Dropdown, Button, Modal, Switch, Select } from "antd";

const DropTwo = () => {
   const items = [
      {
         key: "1",
         label: "Đình chỉ trong nhóm",
      },
      {
         key: "2",
         label: "Phê duyệt trước bài viết",
      },
      {
         key: "3",
         label: "Giới hạn hoạt động",
      },
      {
         key: "4",
         label: "Cấm khỏi nhóm",
      },
      {
         key: "5",
         label: "Thêm làm quản trị viên",
      },
      {
         key: "6",
         label: "Thêm làm người kiểm duyệt",
      },
      {
         key: "7",
         label: "Xóa thành viên",
      },
   ];
   //đình chỉ
   const [isModalSuspensionOpen, setIsModalSuspensionOpen] = useState(false);
   const showModalSuspension = () => {
      setIsModalSuspensionOpen(true);
   };
   const handleSuspensionCancel = () => {
      setIsModalSuspensionOpen(false);
   };
   // phê duyệt
   const [isModalApproveOpen, setIsModalApproveOpen] = useState(false);
   const showModalApprove = () => {
      setIsModalApproveOpen(true);
   };
   const handleApproveCancel = () => {
      setIsModalApproveOpen(false);
   };
   const [reverse, setReverse] = useState(true);
   // giới hạn hoạt động
   const [isModalLimitOpen, setIsModalLimitOpen] = useState(false);
   const showModalLimit = () => {
      setIsModalLimitOpen(true);
   };
   const handleLimitCancel = () => {
      setIsModalLimitOpen(false);
   };
   //modal mời làm quản trị viên
   const [isModalInvitedOpen, setIsModalInvitedOpen] = useState(false);
   const showModalInvited = () => {
      setIsModalInvitedOpen(true);
   };
   const handleInvitedCancel = () => {
      setIsModalInvitedOpen(false);
   };
   //modal mời làm người kiểm duyệt
   const [isModalCensorshipOpen, setIsModalCensorshipOpen] = useState(false);
   const showModalCensorship = () => {
      setIsModalCensorshipOpen(true);
   };
   const handleCensorshipCancel = () => {
      setIsModalCensorshipOpen(false);
   };

   // xóa thành viên
   const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
   const showModalDelete = () => {
      setIsModalDeleteOpen(true);
   };
   const handleDeleteCancel = () => {
      setIsModalDeleteOpen(false);
   };

   const handleDropdownClick = (key) => {
      if (key === "1") {
         showModalSuspension();
      }
      if (key === "2") {
         showModalApprove();
      }
      if (key === "3") {
         showModalLimit();
      }
      if (key === "5") {
         showModalInvited();
      }
      if (key === "6") {
         showModalCensorship();
      }
      if (key === "7") {
         showModalDelete();
      }
   };

   const itemTimes = [
      {
         key: "1",
         time: "12 giờ",
      },
      {
         key: "2",
         time: "24 giờ",
      },
      {
         key: "3",
         time: "3 ngày",
      },
      {
         key: "4",
         time: "7 ngày",
      },
      {
         key: "5",
         time: "14 ngày",
      },
      {
         key: "6",
         time: "28 ngày",
      },
   ];
   const [selectedTime, setSelectedTime] = useState("");

   const handleRadioChange = (time) => {
      setSelectedTime(time);
   };
   // select
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   return (
      <>
         <Dropdown
            overlay={
               <Menu onClick={({ key }) => handleDropdownClick(key)}>
                  {items.map((item) => (
                     <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
               </Menu>
            }
            placement="bottomRight"
            trigger="click">
            <div>
               <Image alt="" src="/img/group/more2.svg" preview={false} />
            </div>
         </Dropdown>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Đình chỉ thành viên" open={isModalSuspensionOpen} onCancel={handleSuspensionCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn muốn đình chỉ Nguyễn Thế Đạt trong bao lâu?</h3>
                  <p>Họ sẽ xem được nhóm nhưng không thể đăng bài, bình luận hoặc có hành động khác trong khung thời gian bạn chọn.</p>
                  {itemTimes.map((item) => {
                     return (
                        <div className={styles.madal_input} key={item.key}>
                           <p>{item.time}</p>
                           <input type="radio" checked={selectedTime === item.time} onChange={() => handleRadioChange(item.time)} className={styles.input} />
                        </div>
                     );
                  })}
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleSuspensionCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xác nhận</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Phê duyệt trước bài viết" open={isModalApproveOpen} onCancel={handleApproveCancel} footer={null}>
               <div className={styles.modal_container}>
                  <p>Bạn sắp phê duyệt trước bài viết của thành viên này. Về sau, quản trị viên hoặc người kiểm duyệt sẽ không xem xét bài viết của người này trước khi đăng lên nhóm nữa.</p>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleApproveCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xác nhận</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Giới hạn hoạt động thành viên" open={isModalLimitOpen} onCancel={handleLimitCancel} footer={null}>
               <div className={styles.modal_container}>
                  <p>Bạn có thể dùng những tùy chọn kiểm soát này để giới hạn tần suất đăng bài hoặc bình luận của Dương Mịch trong nhóm này.</p>
                  <div className={styles.madal_content}>
                     <div className={styles.madal_input}>
                        <h3>Giới hạn bài đăng</h3>
                        <Switch size="small" checked={reverse} onChange={setReverse} />
                     </div>
                     <div className={styles.modal_select}>
                        <Select
                           defaultValue="1"
                           style={{
                              width: 120,
                           }}
                           onChange={handleChange}
                           options={[
                              {
                                 value: "1",
                                 label: "1",
                              },
                              {
                                 value: "2",
                                 label: "2",
                              },
                              {
                                 value: "3",
                                 label: "3",
                              },
                              {
                                 value: "4",
                                 label: "4",
                              },
                           ]}
                        />
                        <p>Bài viết trong nhóm mỗi ngày</p>
                     </div>
                     <h3>Hết hạn sau</h3>
                     <Select
                        defaultValue="12 giờ"
                        style={{
                           width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "12 Giờ",
                              label: "12 Giờ",
                           },
                           {
                              value: "24 giờ",
                              label: "24 giờ",
                           },
                           {
                              value: "3 ngày",
                              label: "3 ngày",
                           },
                           {
                              value: "7 ngày",
                              label: "7 ngày",
                           },
                        ]}
                     />
                     <p>Dương Mịch chỉ được đăng 1 bài viết/ngày cho đến 12 giờ sau</p>
                  </div>
                  <div className={styles.madal_content2}>
                     <div className={styles.madal_input}>
                        <h3>Giới hạn bình luận</h3>
                        <Switch size="small" checked={reverse} onChange={setReverse} />
                     </div>
                     <div className={styles.modal_select}>
                        <Select
                           defaultValue="1"
                           style={{
                              width: 120,
                           }}
                           onChange={handleChange}
                           options={[
                              {
                                 value: "1",
                                 label: "1",
                              },
                              {
                                 value: "2",
                                 label: "2",
                              },
                              {
                                 value: "3",
                                 label: "3",
                              },
                              {
                                 value: "4",
                                 label: "4",
                              },
                           ]}
                        />
                        <p>Bình luận trong nhóm mỗi ngày</p>
                     </div>
                     <h3>Hết hạn sau</h3>
                     <Select
                        defaultValue="12 giờ"
                        style={{
                           width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "12 Giờ",
                              label: "12 Giờ",
                           },
                           {
                              value: "24 giờ",
                              label: "24 giờ",
                           },
                           {
                              value: "3 ngày",
                              label: "3 ngày",
                           },
                           {
                              value: "7 ngày",
                              label: "7 ngày",
                           },
                        ]}
                     />
                     <p>Dương Mịch chỉ được đăng 1 bình luận/ngày cho đến 12 giờ sau</p>
                  </div>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleLimitCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xác nhận</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Mời làm quản trị viên" open={isModalInvitedOpen} onCancel={handleInvitedCancel} footer={null}>
               <div className={styles.modal_container}>
                  <p>Nếu Dương Mịch chấp nhận lời mời, Dương Mịch sẽ có thể thêm hoặc xóa quản trị viên và người kiểm duyệt, chỉnh sửa cài đặt nhóm cũng như làm nhiều việc khác.</p>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleInvitedCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Gửi lời mời</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Mời làm người kiểm duyệt" open={isModalCensorshipOpen} onCancel={handleCensorshipCancel} footer={null}>
               <div className={styles.modal_container}>
                  <p>
                     Nếu Dương Mịch chấp nhận lời mời, Dương Mịch sẽ có thể phê duyệt hoặc từ chối yêu cầu làm thành viên, gỡ bài viết và bình luận, xóa thành viên khỏi nhóm cũng như làm nhiều việc
                     khác.
                  </p>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleCensorshipCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Gửi lời mời</Button>
                  </div>
               </div>
            </Modal>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Xóa thành viên" open={isModalDeleteOpen} onCancel={handleDeleteCancel} footer={null}>
               <div className={styles.modal_container}>
                  <h3>Bạn chắc chắn muốn xóa Dương Mịch ra khỏi nhóm</h3>
                  <div className={styles.btn}>
                     <Button className={`btn_cancer`} onClick={handleDeleteCancel}>
                        Hủy
                     </Button>
                     <Button className={`btn_ok`}>Xóa </Button>
                  </div>
               </div>
            </Modal>
         </div>
      </>
   );
};
export default DropTwo;
