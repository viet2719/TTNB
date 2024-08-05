import { Modal, Image, Radio, RadioChangeEvent, Button, notification, } from "antd";
import { useState } from "react";
import styles from './ModalComment.module.css';

interface ModalCommentProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

interface DataCollectionItem {
    id: number;
    title: string;
    img: string;
    subTitle?: string;
}

const dataCollection: DataCollectionItem[] = [
    {
        id: 1,
        img: '/img/img-home/regime/regime1.svg',
        title: 'Mọi người',
        subTitle: 'Bất kỳ ai cũng có thể bình luận về nội dung này.',
    },
    {
        id: 2,
        img: '/img/img-home/regime/regime2.svg',
        title: 'Bạn bè',
        subTitle: 'Bạn bè của bạn',
    },
    {
        id: 3,
        img: '/img/img-home/regime/nv_at-sign.svg',
        title: 'Bạn bè mà bạn nhắc đến',
        subTitle: 'Cá nhân bạn bè của bạn mà bạn nhắc đến trong bài viết',
    },
];

function ModalComment({ selectedModal, closeSelectedModal }: ModalCommentProps) {

    const [value, setValue] = useState<number | undefined>(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const handleDoneClick = () => {
        closeSelectedModal();

        notification.success({
            message: 'Cập nhật những người có thể bình luận về bài viết của bạn thành công',
            icon: <Image
                src="/icon/noti_success.png"
                alt=""
                preview={false}
                width={30}
                height={30}
            />,
        });
    };

    return (
        <Modal
            title="Ai có thể bình luận về bài viết của bạn"
            open={selectedModal === 'comment'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalComment} ModalShare`}
        >
            <div className={styles.ModalComment__container}>
                {
                    dataCollection.map((item) => (
                        <label
                            key={item.id}
                            className={styles.ModalComment__container__item}
                        >
                            <div className={styles.ModalComment__container__item__content}>
                                <Image
                                    src={item.img}
                                    alt=''
                                    className={styles.ModalComment__container__item__img}
                                    preview={false}
                                    width={30}
                                    height={30}
                                />
                                <div className={styles.ModalComment__container__item__title}>
                                    <p>{item.title} </p>
                                    <div className={styles.ModalComment__container__item__subTitle} >{item.subTitle && <p>{item.subTitle}</p>}</div>
                                </div>
                            </div>
                            <Radio
                                value={item.id}
                                onChange={onChange}
                                checked={value === item.id}
                            />
                        </label>
                    ))
                }
            </div>
            <p>Lựa chọn của bạn chỉ ảnh hưởng đến bài viết này.</p>
            <div className={styles.ModalComment__btn} >
                <Button
                    size='large'
                    className={styles.ModalComment__btnOK}
                    onClick={handleDoneClick}
                >
                    Xong
                </Button>
            </div>
        </Modal>
    );
}

export default ModalComment;