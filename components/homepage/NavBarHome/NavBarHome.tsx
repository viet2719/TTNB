import React from 'react';
import { Menu, Image } from 'antd';
import { menuItemsHome } from '../menuDataHome';
import styles from './navbarHome.module.css';
import Link from 'next/link';


export default function NavbarHome(): JSX.Element {
    return (
        <>
            <Menu className={`${styles.MenuUserHome} MenuUserHome`}>
                {menuItemsHome.map((item, index) => (
                    <React.Fragment key={item.key}>
                        <Menu.Item
                            className={`${styles.menuItem} ${index >= 7 ? styles.itemWithSpacing : ''}`}
                        >
                            <Link href={item.link} className={styles.menuLink}>
                                <Image
                                    width={index >= 7 ? 25 : 40}
                                    height={index >= 7 ? 25 : 40}
                                    src={item.icon}
                                    alt={item.label}
                                    preview={false}
                                    className={styles.menuIcon}
                                    style={item.isFirstImage ? { borderRadius: '50%' } : {}}
                                />
                                <span className={index >= 7 ? styles.menuLabelAfter : styles.menuLabel}>
                                    {item.label}
                                </span>
                            </Link>
                        </Menu.Item>
                    </React.Fragment>
                ))}
            </Menu>
        </>
    )
}