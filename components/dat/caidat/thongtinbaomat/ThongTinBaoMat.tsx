import React, { useState } from 'react'
import { Checkbox, Image } from "antd";
import styles from "./ThongTinBaoMat.module.scss";
import ModalLogOut from '@/components/common/Modal/common/LogOut/ModalLogOut';

const ThongTinBaoMat: React.FC = () => {

    const [openModalLogOut, setOpenModalLogOut] = useState(false);

    const handleOpenModalLogOut = () => {
        setOpenModalLogOut(true);
    }

    const handleCloseModalLogOut = () => {
        setOpenModalLogOut(false);
    }

    return (
        <>
            <div
                className={`${styles.companyInfo}`}
                style={{
                    display: "flex",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <div
                    className={`${styles.companyAvatar}`}
                    style={{
                        marginRight: "20px",
                        marginLeft: "40px",
                        width: "140px",
                        height: "140px",
                    }}
                >
                    <Image
                        className={`${styles.avatar}`}
                        style={{
                            borderRadius: "50%",
                        }}
                        alt="avatar"
                        src="/img/c.png"
                        preview={false}
                    />
                </div>
                <div
                    className={`${styles.companyName}`}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <p
                        className={`${styles.name}`}
                    >Nguyễn Thế Đạt</p>
                    <div className={`${styles.infoPosition} flex`}>
                        <p
                            className={`${styles.position}`}
                        >Chức vụ: </p>
                        <span> Nhân viên</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.noidangnhap}`}>
                <div className={`${styles.noidangnhap__title}`}>
                    Nơi đăng nhập
                </div>
                <div className={`${styles.noidangnhap__content} flex flex-space-between`}>
                    <div className={`${styles.noidangnhap__content__title} flex`}>
                        <Image
                            src='/img/caidat/phone.png'
                            alt=''
                            preview={false}
                        />
                        <p
                            className={`${styles.noidangnhap__content__title__name}`}
                        > window. Hanoi, Vietnam</p>
                    </div>
                    <div
                        className={`${styles.noidangnhap__content__logout} flex cursor-pointer`}
                        onClick={handleOpenModalLogOut}
                    >
                        <p>Đăng xuất</p>
                        <Image
                            src='/img/caidat/logout.png'
                            alt=''
                            preview={false}
                        />
                    </div>
                </div>

                <div className={`${styles.setting}`}>
                    <div className={`${styles.setting__title}`}>
                        Cài đặt
                    </div>
                    <div className={`${styles.setting__content}`}>
                        <div className={`${styles.setting__content__ChangePassword} flex flex-space-between`}>
                            <div className={`${styles.setting__content__ChangePassword__title} flex`}>
                                <Image
                                    src='/img/caidat/changePassword.png'
                                    alt=''
                                    preview={false}
                                />
                                <p
                                    className={`${styles.setting__content__ChangePassword__title__name}`}
                                >Đổi mật khẩu</p>
                            </div>
                            <div className={`${styles.setting__content__ChangePassword__logout} flex`}>
                                <p>Chỉnh sửa</p>
                                <Image
                                    src='/img/caidat/edit.png'
                                    alt=''
                                    preview={false}
                                />
                            </div>
                        </div>
                        <div className={`${styles.setting__content__SaveLogin} flex flex-space-between`}>
                            <div className={`${styles.setting__content__SaveLogin__title} flex`}>
                                <Image
                                    src='/img/caidat/use.png'
                                    alt=''
                                    preview={false}
                                />
                                <p
                                    className={`${styles.setting__content__SaveLogin__title__name}`}
                                >Lưu thông tin đăng nhập của bạn</p>
                            </div>
                            <div className={`${styles.setting__content__SaveLogin__CheckBox}`}>
                                <Checkbox />
                            </div>
                        </div>
                        <div className={`${styles.setting__content__GetWarning} flex flex-space-between`}>
                            <div className={`${styles.setting__content__GetWarning__title} flex`}>
                                <Image
                                    src='/img/caidat/ring.png'
                                    alt=''
                                    preview={false}
                                />
                                <p
                                    className={`${styles.setting__content__GetWarning__title__name}`}
                                >Nhận cảnh báo về những lần đăng nhập lạ</p>
                            </div>
                            <div className={`${styles.setting__content__GetWarning__CheckBox}`}>
                                <Checkbox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalLogOut
                open={openModalLogOut}
                onCancel={handleCloseModalLogOut}
                onConfirm={handleCloseModalLogOut}
                message="Bạn có chắc muốn đăng xuất khỏi thiết bị Máy tính window 10?"
            />
        </>
    );
}

export default ThongTinBaoMat
