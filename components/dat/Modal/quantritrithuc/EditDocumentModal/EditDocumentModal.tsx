import React from 'react';
import { Modal, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import styles from './EditDocumentModal.module.scss';
interface EditDocumentModalProps {
    open: boolean;
    onClose: () => void;
}

const EditDocumentModal: React.FC<EditDocumentModalProps> = ({
    open,
    onClose,
}) => {

    return (
        <Modal
            title="Chỉnh sửa thông tin tài liệu"
            open={open}
            onCancel={onClose}
            footer={null}
            className={`modalEditDocument`}
        >
            <div className={`${styles.modalAddDocumentContent} modalAddDocumentContent`}>
                <div className={`${styles.modalAddDocumentContentItem} modalAddDocumentContentItem`}>
                    <div className={`${styles.modalAddDocumentContentItemTitle} modalAddDocumentContentItemTitle`}>
                        <span className={styles.modalAddDocumentContentItemTitleText}>Tên tài liệu</span>
                        <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div className={`${styles.modalAddDocumentContentItemInput} modalAddDocumentContentItemInput`}>
                        <Input
                            placeholder="Nhập tên tài liệu"
                            className={styles.modalAddDocumentContentItemInputInput}
                            size="large"
                        />
                    </div>
                </div>
                <div className={`${styles.modalAddDocumentContentItem} modalAddDocumentContentItem`}>
                    <div className={`${styles.modalAddDocumentContentItemTitle} modalAddDocumentContentItemTitle`}>
                        <span className={styles.modalAddDocumentContentItemTitleText}>Tên tác giả</span>
                        <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div className={`${styles.modalAddDocumentContentItemInput} modalAddDocumentContentItemInput`}>
                        <Input
                            placeholder="Nhập tên tác giả"
                            className={styles.modalAddDocumentContentItemInputInput}
                            size="large"
                        />
                    </div>
                </div>
                <div className={`${styles.modalAddDocumentContentItem} modalAddDocumentContentItem`}>
                    <div className={`${styles.modalAddDocumentContentItemTitle} modalAddDocumentContentItemTitle`}>
                        <span className={styles.modalAddDocumentContentItemTitleText}>Lĩnh vực đề cập</span>
                        <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div className={`${styles.modalAddDocumentContentItemInput} modalAddDocumentContentItemInput`}>
                        <Input
                            placeholder="Nhập lĩnh vực đề cập"
                            className={styles.modalAddDocumentContentItemInputInput}
                            size="large"
                        />
                    </div>
                </div>
                <div className={`${styles.modalAddDocumentContentItem} modalAddDocumentContentItem`}>
                    <div className={`${styles.modalAddDocumentContentItemTitle} modalAddDocumentContentItemTitle`}>
                        <span className={styles.modalAddDocumentContentItemTitleText}>Mô tả ngắn</span>
                        <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div className={`${styles.modalAddDocumentContentItemInput} modalAddDocumentContentItemInput`}>
                        <TextArea
                            placeholder="Nhập mô tả"
                            className={styles.modalAddDocumentContentItemInputInput}
                            size="large"
                        />
                    </div>
                </div>
                <div className={`${styles.modalAddDocumentContentItem} modalAddDocumentContentItem`}>
                    <div className={`${styles.modalAddDocumentContentItemTitle} modalAddDocumentContentItemTitle`}>
                        <span className={styles.modalAddDocumentContentItemTitleText}>Chọn tệp đính kèm</span>
                        <span style={{ color: 'red' }}>*</span>
                    </div>
                    <div className={`${styles.modalAddDocumentContentItemInput} modalAddDocumentContentItemInput`}>
                        <Upload
                            //{...props}
                            className={styles.modalAddDocumentContentItemInputUpload}
                        >
                            <Button
                                className={styles.modalAddDocumentContentItemInputUploadButton}
                                size="large"
                            >
                                <UploadOutlined rev={undefined} />
                                <span className={styles.modalAddDocumentContentItemInputUploadButtonText}>Tải lên</span>
                            </Button>
                        </Upload>
                    </div>
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
            </div>
        </Modal>
    );
};

export default EditDocumentModal;