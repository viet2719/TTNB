import { Button, ConfigProvider, Modal, Select, SelectProps } from "antd";
import styles from "./ModalHideEveryone.module.css";

interface AnKyNiemProps {
    isOpen: boolean;
    onClose: () => void;
}
const options: SelectProps['options'] = [
    {
        value: 'Đạt',
        label: 'Đạt'
    },
    {
        value: 'Việt',
        label: 'Việt'
    },
    {
        value: 'Thức',
        label: 'Thức'
    },
];

const ModalHideEveryone: React.FC<AnKyNiemProps> = ({ isOpen, onClose }) => {

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Modal
            title="Ẩn mọi người"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            className={`${styles.ModalHideEveryone} modalRegime`}
        >

            <>
                <div className={styles.content}>
                    <div className={styles.titles}>
                        <p className={styles.title}>Ẩn kỷ niệm về mọi người</p>
                        <p className={styles.title_desc}>Hãy cho biết bạn không muốn thấy ai trong kỷ niệm của mình.</p>
                        <p className={styles.title_desc}>Chúng tôi sẽ không gửi thông báo cho họ.</p>
                    </div>
                    <div className={styles.select}>
                        <p className={styles.select__title}>Nhập tên</p>
                        <ConfigProvider
                            theme={{
                                token: {
                                    borderRadius: 10,
                                    controlItemBgActive: '#f5f5f5',
                                    controlItemBgHover: '#f5f5f5 !important',
                                    controlOutline: 'none',
                                    colorPrimaryHover: '#d9d9d9',
                                },
                            }}
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Bắt đầu nhập tên"
                                onChange={handleChange}
                                options={options}
                                className={styles.select__input}
                            />
                        </ConfigProvider>
                    </div>
                </div>
                <div
                    className={styles.footer}
                >
                    <Button
                        onClick={onClose}
                        size="large"
                        className={styles.footer__cancel}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        className={styles.footer__save}
                    >
                        Lưu
                    </Button>
                </div>
            </>
        </Modal>
    );
}

export default ModalHideEveryone;