import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Col, Image, MenuProps, Row } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
import styles from './newHeader.module.css';
import NewNotify from './newNotify/newNotify';

interface HeaderNewProps {
    collapsed: boolean;
}

const HeaderNew: React.FC<HeaderNewProps> = ({ collapsed }) => {

    return (
        <>
            <div className={styles.container}>
                <Row className={styles.row}>
                    <Col lg={12} md={4} xs={6} className={`${styles.Sidebar} SideBar`} >
                        <div className={styles.info}>
                            <Image
                                src="/img/c.png"
                                alt='logo'
                                width={50}
                                height={50}
                                preview={false}
                                className={styles.logo}
                            />
                            <div className={styles.infoDetail}>
                                <p className={styles.infoDetail__name}>Nguyễn Thế Đạt</p>
                                <p className={styles.infoDetail__position}>Nhân viên</p>
                            </div>
                        </div>
                        <div className={styles.iconMenu}>
                            <MenuOutlined rev={undefined} />
                        </div>
                    </Col>
                    <Col lg={10} md={16} xs={16} offset={2} className={styles.colNotify} >
                        <NewNotify />
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default HeaderNew;
