import {
  BellFilled,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  Input,
  Menu,
  Image,
  Button,
  Popover,
  Table,
  Divider,
  Drawer,
} from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./index.module.scss";

import SideBar from "@/components/header/sidebar/sidebar";
import AddQuestion from "@/components/dat/traodoicauhoi/addQuestion/addQuestion";
import MostKnowledgeableMembers from "@/components/dat/Table/TraoDoiCauHoi/MostKnowledgeableMembers";
import MostActiveMembers from "@/components/dat/Table/TraoDoiCauHoi/MostActiveMembers";
import MostQuestionsAsked from "@/components/dat/Table/TraoDoiCauHoi/MostQuestionsAsked";
import EditQuestionModal from "@/components/dat/Modal/traodoicauhoi/EditQuestion/EditQuestionModal";
import DeleteQuestionModal from "@/components/dat/Modal/traodoicauhoi/DeleteQuestion/DeleteQuestionModal";
import TurnOnNotificationModal from "@/components/dat/Modal/traodoicauhoi/TurnOnNotification/TurnOnNotificationModal";
import DeleteCommentModal from "@/components/dat/Modal/traodoicauhoi/DeleteComment/DeleteCommentModal";
import Head from "next/head";
import SideBarNew from "@/components/header/sidebarNew/sidebarNew";

interface DataType {
  key: string;
  stt: number;
  name: string;
  count: number;
}

const mostKnowledgeableData: DataType[] = [
  {
    key: "1",
    stt: 1,
    name: "Công ty Cổ phần Thanh toán Hưng Hà",
    count: 32,
  },
  {
    key: "2",
    stt: 2,
    name: "Nguyễn Thế Đạt",
    count: 42,
  },
  {
    key: "3",
    stt: 3,
    name: "Nguyễn Hoàng Việt",
    count: 32,
  },
  {
    key: "4",
    stt: 4,
    name: "Nguyễn Văn Thức",
    count: 42,
  },
];

const mostActiveData = [
  {
    key: "1",
    stt: 1,
    name: "Nguyễn Thế Đạt",
    count: 42,
  },
  {
    key: "2",
    stt: 2,
    name: "Nguyễn Hoàng Việt",
    count: 32,
  },
  {
    key: "3",
    stt: 3,
    name: "Nguyễn Văn Thức",
    count: 42,
  },
];

const mostQuestionsData = [
  {
    key: "1",
    stt: 1,
    name: "Nguyễn Thế Đạt",
    count: 42,
  },
  {
    key: "2",
    stt: 2,
    name: "Nguyễn Hoàng Việt",
    count: 32,
  },
  {
    key: "3",
    stt: 3,
    name: "Nguyễn Văn Thức",
    count: 42,
  },
];
const SelectOptions = [
  {
    key: "1",
    value: "Wiki",
    img: "/img/QTTT/wiki.png",
  },
  {
    key: "2",
    value: "Trao đổi - Đặt câu hỏi",
    img: "/img/QTTT/traodoicauhoi.png",
  },
  {
    key: "3",
    value: "Câu hỏi của tôi",
    img: "/img/QTTT/cauhoicuatoi.png",
  },
];

