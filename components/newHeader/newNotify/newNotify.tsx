import React from 'react'
import { Badge, ConfigProvider, Image, Popover } from 'antd';
import styles from './newNotify.module.css';
import Ring from '@/components/notify/ring/ring';
import NewUser from '../newUser/newUser';

export default function NewNotify() {
    return (
        <>
            <div className={styles.notify}>
                <div
                    className={styles.mess}
                >
                    <Badge count={6} size='small'>
                        <Image src="/img/img-header/mes.png" alt="" preview={false} />
                    </Badge>
                </div>
                <div
                    className={styles.remind}
                >
                    <Badge count={9} size='small'>
                        <Image src="/img/img-header/chamthan.png" alt="" preview={false} />
                    </Badge>
                </div>
                <div className={`${styles.popover_notify_ring} popover_notify_ring`}>

                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'black',
                            },
                        }}
                    >
                        <Popover
                            content={
                                <Ring />
                            }
                            placement="bottom"
                            className={`${styles.popover_ring} popover_ring `}
                            trigger="click"
                            arrow={false}
                        >
                            <div className={`${styles.ring} ring`}>
                                <Badge count={1} size='small'>
                                    <Image src="/img/img-header/ring.png" alt="" preview={false} />
                                </Badge>
                            </div>
                        </Popover>
                    </ConfigProvider>
                </div>
                <div
                    className={styles.user}
                >
                    <NewUser />
                </div>

            </div>
        </>
    )
}
