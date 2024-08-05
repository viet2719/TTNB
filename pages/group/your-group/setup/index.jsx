import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal, Image, Menu, Button, Input, Switch, Dropdown, Form } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import Head from "next/head";
const SetUp = () => {
   //modal mô tả
   const [isModalDescribeOpen, setIsModalDescribeOpen] = useState(false);
   const showModalDescribe = () => {
      setIsModalDescribeOpen(true);
   };
   const handleDescribeCancel = () => {
      setIsModalDescribeOpen(false);
   };
   //modal giới thiệu
   const [isModalIntroduceOpen, setIsModalIntroduceOpen] = useState(false);
   const [isHide, setIsHide] = useState(true);
   const [isNone, setIsNone] = useState(false);
   const [reverse, setReverse] = useState(true);
   const showModalIntroduce = () => {
      setIsModalIntroduceOpen(true);
   };
   const handleIntroduceCancel = () => {
      setIsModalIntroduceOpen(false);
   };
   const settingIntroduce = () => {
      setIsHide(false);
      setIsNone(true);
   };
   const endIntroduce = () => {
      setIsHide(true);
      setIsNone(false);
   };
   //modal quyền riêng tư
   const [isModalPermissionOpen, setIsModalPermissionOpen] = useState(false);
   const showModalPermission = () => {
      setIsModalPermissionOpen(true);
   };
   const handlePermissionCancel = () => {
      setIsModalPermissionOpen(false);
   };
   //modal ẩn nhóm
   const [isModalHideOpen, setIsModalHideOpen] = useState(false);
   const showModalHide = () => {
      setIsModalHideOpen(true);
   };
   const handleHideCancel = () => {
      setIsModalHideOpen(false);
   };
   //vị trí
   const itemsDrop = [
      {
         key: "1",
         name: "Hà Nội",
      },
      {
         key: "2",
         name: "TP HCM",
      },
      {
         key: "3",
         name: "Thanh Hóa",
      },
      {
         key: "4",
         name: "Ninh Bình",
      },
   ];

   const [searchText, setSearchText] = useState("");
   const [filteredItems, setFilteredItems] = useState(itemsDrop);

   const handleSearch = (e) => {
      const value = e.target.value.toLowerCase();
      setSearchText(value);

      const filtered = itemsDrop.filter((item) => item.name.toLowerCase().includes(value));
      setFilteredItems(filtered);
   };
   const handleInputClick = (e) => {
      e.stopPropagation();
   };
   const menuDrop = (
      <Menu>
         <Menu.Item key="search">
            <div>
               <Input placeholder="Tìm kiếm vị trí" value={searchText} onChange={handleSearch} onClick={handleInputClick} />
            </div>
         </Menu.Item>
         {filteredItems.map((item) => (
            <Menu.Item key={item.key}>
               <p>{item.name}</p>
            </Menu.Item>
         ))}
      </Menu>
   );

   //modal quản lí thành viên
   const [isModalMemberOpen, setIsModalMemberOpen] = useState(false);
   const showModalMember = () => {
      setIsModalMemberOpen(true);
   };
   const handleMemberCancel = () => {
      setIsModalMemberOpen(false);
   };

   //modal ai có thể đăng
   const [isModalPostOpen, setIsModalPostOpen] = useState(false);
   const showModalPost = () => {
      setIsModalPostOpen(true);
   };
   const handlePostCancel = () => {
      setIsModalPostOpen(false);
   };
   //modal phê duyệt
   const [isModalApproveOpen, setIsModalApproveOpen] = useState(false);
   const showModalApprove = () => {
      setIsModalApproveOpen(true);
   };
   const handleApproveCancel = () => {
      setIsModalApproveOpen(false);
   };
   //modal chỉnh sửa
   const [isModalEditOpen, setIsModalEditOpen] = useState(false);
   const showModalEdit = () => {
      setIsModalEditOpen(true);
   };
   const handleEditCancel = () => {
      setIsModalEditOpen(false);
   };
   //modal bình luận
   const [isModalCommenttOpen, setIsModalCommenttOpen] = useState(false);
   const showModalCommentt = () => {
      setIsModalCommenttOpen(true);
   };
   const handleCommenttCancel = () => {
      setIsModalCommenttOpen(false);
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
               <h2>Cài đặt nhóm</h2>
            </div>
         </div>
         <Head>
            <title>Cài đặt nhóm</title>
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
                  <h2>Thiết lập nhóm</h2>
                  <div className={styles.header_content}>
                     <p className={styles.p}>Tên và mô tả</p>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalDescribe} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Phần giới thiệu thành viên mới</p>
                        <p className={styles.content_p}>Tắt</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/select.svg" onClick={showModalIntroduce} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Quyền riêng tư</p>
                        <p className={styles.content_p}>Công khai</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/select.svg" onClick={showModalPermission} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Ẩn nhóm</p>
                        <p className={styles.content_p}>Hiển thị</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalHide} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <p className={styles.p}>Vị trí</p>
                     <div className={styles.img}>
                        <Dropdown overlay={menuDrop} placement="bottomRight" trigger="click">
                           <div>
                              <Image alt="" preview={false} src="/img/group/pen.svg" />
                           </div>
                        </Dropdown>
                     </div>
                  </div>
               </div>
               <div className={styles.content}>
                  <h2>Quản lý thành viên</h2>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Ai có thể phê duyệt yêu cầu làm thành viên</p>
                        <p className={styles.content_p}>Chỉ quản trị viên và người kiểm duyệt</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalMember} />
                     </div>
                  </div>
               </div>
               <div className={styles.content}>
                  <h2>Nội dung thảo luận</h2>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Ai có thể đăng</p>
                        <p className={styles.content_p}>Bất cứ ai trong nhóm</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalPost} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Phê duyệt mọi bài viết của thành viên</p>
                        <p className={styles.content_p}>Bật</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalApprove} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Phê duyệt nội dung chỉnh sửa</p>
                        <p className={styles.content_p}>Bật</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalEdit} />
                     </div>
                  </div>
                  <div className={styles.header_content}>
                     <div>
                        <p className={styles.p}>Sắp xếp bình luận</p>
                        <p className={styles.content_p}>Theo mặc định</p>
                     </div>
                     <div className={styles.img}>
                        <Image alt="" preview={false} src="/img/group/pen.svg" onClick={showModalCommentt} />
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <Modal className={`thuc_modal`} title="Từ chối kềm theo ý kiến đóng góp" open={isModalDescribeOpen} onCancel={handleDescribeCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <Input type="text" placeholder="Tên hội nhóm"></Input>
                        <textarea name="" id="" cols="10" rows="05" placeholder="Mô tả" className={styles.textarea}></textarea>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleDescribeCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Phần giới thiệu" open={isModalIntroduceOpen} onCancel={handleIntroduceCancel} footer={null}>
                     <div>
                        {isHide && (
                           <div className={styles.modal_container}>
                              <h3>Hiển thị thông điệp giới thiệu</h3>
                              <div className={styles.content_btn}>
                                 <p className={styles.content_pp}>Thành viên sẽ nhìn thấy thông điệp giới thiệu vào lần đầu tiên truy cập nhóm của bạn sau khi họ tham gia.</p>
                                 <Switch size="small" checked={reverse} onChange={setReverse} />
                              </div>
                              <Button className={`thuc_btn_green`} onClick={settingIntroduce}>
                                 Chỉnh sửa thông điệp
                              </Button>
                           </div>
                        )}
                        {isNone && (
                           <div className={styles.modal_container}>
                              <textarea name="" id="" cols="10" rows="05" placeholder="Mô tả" className={styles.textarea}></textarea>
                              <div className={styles.content_btn}>
                                 <h3>Hiển thị quy tắc sau thông điệp giới thiệu</h3>
                                 <Switch size="small" checked={reverse} onChange={setReverse} />
                              </div>
                              <div className={styles.btn}>
                                 <Button className={`btn_cancer`} onClick={endIntroduce}>
                                    Hủy
                                 </Button>
                                 <Button className={`btn_ok`}>Lưu</Button>
                              </div>
                           </div>
                        )}
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Quyền riêng tư" open={isModalPermissionOpen} onCancel={handlePermissionCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <div className={styles.header_fl}>
                              <Image alt="" src="/img/group/earth.png" preview={false} />
                              <div>
                                 <p className={styles.p}>Công khai</p>
                                 <p>
                                    Tất cả mọi người nhìn thấy bài đăng
                                    <br /> trong nhóm của bạn.
                                 </p>
                              </div>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div className={styles.header_fl}>
                              <Image alt="" src="/img/group/lock.svg" preview={false} />
                              <div>
                                 <p className={styles.p}>Riêng tư</p>
                                 <p>
                                    Chỉ thành viên mới nhìn thấy mọi <br />
                                    người trong nhóm và những gì họ đăng
                                 </p>
                              </div>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handlePermissionCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Ẩn nhóm" open={isModalHideOpen} onCancel={handleHideCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <div className={styles.header_fl}>
                              <Image alt="" src="/img/group/eye.png" preview={false} />
                              <div>
                                 <p className={styles.p}>Hiển thị</p>
                                 <p>Ai cũng có thể tìm nhóm này.</p>
                              </div>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div className={styles.header_fl}>
                              <Image alt="" src="/img/group/mm.svg" preview={false} />
                              <div>
                                 <p className={styles.p}>Đã ẩn</p>
                                 <p>Chỉ thành viên mới tìm nhóm này.</p>
                              </div>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleHideCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Ai có thể phê duyệt yêu cầu thành viên" open={isModalMemberOpen} onCancel={handleMemberCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <p className={styles.p}>Chỉ quản trị viên và người kiểm duyệt</p>

                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Bất cứ ai trong nhóm</p>
                              <p>
                                 Thành viên chỉ có thể phê duyệt yêu cầu
                                 <br /> của bạn bè
                              </p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleMemberCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Ai có thể đăng" open={isModalPostOpen} onCancel={handlePostCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <p className={styles.p}>Bất cứ ai trong nhóm</p>

                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <p className={styles.p}>Chỉ quản trị viên</p>

                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handlePostCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Phê duyệt bài viết của thành viên" open={isModalApproveOpen} onCancel={handleApproveCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Bật</p>
                              <p>
                                 Bài viết của thành viên phải được quản
                                 <br /> trị viên hoặc người kiểm duyệt phê duyệt
                              </p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Tắt</p>
                              <p>Thành viên có thể trực tiếp đăng lên nhóm</p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleApproveCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Phê duyệt bài nội dung chỉnh sửa" open={isModalEditOpen} onCancel={handleEditCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Bật</p>
                              <p>
                                 Bài viết của thành viên phải được quản trị viên
                                 <br /> hoặc người kiểm duyệt phê duyệt
                              </p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Tắt</p>
                              <p>Thành viên có thể trực tiếp đăng lên nhóm</p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleEditCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
               <div>
                  <Modal className={`thuc_modal`} title="Sắp xếp bình luận" open={isModalCommenttOpen} onCancel={handleCommenttCancel} footer={null}>
                     <div className={styles.modal_container}>
                        <p>Đây sẽ là cài đặt mặc định. Thành viên vẫn có thể thay đổi cách sắp xếp bình luận họ nhìn thấy trên bài viết cụ thể.</p>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Theo mặc định</p>
                              <p>
                                 Tự động hiển thị bình luận từ mới nhất
                                 <br /> đến cũ nhất.
                              </p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.content_btn}>
                           <div>
                              <p className={styles.p}>Cũ nhất</p>
                              <p>Hiển thị bình luận từ cũ nhất đến mới nhất.</p>
                           </div>
                           <input type="radio" name="visibility" className={styles.radio} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleCommenttCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Lưu</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
            </div>
         </div>
      </>
   );
};

export default SetUp;
