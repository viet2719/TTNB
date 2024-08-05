import React from 'react';
import { Modal, Button } from 'antd';
import styles from './DeleteDocumentModal.module.scss';
interface DeleteDocumentModalProps {
    open: boolean;
    onClose: () => void;
}

const DeleteDocumentModal: React.FC<DeleteDocumentModalProps> = ({ open, onClose }) => {
    const handleDelete = () => {
        // Perform the delete operation and close the modal
        onClose();
    };
    return (
        <Modal
            title="Xóa tài liệu"
            open={open}
            onCancel={onClose}
            footer={null}
            className={`${styles.modalDeleteDocument} modalDeleteDocument`}
        >
            <div className={
                `${styles.modalAddDocumentContentItemTitle}`
            }>
                <p
                    className={styles.modalAddDocumentContentItemTitleTextBold}
                >
                    Bạn có chắc muốn xóa thông tin tài liệu Abc?
                </p>
                <p>
                    Tất cả thông tin sẽ được lưu tự động vào
                    <span
                        className={styles.modalAddDocumentContentItemTitleTextBold}
                    > Đã xóa gần đây </span>
                    trong thời gian 05 ngày trước khi bị xóa vĩnh viễn</p>
            </div>
            <div
                className={`${styles.modalAddDocumentContentButton} modalAddDocumentContentItem`}
            >
                <Button
                    className={styles.modalAddDocumentContentButtonCancel}
                    size="large"
                    onClick={onClose}
                >
                    <span className={styles.modalAddDocumentContentButtonCancelText}>Hủy</span>
                </Button>
                <Button
                    className={styles.modalAddDocumentContentButtonCreate}
                    size="large"
                    onClick={onClose}
                >
                    <span className={styles.modalAddDocumentContentButtonCreateText}>Tạo</span>
                </Button>
            </div>
        </Modal>
    );
};

export default DeleteDocumentModal;
