import {
  Input,
  Image,
  Button,
  Popover,
  Divider,
  Dropdown,
  Menu,
  MenuProps,
  message,
} from "antd";
import React, { SetStateAction, useRef, useState } from "react";
import styles from "./BaiVietTTNB.module.scss";
import {
  BellFilled,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  StopOutlined,
} from "@ant-design/icons";
import ReactionIcons from "@/components/homepage/ContentHome/Post/ReactionIcons/ReactionIcons ";
import PostComment from "@/components/homepage/ContentHome/Post/PostComment/PostComment";
import Link from "next/link";
import ModalDeletePost from "@/components/dat/Modal/TTNB/ModalDeletePost";
import ModalEditPost from "@/components/dat/Modal/TTNB/ModalEditPost";
import ModalNotify from "@/components/dat/Modal/TTNB/ModalNotify";

interface Comment {
  id: number;
  avatar: string;
  name: string;
  content: string;
  timestamp: string;
  day: string;
}
export default function BaiVietTTNB() {
  const [comments, setComments] = useState<Comment[]>([]);
  const commentIdCounter = useRef(1);
  const [showComments, setShowComments] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/img/img-home/ep_post_active_like.svg"
  );
  const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
  const [likeCount, setLikeCount] = useState(1);
  const [areCommentsHidden, setAreCommentsHidden] = useState(false);

  function handleReplyClick(index: number) {
    setSelectedReplyIndex(index === selectedReplyIndex ? -1 : index);
  }

  function handleImageClick(newImage: SetStateAction<string>) {
    if (newImage !== selectedImage) {
      setSelectedImage(newImage);
      setLikeCount(likeCount + 1);
    }
  }

  function handleCommentClick() {
    setShowComments(!showComments);
  }

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

  function addComment(comment: Comment) {
    comment.id = commentIdCounter.current++;
    setComments((prevComments) => [...prevComments, comment]);
  }
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
  const handleHideShowComments = (commentId: number) => {
    setAreCommentsHidden(!areCommentsHidden);
  };
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
  const [isGhim, setIsGhim] = useState(true);

  const toggleGhim = () => {
    setIsGhim(!isGhim);
  };
  const [isJoined, setIsJoined] = useState(false);

  const handleButtonJoinClick = () => {
    setIsJoined(!isJoined);
  };

  const [isModalDeletePostOpen, setIsModalDeletePostOpen] = useState(false);
  const [isModalEditPostOpen, setIsModalEditPostOpen] = useState(false);
  const [isModalNotifyOpen, setIsModalNotifyOpen] = useState(false);

  const handleModalDeletePostOpen = () => {
    setIsModalDeletePostOpen(true);
  };

  const handleModalEditPostOpen = () => {
    setIsModalEditPostOpen(true);
  };

  const handleModalNotifyOpen = () => {
    setIsModalNotifyOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className={styles.optionItem} onClick={handleModalEditPostOpen}>
          <EditOutlined rev={undefined} />
          <p>Chỉnh sửa bài viết</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className={styles.optionItem} onClick={handleModalNotifyOpen}>
          <BellFilled rev={undefined} />
          <p>Bật thông báo</p>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className={styles.optionItem} onClick={handleModalDeletePostOpen}>
          <DeleteOutlined rev={undefined} />
          <p>Xóa bài viết</p>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className={styles.postItem}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div>
              {" "}
              <Image
                src="/img/c.png"
                alt="avatar"
                className={styles.avatar}
                width={50}
                height={50}
                preview={false}
              />
            </div>

            <div>
              <div className={`${styles.name} flex`}>
                <div className={styles.nameText}>
                  <span className={styles.textBold}>Nguyễn Thế Đạt</span>
                  <span>
                    {" "}
                    đã tạo sự kiện nội bộ:
                    <span className={styles.textBold}> test1 </span>
                  </span>
                </div>
              </div>
              <div className={styles.time}>
                <p>
                  14:11 17/10/2023 .
                  <span>
                    PHÒNG 1: PHÒNG BIÊN TẬP NỘI DUNG - Đ/C BÍCH PHƯỢNG
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.headerIcon}>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="headerIconDropdown"
            >
              <Image
                src="/img/TTNB/bacham.png"
                alt="icon"
                preview={false}
                className="cursor-pointer"
              />
            </Dropdown>
          </div>
        </div>
        <div className={styles.status}>
          <p className={styles.statusName}>test1</p>
          <a className={styles.fileName} href="/img/c.png" download>
            cơ-sở-HDH.pdf
          </a>
          <p className={styles.viewDetail}>Xem chi tiết</p>
        </div>
        <div className={`${styles.anh} anhbaiviettrangcongty`}>
          <Image
            src="/img/c.png"
            alt="anh"
            preview={false}
            className={styles.anhItem}
          />
          <div className="flex flex-space-between">
            <div className={styles.sukienTime}>
              <div className={styles.gio}>
                <p className={styles.gioText}>16:10</p>
              </div>
              <div className={styles.ngay}>
                <p className={styles.ngayText}>18/10</p>
              </div>
            </div>
            <Button
              className={styles.sukienDangky}
              size="large"
              onClick={handleButtonJoinClick}
            >
              {isJoined ? "Hủy Tham Gia" : "Tham Gia"}
            </Button>
          </div>
        </div>
        <div className={styles.footer}>
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
                    100
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
            </div>
          </div>

          <Divider className={styles.divider} />

          <div className={styles.post__footer}>
            <ReactionIcons
              selectedImage={selectedImage}
              onSelectImage={handleImageClick}
            />
            <div
              className="flex flex-align-center cursor-pointer"
              onClick={toggleGhim}
            >
              <div className={styles.post__footer__middle__icon}>
                <Image
                  src="/img/TTNB/v_ghim.svg"
                  alt="icon"
                  width={25}
                  height={25}
                  preview={false}
                />
              </div>
              <div className={styles.post__footer__middle__text}>
                <p className={styles.footer_cmt}>
                  {isGhim ? "Ghim" : "Bỏ Ghim"}
                </p>
              </div>
            </div>
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
          </div>
          <Divider className={styles.divider} />

          <PostComment onSubmitComment={handleSubmitComment} />
          {showComments && (
            <div className={styles.comments}>
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
                          {areCommentsHidden
                            ? "Bình luận đã ẩn"
                            : comment.content}
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
                                onClick={() =>
                                  handleHideShowComments(comment.id)
                                }
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
        </div>
      </div>
      <ModalDeletePost
        open={isModalDeletePostOpen}
        onClose={() => setIsModalDeletePostOpen(false)}
      />
      <ModalEditPost
        open={isModalEditPostOpen}
        onClose={() => setIsModalEditPostOpen(false)}
      />
      <ModalNotify
        open={isModalNotifyOpen}
        onClose={() => setIsModalNotifyOpen(false)}
      />
    </>
  );
}