export default function TraoDoiCauHoi() {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SelectOptions[1]);
  const [openModalEditQuestion, setOpenModalEditQuestion] = useState(false);
  const [openModalDeleteQuestion, setOpenModalDeleteQuestion] = useState(false);
  const [openModalTurnOnNotification, setOpenModalTurnOnNotification] =
    useState(false);
  const [openModalEditComment, setOpenModalEditComment] = useState(false);
  const [openModalDeleteComment, setOpenModalDeleteComment] = useState(false);

  const [questionOptionsOpen, setQuestionOptionsOpen] = useState(false);
  const [commentOptionsOpen, setCommentOptionsOpen] = useState(false);

  const handleMouseEnter = () => {
    setSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubMenuOpen(false);
  };

  const handleMenuClick = (option: any) => {
    setSelectedOption(option);
    setSubMenuOpen(false);

    if (option.key === "1") {
      router.push("/quantritrithuc/wiki");
    }
    if (option.key === "2") {
      router.push("/quantritrithuc/traodoicauhoi");
    }
    if (option.key === "3") {
      router.push("/quantritrithuc/traodoicauhoi");
    }
  };

  const remainingOptions = SelectOptions.filter(
    (option) => option.key !== selectedOption.key
  );

  const sortedData = [...mostKnowledgeableData].sort(
    (a, b) => b.count - a.count
  );
  const sttArray = sortedData.map((item, index) => ({
    ...item,
    stt: index + 1,
  }));

  const openEditQuestionModal = () => {
    setOpenModalEditQuestion(true);
    setQuestionOptionsOpen(false);
  };

  const closeEditQuestionModal = () => {
    setOpenModalEditQuestion(false);
  };

  const openDeleteQuestionModal = () => {
    setOpenModalDeleteQuestion(true);
    setQuestionOptionsOpen(false);
  };

  const closeDeleteQuestionModal = () => {
    setOpenModalDeleteQuestion(false);
  };

  const openTurnOnNotificationModal = () => {
    setOpenModalTurnOnNotification(true);
    setQuestionOptionsOpen(false);
  };

  const closeTurnOnNotificationModal = () => {
    setOpenModalTurnOnNotification(false);
  };

  //comment

  const openEditCommentModal = () => {
    setOpenModalEditComment(true);
    setCommentOptionsOpen(false);
  };

  const closeEditCommentModal = () => {
    setOpenModalEditComment(false);
  };

  const openDeleteCommentModal = () => {
    setOpenModalDeleteComment(true);
    setCommentOptionsOpen(false);
  };

  const closeDeleteCommentModal = () => {
    setOpenModalDeleteComment(false);
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <div>
      <Head>
        <title>Trao đổi câu hỏi</title>
      </Head>
      <div className={`${styles.TDCHContainer} QTTTContainer flex`}>
        <div className={`${styles.sidebar}`}>
          <SideBarNew closePopover={closePopover} />
        </div>
        <div className={`${styles.subSidebar}`}></div>
        <div className={`${styles.TDCHContent} `}>
          <div className={`${styles.TDCHContentBody} flex`}>
            <div className={`${styles.TDCHContentBodyLeft} `}>
              <div className={`${styles.TDCHSearchInput} `}>
                <Input
                  placeholder="Tìm kiếm sách"
                  suffix={<SearchOutlined rev={undefined} />}
                  className={styles.searchInput}
                  size="large"
                />
              </div>
              <div className={`${styles.TDCHContentBodyLeftHeader} `}>
                <AddQuestion />
              </div>
              <div className={`${styles.TDCHContentBodyLeftContainer} `}>
                <div>
                  <div
                    className={`${styles.TDCHContentBodyLeftContentInfo} flex flex-space-between`}
                  >
                    <div
                      className={`${styles.TDCHContentBodyLeftContentInfoUser} flex `}
                    >
                      <Image
                        src="/img/c.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                        preview={false}
                        className={
                          styles.TDCHContentBodyLeftContentInfoUserAvatar
                        }
                      />
                      <div
                        className={`${styles.TDCHContentBodyLeftContentInfoUserText} `}
                      >
                        <div
                          className={`${styles.TDCHContentBodyLeftContentInfoUserTextName} flex `}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                              marginRight: "5px",
                            }}
                          >
                            Nguyễn Thế Đạt
                            <span
                              style={{
                                fontWeight: "normal",
                                marginLeft: "5px",
                              }}
                            >đã đăng một câu hỏi</span>
                          </p>
                        </div>
                        <div
                          className={`${styles.TDCHContentBodyLeftContentInfoUserTextTime} flex `}
                        >
                          <p>08:50</p>
                          <p>04/10/2023</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.TDCHContentBodyLeftContentOption} cursor-pointer `}
                    >
                      <Popover
                        placement="bottomRight"
                        arrow={false}
                        open={questionOptionsOpen}
                        onOpenChange={setQuestionOptionsOpen}
                        content={
                          <div className={styles.ContentCommentItemOptionList}>
                            <p
                              className={`${styles.ContentCommentItemOptionListItem} cursor-pointer`}
                              onClick={openEditQuestionModal}
                            >
                              <EditOutlined rev={undefined} />
                              <p>Chỉnh sửa câu hỏi</p>
                            </p>
                            <p
                              className={`${styles.ContentCommentItemOptionListItem} cursor-pointer`}
                              onClick={openTurnOnNotificationModal}
                            >
                              <BellFilled rev={undefined} />
                              <p>Bật thông báo</p>
                            </p>
                            <p
                              className={`${styles.ContentCommentItemOptionListItem} cursor-pointer`}
                              onClick={openDeleteQuestionModal}
                            >
                              <DeleteOutlined rev={undefined} />
                              <p> Xóa câu hỏi</p>
                            </p>
                          </div>
                        }
                        trigger="click"
                      >
                        <Image
                          src="/img/QTTT/3cham.png"
                          alt="3cham"
                          preview={false}
                          className={styles.TDCHContentBodyLeftContentOptionImg}
                        />
                      </Popover>
                    </div>
                  </div>
                  <div
                    className={`${styles.TDCHContentBodyLeftContentQuestion} `}
                  >
                    <p>Hello</p>
                    <div
                      className={`${styles.TDCHContentBodyLeftContentQuestionFile} flex flex-space-between flex-align-center cursor-pointer`}
                    >
                      <div className={styles.infoFile}>
                        <p>JD-DE-LA-SÓL.pdf</p>
                        <div
                          className="flex"
                          style={{ gap: "10px", fontSize: "12px" }}
                        >
                          <p>1.2MB</p>
                          <p>08:50 04/10/2023</p>
                        </div>
                      </div>
                      <Image
                        src="/img/QTTT/icon_download.svg"
                        alt="file"
                        preview={false}
                        className={
                          styles.TDCHContentBodyLeftContentQuestionFileImg
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.TDCHContentBodyLeftContentAnswer} flex flex-space-between `}
                  >
                    <div
                      className={`${styles.TDCHContentBodyLeftContentAnswerLeft} flex cursor-pointer `}
                    >
                      <Image
                        src="/img/QTTT/traloi.png"
                        alt="Avatar"
                        preview={false}
                        className={
                          styles.TDCHContentBodyLeftContentAnswerUserAvatar
                        }
                      />
                      <p>Trả lời</p>
                    </div>
                    <div
                      className={`${styles.TDCHContentBodyLeftContentAnswerRight} flex flex-end `}
                    >
                      <p>Chưa có câu trả lời</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.TDCHContentBodyLeftContentComment} flex `}
                  >
                    <div
                      className={`${styles.TDCHContentBodyLeftContentCommentAvatar} cursor-pointer `}
                    >
                      <Image
                        src="/img/c.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                        preview={false}
                        className={
                          styles.TDCHContentBodyLeftContentCommentAvatarImg
                        }
                      />
                    </div>
                    <div
                      className={`${styles.TDCHContentBodyLeftContentCommentInput} `}
                    >
                      <Input
                        placeholder="Viết câu trả lời"
                        suffix={<SendOutlined rev={undefined} />}
                        className={styles.commentInput}
                        size="large"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.TDCHContentBodyLeftContentCommentAll} flex `}
                  >
                    <div
                      className={`${styles.TDCHContentBodyLeftContentCommentList} `}
                    >
                      <div
                        className={`${styles.TDCHContentBodyLeftContentCommentItem} flex  `}
                      >
                        <div
                          className={`${styles.TDCHContentBodyLeftContentCommentAvatar} cursor-pointer `}
                        >
                          <Image
                            src="/img/c.png"
                            alt="Avatar"
                            width={50}
                            height={50}
                            preview={false}
                            className={
                              styles.TDCHContentBodyLeftContentCommentItemAvatar
                            }
                          />
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginLeft: "10px",
                          }}
                        >
                          <div className={`${styles.ContentCommentItem} `}>
                            <div
                              className={`${styles.ContentCommentItemInfo} flex flex-space-between `}
                            >
                              <div
                                className={`${styles.ContentCommentItemInfoName} flex `}
                              >
                                <p
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                >
                                  Nguyễn Thế Đạt
                                </p>
                              </div>
                              <div
                                className={`${styles.ContentCommentItemOption} cursor-pointer `}
                              >
                                <Popover
                                  placement="bottomRight"
                                  arrow={false}
                                  open={commentOptionsOpen}
                                  onOpenChange={setCommentOptionsOpen}
                                  content={
                                    <div
                                      className={
                                        styles.ContentCommentItemOptionList
                                      }
                                    >
                                      <p
                                        className={`${styles.ContentCommentItemOptionListItem} cursor-pointer`}
                                        onClick={openEditCommentModal}
                                      >
                                        <EditOutlined rev={undefined} />
                                        <p>Chỉnh sửa bình luận</p>
                                      </p>
                                      <p
                                        className={`${styles.ContentCommentItemOptionListItem} cursor-pointer`}
                                        onClick={openDeleteCommentModal}
                                      >
                                        <DeleteOutlined rev={undefined} />
                                        <p> Xóa bình luận</p>
                                      </p>
                                    </div>
                                  }
                                  trigger="click"
                                >
                                  <Image
                                    src="/img/QTTT/3cham.png"
                                    alt="3cham"
                                    preview={false}
                                    className={
                                      styles.TDCHContentBodyLeftContentOptionImg
                                    }
                                  />
                                </Popover>
                              </div>
                            </div>
                            <div
                              className={`${styles.ContentCommentItemText} `}
                            >
                              <p>đây là bình luận fake</p>
                            </div>
                          </div>
                          <div
                            className={`${styles.ContentCommentItemReaction} flex `}
                          >
                            <div
                              className={`${styles.ContentCommentItemReactionLike} `}
                            >
                              <p className="cursor-pointer">Thích</p>
                            </div>
                            <div
                              className={`${styles.ContentCommentItemReactionReply} `}
                            >
                              <p className="cursor-pointer">Trả lời</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentRightContainer}>
              <div
                className={`${styles.TDCHcontentRight} TDCHcontentRight flex flex-space-between`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.selectContainer}>
                  <div className={`${styles.selectedOption} cursor-pointer`}>
                    <Image
                      src={selectedOption.img}
                      alt={selectedOption.value}
                      preview={false}
                    />
                    <span className={`${styles.optionText} cursor-pointer`}>
                      {selectedOption.value}
                    </span>
                  </div>
                  <Menu
                    style={{ display: subMenuOpen ? "block" : "none" }}
                    onClick={(e) =>
                      handleMenuClick(
                        remainingOptions.find((option) => option.key === e.key)
                      )
                    }
                  >
                    {remainingOptions.map((option) => (
                      <Menu.Item key={option.key}>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={option.img}
                            alt={option.value}
                            preview={false}
                          />
                          <span className={styles.optionText}>
                            {option.value}
                          </span>
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu>
                </div>
                <div className={styles.smallMenu} onClick={showDrawer}>
                  <Image
                    src="/img/QTTT/smallMenu.png"
                    alt="smallMenu"
                    preview={false}
                  />
                </div>
                <Drawer
                  title={
                    <div className="flex flex-end">
                      <Image
                        src="/img/QTTT/smallMenu.png"
                        alt="smallMenu"
                        preview={false}
                      />
                    </div>
                  }
                  placement="right"
                  onClose={onClose}
                  open={openDrawer}
                  width={300}
                >
                  <div className={`${styles.smallMenus} TDCHTablecontentRight`}>
                    <MostKnowledgeableMembers data={sttArray} />
                    <MostActiveMembers data={mostActiveData} />
                    <MostQuestionsAsked data={mostQuestionsData} />
                  </div>
                </Drawer>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "90px",
                }}
              ></div>
              <div
                className={`${styles.TDCHTablecontentRight} TDCHTablecontentRight`}
              >
                <MostKnowledgeableMembers data={sttArray} />
                <MostActiveMembers data={mostActiveData} />
                <MostQuestionsAsked data={mostQuestionsData} />
              </div>
            </div>
          </div>
        </div>
        <EditQuestionModal
          open={openModalEditQuestion}
          onClose={closeEditQuestionModal}
          onConfirm={() => {
            closeEditQuestionModal();
          }}
        />

        <DeleteQuestionModal
          open={openModalDeleteQuestion}
          onClose={closeDeleteQuestionModal}
          onConfirm={() => {
            closeDeleteQuestionModal();
          }}
        />

        <TurnOnNotificationModal
          open={openModalTurnOnNotification}
          onClose={closeTurnOnNotificationModal}
          onConfirm={() => {
            closeTurnOnNotificationModal();
          }}
        />
        <DeleteCommentModal
          open={openModalDeleteComment}
          onClose={closeDeleteCommentModal}
          onConfirm={() => {
            closeDeleteCommentModal();
          }}
        />
      </div>
    </div>
  );
}
