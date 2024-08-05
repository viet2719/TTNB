import React, { useState } from 'react';
import { Image, Input } from 'antd';

import styles from './PostComment.module.css';

interface CommentInputProps {
    onSubmitComment: (comment: string, parentId?: number) => void;
    parentId?: number;
}

const PostComment: React.FC<CommentInputProps> = ({ onSubmitComment, parentId }) => {

    const [newComment, setNewComment] = useState('');
    const [showIcons, setShowIcons] = useState(true);

    function handleSubmitComment() {
        if (newComment.trim() !== '') {
            onSubmitComment(newComment, parentId);
            setNewComment('');
            setShowIcons(true);
        }
    }

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        setNewComment(inputValue);

        setShowIcons(inputValue.trim() === '');
    }

    const inputClassName = `${styles.comment__input} ${showIcons ? '' : styles.hidden}`;
    return (
        <div className={styles.post__comment}>

            <div className={styles.post__comment__avatar}>
                <Image
                    src='/img/c.png'
                    alt='icon'
                    width={40}
                    height={40}
                    preview={false}
                    className={styles.comment__avatar}
                />
            </div>
            <div className={styles.post__comment__input}>
                <Input
                    value={newComment}
                    onChange={handleChangeInput}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSubmitComment();
                        }
                    }}
                    placeholder='Viết bình luận...'
                    bordered={false}
                    className={styles.inputClassName}
                    suffix={
                        showIcons ? (
                            <>
                                <Image
                                    src='/img/img-home/ep_post_icon_feel.svg'
                                    alt='icon'
                                    width={25}
                                    height={25}
                                    preview={false}
                                    className={styles.icon_feel}
                                />
                                <Image
                                    src='/img/img-home/ep_post_write_img.svg'
                                    alt='icon'
                                    width={25}
                                    height={25}
                                    preview={false}
                                    className={styles.icon_write_img}
                                />
                            </>
                        ) : (
                            <Image
                                src='/img/img-home/v_gui_comment.svg'
                                alt='icon'
                                width={25}
                                height={25}
                                preview={false}
                                onClick={handleSubmitComment}
                            />
                        )
                    }
                />
            </div>
        </div>

    );
}

export default PostComment;