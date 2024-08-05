import ModalAddPost from '@/components/common/Modal/AddPost/ModalAddPost';
import ModalEmotions from '@/components/common/Modal/Emotions/ModalEmotions';
import ModalTag from '@/components/common/Modal/Tag/ModalTag';
import { Divider, Image, Input } from 'antd';
import { useState } from 'react';
import styles from './AddPost.module.css';

function AddPost() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [isEmotionsModalOpen, setIsEmotionsModalOpen] = useState(false);
    const [isUploadFileOpen, setIsUploadFileOpen] = useState(false);
    const [selectedFriendNames, setSelectedFriendNames] = useState<string[]>([]);
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

    const handleFriendNamesSelect = (selectedNames: string[]) => {
        setSelectedFriendNames(selectedNames);
    };

    const handleEmotionSelect = (selectedEmotion: string) => {
        setSelectedEmotion(selectedEmotion);
    };

    const handleActivitySelect = (selectedActivity: string) => {
        setSelectedActivity(selectedActivity);
    };

    const handleImgClick = () => {
        setIsUploadFileOpen(true);
    };
    const handleInputClick = () => {
        setIsModalOpen(true);
    };

    const handleTagClick = () => {
        setIsTagModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleEmotionsClick = () => {
        setIsEmotionsModalOpen(true);
    };
    return (
        <>
            <div className={styles.posts}>
                <div className={styles.addPost}>
                    <div className={styles.addPost__header}>
                        <div className={styles.addPost__header__left}>
                            <Image
                                src='/img/c.png'
                                alt='avatar'
                                width={50}
                                height={50}
                                preview={false}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.addPost__header__right}>
                            <Input
                                className={styles.input}
                                placeholder="Bạn đang nghĩ gì?"
                                bordered={false}
                                size="large"
                                onClick={handleInputClick}
                            />
                        </div>
                    </div>
                    <Divider className={styles.divider} />
                    <div className={styles.addPost__body}>
                        <div
                            className={`${styles.addPost__body_item} ${styles.addPost__upload} `}
                            onClick={handleImgClick}
                        >
                            <Image
                                src='/img/img-home/nv_upload_file.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title}>Ảnh/video/tệp</span>
                        </div>
                        <div className={`${styles.addPost__body_item} ${styles.addPost__tag} `}
                            onClick={handleImgClick}
                        >
                            <Image
                                src='/img/img-home/nv_post_feel_user_tag.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title} >Nhắc tên thành viên</span>
                        </div>
                        <div
                            className={`${styles.addPost__body_item} ${styles.addPost__activities} `}
                            onClick={handleImgClick}
                        >
                            <Image
                                src='/img/img-home/nv_icon_post_footer_active.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addPost__body_title}>Cảm xúc/Hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalAddPost
                isOpen={isModalOpen}
                onClose={handleModalClose} selectedRegime={null} />
            <ModalTag
                isOpen={isTagModalOpen}
                onClose={() => setIsTagModalOpen(false)}
                onFriendNamesSelect={handleFriendNamesSelect}
            />
            <ModalEmotions
                isOpen={isEmotionsModalOpen}
                onClose={() => setIsEmotionsModalOpen(false)}

                onEmotionSelect={handleEmotionSelect}
                onActivitySelect={handleActivitySelect}
            />
            <ModalAddPost
                isOpen={isUploadFileOpen}
                onClose={() => setIsUploadFileOpen(false)} selectedRegime={null} />
        </>
    );
}

export default AddPost;