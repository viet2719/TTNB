import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Modal, Image } from "antd";
import { useState } from "react";
import styles from './ModalShareOnPage.module.css';

interface ModalShareOnPageProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

const dataAllFriends = [
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
    {
        id: 3,
        name: 'Nguyễn Thế Đạt 3',
        avatar: '/img/c.png',
    },
];

function ModalShareOnPage({ selectedModal, closeSelectedModal }: ModalShareOnPageProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFriend, setFilteredFriend] = useState(dataAllFriends);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredFriendResults = dataAllFriends.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredFriend(filteredFriendResults);
    };

    return (
        <Modal
            title="Chia sẻ lên trang cá nhân của bạn bè"
            open={selectedModal === 'shareOnPage'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalShareOnPage} ModalShare`}
        >
            <div className={styles.ModalShareOnPage__container}>
                <Input
                    value={searchQuery}
                    placeholder="Tìm kiếm"
                    className={styles.ModalShareOnPage__search_input}
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
                <p className={styles.ModalShareOnPage__recent_title}>Tất cả bản bè</p>
                <div className={styles.ModalShareOnPage__recent}>
                    {
                        filteredFriend.map((item) => (
                            <>
                                <div key={item.id} className={styles.ModalShareOnPage__recent__item}>
                                    <div className={styles.recent__item_Info}>
                                        <Image
                                            src={item.avatar}
                                            alt='avatar'
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.recent__item_Avatar}
                                        />
                                        <div>
                                            <p className={styles.recent__item_Info__name}>{item.name}</p>
                                        </div>
                                    </div>
                                    <RightOutlined rev={undefined} />
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </Modal>
    );
}

export default ModalShareOnPage;