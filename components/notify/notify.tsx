import styles from './notify.module.css';
import { Badge, ConfigProvider, Image, Popover } from 'antd';
import User from './user/user';
import Ring from './ring/ring';


export default function Notify(): JSX.Element {
    return (
        <>
            <div className={styles.notify}>
                <div
                    className={styles.mess}
                >
                    <Badge count={5} size='small'>
                        <Image src="/img/img-header/mes.png" alt="" preview={false} />
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
                    className={`${styles.user} user`}
                >
                    <div
                        style={{
                        }}
                    >
                        <User />
                    </div>
                </div>

            </div>
        </>
    )
}