import ModalAdd from '@/components/dat/Modal/VHDN/muctieuchienluoc/ModalAdd';
import ModalDelete from '@/components/dat/Modal/VHDN/muctieuchienluoc/ModalDelete';
import ModalEdit from '@/components/dat/Modal/VHDN/muctieuchienluoc/ModalEdit';
import PostComment from '@/components/homepage/ContentHome/Post/PostComment/PostComment';
import ReactionIcons from '@/components/homepage/ContentHome/Post/ReactionIcons/ReactionIcons ';
import { Divider, Dropdown, Image, MenuProps, Popover } from 'antd';
import Link from 'next/link';
import React, { SetStateAction, useState, } from 'react'
import styles from './index.module.scss'

interface Comment {
    avatar: string;
    name: string;
    content: string;
    timestamp: string;
    day: string;
}

export default function Muctieuchienluoc() {
    const [selectedImage, setSelectedImage] = useState(
        "/img/img-home/ep_post_active_like.svg"
    );
    const [likeCount, setLikeCount] = useState(1);
    function handleImageClick(newImage: SetStateAction<string>) {
        if (newImage !== selectedImage) {
            setSelectedImage(newImage);
            setLikeCount(likeCount + 1);
        }
    }
    const [showComments, setShowComments] = useState(false);
    function handleCommentClick() {
        setShowComments(!showComments);
    }
    function handleSubmitComment(comment: string) {
        if (comment.trim() !== "") {
            const newComment: Comment = {
                avatar: "/img/c.png",
                name: "Nguyễn Thế Đạt",
                content: comment,
                timestamp: "12:34 PM",
                day: "28/08/2023",
            };
            addComment(newComment);
        }
    }
    const [comments, setComments] = useState<Comment[]>([]);
    function addComment(comment: Comment) {
        setComments((prevComments) => [...prevComments, comment]);
    }
    const [selectedReplyIndex, setSelectedReplyIndex] = useState(-1);
    function handleReplyClick(index: number) {
        setSelectedReplyIndex(index === selectedReplyIndex ? -1 : index);
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
                </div>
            </div>
        </div>
    );
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleShowModalAdd = () => {
        setShowModalAdd(true);
    };

    const handleShowModalEdit = () => {
        setShowModalEdit(true);
    };

    const handleShowModalDelete = () => {
        setShowModalDelete(true);
    };
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div
                    className={`${styles.menuOption__item} flex cursor-pointer`}
                    onClick={handleShowModalEdit}
                >
                    <Image
                        src='/img/VHDN/sua.png'
                        alt='anhloi'
                        preview={false}
                    />
                    <p className={styles.menuOption__item__text}>
                        Chỉnh sửa mục tiêu - chiến lược
                    </p>
                </div>
            ),
        },

        {
            key: '2',
            label: (
                <div
                    className={`${styles.menuOption__item} flex cursor-pointer`}
                    onClick={handleShowModalDelete}
                >
                    <Image
                        src='/img/VHDN/v_7.png'
                        alt='anhloi'
                        preview={false}
                    />
                    <p className={styles.menuOption__item__text}>Xóa mục tiêu - chiến lược</p>
                </div>
            ),
        },
    ];
    return (
        <>
            <div
                className={styles.container}
            >
                <div className={styles.title}>
                    <div
                        className={`${styles.title__add} flex`}
                        onClick={handleShowModalAdd}
                    >
                        <Image
                            src='/img/VHDN/themNTLV.png'
                            alt='anhloi'
                            preview={false}
                        />
                        <p>Thêm mục tiêu - chiến lược</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={`${styles.contentHeader} flex`}>
                        <p>CỐ GẮNG LÀ MỤC TIÊU HÀNG ĐẦU!</p>
                        <Dropdown menu={{ items }}
                            placement="bottomRight"
                            arrow={false}
                            trigger={['click']}
                        >
                            <Image
                                src='/img/VHDN/bacham.png'
                                alt='anhloi'
                                preview={false}
                                className={`${styles.contentHeader__img} cursor-pointer`}
                            />
                        </Dropdown>
                    </div>
                    <div className={styles.contentBody}>
                        <div className={styles.contentBodyText}>
                            <p>Hãy để mong muốn khám phá của bạn vượt ra ngoài mọi biên giới. Bạn vẫn có thể rất chững chạc mà không cần mặc 1 bộ vest. Chỉ tuyệt vời thôi là chưa đủ tốt</p>
                        </div>
                        <div className={styles.contentBodyImg}>
                            <Image
                                src='/img/c.png'
                                alt='anhloi'
                                preview={false}
                            />
                        </div>
                    </div>
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
                                    {likeCount} Người
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
                                    <span className={styles.post__reaction__count_comment}>
                                        100
                                        <span> Bình luận </span>
                                    </span>
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
                                <p>Bình luận</p>
                            </div>
                        </div>
                    </div>
                    <PostComment onSubmitComment={handleSubmitComment} />
                    {showComments && (
                        <div className={styles.comments}>
                            {comments.map((comment, index) => (
                                <div key={index} className={styles.comment}>
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
                                    <div className={styles.comment__content}>
                                        <div className={`${styles.comment__content_info} flex flex-space-between flex-align-center`}>
                                            <div>
                                                <p className={styles.comment__name}>{comment.name}</p>
                                                <p className={styles.comment__text}>{comment.content}</p>
                                            </div>
                                            <div className={styles.comment__option}>
                                                <Image
                                                    src="/img/VHDN/bacham.png"
                                                    alt="icon"
                                                    preview={false}
                                                    className='cursor-pointer'
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.comment__content_reaction}>
                                            <p className={styles.comment__cxuc}>Thích</p>
                                            <p
                                                className={styles.comment__reply}
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
                <ModalAdd
                    open={showModalAdd}
                    onClose={() => setShowModalAdd(false)}
                    onConfirm={() => setShowModalAdd(false)}
                />

                <ModalEdit
                    open={showModalEdit}
                    onClose={() => setShowModalEdit(false)}
                    onConfirm={() => setShowModalEdit(false)}
                />

                <ModalDelete
                    open={showModalDelete}
                    onClose={() => setShowModalDelete(false)}
                    onConfirm={() => setShowModalDelete(false)}
                />
            </div>
        </>
    )
}
