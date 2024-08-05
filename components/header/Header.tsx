import { ArrowLeftOutlined, CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Image, Col, Input, Row, Popover, ConfigProvider, } from "antd";
import { useState } from "react";
import Notify from "../notify/notify";

import styles from './header.module.css';
import Search from "./Search/Search";
import SideBar from "./sidebar/sidebar";

export default function Header(): JSX.Element {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const togglePopover = () => {
        setShowPopover(!showPopover);
    };

    const closePopover = () => {
        setShowPopover(false);
    };

    const toggleMobileSearch = () => {
        setShowMobileSearch(!showMobileSearch);
    };
    return (
        <>
            <div className={styles.container}>
                {showMobileSearch ? (
                    <div className={styles.searchMobile}>
                        <ArrowLeftOutlined
                            onClick={toggleMobileSearch}
                            rev={undefined}
                            style={{
                                cursor: 'pointer',
                                width: '30px',
                                height: '30px',
                                margin: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        />
                        <Input
                            className={styles.inputSearchMobile}
                            placeholder="Tìm kiếm bài viết "
                            size="large"
                            bordered={false}
                            suffix={<SearchOutlined style={{
                                cursor: 'pointer',
                                width: '20px',
                            }} rev={undefined} />}
                        />
                    </div>
                ) : (
                    <div className={`${styles.row} flex`}>
                        <div className={`${styles.Sidebar} SideBar`} >
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Menu: {
                                            darkItemBg: "#4c5bd4",
                                            darkItemHoverBg: "#2e3994",
                                            darkItemSelectedBg: "#2e3994",
                                            darkSubMenuItemBg: "#4c5bd4",
                                        },
                                    },
                                }}
                            >
                                <Popover
                                    content={
                                        <SideBar closePopover={closePopover} />
                                    }
                                    placement="bottomLeft"
                                    className={`${styles.PopoverSidebar} PopoverSidebar`}
                                    trigger="click"
                                    arrow={false}
                                    open={showPopover}
                                    onOpenChange={togglePopover}
                                >
                                    <div
                                        className={styles.navbar}
                                    >

                                        <Image src="/img/img-header/nv_header_home.svg" alt="" preview={false} />
                                        <span style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: '#4C5BD4',
                                        }}>Trang Chủ</span>
                                        <CaretDownOutlined
                                            rev={undefined}
                                            style={{
                                                fontSize: '25px',
                                                color: '#4C5BD4',
                                            }}
                                        />
                                    </div>
                                    <div className={styles.header_small_menu} >
                                        <Image
                                            src="/img/img-header/nv_header_small_menu.svg/"
                                            alt=""
                                            preview={false}
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </Popover>
                            </ConfigProvider>
                        </div>
                        <div className={styles.colSearch} >
                            <div className={styles.search}>
                                <Search onMobileSearchClick={toggleMobileSearch} />
                            </div>
                        </div>
                        <div className={styles.colNotify} >
                            <Notify />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}