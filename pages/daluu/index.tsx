import { PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Image, Input, MenuProps, Popover } from 'antd';
import { useState } from 'react';
import styles from './daluu.module.css';

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

const App: React.FC = () => {

    const [showNewCollectionInput, setShowNewCollectionInput] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');
    const [isInputFilled, setIsInputFilled] = useState(false);
    const [collections, setCollections] = useState<DataCollectionItem[]>(dataCollection);
    const [selectedItem, setSelectedItem] = useState<string | null>('saved');

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

    const handleCollectionItemClick = (item: string) => {
        setSelectedItem(item);
    };

    const handleSavedItemClick = () => {
        setSelectedItem(null);
    };

    const handleChangeCollectionName = () => {
        console.log('change collection name');
    };

    const handleDeleteCollection = () => {
        console.log('delete collection');
    };

    const content = (
        <div className={styles.popover_daluu_main_header_btn}>
            <div
                className={styles.popover_daluu_main_header_btn_item}
                onClick={handleChangeCollectionName}
            >
                <Image
                    src='/img/img-OptionPost/chinh-sua.svg'
                    alt='c'
                    width={25}
                    height={25}
                    preview={false}
                />
                <p className={styles.popover_daluu_main_header_btn_item_title} >Đổi tên bộ sưu tập</p>
            </div>
            <div
                className={styles.popover_daluu_main_header_btn_item}
                onClick={handleDeleteCollection}
            >
                <Image
                    src='/img/img-header/public_del.svg'
                    alt='c'
                    width={25}
                    height={25}
                    preview={false}
                />
                <p className={styles.popover_daluu_main_header_btn_item_title}>Xóa bộ sưu tập</p>
            </div>
        </div>
    );

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='flex mt-6 mb-6 pr-60'>
                    <Image
                        src='/img/img-OptionPost/bo-luu-bai-viet.svg'
                        alt='c'
                        preview={false}
                    />
                    <p className='ml-8'>Bỏ lưu bài viết</p>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='flex mt-6 mb-6 pr-60'>
                    <Image
                        src='/img/img-OptionPost/chia-se.svg'
                        alt='c'
                        width={22}
                        height={22}
                        preview={false}
                    />
                    <p className='ml-8'>Chia sẻ bài viết</p>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className={styles.daluu_container}>
                <div
                    className={styles.daluu_sidebar_container}
                >
                    <div className={styles.daluu_sidebar}>
                        <div className={styles.daluu_sidebar_saved}>
                            <div className={styles.daluu_sidebar_saved_header}>
                                <p className={styles.daluu_sidebar_saved_header_title} >Đã lưu</p>
                                <p
                                    className={styles.daluu_sidebar_saved_header_setting}
                                >
                                    Cài đặt
                                </p>
                            </div>
                            <div
                                className={styles.daluu_sidebar_saved_content}
                                onClick={handleSavedItemClick}
                                style={{
                                    backgroundColor: selectedItem === null ? '#DDDDDD' : 'transparent',
                                }}
                            >
                                <Image
                                    src="/img/muc-da-luu.svg/"
                                    alt="daluu"
                                    width={50}
                                    height={50}
                                    preview={false}
                                />
                                <p className={styles.daluu_sidebar_saved_content_title}>Mục đã lưu</p>
                            </div>
                        </div>
                        <div className={styles.daluu_sidebar_collection}>
                            <p className={styles.daluu_sidebar_collection_title}>Bộ sưu tập của tôi</p>
                            <div className={styles.daluu_sidebar_collection_list_item}>
                                {
                                    collections.map((item) => (
                                        <label
                                            key={item.id}
                                            className={styles.ModalSave__container__item}
                                            onClick={() => handleCollectionItemClick(`collection${item.id}`)}
                                            style={{
                                                backgroundColor: selectedItem === `collection${item.id}` ? '#DDDDDD' : 'transparent',
                                            }}
                                        >
                                            <div
                                                className={styles.ModalSave__container__item__content}
                                            >
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
                                        </label>
                                    ))
                                }
                            </div>
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
                    </div>
                </div>
                <div className={styles.daluu_main}>
                    <div className={styles.daluu_main_header}>
                        <h3>Tất cả</h3>
                        {selectedItem && (
                            <Popover
                                placement="bottomRight"
                                content={
                                    content
                                }
                                trigger="click"
                                arrow={false}

                            >
                                <div
                                    className={styles.daluu_main_header_btn}
                                >

                                    <p>Tùy chỉnh</p>
                                </div>
                            </Popover>
                        )}
                    </div>
                    <div className={styles.daluu_main_content}>
                        <div className={styles.daluuListItem}>
                            <div className={`${styles.daluuItem} flex`}>
                                <div className={`${styles.header} flex flex-space-between flex-align-center`}>
                                    <div className={`${styles.headerLeft} flex`}>
                                        <Image
                                            src="/img/c.png"
                                            alt="avatar"
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.headerLeft__avatar}
                                        />
                                        <div className='pl-12'>
                                            <p
                                                className={styles.headerLeft__name}
                                            >Nguyễn Thế Đạt</p>
                                            <div className='flex '>
                                                <p className='mr-4'>09:44 20/10/2023</p>
                                                <Image
                                                    src='/img/img-home/regime/regime1.svg'
                                                    alt='icon'
                                                    width={20}
                                                    height={20}
                                                    className='cursor-pointer'
                                                    preview={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown
                                        menu={{ items }}
                                        placement="bottomRight"
                                        arrow={false}
                                        trigger={['click']}
                                    >
                                        <Image
                                            src='/img/QTTT/3cham.png'
                                            alt='icon'
                                            preview={false}
                                            className='cursor-pointer'
                                        />
                                    </Dropdown>
                                </div>
                                <div className={styles.content}>
                                    <p>hmmmm..............</p>
                                </div>
                                <div className={`${styles.footer} flex`}>
                                    <p className='mr-4'>Đã lưu vào</p>
                                    <p
                                        className={styles.footer__collection}
                                    >nhumotconcho</p>
                                </div>
                            </div>
                            <div className={`${styles.daluuItem} flex`}>
                                <div className={`${styles.header} flex flex-space-between flex-align-center`}>
                                    <div className={`${styles.headerLeft} flex`}>
                                        <Image
                                            src="/img/c.png"
                                            alt="avatar"
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.headerLeft__avatar}
                                        />
                                        <div className='pl-12'>
                                            <p
                                                className={styles.headerLeft__name}
                                            >Nguyễn Thế Đạt</p>
                                            <div className='flex '>
                                                <p className='mr-4'>09:44 20/10/2023</p>
                                                <Image
                                                    src='/img/img-home/regime/regime1.svg'
                                                    alt='icon'
                                                    width={20}
                                                    height={20}
                                                    className='cursor-pointer'
                                                    preview={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown
                                        menu={{ items }}
                                        placement="bottomRight"
                                        arrow={false}
                                        trigger={['click']}
                                    >
                                        <Image
                                            src='/img/QTTT/3cham.png'
                                            alt='icon'
                                            preview={false}
                                            className='cursor-pointer'
                                        />
                                    </Dropdown>
                                </div>
                                <div className={styles.content}>
                                    <p>hmmmm..............</p>
                                </div>
                                <div className={`${styles.footer} flex`}>
                                    <p className='mr-4'>Đã lưu vào</p>
                                    <p
                                        className={styles.footer__collection}
                                    >nhumotconcho</p>
                                </div>
                            </div>
                            <div className={`${styles.daluuItem} flex`}>
                                <div className={`${styles.header} flex flex-space-between flex-align-center`}>
                                    <div className={`${styles.headerLeft} flex`}>
                                        <Image
                                            src="/img/c.png"
                                            alt="avatar"
                                            width={50}
                                            height={50}
                                            preview={false}
                                            className={styles.headerLeft__avatar}
                                        />
                                        <div className='pl-12'>
                                            <p
                                                className={styles.headerLeft__name}
                                            >Nguyễn Thế Đạt</p>
                                            <div className='flex '>
                                                <p className='mr-4'>09:44 20/10/2023</p>
                                                <Image
                                                    src='/img/img-home/regime/regime1.svg'
                                                    alt='icon'
                                                    width={20}
                                                    height={20}
                                                    className='cursor-pointer'
                                                    preview={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown
                                        menu={{ items }}
                                        placement="bottomRight"
                                        arrow={false}
                                        trigger={['click']}
                                    >
                                        <Image
                                            src='/img/QTTT/3cham.png'
                                            alt='icon'
                                            preview={false}
                                            className='cursor-pointer'
                                        />
                                    </Dropdown>
                                </div>
                                <div className={styles.content}>
                                    <p>hmmmm..............</p>
                                </div>
                                <div className={`${styles.footer} flex`}>
                                    <p className='mr-4'>Đã lưu vào</p>
                                    <p
                                        className={styles.footer__collection}
                                    >nhumotconcho</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;