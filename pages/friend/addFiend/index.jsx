import React, { useState } from "react";
import styles from "./index.module.css";
import { Image, Input, Card, Modal, Button } from "antd";
import { useRouter } from "next/router";
import { TeamOutlined, UserSwitchOutlined, UserAddOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
const AddFriend = () => {
   const router = useRouter();
   const [data, setData] = useState([
      {
         id: 1,
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 2,
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 3,
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 4,
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 5,
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 6,
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 7,
         img: "/img/before_login/img2.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
      {
         id: 8,
         img: "/img/before_login/img.jpg",
         name: "Thức Đẹp Trai",
         friend: "666 bạn chung",
         isHide: true,
         isBlock: false,
      },
   ]);
   const handleOk = (index) => {
      const newData = [...data];

      newData[index].isBlock = true;
      newData[index].isHide = false;
      setData(newData);
   };
   const handleUnfriend = (index) => {
      const newData = [...data];
      newData.splice(index, 1); // Xóa thẻ card khỏi danh sách
      setData(newData);
   };
   // xóa
   const [isModalOpen, setIsModaOpen] = useState(false);
   const handleCancel = () => {
      setIsModaOpen(false);
   };

   const showModalOpen = () => {
      setIsModaOpen(true);
   };
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
                  <div>
                     <p className={styles.add_p}>Lời mời kết bạn(22 lời mời kết bạn)</p>
                  </div>
                  <div>
                     <button className={styles.add_btn} onClick={showModalOpen}>
                        Xem lời mời đã gửi
                     </button>
                  </div>
               </div>
               <div className={styles.all_card}>
                  {data.map((item, index) => {
                     return (
                        <Card
                           key={index}
                           className={`thuc_card ${styles.card}`}
                           style={{
                              width: 280,
                           }}>
                           <Image alt="/" src={item.img} height={250} preview={false} />
                           <p className={styles.name}>{item.name}</p>
                           <p className={styles.friend}>{item.friend}</p>
                           {item.isHide && (
                              <div className={styles.friend_btn}>
                                 <button className={styles.btn_acp} onClick={() => handleOk(index)}>
                                    Xác nhận
                                 </button>
                                 <button className={styles.btn_delete} onClick={() => handleUnfriend(index)}>
                                    Xóa
                                 </button>
                              </div>
                           )}
                           {item.isBlock && (
                              <div className={styles.friend_p}>
                                 <p>Đã chấp nhận lời mời kết bạn</p>
                              </div>
                           )}
                        </Card>
                     );
                  })}
               </div>
            </div>
         </div>
         <div>
            <Modal className={`thuc_modal ${styles.modal}`} title="Lời mời đã gửi" open={isModalOpen} onCancel={handleCancel} footer={null}>
               <div className={styles.modal_body}>
                  <p className={styles.p_modal}>68 lời mời đã gửi</p>
                  <div className={styles.modal_container}>
                     <div className={styles.modal_content}>
                        <div>
                           <Image alt="/" src={"/img/before_login/img.jpg"} style={{ borderRadius: "50%" }} width={50} height={50} preview={false} />
                        </div>
                        <div className={styles.modal_p}>
                           <p className={styles.name_modal}>Thức Đẹp Trai</p>
                           <p>888 bạn chung</p>
                        </div>
                     </div>
                     <div>
                        <Button className={styles.modal_btn}>Hủy yêu cầu</Button>
                     </div>
                  </div>
                  <div className={styles.modal_container}>
                     <div className={styles.modal_content}>
                        <div>
                           <Image alt="/" src={"/img/before_login/img2.jpg"} style={{ borderRadius: "50%" }} width={50} height={50} preview={false} />
                        </div>
                        <div className={styles.modal_p}>
                           <p className={styles.name_modal}>Thức Đẹp Trai</p>
                           <p>888 bạn chung</p>
                        </div>
                     </div>
                     <div>
                        <Button className={styles.modal_btn}>Hủy yêu cầu</Button>
                     </div>
                  </div>
                  <div className={styles.modal_container}>
                     <div className={styles.modal_content}>
                        <div>
                           <Image alt="/" src={"/img/before_login/img3.jpg"} style={{ borderRadius: "50%" }} width={50} height={50} preview={false} />
                        </div>
                        <div className={styles.modal_p}>
                           <p className={styles.name_modal}>Thức Đẹp Trai</p>
                           <p>888 bạn chung</p>
                        </div>
                     </div>
                     <div>
                        <Button className={styles.modal_btn}>Hủy yêu cầu</Button>
                     </div>
                  </div>
               </div>
            </Modal>
         </div>
      </>
   );
};

export default AddFriend;
