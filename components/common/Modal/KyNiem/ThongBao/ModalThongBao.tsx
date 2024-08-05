import { ConfigProvider, Modal, Radio } from "antd";
import styles from "./ModalThongBao.module.css";

interface ThongBaoKyNiemProps {
    isOpen: boolean;
    onClose: () => void;
}

const dataThongBao = [
    {
        id: 1,
        title: "Tất cả những kỷ niệm",
        subtitle: "Chúng tôi sẽ chỉ thông báo một lần mỗi này",
    },
    {
        id: 2,
        title: "Tin nổi bật",
        subtitle: "Chúng tôi sẽ chỉ thông báo các bài viết và bộ sưu tập nổi bật",
    },
    {
        id: 3,
        title: "Không có",
        subtitle: "Chúng tôi sẽ không thông báo về các kỷ niệm",
    },
];

const ModalThongBao: React.FC<ThongBaoKyNiemProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            title="Thông báo"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            className={`${styles.ModalThongBao} modalRegime`}
        >

            <>
                <div className={styles.modalThongBao}>
                    <p className={styles.modalThongBao__title}>
                        Bạn có thể chọn tần suất nhận thông báo về kỷ niệm của mình.
                    </p>
                    {dataThongBao.map((item) => (
                        <div className={styles.modalThongBao__item} key={item.id}>
                            <div className={styles.modalThongBao__item__content}>
                                <p className={styles.modalThongBao__item__title}>
                                    {item.title}
                                </p>
                                <p className={styles.modalThongBao__item__subtitle}>
                                    {item.subtitle}
                                </p>
                            </div>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Radio: {
                                            radioSize: 50,
                                            dotSize: 10,
                                        },
                                    },
                                }}
                            >
                                <Radio />
                            </ConfigProvider>
                        </div>
                    ))}
                </div>
            </>

        </Modal>
    );
}

export default ModalThongBao;