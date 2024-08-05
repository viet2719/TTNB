import React from 'react';
import { Modal, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from './ModalExchangeQuestion.module.scss';

interface ExchangeQuestionModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ExchangeQuestionModal({
    open,
    onClose,
}: ExchangeQuestionModalProps) {
    return (
        <Modal
            title="Trao đổi - Đặt câu hỏi"
            open={open}
            onCancel={onClose}
            footer={null}
            className={`${styles.modalExchangeQuestion} modalExchangeQuestion`}
        >
            <div>
                <p>Tên tài liệu<span style={{ color: 'red' }}>*</span></p>
                <Input
                    size='large'
                />
            </div>
            <div>
                <p>Nội dung câu hỏi<span style={{ color: 'red' }}>*</span></p>
                <TextArea
                    placeholder="Nhập câu hỏi của bạn"
                    className={styles.modalAddDocumentContentItemInputInput}
                    size="large"
                />
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
}