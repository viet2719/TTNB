import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Image } from "antd";
import { useState } from "react";
import styles from './ModalShareOnGroup.module.css';

interface ModalShareOnGroupProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

const dataGroupRecents = [
    {
        id: 1,
        name: 'Nhóm 1',
        avatar: '/img/c.png',
        status: 'Công khai'
    },
    {
        id: 2,
        name: 'Nhóm 2',
        avatar: '/img/c.png',
        status: 'Công khai'
    },
];

function ModalShareOnGroup({ selectedModal, closeSelectedModal }: ModalShareOnGroupProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredGroupRecent, setFilteredGroupRecent] = useState(dataGroupRecents);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredRecentResults = dataGroupRecents.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredGroupRecent(filteredRecentResults);
    };

    return (
        <Modal
            title="Chia sẻ lên nhóm"
            open={selectedModal === 'shareOnGroup'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalShareOnGroup} ModalShare`}
        >
            <div className={styles.ModalShareOnGroup__container}>
                <Input
                    value={searchQuery}
                    placeholder="Tìm kiếm"
                    className={styles.ModalShareOnGroup__search_input}
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
                <p className={styles.ModalShareOnGroup__recent_title}>Gần đây</p>
                <div className={styles.ModalShareOnGroup__recent}>
                    {
                        filteredGroupRecent.map((item) => (
                            <>
                                <div key={item.id} className={styles.ModalShareOnGroup__recent__item}>
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
                                            {item.status}
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
export default ModalShareOnGroup;