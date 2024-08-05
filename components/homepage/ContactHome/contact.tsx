import { Image, } from "antd";
import React from "react";
import { menuItemsHomeContact, menuItemsHomeGroup } from "../menuDataHome";
import styles from "./contactHome.module.css";


export default function ContactHome(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.containerGroup}>
                <div className={styles.group}>
                    <div className={styles.title}>
                        <p>Lối tắt của bạn</p>
                    </div>
                    <div className={`${styles.listGroup} `}>
                        {menuItemsHomeGroup.map(group => (
                            <a href={group.link} className={styles.menuLink} key={group.key}>
                                <div className={`${styles.avatarContainer} avatarContainer`} >
                                    <Image
                                        width={40}
                                        height={40}
                                        src={group.avatar}
                                        alt={group.name}
                                        preview={false}
                                        className={styles.avatar}
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                                <div className={styles.nameGroup}>
                                    <p>{group.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.containerContact}>
                <div className=
                    {`${styles.contact} contact`}
                >
                    <div className={styles.title}>
                        <p>Người liên hệ</p>
                    </div>
                    <div className={`${styles.listContact} listContact`}>
                        {menuItemsHomeContact.map(contact => (
                            <a href={contact.link} className={styles.menuLink} key={contact.key}>
                                <div className={`${styles.avatarContainer} avatarContainer`} >
                                    <Image
                                        width={40}
                                        height={40}
                                        src={contact.icon}
                                        alt={contact.name}
                                        preview={false}
                                        className={styles.avatar}
                                        style={{ borderRadius: '50%' }}
                                    />
                                    <div className={`${contact.status ? styles.userOnline : styles.userOffline}`}></div>
                                </div>
                                <div className={styles.nameContact}>
                                    <p>{contact.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}