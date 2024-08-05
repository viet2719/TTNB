
import { Button, Divider, Image, Input } from 'antd';
import { useState } from 'react';
import UploadQuestionModal from '../../Modal/traodoicauhoi/UploadQuestion/UploadQuestionModal';

import styles from './addQuestion.module.scss';

function AddQuestion() {
    const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
    const [isModalTagOpen, setIsModalTagOpen] = useState(false);

    const handleModalUploadOpen = () => {
        setIsModalUploadOpen(true);
    };

    const handleModalUploadClose = () => {
        setIsModalUploadOpen(false);
    };

    const handleModalTagOpen = () => {
        setIsModalTagOpen(true);
    };

    const handleModalTagClose = () => {
        setIsModalTagOpen(false);
    };

    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.addQuestion}>
                    <div className={styles.addQuestion__header}>
                        <div className={styles.addQuestion__header__left}>
                            <Image
                                src='/img/c.png'
                                alt='avatar'
                                width={50}
                                height={50}
                                preview={false}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.addQuestion__header__right}>
                            <Input
                                className={styles.input}
                                placeholder="Bạn đang nghĩ gì?"
                                bordered={false}
                                size="large"
                            />
                        </div>
                    </div>
                    <Divider className={styles.divider} />
                    <div className={styles.addQuestion__body}>
                        <div
                            className={`${styles.addQuestion__body_item} ${styles.addQuestion__upload} `}
                            onClick={handleModalUploadOpen}
                        >
                            <Image
                                src='/img/img-home/nv_upload_file.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addQuestion__body_title}>Ảnh/video/tệp</span>
                        </div>
                        <div
                            className={`${styles.addQuestion__body_item} ${styles.addQuestion__tag} `}
                            onClick={handleModalUploadOpen}
                        >
                            <Image
                                src='/img/img-home/nv_post_feel_user_tag.svg'
                                alt='avatar'
                                width={30}
                                height={30}
                                preview={false}
                                className={styles.avatar}
                            />
                            <span className={styles.addQuestion__body_title} >Nhắc tên thành viên</span>
                        </div>
                        <div
                            className={`${styles.addQuestion__body_item} `}
                            onClick={() => { }}
                        >

                            <Button
                                size="large"
                                className={
                                    `${styles.addQuestion__button} `
                                }
                            >
                                Đăng
                            </Button>
                        </div>
                    </div>
                </div>
                <UploadQuestionModal
                    open={isModalUploadOpen}
                    onClose={handleModalUploadClose}
                />
            </div>
        </div>
    );
}

export default AddQuestion;