import React, { SetStateAction, useRef, useState } from "react";
import ImageTabs from "../../../components/viet_components/TabsImage";
import Head from "next/head";
import x from "./detailAlbum.module.scss";
import { Dropdown, Image, Menu, Popover, message } from "antd";
import TabImage from "@/components/viet_components/TabsImage/TabsImage";
import Edit_album from "@/components/viet_components/TabsImage/Album/Album";
import {
  menuOptionPost,
  menuOptionSharePost,
  dataPost,
} from "@/components/homepage/ContentHome/Post/dataPost";
import {
  CommentOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  StopOutlined,
} from "@ant-design/icons";
import styles from "@/components/homepage/ContentHome/Post/Post.module.css";
import PostComment from "@/components/homepage/ContentHome/Post/PostComment/PostComment";
import OptionPost from "@/components/common/Popover/OptionPost";
import ModalShareOnTime from "@/components/common/Modal/Share/ShareOnTime/ModalShareOnTime";
import ModalShareOnChat from "@/components/common/Modal/Share/ShareOnChat/ModalShareOnChat";
import ModalShareOnGroup from "@/components/common/Modal/Share/ShareOnGroup/ModalShareOnGroup";
import ModalShareOnPage from "@/components/common/Modal/Share/ShareOnPage/ModalShareOnPage";
import ModalSave from "@/components/common/Modal/OptionPost/Save/ModalSave";

import ModalComment from "@/components/common/Modal/OptionPost/ModalComment/ModalComment";

import ModalRegime from "@/components/common/Modal/Regime/ModalRegime";
import ModalNotify from "@/components/common/Modal/OptionPost/ModalNotify/ModalNotify";
import ModalEditPost from "@/components/common/Modal/OptionPost/ModalEditPost/ModalEditPost";
import Link from "next/link";
import ReactionIcons from "@/components/homepage/ContentHome/Post/ReactionIcons/ReactionIcons ";
interface Comment {
  id: number;
  avatar: string;
  name: string;
  content: string;
  timestamp: string;
  day: string;
}

const MODAL_SHARE_NOW = "shareNow";
const MODAL_SHARE_ON_TIME = "shareOnTime";
const MODAL_SHARE_ON_CHAT = "shareOnChat";
const MODAL_SHARE_ON_GROUP = "shareOnGroup";
const MODAL_SHARE_ON_PAGE = "shareOnPage";

