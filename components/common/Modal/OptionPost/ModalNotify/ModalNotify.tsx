import { Button, Modal } from "antd";
import styles from './ModalNotify.module.css';

interface ModalNotifyProps {
    selectedModal: string | null;
    closeSelectedModal: () => void;
}

function ModalNotify({ selectedModal, closeSelectedModal }: ModalNotifyProps) {
    return (
        <Modal
            title="Bật thông báo cho bài viết"
            open={selectedModal === 'notifications'}
            footer={null}
            className={`${styles.ModalNotify} ModalTurnOnNotify`}
            closeIcon={false}
            onCancel={closeSelectedModal}
        >
            <div className={styles.ModalNotify__content}>
                <div className={styles.ModalNotify__content__title}>
                    Bạn có muốn nhận thông báo cho bài viết này?
                </div>
                <div className={styles.ModalNotify__content__subTitle}>
                    Tất cả các thay đổi mà bài viết cập nhật sẽ được gửi tới thông báo của bạn
                </div>

                <div className={styles.ModalNotify__container_btn}>
                    <Button
                        className={styles.ModalNotify__container_btn__cancel}
                        onClick={closeSelectedModal}
                        size="large"
                    >
                        Hủy
                    </Button>
                    <Button
                        className={styles.ModalNotify__container_btn__turnOn}
                        size="large"
                    >
                        Bật thông báo
                    </Button>
                </div>
            </div>


        </Modal>
    );
}

export default ModalNotify;