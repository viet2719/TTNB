import React, { useState } from 'react';
import { Modal, Button, Image, Input } from 'antd';
import styles from './ModalRegime.module.css';
import { SearchOutlined } from '@ant-design/icons';

interface Friend {
    id: number;
    name: string;
    imageUrl: string;
}

interface FriendSpecificProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (selectedFriends: Friend[]) => void;
    selectedFriendsSpecific: Friend[];
}

const friendsData: Friend[] = [
    { id: 1, name: 'Nguyễn Thế Đạt 1', imageUrl: '/img/c.png' },
    { id: 2, name: 'Nguyễn Thế Đạt 2', imageUrl: '/img/c.png' },
    { id: 3, name: 'Nguyễn Thế Đạt 3', imageUrl: '/img/c.png' },
    { id: 4, name: 'Nguyễn Thế Đạt 4', imageUrl: '/img/c.png' },
    { id: 5, name: 'Nguyễn Thế Đạt 5', imageUrl: '/img/c.png' },
    { id: 6, name: 'Nguyễn Thế Đạt 6', imageUrl: '/img/c.png' },
    { id: 7, name: 'Nguyễn Thế Đạt 7', imageUrl: '/img/c.png' },
    { id: 8, name: 'Nguyễn Thế Đạt 8', imageUrl: '/img/c.png' },
    { id: 9, name: 'Nguyễn Thế Đạt 9', imageUrl: '/img/c.png' },
    { id: 10, name: 'Nguyễn Thế Đạt 10', imageUrl: '/img/c.png' },
    { id: 12, name: 'Nguyễn Thế Đạt 11', imageUrl: '/img/c.png' },
    { id: 13, name: 'Nguyễn Thế Đạt 12', imageUrl: '/img/c.png' },
];

const ModalFriendSpecific: React.FC<FriendSpecificProps> = ({ isOpen, onClose, onSave, selectedFriendsSpecific }) => {
    const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    const filteredFriends = friendsData.filter(friend =>
        friend.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleFriendSelect = (friend: Friend) => {
        const isFriendSelected = selectedFriends.some(selectedFriend => selectedFriend.id === friend.id);

        if (isFriendSelected) {
            setSelectedFriends(selectedFriends.filter(item => item.id !== friend.id));
        } else {
            setSelectedFriends([...selectedFriends, friend]);
        }
    };

    const handleFriendDeselect = (friend: Friend) => {
        setSelectedFriends(selectedFriends.filter(item => item.id !== friend.id));
    };

    const handleModalClose = () => {
        setSelectedFriends([]);
        onClose();
    };

    const handleSave = () => {
        onSave(selectedFriends);
        onClose();
    };

    return (
        <Modal
            title="Bạn bè cụ thể"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            className={`${styles.ModalFriendSpecific} ModalFriendSpecific`}
        >
            <div className={styles.modal__container} >
                <div className={styles.modal__body}>
                    <div className={styles.modal__content}>
                        <div className={styles.search}>
                            <Input
                                placeholder='Nhập tên bạn bè'
                                className={styles.modal__input}
                                bordered={false}
                                suffix={
                                    <SearchOutlined rev={undefined} />
                                }
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>

                        <div className={styles.modal__list}>
                            <p
                                className={styles.modal__title}
                            >Bạn bè</p>
                            {filteredFriends.map(friend => (
                                <div
                                    key={friend.id}
                                    className={`${styles.modal__item} ${selectedFriends.some(selectedFriend => selectedFriend.id === friend.id) ? styles.selected__item__active : ''}`}
                                    onClick={() => handleFriendSelect(friend)}
                                >
                                    <Image
                                        src={friend.imageUrl}
                                        alt={friend.name}
                                        preview={false}
                                        width={40}
                                        height={40}
                                        className={styles.modal__img}
                                    />
                                    <p className={`${styles.modal__name} ${selectedFriends.some(selectedFriend => selectedFriend.id === friend.id) ? styles.modal__name__active : ''}`}>
                                        {friend.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.selected}>
                            <div className={styles.selected__title}>Những bạn sẽ nhìn thấy bài viết</div>
                            {selectedFriends.map(friend => (
                                <div key={friend.id} className={styles.selected__item}>
                                    <Image
                                        src={friend.imageUrl}
                                        alt={friend.name}
                                        preview={false}
                                        width={30}
                                        height={30}
                                        className={styles.modal__img}
                                    />
                                    <p className={styles.modal__name}>{friend.name}</p>
                                    <p
                                        className={styles.selected__close}
                                        onClick={() => handleFriendDeselect(friend)}
                                    >
                                        <Image
                                            src='/img/img-home/xoa_user.svg'
                                            alt=''
                                            preview={false}
                                        />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.modal__footer}>
                <Button className={styles.modal__btn} onClick={handleModalClose}>Hủy</Button>
                <Button className={styles.modal__btn__active} onClick={handleSave}>Lưu</Button>
            </div>
        </Modal>
    );
}

export default ModalFriendSpecific;