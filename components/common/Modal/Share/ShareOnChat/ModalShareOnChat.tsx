import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal, Image, Button } from "antd";
import { useState } from "react";
import ContentPostShare from "../ContentPostShare/ContentPostShare";
import styles from './ModalShareOnChat.module.css';

interface ModalShareOnChatProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

const dataRecents = [
    {
        id: 1,
        name: 'Nguyễn Thế Đạt 1',
        avatar: '/img/c.png',
    },
    {
        id: 2,
        name: 'Nguyễn Thế Đạt 2',
        avatar: '/img/c.png',
    },
];

const dataGroups = [
    {
        id: 1,
        name: 'HHP - Công ty Cổ phần Thanh toán Hưng HàHHP - Công ty Cổ phần Thanh toán Hưng Hà 1',
        avatar: '/img/c.png',
    },
    {
        id: 2,
        name: 'HHP - Công ty Cổ phần Thanh toán Hưng Hà 2',
        avatar: '/img/c.png',
    },
];


function ModalShareOnChat({ selectedModal, closeSelectedModal }: ModalShareOnChatProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRecent, setFilteredRecent] = useState(dataRecents);
    const [filteredGroups, setFilteredGroups] = useState(dataGroups);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredRecentResults = dataRecents.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredRecent(filteredRecentResults);

        const filteredGroupResults = dataGroups.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredGroups(filteredGroupResults);
    };

    return (
        <Modal
            title="Gửi bằng Chat"
            open={selectedModal === 'shareOnChat'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalShareOnChat} ModalShare`}
        >
            <ContentPostShare />
            <div className={styles.ShareOnChat__container}>
                <Input
                    placeholder="Nhập tin nhắn của bạn"
                    className={styles.ShareOnChat__input}
                    bordered={false}
                />
                <Input
                    value={searchQuery}
                    placeholder="Tìm kiếm"
                    className={styles.ShareOnChat__search_input}
                    bordered={false}
                    onChange={handleSearchInputChange}
                    suffix={
                        <SearchOutlined
                            rev={undefined}
                            style={{
                                color: '#6666',
                                fontSize: '30px',
                                cursor: 'pointer',
                                margin: '0 10px',
                            }}
                        />}
                />
                <p className={styles.ShareOnChat__recent_title}>Gần đây</p>

                <div className={styles.ShareOnChat__recent}>
                    {
                        filteredRecent.map((item) => (
                            <>
                                <div key={item.id} className={styles.ShareOnChat__recent__item}>
                                    <div className={styles.recent__item_Info}>
                                        <Image
                                            src={item.avatar}
                                            alt='avatar'
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.recent__item_Avatar}
                                        />
                                        <p className={styles.recent__item_Info__name}>{item.name}</p>
                                    </div>
                                    <Button
                                        onClick={() => { }}
                                        className={styles.recent__item_Button}
                                        size="large"
                                    >
                                        Gửi
                                    </Button>
                                </div>
                            </>
                        ))}
                </div>


                <p className={styles.ShareOnChat__Group_title}>Nhóm</p>
                <div className={styles.ShareOnChat__Group}>
                    {
                        filteredGroups.map((item) => (
                            <>
                                <div key={item.id} className={styles.ShareOnChat__Group__item}>
                                    <div className={styles.Group__item_Info}>
                                        <Image
                                            src={item.avatar}
                                            alt='avatar'
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.Group__item_Avatar}
                                        />
                                        <p className={styles.Group__item_Info__name}>{item.name}</p>
                                    </div>
                                    <Button
                                        onClick={() => { }}
                                        className={styles.Group__item_Button}
                                        size="large"
                                    >
                                        Gửi
                                    </Button>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </Modal>
    );
}

export default ModalShareOnChat;