import { CaretDownOutlined, RightOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Image } from 'antd'
import React from 'react'

import styles from './newUser.module.css'
const menuItems = [
    {
        key: "8",
        icon: "/img/img-header/user/v_header_info_acc.svg",
        label: "Thông tin tài khoản",
        isFirstImage: true,
        link: "/",
    },
    {
        key: "9",
        icon: "/img/img-header/user/v_header_menu_danhgia.svg",
        label: "Đánh giá",
        link: "/",
    },
    {
        key: "10",
        icon: "/img/img-header/user/v_header_menu_error.svg",
        label: "Báo lỗi",
        link: "/",
    },
    {
        key: "11",
        icon: "/img/img-header/user/v_header_menu_huongdan.svg",
        label: "Hướng dẫn",
        link: "/",
    },
    {
        key: "12",
        icon: "/img/img-header/user/v_header_menu_logout.svg",
        label: "Đăng xuất",
        link: "/",
    },
];
const userMenu = (
    <div>
        <Menu className={`${styles.MenuUser} MenuNewUser`}>
            {menuItems.map((item, index) => (
                <React.Fragment key={item.key}>
                    <Menu.Item
                        className={`${styles.menuItem} ${index >= 0 ? styles.itemWithSpacing : ''}`}
                    >
                        <a href={item.link} className={styles.menuLink}>
                            <Image
                                width={25}
                                height={25}
                                src={item.icon}
                                alt={item.label}
                                preview={false}
                                className={styles.menuIcon}
                            />
                            <span className={index >= 0 ? styles.menuLabelAfter : styles.menuLabel}>
                                {item.label}
                            </span>
                        </a>
                        <RightOutlined
                            rev={undefined}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                fontSize: '16px',
                                top: 'calc(50% - 7px)',
                            }}
                        />
                    </Menu.Item>
                </React.Fragment>
            ))}
        </Menu>

    </div >

);
export default function NewUser() {
    return (
        <Dropdown
            overlay={userMenu}
            placement="bottomRight"
            trigger={['click']}
            autoAdjustOverflow={false}
            className={styles.userDropdown}
        >
            <div className={styles.userDropdownTrigger}>
                <Image
                    src="/img/c.png"
                    alt=""
                    className={styles.avatar}
                    width={40}
                    height={40}
                    preview={false}
                />
                <p className={styles.userName}>Nguyễn Thế Đạt</p>
                <CaretDownOutlined
                    style={{
                        fontSize: '25px',
                        color: '#999999',
                        position: 'relative',
                        top: '2px',
                        left: '2px'
                    }}
                    rev={undefined}
                    className={styles.caretDown}
                />
            </div>
        </Dropdown>
    )
}