const MODAL_OPTION_POST_SAVE = "save";
const MODAL_OPTION_POST_NOTIFY = "notifications";
const MODAL_OPTION_POST_COMMENT = "comment";
const MODAL_OPTION_POST_EDIT = "editPost";
const MODAL_OPTION_POST_EDIT_VIEW = "editView";
function DetailAlbum() {
  const [selectedRegimeData, setSelectedRegimeData] = useState(null);
  const [selectedRegimeTitle, setSelectedRegimeTitle] = useState<string | null>(
    null
  );
  const [selectedRegimeImage, setSelectedRegimeImage] = useState<string | null>(
    null
  );
  const handleRegimeSelect = (selectedRegimeData: any) => {
    setSelectedRegimeData(selectedRegimeData);
    const { title } = selectedRegimeData;
    const { imageSrc } = selectedRegimeData;
    setSelectedRegimeTitle(title);
    setSelectedRegimeImage(imageSrc);
  };
  const closeSelectedModal = () => {
    setSelectedModal(null);
  };
  const [ne, setNe] = useState(false);
  const click = () => {
    setNe(!ne);
  };
  const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
  function handleReplyClick(index: number) {
    setSelectedReplyIndex(index === selectedReplyIndex ? -1 : index);
  }
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const imoji = [
    {
      id: 1,
      imgSrc: "/img/felling/like.svg",
    },
    {
      id: 2,
      imgSrc: "/img/felling/haha.svg",
    },
    {
      id: 3,
      imgSrc: "/img/felling/love 1.svg",
    },
    {
      id: 4,
      imgSrc: "/img/felling/sad 1.svg",
    },
    {
      id: 5,
      imgSrc: "/img/felling/wow 1.svg",
    },
    {
      id: 6,
      imgSrc: "/img/felling/angry 1.svg",
    },
  ];

  const renderModal = () => {
    switch (selectedModal) {
      case MODAL_SHARE_ON_TIME:
        return (
          <ModalShareOnTime
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_CHAT:
        return (
          <ModalShareOnChat
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_GROUP:
        return (
          <ModalShareOnGroup
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_SHARE_ON_PAGE:
        return (
          <ModalShareOnPage
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );

      case MODAL_OPTION_POST_SAVE:
        return (
          <ModalSave
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_NOTIFY:
        return (
          <ModalNotify
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_COMMENT:
        return (
          <ModalComment
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_EDIT:
        return (
          <ModalEditPost
            selectedModal={selectedModal}
            closeSelectedModal={closeSelectedModal}
          />
        );
      case MODAL_OPTION_POST_EDIT_VIEW:
        return (
          <ModalRegime
            isOpen={true}
            onClose={closeSelectedModal}
            onRegimeSelect={handleRegimeSelect}
          />
        );
      default:
        return null;
    }
  };
  const menu = (
    <Menu className={`${styles.menu__sort_popover} menuSortPopover `}>
      <Menu.Item key="1">Mới nhất</Menu.Item>
      <Menu.Item key="2">Cũ nhất</Menu.Item>
    </Menu>
  );
  const [showComments, setShowComments] = useState(false);
  const [areCommentsHidden, setAreCommentsHidden] = useState(false);
  function handleSubmitComment(comment: string) {
    if (comment.trim() !== "") {
      const newComment: Comment = {
        id: commentIdCounter.current++,
        avatar: "/img/c.png",
        name: "Nguyễn Thế Đạt",
        content: comment,
        timestamp: "12:34 PM",
        day: "28/08/2023",
      };
      addComment(newComment);
    }
  }
  const commentIdCounter = useRef(1);
  function addComment(comment: Comment) {
    comment.id = commentIdCounter.current++; // Assign a unique ID
    setComments((prevComments) => [...prevComments, comment]);
  }
  const [comments, setComments] = useState<Comment[]>([]);
  function editComment(commentId: number, newText: string) {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, content: newText } : comment
      )
    );
  }

  function deleteComment(commentId: number) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  }

  function handleEditComment(commentId: number) {
    const newText = prompt("Enter new comment text:"); // You can replace this with your UI for editing
    if (newText !== null) {
      editComment(commentId, newText);
    }
  }
  function handleDeleteComment(commentId: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmDelete) {
      deleteComment(commentId);
    }
  }
  const [isSharePopoverOpen, setIsSharePopoverOpen] = useState(false);
  const [isOptionPopoverOpen, setIsOptionPopoverOpen] = useState(false);

  const [isFirstClick, setIsFirstClick] = useState(false);
  const handleHideShowComments = (commentId: number) => {
    setAreCommentsHidden(!areCommentsHidden);
  };
  function handleCommentClick() {
    setShowComments(!showComments);
  }
  const handlePopoverItemClick = (modal: string) => {
    if (modal === MODAL_SHARE_NOW) {
      message.success("Chia sẻ thành công");
    }
    // else if (modal === MODAL_SHARE_ON_TIME) {
    //     setIsModalShareOTOpen(true);
    // }
    else if (modal === MODAL_OPTION_POST_NOTIFY) {
      if (!isFirstClick) {
        menuOptionPost[1] = {
          key: "notifications",
          icon: (
            <Image
              src="/img/img-OptionPost/ep_post_notify.svg"
              alt="icon"
              width={20}
              height={20}
              preview={false}
            />
          ),
          text: "Bật thông báo mới",
        };
        alert("Tắt thông báo bài viết thành công");
        setIsFirstClick(true);
      } else {
        setSelectedModal(modal);
      }
    } else {
      setSelectedModal(modal);
    }

    setIsSharePopoverOpen(false);
    setIsOptionPopoverOpen(false);
  };
  const [likeCount, setLikeCount] = useState(1);
  const content = (
    <div className={styles.contentPopover}>
      <p className={styles.contentPopover__title}>Thích</p>
      <div className={styles.listUser}>
        <div className={styles.listUser__item}>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
          <Link href="/" className={styles.listUser__item__name}>
            Nguyễn Thế Đạt
          </Link>
        </div>
      </div>
    </div>
  );
  const [selectedImage, setSelectedImage] = useState(
    "/img/img-home/ep_post_active_like.svg"
  );
  function handleImageClick(newImage: SetStateAction<string>) {
    if (newImage !== selectedImage) {
      setSelectedImage(newImage);
      setLikeCount(likeCount + 1);
    }
  }
  const childrens = (
    <div className={x.main}>
      <div className={styles.post__count_reaction}>
        <div className={styles.post__reaction__count_like}>
          <Popover
            placement="bottomLeft"
            content={content}
            trigger="hover"
            arrow={false}
          >
            <Image
              src={selectedImage}
              alt="icon"
              width={25}
              height={25}
              preview={false}
            />
          </Popover>
          <Popover
            placement="bottomLeft"
            content={content}
            trigger="hover"
            arrow={false}
          >
            <p className={styles.post__reaction__count_like__text}>
              {likeCount} <span className={styles.people}>Người</span>
            </p>
          </Popover>
        </div>
        <div className={styles.sum__comment}>
          <div className={styles.post__reaction__count_comment}>
            <Popover
              placement="bottomLeft"
              content={content}
              trigger="hover"
              arrow={false}
            >
              <div
                className={`${styles.post__reaction__count_comment} flex flex-align-center`}
              >
                1.000
                <div className={styles.iconCmt}>
                  <Image
                    src="/img/img-home/ep_post_cmt.svg"
                    alt="icon"
                    preview={false}
                    width={18}
                    height={18}
                    className={styles.iconCmt}
                  />
                </div>
                <div className={styles.cmt}>Bình luận </div>
              </div>
            </Popover>
          </div>

          <div className={styles.post__reaction__count_share}>
            <Popover
              placement="bottomLeft"
              content={content}
              trigger="hover"
              arrow={false}
            >
              <div
                className={`${styles.post__reaction__count_share__text} flex flex-align-center`}
              >
                1.000
                <div className={styles.iconShare}>
                  <Image
                    src="/img/img-home/ep_post_share.svg"
                    alt="icon"
                    preview={false}
                    width={18}
                    height={18}
                    className={styles.iconShare}
                  />
                </div>
                <div className={styles.share}>Lượt chia sẻ </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      {/* <div className={x.comment}>
        <div className={`${x.feeling} ${x.item}`}>
          <Image
            alt="phanh"
            src="/img/TTNB/ep_post_active_like.svg"
            preview={false}
          />
          Thích
          <div className={x.emoji}>
            <div className={x.d_flex}>
              {imoji.map((fell, index) => (
                <div key={index}>
                  <Image
                    width={35}
                    alt="phanh"
                    src={fell.imgSrc}
                    preview={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${x.cmt} ${x.item}`} onClick={handleCommentClick}>
          <Image alt="phanh" src="/img/TTNB/ep_post_cmt.svg" preview={false} />
          Bình luận
        </div>
        <Popover
          placement="bottomRight"
          content={
            <OptionPost
              menuItems={menuOptionSharePost}
              onMenuItemClick={handlePopoverItemClick}
            />
          }
          trigger="click"
          arrow={false}
          open={isSharePopoverOpen}
          onOpenChange={(open) => setIsSharePopoverOpen(open)}
        >
          <div className={styles.post__footer__right}>
            <div className={styles.post__footer__right__icon}>
              <Image
                src="/img/img-home/ep_post_share.svg"
                alt="icon"
                width={28}
                height={28}
                preview={false}
                onClick={() => setIsSharePopoverOpen(!isSharePopoverOpen)}
              />
            </div>
            <div className={styles.post__footer__right__text}>
              <p className={styles.footer_share}>Chia sẻ</p>
            </div>
          </div>
        </Popover>
      </div> */}
      <div className={styles.post__footer}>
        <ReactionIcons
          selectedImage={selectedImage}
          onSelectImage={handleImageClick}
        />
        <div
          className={styles.post__footer__middle}
          onClick={handleCommentClick}
        >
          <div className={styles.post__footer__middle__icon}>
            <Image
              src="/img/img-home/ep_post_cmt.svg"
              alt="icon"
              width={25}
              height={25}
              preview={false}
            />
          </div>
          <div className={styles.post__footer__middle__text}>
            <p className={styles.footer_cmt}>Bình luận</p>
          </div>
        </div>

        <Popover
          placement="bottomRight"
          content={
            <OptionPost
              menuItems={menuOptionSharePost}
              onMenuItemClick={handlePopoverItemClick}
            />
          }
          trigger="click"
          arrow={false}
          open={isSharePopoverOpen}
          onOpenChange={(open) => setIsSharePopoverOpen(open)}
        >
          <div className={styles.post__footer__right}>
            <div className={styles.post__footer__right__icon}>
              <Image
                src="/img/img-home/ep_post_share.svg"
                alt="icon"
                width={28}
                height={28}
                preview={false}
                onClick={() => setIsSharePopoverOpen(!isSharePopoverOpen)}
              />
            </div>
            <div className={styles.post__footer__right__text}>
              <p className={styles.footer_share}>Chia sẻ</p>
            </div>
          </div>
        </Popover>
      </div>

      <PostComment onSubmitComment={handleSubmitComment} />
      {showComments && (
        <div className={styles.comments}>
          <Popover
            content={menu}
            trigger="click"
            arrow={false}
            placement="bottomRight"
          >
            <div className={styles.post__comment_sort}>
              Mới nhất
              <span>
                <DownOutlined
                  rev={undefined}
                  className={styles.post__comment_sort_icon}
                />
              </span>
            </div>
          </Popover>
          {comments.map((comment, index) => (
            <div key={comment.id} className={`${styles.comment}`}>
              <div className={styles.comment__avatar_user}>
                <Image
                  src={comment.avatar}
                  width={40}
                  height={40}
                  preview={false}
                  className={styles.comment__avatar_user_img}
                  alt="avatar"
                />
              </div>
              <div className={`${styles.comment__content} `}>
                <div
                  className={`${styles.comment__content_info} ${
                    areCommentsHidden ? styles.commentHidden : ""
                  } flex flex-space-between flex-align-center`}
                >
                  <div>
                    <p className={styles.comment__name}>{comment.name}</p>
                    <p className={styles.comment__text}>
                      {areCommentsHidden ? "Bình luận đã ẩn" : comment.content}
                    </p>
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="1">
                          <div
                            className={`${styles.itemDropdown} flex`}
                            onClick={() => handleEditComment(comment.id)}
                          >
                            <EditOutlined rev={undefined} />
                            <p>Chỉnh sửa bình luận</p>
                          </div>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <div
                            className={`${styles.itemDropdown} flex`}
                            onClick={() => handleHideShowComments(comment.id)}
                          >
                            {areCommentsHidden ? (
                              <>
                                <CommentOutlined rev={undefined} />
                                <p>Hiện bình luận</p>
                              </>
                            ) : (
                              <>
                                <StopOutlined rev={undefined} />
                                <p>Ẩn bình luận</p>
                              </>
                            )}
                          </div>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <div
                            className={`${styles.itemDropdown} flex`}
                            onClick={() => handleDeleteComment(comment.id)}
                          >
                            <DeleteOutlined rev={undefined} />
                            <p>Xóa bình luận</p>
                          </div>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className={styles.comment__option}>
                      <Image
                        src="/img/VHDN/bacham.png"
                        alt="icon"
                        preview={false}
                        className="cursor-pointer"
                      />
                    </div>
                  </Dropdown>
                </div>
                <div className={styles.comment__content_reaction}>
                  <p className={`${styles.comment__cxuc} cursor-pointer`}>
                    Thích
                  </p>
                  <p
                    className={`${styles.comment__reply} cursor-pointer`}
                    onClick={() => handleReplyClick(index)}
                  >
                    Trả lời
                  </p>

                  <p className={styles.comment__day}>{comment.day}</p>
                  <p>lúc</p>
                  <p className={styles.comment__timestamp}>
                    {comment.timestamp}
                  </p>
                </div>
                {selectedReplyIndex === index && (
                  <PostComment
                    onSubmitComment={handleSubmitComment}
                    parentId={index}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <Edit_album />
      </div>
    </div>
  );
  return (
    <div>
      <Head>
        <title>Chi tiết Album ảnh</title>
      </Head>
      <ImageTabs childrens={childrens} />
    </div>
  );
}

export default DetailAlbum;
