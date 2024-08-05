import ModalEditGroup from '@/components/dat/Modal/VHDN/danhsachphongban/ModalEditGroup';
import { EditOutlined } from '@ant-design/icons';
import { Image, Popover, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'
import Vanhoadoanhnghiep from '..';
import styles from './index.module.scss';

interface GroupData {
    id: number;
    name: string;
    member: number;
    useCreate: string;
    timeCreate: string;
    timeUpdate: string;
    img: string;
    content: {
        title: string;
        content: string | { id: number; img: string; memberName?: string; }[];
    }[];
}

export default function Index() {

    const dataGroup = [
        {
            id: 1,
            name: 'KỸ THUẬT',
            member: 8,
            useCreate: 'Công ty Cổ phần Thanh toán Hưng Hà',
            timeCreate: '10:32, 10/08/2021',
            timeUpdate: '10:32, 10/08/2021',
            img: '/img/c.png',
            content: [
                {
                    title: 'Công việc chính',
                    content: 'Chưa cập nhật'

                },
                {
                    title: 'Thành viên quản lý',
                    content: 'Chưa cập nhật'
                },
                {
                    title: 'Thành viên khác',
                    content: [
                        {
                            id: 1,
                            img: '/img/c.png',
                            memberName: 'NTD1'
                        },
                        {
                            id: 2,
                            img: '/img/c.png',
                            memberName: 'NTD2'
                        },
                        {
                            id: 3,
                            img: '/img/c.png',
                            memberName: 'NTD3'
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'KỸ THUẬT 2',
            member: 16,
            img: '/img/c.png',
            useCreate: 'NTD',
            timeCreate: '10:01, 01/10/2023',
            timeUpdate: '01:10, 10/01/2023',
            content: [
                {
                    title: 'Công việc chính',
                    content: 'Chưa cập nhật'
                },
                {
                    title: 'Thành viên quản lý',
                    content: 'Chưa cập nhật'
                },
                {
                    title: 'Thành viên khác',
                    content: [
                        {
                            id: 1,
                            img: '/img/c.png',
                            memberName: 'abc'
                        },
                    ]
                },
            ]
        },
    ]
    const [isOpenPopover, setIsOpenPopover] = useState(false);
    const [openModalEditGroup, setOpenModalEditGroup] = useState(false);

    const [selectedGroup, setSelectedGroup] = useState<GroupData | null>(null);

    useEffect(() => {
        if (dataGroup.length > 0) {
            setSelectedGroup(dataGroup[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGroupClick = (group: GroupData) => {
        setSelectedGroup(group);
    };

    const handleGroupSelect = (group: GroupData | null) => {
        setSelectedGroup(group);
    };

    const clearSelectedGroup = () => {
        setSelectedGroup(null);
    };

    const handleOpenModalEditGroup = () => {
        setOpenModalEditGroup(true);
        setIsOpenPopover(false);
    };

    const handleCloseModalEditGroup = () => {
        setOpenModalEditGroup(false);
    };

    const childrenContentLeft =
        <div
            className={styles.DSPBContentLeftContainer}
        >
            <div className={styles.DSPBContentLeftContainerHeader}>
                <p>Danh sách nhóm phòng - ban trong công ty</p>
            </div>
            <div className={styles.DSPBContentLeftContainerBody}>
                {selectedGroup ? (
                    <>
                        <div className={`${styles.DSPBContentLeftContainerBodyHeader} flex flex-space-between `}>
                            <div
                                className={`${styles.DSPBContentLeftContainerBodyHeaderInfo} flex`}
                            >
                                <Image
                                    src={selectedGroup.img}
                                    alt="Picture of the author"
                                    width={60}
                                    preview={false}
                                    className={`${styles.DSPBContentLeftContainerBodyHeaderInfoImg}`}
                                />
                                <div
                                    className={`${styles.DSPBContentLeftContainerBodyHeaderInfoText}`}
                                >
                                    <p
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#4c5bd4',
                                            marginBottom: '5px',
                                            cursor: 'pointer'
                                        }}
                                    >{selectedGroup.name}</p>
                                    <p>{selectedGroup.member} thành viên</p>
                                </div>
                            </div>
                            <Popover
                                placement="bottomRight"
                                content={
                                    <div
                                        className={`${styles.contentPopover} flex`}
                                        onClick={handleOpenModalEditGroup}
                                    >
                                        <EditOutlined rev={undefined} />
                                        <p>Chỉnh sửa nhóm phòng - ban</p>
                                    </div>
                                }
                                trigger="click"
                                arrow={false}
                                open={isOpenPopover}
                                onOpenChange={(open) => setIsOpenPopover(open)}
                            >
                                <div
                                    className={`${styles.DSPBContentLeft3cham}`}
                                >

                                    <Image
                                        src="/img/VHDN/bacham.png"
                                        alt="Picture of the author"
                                        preview={false}
                                    />
                                </div>
                            </Popover>
                        </div>
                        {selectedGroup.content.map((item, index) => (
                            <>
                                <div
                                    className={`${styles.DSPBContentLeftContainerBodyContentItem} `}
                                    key={index}
                                >
                                    <div
                                        className={`${styles.DSPBContentLeftContainerBodyContentItemTitle}`}
                                    >
                                        <p>{item.title}</p>
                                    </div>

                                    <div className={`${styles.DSPBContentLeftContainerBodyContentItemContent}`}>
                                        {Array.isArray(item.content) ? (
                                            <div className={`${styles.ContentItemContentImg}`}>
                                                {item.content.map((member, memberIndex) => (
                                                    <Tooltip
                                                        title={member.memberName}
                                                        key={memberIndex}
                                                    >
                                                        <Image
                                                            src={member.img}
                                                            alt="Member Image"
                                                            key={memberIndex}
                                                            width={50}
                                                            preview={false}
                                                            style={{ borderRadius: '50%' }}
                                                        />
                                                    </Tooltip>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>{item.content}</p>
                                        )}
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                ) : (
                    <p>Vui lòng chọn một nhóm từ danh sách.</p>
                )}

                <ModalEditGroup
                    open={openModalEditGroup}
                    onClose={handleCloseModalEditGroup}
                    onConfirm={handleCloseModalEditGroup}
                />
            </div>
        </div >

    const childrenContentRight =
        <div>
            {selectedGroup ? (
                <div className={styles.DSPBRightContainer}>
                    <div className={styles.DSPBRightContainerHeader}>
                        <p>{selectedGroup.name}</p>
                    </div>
                    <div className={styles.DSPBRightContainerBody}>
                        <div className={styles.DSPBRightContainerBodyRegime}>
                            <p>Nhóm công khai</p>
                        </div>
                        <div
                            className={`${styles.DSPBRightContainerBodyUserCreate} `}
                        >
                            <p>Người tạo :
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                > {selectedGroup.useCreate}</span>
                            </p>
                        </div>
                        <div
                            className={`${styles.DSPBRightContainerBodyTimeCreate} `}
                        >
                            <p>Thời gian tạo: {selectedGroup.timeCreate}</p>
                        </div>
                        <div
                            className={`${styles.DSPBRightContainerBodyTimeUpdate} `}
                        >
                            <p>Thời gian cập nhật: {selectedGroup.timeUpdate}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Vui lòng chọn một nhóm từ danh sách.</p>
            )}
            <div className={styles.DSPBRightContainerList}>
                <div className={styles.DSPBRightContainerHeader}>
                    <p>DANH SÁCH NHÓM - THẢO LUẬN</p>
                </div>
                <div className={styles.DSPBRightContainerBody}>
                    <div className={styles.DSPBRightContainerBodyItem}>
                        {
                            dataGroup.map((item, index) => {
                                return (
                                    <p
                                        className={`${styles.DSPBRightContainerBodyItemTitle} cursor-pointer`}
                                        key={index}
                                        onClick={() => handleGroupClick(item)}
                                    >
                                        {item.name}
                                    </p>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
            keyduocchon="5"
        />
    )
}