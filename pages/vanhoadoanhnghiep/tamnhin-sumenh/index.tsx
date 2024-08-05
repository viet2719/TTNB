import ModalEditDescription from '@/components/dat/Modal/VHDN/tamnhinsumenh/ModalEditDescription';
import ModalEditMission from '@/components/dat/Modal/VHDN/tamnhinsumenh/ModalEditMission';
import ModalEditVision from '@/components/dat/Modal/VHDN/tamnhinsumenh/ModalEditVision';
import { CameraFilled, EditOutlined } from '@ant-design/icons';
import { Button, Image, Upload } from 'antd';
import React from 'react'
import Vanhoadoanhnghiep from '..';
import styles from './index.module.scss'


export default function Index() {

    const [OpenModalEditDescription, setOpenModalEditDescription] = React.useState(false);
    const [OpenModalEditVision, setOpenModalEditVision] = React.useState(false);
    const [OpenModalEditMission, setOpenModalEditMission] = React.useState(false);

    const handleOpenModalEditDescription = () => {
        setOpenModalEditDescription(true);
    }

    const handleCloseModalEditDescription = () => {
        setOpenModalEditDescription(false);
    }

    const handleOpenModalEditVision = () => {
        setOpenModalEditVision(true);
    }

    const handleCloseModalEditVision = () => {
        setOpenModalEditVision(false);
    }

    const handleOpenModalEditMission = () => {
        setOpenModalEditMission(true);
    }

    const handleCloseModalEditMission = () => {
        setOpenModalEditMission(false);
    }

    const handleImageUpload = (info: any) => {
        if (info.file.status === 'done') {
            // Xử lý khi tải lên thành công, ví dụ: cập nhật giao diện người dùng
            console.log('Tệp tin tải lên thành công:', info.file.name);
        }
    };
    const childrenContentLeft =
        <div
            className={`${styles.TNSMContainer}`}
        >
            <p className={`${styles.TNSMContainer__title}`}>Thông tin công ty</p>
            <div className={`${styles.TNSMContainer__content}`}>

                <div
                    className={`${styles.TNSMContainer__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainer__content__item__description}`}
                    >
                        <p>Công ty Cổ phần Thanh toán Hưng Hà</p>
                        <p>Ngày thành lập: 19/07/2021</p>
                    </div>
                </div>
                <div
                    className={`${styles.TNSMContainer__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainer__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainer__content__item__header__title}`}
                        >Mô tả</p>
                        <div
                            className={`${styles.TNSMContainer__content__item__header__edit} flex`}
                            onClick={handleOpenModalEditDescription}
                        >
                            <p>Chỉnh sửa</p>
                            <EditOutlined rev={undefined} />
                        </div>
                    </div>
                    <p
                        className={`${styles.TNSMContainer__content__item__description}`}
                    >Là một trong những công ty đi đầu trong giới truyền thông</p>
                </div>
                <div
                    className={`${styles.TNSMContainer__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainer__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainer__content__item__header__title}`}
                        >Logo công ty</p>
                        <Upload
                            name="logo"
                            action="/api/upload" // Thay thế bằng địa chỉ endpoint của máy chủ của bạn để xử lý tải lên
                            onChange={handleImageUpload}
                            showUploadList={false}
                            accept="image/*"
                        >
                            <div className={`${styles.TNSMContainer__content__item__header__edit} flex`}>
                                <p>Chọn ảnh khác</p>
                                <CameraFilled rev={undefined} />
                            </div>
                        </Upload>
                    </div>
                    <div
                        className={`${styles.TNSMContainer__content__item__description}`}
                    >
                        <Image
                            src="/img/c.png"
                            alt='logo'
                            preview={false}
                            width={68}
                            className={`${styles.TNSMContainer__content__item__description__logo}`}
                        />
                    </div>
                </div>
                <div
                    className={`${styles.TNSMContainer__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainer__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainer__content__item__header__title}`}
                        >Ảnh bìa công ty</p>

                        <Upload
                            name="logo"
                            action="/api/upload" // Thay thế bằng địa chỉ endpoint của máy chủ của bạn để xử lý tải lên
                            onChange={handleImageUpload}
                            showUploadList={false}
                            accept="image/*"
                        >
                            <div className={`${styles.TNSMContainer__content__item__header__edit} flex`}>
                                <p>Chọn ảnh khác</p>
                                <CameraFilled rev={undefined} />
                            </div>
                        </Upload>
                    </div>
                    <div
                        className={`${styles.TNSMContainer__content__item__description}`}
                    >
                        <Image
                            src="/img/c.png"
                            alt='logo'
                            preview={false}
                            className={`${styles.TNSMContainer__content__item__description__banner}`}
                        />
                    </div>
                </div>
                <div
                    className={`${styles.TNSMContainer__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainer__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainer__content__item__header__title} `}
                        >Địa chỉ công ty</p>
                    </div>
                    <div
                        className={`${styles.TNSMContainer__content__item__description}`}
                    >
                        <div className={`${styles.TNSMContainer__content__item__description__address} flex`}>
                            <Image
                                src="/img/VHDN/vhdn_address.svg"
                                alt='logo'
                                preview={false}
                            />
                            <p>VP1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội</p>
                        </div>
                        <div className={`${styles.TNSMContainer__content__item__description__address} flex`}>
                            <Image
                                src="/img/VHDN/vhdn_address.svg"
                                alt='logo'
                                preview={false}
                            />
                            <p>VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên</p>
                        </div>
                        <div className={`${styles.TNSMContainer__content__item__description__address} flex`}>
                            <Image
                                src="/img/VHDN/vhdn_address.svg"
                                alt='logo'
                                preview={false}
                            />
                            <p>VP3: Số 1 đường Trần Nguyễn Đán, Khu Đô Thị Định Công, Hoàng Mai, Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalEditDescription
                open={OpenModalEditDescription}
                onClose={handleCloseModalEditDescription}
                onConfirm={handleCloseModalEditDescription}
            />
        </div >
    const childrenContentRight =
        <>
            <div
                className={`${styles.TNSMContainerRight__content}`}
            >
                <div className={`${styles.TNSMContainerRight__content__item}`} >
                    <div
                        className={`${styles.TNSMContainerRight__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainerRight__content__item__header__title}`}
                        >TẦM NHÌN</p>
                        <div
                            className={`${styles.TNSMContainerRight__content__item__header__edit} flex`}
                            onClick={handleOpenModalEditVision}
                        >
                            <p>Chỉnh sửa</p>
                            <EditOutlined rev={undefined} />
                        </div>
                    </div>
                    <div
                        className={`${styles.TNSMContainerRight__content__item__body}`}
                    >
                        <p>Chưa cập nhật</p>
                    </div>
                </div>
                <div
                    className={`${styles.TNSMContainerRight__content__item}`}
                >
                    <div
                        className={`${styles.TNSMContainerRight__content__item__header}`}
                    >
                        <p
                            className={`${styles.TNSMContainerRight__content__item__header__title}`}
                        >SỨ MỆNH</p>
                        <div
                            className={`${styles.TNSMContainerRight__content__item__header__edit} flex`}
                            onClick={handleOpenModalEditMission}
                        >
                            <p>Chỉnh sửa</p>
                            <EditOutlined rev={undefined} />
                        </div>
                    </div>
                    <div
                        className={`${styles.TNSMContainerRight__content__item__body}`}
                    >
                        <p>Chưa cập nhật</p>
                    </div>
                </div>
            </div>
            <ModalEditVision
                open={OpenModalEditVision}
                onClose={handleCloseModalEditVision}
                onConfirm={handleCloseModalEditVision}
            />
            <ModalEditMission
                open={OpenModalEditMission}
                onClose={handleCloseModalEditMission}
                onConfirm={handleCloseModalEditMission}
            />
        </>
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
            keyduocchon="2"
        />
    )
}
