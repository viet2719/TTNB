import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Image, Input, Dropdown, Modal, Menu, Button, Tabs, Popover, message, Switch, Select } from "antd";
import { useRouter } from "next/router";
import { CameraOutlined, CloseOutlined } from "@ant-design/icons";
import Discuss from "./home/discuss";
import Member from "./home/member";
import PinStatus from "./home/pin-status";
import VideoHd from "./home/videohd";
import Colection from "./home/colection";
import File from "./home/file";
import ShareNewFeed from "../../../components/thuc_components/shareGroup/shareNewfeed/shareNewFeed";
import ShareFriend from "../../../components/thuc_components/shareGroup/shareNewfeed/shareFriend";
import Head from "next/head";
import LeftNavGroup from "../../../components/thuc_components/left-nav/leftNavGroup";
const App = () => {
   //modal chia sẻ bảng tin
   const [isModalShareNewFeed, setIsModalShareNewFeed] = useState(false);
   const showShareNewFeed = () => {
      setIsModalShareNewFeed(true);
   };
   const handleShareNewFeedCancel = () => {
      setIsModalShareNewFeed(false);
   };
   //modal chia sẻ chat
   const [isModalShareMessenger, setIsModalShareMessenger] = useState(false);
   const showShareMessenger = () => {
      setIsModalShareMessenger(true);
   };
   const handleShareMessengerCancel = () => {
      setIsModalShareMessenger(false);
   };
   //modal chia sẻ bạn bè
   const [isModalShareFriend, setIsModalShareFriend] = useState(false);
   const showShareFriend = () => {
      setIsModalShareFriend(true);
      setIsModalInviteFriendOpen(false);
   };
   const handleShareFriendCancel = () => {
      setIsModalShareFriend(false);
   };
   //modal cài đặt thông báo
   const [isModalNotificalOpen, setIsModalNotificalOpen] = useState(false);
   const showModalNotifical = () => {
      setIsModalNotificalOpen(true);
   };
   const handleNotificalCancel = () => {
      setIsModalNotificalOpen(false);
   };

   const itemNofical = [
      {
         key: "1",
         name: "Tất cả bài viết",
         subtitle: "Mọi bài viết trong nhóm",
      },
      {
         key: "2",
         name: "Bài viết nổi bật",
         subtitle: "Bài viết của bạn bè và bài viết gợi ý",
      },
      {
         key: "3",
         name: "Bài viết của bạn bè",
         subtitle: "Chỉ bài viết của bạn bè",
      },
      {
         key: "4",
         name: "Tắt",
         subtitle: (
            <p>
               Chỉ những lượt nhắc và cập nhật quan trọng về cài đặt
               <br /> hoặc quyền riêng tư của nhóm
            </p>
         ),
      },
   ];
   const [selectedTime, setSelectedTime] = useState("");
   const [reverse, setReverse] = useState(true);
   const handleRadioChange = (name) => {
      setSelectedTime(name);
   };

   //modal cài đặt Unfollow
   const [isModalUnfollowOpen, setIsModalUnfollowOpen] = useState(false);
   const showModalUnfollow = () => {
      setIsModalUnfollowOpen(true);
   };
   const handleUnfollowCancel = () => {
      setIsModalUnfollowOpen(false);
   };
   const handleNotificalOk = () => {
      setFollow("on");
      setIsModalUnfollowOpen(false);
   };
   const router = useRouter();
   //tabs

   const itemstabs = [
      {
         key: "1",
         label: "Thảo luận",
         children: <Discuss />,
      },
      {
         key: "2",
         label: "Bài viết đã ghim",
         children: <PinStatus />,
      },
      {
         key: "3",
         label: "Video",
         children: <VideoHd />,
      },
      {
         key: "4",
         label: "Thành viên",
         children: <Member />,
      },
      {
         key: "5",
         label: "File phương tiện",
         children: <Colection />,
      },
      {
         key: "6",
         label: "File",
         children: <File />,
      },
   ];

   //datapopover
   const dataDrop = [
      {
         key: "1",
         img: "/img/group/share.svg",
         label: "Chia sẻ ngay",
      },
      {
         key: "2",
         img: "/img/group/sharefd.svg",
         label: "Chia sẻ lên bảng tin",
      },
      {
         key: "3",
         img: "/img/group/mess.svg",
         label: "Gửi bằng chat",
      },
      {
         key: "4",
         img: "/img/group/share_friend.svg",
         label: "Chia sẻ lên trang cá nhân của bạn bè",
      },
      {
         key: "5",
         img: "/img/group/copy.svg",
         label: "Sao chép liên kết",
      },
   ];
   const content = (
      <Menu onClick={({ key }) => handleDropdownClick(key)}>
         {dataDrop.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.img} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <p>{item.label}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );

   const handleDropdownClick = (key) => {
      if (key === "1") {
         alert("Chia sẻ nhóm thành công");
      }
      if (key === "2") {
         showShareNewFeed();
      }
      if (key === "3") {
         showShareMessenger();
      }
      if (key === "4") {
         showModalInviteFriend();
      }
      if (key === "5") {
         message.success("Sao chép liên kết thành công", 2);
      }
   };
   //data chi tiết
   const [pinGroup, setPinGroup] = useState("on");
   const [follow, setFollow] = useState("on");
   const [isOpenSharePopover, setIsOpenSharePopover] = useState(false);
   const menuOption = [
      {
         key: "1",
         icon: "/img/group/dot1.svg",
         text: "Nội dung của bạn",
      },
      {
         key: "2",
         icon: pinGroup === "on" ? "/img/group/dot21.svg" : "/img/group/dot22.svg",
         text: pinGroup === "on" ? "Bỏ ghim nhóm" : "Ghim nhóm",
      },
      {
         key: "3",
         icon: "/img/group/dot3.svg",
         text: (
            <Dropdown placement="bottomRight" overlay={content} trigger="click" arrow={false}>
               <div> Chia sẻ</div>
            </Dropdown>
         ),
      },
      {
         key: "4",
         icon: "/img/group/dot4.svg",
         text: "Cài đặt thông báo",
      },
      {
         key: "5",
         icon: follow === "on" ? "/img/group/dot5.svg" : "/img/group/bo-theo-doi.svg",
         text: follow === "on" ? "Theo dõi nhóm" : "Bỏ theo dõi nhóm",
      },
      {
         key: "6",
         icon: "/img/group/dot7.svg",
         text: "Rời khỏi nhóm",
      },
      {
         key: "7",
         icon: "/img/group/dot8.svg",
         text: "Tìm kiếm",
      },
   ];
   const menuDrop = (
      <Menu onClick={({ key }) => handlePopoverClick(key)}>
         {menuOption.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.icon} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <p>{item.text}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   const handlePopoverClick = (key) => {
      setIsOpenSharePopover(false);
      if (key === "1") {
         router.push("/group/content-group/posted");
      }
      if (key === "2") {
         if (pinGroup === "on") {
            alert("Bỏ ghim nhóm thành công");
            setPinGroup("off");
         } else {
            alert("Ghim nhóm thành công");
            setPinGroup("on");
         }
      }
      if (key === "4") {
         showModalNotifical();
      }
      if (key === "5") {
         if (follow === "on") {
            alert("Theo dõi nhóm thành công");
            setFollow("off");
         } else {
            showModalUnfollow();
         }
      }
      if (key === "6") {
         showModalOut();
      }
   };
   const operations = (
      <Popover
         content={menuDrop}
         placement="bottomLeft"
         trigger="click"
         open={isOpenSharePopover}
         onOpenChange={() => {
            setIsOpenSharePopover(!isOpenSharePopover);
         }}>
         <Image
            src="/img/group/dot.png"
            alt="icon"
            width={40}
            height={40}
            preview={false}
            style={{
               cursor: "pointer",
               marginRight: "10px",
               transform: "rotate(90deg)",
            }}
         />
      </Popover>
   );
   //data invited
   const data = [
      {
         id: 1,
         img: "/img/group/mu1.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: 2,
         img: "/img/group/mu2.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: 3,
         img: "/img/group/mu3.jpg",
         name: "Thức Đẹp Trai",
      },
      {
         id: 4,
         img: "/img/group/mu4.jpg",
         name: "Thức Đẹp Trai",
      },
   ];
   const initialCheckedItems = [];
   const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

   useEffect(() => {
      setCheckedItems(initialCheckedItems);
   }, []);
   const [isModalInviteOpen, setIsModalInviteOpen] = useState(false);
   const handleInviteCancel = () => {
      setIsModalInviteOpen(false);
   };
   const showModalInvite = () => {
      setIsModalInviteOpen(true);
   };

   const dataListGroup = [
      {
         key: 1,
         img: "/img/group/tq5.jpg",
         name: "Nguyễn Hoàng Việt",
         imgGr: "/img/group/mu4.jpg",
         grName: "Fan MU Việt Nam",
      },
      {
         key: 2,
         img: "/img/group/tq4.jpg",
         name: "Nguyễn Thế Đạt",
         imgGr: "/img/group/mu3.jpg",
         grName: "Manchester United",
      },
      {
         key: 3,
         img: "/img/group/tq3.jpg",
         name: "Nguyễn Văn Thức",
         imgGr: "/img/group/mu2.jpg",
         grName: "Fan MU Hà Nội",
      },
      {
         key: 4,
         img: "/img/group/tq2.jpg",
         name: "Nguyễn Thế Anh",
         imgGr: "/img/group/mu1.jpg",
         grName: "abc",
      },
      {
         key: 5,
         img: "/img/group/tq1.jpg",
         name: "Nguyễn Việt Hoàng",
         imgGr: "/img/group/mu4.jpg",
         grName: "TTNB",
      },
   ];
   const [buttonStates, setButtonStates] = useState(dataListGroup.map(() => false));

   const handleButtonClick = (index) => {
      const newButtonStates = [...buttonStates];
      newButtonStates[index] = !newButtonStates[index];
      setButtonStates(newButtonStates);
   };
   const [searchValue, setSearchValue] = useState("");
   const [filteredDataListGroup, setFilteredDataListGroup] = useState(dataListGroup);

   const handleInputChange = (event) => {
      const value = event.target.value.toLowerCase();
      setSearchValue(value);
      const filteredGroups = dataListGroup.filter((item) => item.grName.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredDataListGroup(filteredGroups);
   };

   //modal share friend
   const [isModalInviteFriendOpen, setIsModalInviteFriendOpen] = useState(false);
   const handleInviteFriendCancel = () => {
      setIsModalInviteFriendOpen(false);
   };
   const showModalInviteFriend = () => {
      setIsModalInviteFriendOpen(true);
   };

   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftNavGroup />
               </div>
            </div>
         ),
      },
   ];
   const [isModalOutOpen, setIsModalOutOpen] = useState(false);
   const showModalOut = () => {
      setIsModalOutOpen(true);
   };
   const handleOutCancel = () => {
      setIsModalOutOpen(false);
   };
   const [followed, setFollowed] = useState("on");
   const dataSelect = [
      {
         key: "1",
         icon: "/img/group/ring.svg",
         text: "Cài đặt thông báo",
      },
      {
         key: "2",
         icon: followed === "on" ? "/img/group/dot5.svg" : "/img/group/bo-theo-doi.svg",
         text: followed === "on" ? "Theo dõi nhóm" : "Bỏ theo dõi nhóm",
      },
      {
         key: "3",
         icon: "/img/group/dot7.svg",
         text: "Rời khỏi nhóm",
      },
   ];
   const menuSelect = (
      <Menu onClick={({ key }) => handleSelectClick(key)}>
         {dataSelect.map((item) => (
            <>
               <Menu.Item key={item.key}>
                  <>
                     <div className={styles.menu_drop}>
                        <Image alt="/" src={item.icon} preview={false} className={`drop_img`} />
                        <div className={styles.menu_flex}>
                           <p>{item.text}</p>
                        </div>
                     </div>
                  </>
               </Menu.Item>
            </>
         ))}
      </Menu>
   );
   const handleSelectClick = (key) => {
      if (key === "1") {
         showModalNotifical();
      }
      if (key === "2") {
         if (followed === "on") {
            alert("Theo dõi nhóm thành công");
            setFollowed("off");
         } else {
            alert("Bỏ dõi nhóm thành công");
            setFollowed("on");
         }
      }
      if (key === "3") {
         showModalOut();
      }
   };
   return (
      <>
         <div className={styles.container}>
            <Head>
               <title>Nhóm bạn đã tham gia</title>
               <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
            </Head>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNavGroup />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.right_header}>
                  <div className={`right_img ${styles.right_img}`}>
                     <Image
                        alt="/"
                        className={`img_banner ${styles.img_header}`}
                        src="/img/group/tq5.jpg"
                        preview={false}
                        style={{
                           Width: "100%",
                        }}
                     />
                  </div>

                  <div className={styles.banner}>
                     <p>Nhóm của Fan MU Việt Nam</p>
                  </div>
                  <div className={styles.banner_content}>
                     <div className={styles.banner_name}>
                        <p className={styles.left_p3}>Fan MU Việt Nam</p>
                        <div className={styles.banner_text}>
                           <p>Nhóm công khai</p>
                           <p className={styles.left_p2}>1 tr thành viên</p>
                        </div>
                        <div className={styles.inv}>
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
                              </div>
                           </div>
                           <Image alt="/" src={"/img/group/mu1.jpg"} style={{ borderRadius: "50%" }} width={70} height={70} preview={false} className={styles.img_none} />
                           <div className={styles.content_fl}>
                              <Dropdown overlay={menuSelect} placement="bottom" trigger="click">
                                 <Button className={`btn_join ${styles.btn_join}`}>
                                    <Image src="/img/group/join.svg" alt="icon" preview={false} />
                                    Đã tham gia
                                    <Image src="/img/group/down.svg" alt="icon" preview={false} />
                                 </Button>
                              </Dropdown>
                              <button className={styles.btn_inv} onClick={showModalInvite}>
                                 + Mời
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className={styles.tabs}>
                        <Tabs tabBarExtraContent={operations} items={itemstabs} />
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.modal_out}`} title="Mời bạn bè" open={isModalInviteOpen} onCancel={handleInviteCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div>
                        <Input placeholder="Tìm kiếm bạn bè" />
                     </div>
                     <div className={styles.banner_fr}>
                        <p className={styles.fr_p}>Bạn bè</p>
                        {data.map((item, index) => {
                           const handleCheckboxChange = (itemId) => {
                              if (checkedItems.includes(itemId)) {
                                 setCheckedItems((prevCheckedItems) => prevCheckedItems.filter((id) => id !== itemId));
                              } else {
                                 setCheckedItems((prevCheckedItems) => [...prevCheckedItems, itemId]);
                              }
                           };

                           return (
                              <div key={index} className={styles.fr}>
                                 <div className={styles.fr_img}>
                                    <Image alt="/" src={item.img} style={{ borderRadius: "50%" }} width={50} height={50} preview={false} />
                                    <p className={styles.fr_name}>{item.name}</p>
                                 </div>
                                 <div>
                                    <input
                                       value={item.id}
                                       onChange={() => handleCheckboxChange(item.id)}
                                       type="checkbox"
                                       style={{ width: "20px", height: "20px" }}
                                       checked={checkedItems.includes(item.id)}
                                    />
                                 </div>
                              </div>
                           );
                        })}
                        <div className={styles.border}>
                           <p>Đã chọn {checkedItems.length} người</p>
                           <div className={styles.border_item}>
                              {checkedItems.map((itemId, index) => {
                                 const selectedItem = data.find((item) => item.id === itemId);
                                 const handleCheckboxCancer = () => {
                                    setCheckedItems((prevSelectedItems) => prevSelectedItems.filter((id) => id !== itemId));
                                 };
                                 return (
                                    <div key={index} className={styles.fr_seclected}>
                                       <Image alt="/" src={selectedItem.img} style={{ borderRadius: "50%" }} width={30} height={30} preview={false} />
                                       <p key={selectedItem.id} className={styles.selectedName}>
                                          {selectedItem.name}
                                       </p>
                                       <CloseOutlined onClick={handleCheckboxCancer} />
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                     <div className={styles.fr_btn}>
                        <Button className={`btn_cancer`} onClick={handleInviteCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Mời</Button>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal ${styles.modal_new}`} title="Gửi bằng chat" open={isModalShareMessenger} onCancel={handleShareMessengerCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.content}>
                        <Image src="/img/group/tq4.jpg" alt="" width={70} height={70} preview={false} style={{ borderRadius: "8px" }} />
                        <div className={styles.content_flex}>
                           <h3> Fan MU Việt Nam </h3>
                           <div className={styles.content_fl}>
                              <p>Nhóm công khai</p>
                              <p>1 tr thành viên</p>
                           </div>
                        </div>
                     </div>
                     <div className={styles.input1}>
                        <Input className={`thuc_input_full`} placeholder="Nhập tin nhắn của bạn"></Input>
                        <Input className={`input_search`} placeholder="Tìm kiếm" value={searchValue} onChange={handleInputChange}></Input>
                     </div>

                     <div className={styles.scroll}>
                        <h3>Gần đây</h3>
                        <div className={styles.scroll_height}>
                           {filteredDataListGroup.map((item, index) => {
                              return (
                                 <div className={styles.recently} key={item.key}>
                                    <div className={styles.recently_fl}>
                                       <Image alt="" src={item.img} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                       <p className={styles.p_new}>{item.name}</p>
                                    </div>
                                    <Button className={`btn_sent`} onClick={() => handleButtonClick(index)}>
                                       {" "}
                                       {buttonStates[index] ? "Gửi" : "Đã gửi"}
                                    </Button>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     <div className={styles.scroll}>
                        <h3>Nhóm</h3>
                        <div className={styles.scroll_height}>
                           {filteredDataListGroup.map((item, index) => {
                              return (
                                 <div className={styles.recently} key={item.key}>
                                    <div className={styles.recently_fl}>
                                       <Image alt="" src={item.imgGr} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                       <p className={styles.p_new}>{item.grName}</p>
                                    </div>
                                    <Button className={`btn_sent`} onClick={() => handleButtonClick(index)}>
                                       {" "}
                                       {buttonStates[index] ? "Gửi" : "Đã gửi"}
                                    </Button>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal ${styles.modal_new}`} title="Chia sẻ lên trang cá nhân bạn bè" open={isModalInviteFriendOpen} onCancel={handleInviteFriendCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <div className={styles.input1}>
                        <Input className={`input_search`} placeholder="Tìm kiếm" value={searchValue} onChange={handleInputChange}></Input>
                     </div>

                     <div className={styles.scroll}>
                        <h3>Tất cả bạn bè</h3>
                        <div className={styles.scroll_friend}>
                           {filteredDataListGroup.map((item) => {
                              return (
                                 <div className={styles.recently} key={item.key}>
                                    <div className={styles.recently_fl}>
                                       <Image alt="" src={item.img} width={50} height={50} style={{ borderRadius: "50%" }} preview={false} />
                                       <p className={styles.p_new}>{item.name}</p>
                                    </div>
                                    <div className={styles.img} onClick={showShareFriend}>
                                       <Image alt="" src="/img/group/drop_right.svg" preview={false}></Image>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal `} title="Cài đặt thông báo" open={isModalNotificalOpen} onCancel={handleNotificalCancel} footer={null}>
                  <div className={styles.modal_container_notifical}>
                     {itemNofical.map((item) => {
                        return (
                           <div className={styles.madal_input} key={item.key}>
                              <div className={styles.modal_fl}>
                                 <h3>{item.name}</h3>
                                 <p>{item.subtitle}</p>
                              </div>
                              <input type="radio" checked={selectedTime === item.name} onChange={() => handleRadioChange(item.name)} className={styles.input} />
                           </div>
                        );
                     })}
                     <div className={styles.madal_input}>
                        <div className={styles.modal_fl}>
                           <h3>Thông báo về yêu cầu làm thành viên</h3>
                           <p>Thông báo về yêu cầu làm thành viên</p>
                        </div>
                        <Switch size="small" checked={reverse} onChange={setReverse} />
                     </div>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNotificalCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Lưu</Button>
                     </div>
                  </div>
               </Modal>
               <Modal className={`thuc_modal `} title="Bỏ theo dõi nhóm" open={isModalUnfollowOpen} onCancel={handleUnfollowCancel} footer={null}>
                  <div className={styles.modal_container_notifical}>
                     <p>Bạn có chắc muốn bỏ theo dõi nhóm Fan MU Việt Nam không?</p>
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleUnfollowCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`} onClick={handleNotificalOk}>
                           Xác nhận
                        </Button>
                     </div>
                  </div>
               </Modal>

               <div>
                  <Modal className={`thuc_modal`} title="Rời khỏi nhóm" open={isModalOutOpen} onCancel={handleOutCancel} footer={null}>
                     <div className={styles.modal_container_notifical}>
                        <h3>Bạn chắc chắn muốn rời khỏi nhóm Fan MU Việt Nam</h3>
                        <div className={styles.reverse}>
                           <p>Ngăn mọi người mời bạn tham gia nhóm này</p>
                           <Switch size="small" checked={reverse} onChange={setReverse} />
                        </div>
                        <div className={styles.btn}>
                           <Button className={`btn_cancer`} onClick={handleOutCancel}>
                              Hủy
                           </Button>
                           <Button className={`btn_ok`}>Rời khỏi nhóm</Button>
                        </div>
                     </div>
                  </Modal>
               </div>
            </div>
            <ShareNewFeed isOpen={isModalShareNewFeed} isClose={handleShareNewFeedCancel} />
            <ShareFriend isOpen={isModalShareFriend} isClose={handleShareFriendCancel} />
         </div>
      </>
   );
};

export default App;
