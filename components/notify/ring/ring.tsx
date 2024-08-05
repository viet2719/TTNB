import { Badge, Button, Image, Popover } from 'antd';
import styles from './ring.module.css';
export default function Ring(): JSX.Element {
    return (
        <>
            <div className={`${styles.container} container_ring`} >
                <div className={`${styles.header} header_ring`}>
                    <div className={styles.title}>
                        <h3>Thông báo</h3>
                        <Popover
                            content={
                                <div className={styles.optionTitle}>
                                    <a>
                                        <Image src="/img/img-header/ep_post_hide_bv.svg" alt="" preview={false} />
                                        <span>Đánh dấu tất cả đã đọc</span>
                                    </a>
                                    <a>
                                        <Image src="/img/img-header/nv_setting-2.svg" alt="" preview={false} />
                                        <span>Cài đặt thông báo</span>
                                    </a>
                                </div>
                            }
                            arrow={false}
                            placement="bottomRight"
                            trigger="hover">
                            <Image src="/img/img-header/ep_post_more.svg" alt="" preview={false} />
                        </Popover>

                    </div>
                    <div className={styles.body}>
                        <div className={styles.option}>
                            <Button className={styles.btnOption} >
                                Tất cả
                            </Button>
                            <Button className={styles.btnOption}>
                                Chưa đọc
                            </Button>
                        </div>
                        <div className={styles.showMore}>
                            <a href=''>Xem tất cả</a>
                        </div>
                        <div className={styles.listNotify}>
                            <div className={styles.item}>
                                <div className={styles.avatar}>
                                    <Image style={{ borderRadius: '50%' }} src="/img/c.png" width={40} height={40} alt="" preview={false} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.detail}>
                                        <div>
                                            <span className={styles.name}>Nguyễn Thế Đạt</span> Đã bình luận bài viết của bạn
                                        </div>
                                        <div className={styles.iconItem}>
                                            <Popover
                                                content={
                                                    <div className={styles.optionTitle}>
                                                        <a>
                                                            <Image src="/img/img-header/ep_post_hide_bv.svg" alt="" preview={false} />
                                                            <span>Đánh dấu là chưa đọc</span>
                                                        </a>
                                                        <a>
                                                            <Image src="/img/img-header/public_del.svg" alt="" preview={false} />
                                                            <span>Gỡ thông báo này</span>
                                                        </a>
                                                    </div>
                                                }
                                                arrow={false}
                                                placement="bottomRight"
                                                trigger="hover">
                                                <Image
                                                    src="/img/img-header/ep_post_more.svg"
                                                    width={25}
                                                    height={25}
                                                    alt=""
                                                    preview={false} />
                                            </Popover>
                                        </div>

                                    </div>
                                    <div className={styles.timeNotify}>
                                        <p>1 giờ trước</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}