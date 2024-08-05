import { Tabs, TabsProps } from 'antd';
import React, { useState } from 'react'
import Vanhoadoanhnghiep from '..';
import Giatricotloi from './giatricotloi';

import styles from './index.module.scss';
import Muctieuchienluoc from './muctieuchienluoc';
export default function Index() {
    const onChange = (key: string) => {
        setActiveTab(key);
    };
    const [activeTab, setActiveTab] = useState('1');
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Giá trị cốt lõi',
            children: <Giatricotloi />,
        },
        {
            key: '2',
            label: 'Mục tiêu chiến lược',
            children: <Muctieuchienluoc />,
        },
    ];
    const childrenContentLeft =
        <div>
            <Tabs
                defaultActiveKey={activeTab}
                items={items}
                onChange={onChange}
                centered
            />
        </div>
    const childrenContentRight = (
        <div>
            {activeTab === '1' && <div>
                <>
                    <div
                        className={styles.contentRight}
                    >
                        <div className={styles.titleRight}>
                            <p
                                className={styles.titleRight__text}
                            >GIÁ TRỊ 1
                            </p>
                        </div>
                        <div className={styles.bodyRight}>
                            <p>Người tạo:
                                <span
                                    className={styles.bodyRight__text}
                                > Công ty Cổ phần Thanh toán Hưng Hà</span>
                            </p>
                            <p>Thời gian tạo: 00:42, 06/10/2023</p>
                            <p>Cập nhật mới nhất: 00:42, 06/10/2023</p>
                        </div>
                    </div>
                    <div
                        className={styles.contentRight}
                    >
                        <div className={styles.titleRight}>
                            <p
                                className={styles.titleRight__text}
                            >TRUNG THÀNH LÀ SỐ 1
                            </p>
                        </div>
                        <div className={styles.bodyRight}>
                            <p>Người tạo:
                                <span
                                    className={styles.bodyRight__text}
                                > Công ty Cổ phần Thanh toán Hưng Hà</span>
                            </p>
                            <p>Thời gian tạo: 00:42, 06/10/2023</p>
                            <p>Cập nhật mới nhất: 00:42, 06/10/2023</p>
                        </div>
                    </div>
                </>
            </div>}
            {activeTab === '2' && <div>
                <>
                    <div
                        className={styles.contentRight}
                    >
                        <div className={styles.titleRight}>
                            <p
                                className={styles.titleRight__text}
                            >
                                CỐ GẮNG LÀ MỤC TIÊU HÀNG ĐẦU!
                            </p>
                        </div>
                        <div className={styles.bodyRight}>
                            <p>Người tạo:
                                <span
                                    className={styles.bodyRight__text}
                                > Công ty Cổ phần Thanh toán Hưng Hà</span>
                            </p>
                            <p>Thời gian tạo: 00:42, 06/10/2023</p>
                            <p>Cập nhật mới nhất: 00:42, 06/10/2023</p>
                        </div>
                    </div>
                </>
            </div>}
        </div>
    );
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
            keyduocchon="3"
        />
    )
}