import { PlusOutlined } from "@ant-design/icons";
import { Modal, Image, Radio, RadioChangeEvent, Input, Button } from "antd";
import React, { useState } from "react";
import styles from './ModalSave.module.css';

interface ModalSaveProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

interface DataCollectionItem {
    id: number;
    name: string;
    img: string;
}

const dataCollection: DataCollectionItem[] = [
    {
        id: 1,
        name: 'bộ sưu tập 1',
        img: '/img/c.png',
    },
    {
        id: 2,
        name: 'bộ sưu tập 2',
        img: '/img/c.png',
    },
];

function ModalSave({ selectedModal, closeSelectedModal }: ModalSaveProps) {

    const [value, setValue] = useState<number | undefined>(undefined);
    const [showNewCollectionInput, setShowNewCollectionInput] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');
    const [isInputFilled, setIsInputFilled] = useState(false);
    const [collections, setCollections] = useState<DataCollectionItem[]>(dataCollection);
    const [selectedCollection, setSelectedCollection] = useState<number | undefined>(undefined);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        setSelectedCollection(e.target.value);
    };

    const handleAddNewCollectionClick = () => {
        setShowNewCollectionInput(true);
    };
    const handleCancelNewCollection = () => {
        setShowNewCollectionInput(false);
        setNewCollectionName('');
    };
    const handleNewCollectionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value;
        setNewCollectionName(inputText);
        setIsInputFilled(inputText.trim() !== '');
    };
    const handleCreateNewCollection = () => {
        if (isInputFilled) {
            const newCollection: DataCollectionItem = {
                id: collections.length + 1,
                name: newCollectionName,
                img: '/img/c.png',
            };
            setCollections([...collections, newCollection]);
            setShowNewCollectionInput(false);
            setNewCollectionName('');
            setIsInputFilled(false);

        }
    };
    return (
        <Modal
            title="Lưu bài viết"
            open={selectedModal === 'save'}
            onCancel={closeSelectedModal}
            footer={null}
            className={`${styles.ModalSave} ModalShare`}
        >
            <div className={styles.ModalSave__container}>
                <Radio.Group onChange={onChange} value={value}>
                    {
                        collections.map((item) => (
                            <label
                                key={item.id}
                                className={styles.ModalSave__container__item}
                            >
                                <div className={styles.ModalSave__container__item__content}>
                                    <Image
                                        src={item.img}
                                        alt=''
                                        className={styles.ModalSave__container__item__img}
                                        preview={false}
                                        width={60}
                                        height={60}
                                    />
                                    <div className={styles.ModalSave__container__item__name}>
                                        {item.name}
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
                </Radio.Group>
                <div className={styles.ModalSave__container__addNew_collection} >
                    {showNewCollectionInput ? (
                        <div className={styles.ModalSave__container__addNew_collection_input}>
                            <p className={styles.addNew_collection_title}>Tên bộ sưu tập</p>
                            <Input
                                placeholder="Nhập tên bộ sưu tập"
                                value={newCollectionName}
                                onChange={handleNewCollectionInputChange}
                                className={styles.addNew_collection__input}
                                bordered={false}
                                size="large"
                            />
                            <div className={styles.addNew_collection__btn}>
                                <Button
                                    className={styles.addNew_collection__btnCancel}
                                    size="large"
                                    onClick={handleCancelNewCollection}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    className={`${styles.addNew_collection__btnCreate} collection__btnCreate `}
                                    size="large"
                                    onClick={handleCreateNewCollection}
                                    style={{ backgroundColor: isInputFilled ? '#4C5BD4' : 'gray' }}
                                    disabled={!isInputFilled}
                                >
                                    Tạo
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <PlusOutlined
                                rev={undefined}
                                className={styles.ModalSave__container__addNew_collection__icon}
                                style={{
                                    fontSize: '35px'
                                }}
                                onClick={handleAddNewCollectionClick}
                            />
                            <p
                                className={styles.ModalSave__container__addNew_collection__text}
                            >
                                Thêm bộ sưu tập mới
                            </p>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.ModalSave__footer}>
                <Button
                    className={styles.ModalSave__footer__btnOK}
                    onClick={closeSelectedModal}
                    disabled={selectedCollection === undefined}
                >
                    Xong
                </Button>
            </div>
        </Modal>
    );
}

export default ModalSave;