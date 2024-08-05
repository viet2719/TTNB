import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Input, Card, Button, Dropdown, Menu, Space, Modal } from "antd";
import { useRouter } from "next/router";
import { TeamOutlined, UserSwitchOutlined, UserAddOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
const AddFriend = () => {
   const router = useRouter();
   const data = [
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
      {
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
      },
   ];

   //dropdown
   const items = [
      {
         key: "1",
         name: "Nhắn tin",
         img: "/img/before_login/mess.svg",
      },
      {
         key: "2",
         name: "Bỏ theo dõi",
         img: "/img/before_login/unfl.svg",
         subtitle: "Dừng xem bài viết nhưng vẫn là bạn bè",
      },
      {
         key: "3",
         name: "Chặn",
         img: "/img/before_login/block.svg",
         subtitle: (
            <div>
               Bạn bè sẽ không thể nhìn thấy bạn hoặc liên hệ
               <br /> với bạn trên Truyền thông văn hóa
            </div>
         ),
      },
      {
         key: "4",
         name: "Hủy kết bạn",
         img: "/img/before_login/huy.svg",
         subtitle: "Xóa bạn bè khỏi danh sách bạn bè",
      },
   ];
   const [isOnClick, setIsOnClick] = useState(false);
   const handleDropdownClick = (key) => {
      if (key === "1") {
      }
      if (key === "2") {
         hanleFollow();
      }
      if (key === "3") {
         showModalBlock();
      }
      if (key === "4") {
         showModalUnFriend();
      }
   };
   const hanleFollow = () => {};
   const [isModalBlockOpen, setIsModalBlockOpen] = useState(false);
   const handleBlockCancel = () => {
      setIsModalBlockOpen(false);
   };

   const showModalBlock = () => {
      setIsModalBlockOpen(true);
   };
   const [isModalUnFriendOpen, setIsModalUnFriendOpen] = useState(false);
   const handleUnFriendCancel = () => {
      setIsModalUnFriendOpen(false);
   };

   const showModalUnFriend = () => {
      setIsModalUnFriendOpen(true);
   };
   const menuDrop = (
      <Menu onClick={({ key }) => handleDropdownClick(key)}>
         {items.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.img} preview={false} className={styles.drop_img} />
                        <div className={styles.menu_flex}>
                           <div>{item.name}</div>
                           <div className={styles.menu_subtitle}>{item.subtitle}</div>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.left_all}>
                  <div className={styles.left_content} onClick={() => router.push("/friend")}>
                     <div className={styles.left_icon}>
                        <TeamOutlined />
                     </div>
                     <p className={styles.left_p}>Tổng quan</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/addFiend")}>
                     <div className={styles.left_icon2}>
                        <UserSwitchOutlined />
                     </div>
                     <p className={styles.left_p2}>Lời mời kết bạn</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/suggest")}>
                     <div className={styles.left_icon3}>
                        <UserAddOutlined />
                     </div>
                     <p className={styles.left_p3}>Gợi ý</p>
                  </div>
                  <div className={styles.left_content} onClick={() => router.push("/friend/allFriend")}>
                     <div className={styles.left_icon4}>
                        <UserOutlined />
                     </div>
                     <p className={styles.left_p4}>Tất cả bạn bè</p>
                  </div>
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.search}>
                  <Input
                     className={styles.inputSearch}
                     placeholder="Tìm kiếm bạn bè "
                     size="large"
                     suffix={
                        <SearchOutlined
                           style={{
                              cursor: "pointer",
                              width: "20px",
                           }}
                           rev={undefined}
                        />
                     }
                  />
               </div>
               <div className={styles.right_none}>
                  <div className={styles.right_btn}>
                     <button className={styles.right_btn1} onClick={() => router.push("/friend")}>
                        Tổng quan
                     </button>
                     <button className={styles.right_btn2} onClick={() => router.push("/friend/addFiend")}>
                        Lời mời kết bạn
                     </button>
                     <button className={styles.right_btn3} onClick={() => router.push("/friend/suggest")}>
                        Gợi ý
                     </button>
                     <button className={styles.right_btn4} onClick={() => router.push("/friend/allFriend")}>
                        Tất cả bạn bè
                     </button>
                  </div>
               </div>
               <div className={styles.add_friend}>
                  <p className={styles.add_p}>Tất cả bạn bè(1234 người bạn)</p>
               </div>
               <div className={styles.all_card}>
                  {data.map((item, key) => {
                     return (
                        <Card
                           key={key}
                           className={`thuc_card ${styles.card}`}
                           style={{
                              width: 280,
                           }}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <div className={styles.drop}>
                              <p className={styles.name}>{item.name}</p>
                              <Dropdown overlay={menuDrop} className={`thuc_drop ${styles.thuc_drop}`} trigger={["click"]} placement="bottomRight">
                                 <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                       <Image alt="/" src={"/img/before_login/more.svg"} width={15} height={18} preview={false} />
                                    </Space>
                                 </a>
                              </Dropdown>
                           </div>
                           <p className={styles.friend}>{item.friend}</p>
                        </Card>
                     );
                  })}
               </div>
            </div>
            <div>
               <Modal className={`thuc_block ${styles.modal_block}`} title="Chặn Thức Đẹp Trai" open={isModalBlockOpen} onCancel={handleBlockCancel} footer={null}>
                  <div className={styles.block}>
                     <p className={styles.block_p1}>Bạn có chắc muốn chặn Thức Đẹp Trai?</p>
                     <p className={styles.block_p2}>Thức Đẹp Trai sẽ không thể:</p>
                     <ul className={styles.block_ul}>
                        <li>Xem bài viết trên dòng thời gian của bạn</li>
                        <li>Gắn thẻ bạn</li>
                        <li>Mời bạn tham gia sự kiện hoặc nhóm</li>
                        <li>Nhắn tin cho bạn</li>
                        <li>Thêm bạn làm bạn bè</li>
                     </ul>
                     <p className={styles.block_p3}>Nếu các bạn là bạn bè, việc chặn Thức Đẹp Trai cũng sẽ hủy kết bạn với anh ấy.</p>
                     <p>Nếu bạn chỉ muốn giới hạn nội dung mình chia sẻ với Thức Đẹp Trai hoặc ẩn bớt nội dung về anh ấy hơn trên Truyền thông văn hóa, bạn có thể giảm tương tác với anh ấy.</p>
                  </div>
                  <div className={styles.modal_block_btn}>
                     <Button onClick={handleBlockCancel} className={styles.btn_block_cancer}>
                        Hủy
                     </Button>
                     <Button className={styles.btn_block_save}>Xác nhận</Button>
                  </div>
               </Modal>
            </div>
            <div>
               <Modal className={`thuc_unf ${styles.modal_unf}`} title="Hủy kết bạn" open={isModalUnFriendOpen} onCancel={handleUnFriendCancel} footer={null}>
                  <div className={styles.unf}>
                     <p className={styles.unf_p}>Bạn có chắc chắn muốn xóa Thức Đẹp Trai khỏi danh sách bạn bè không?</p>
                  </div>
                  <div className={styles.modal_block_btn}>
                     <Button onClick={handleUnFriendCancel} className={styles.btn_block_cancer}>
                        Hủy
                     </Button>
                     <Button className={styles.btn_block_save}>Xác nhận</Button>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};

export default AddFriend;
