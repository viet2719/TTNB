import React, { useState } from 'react';
import { Modal, Image, Input, Select, Button } from 'antd'
import styles from './EditQuestionModal.module.scss';

interface EditQuestionModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const EditQuestionModal: React.FC<EditQuestionModalProps> = ({ open, onClose, onConfirm }) => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };
    const clearUploadedFile = () => {
        setUploadedFile(null);
    };
    const handleMemberChange = (value: string[]) => {
        setSelectedMembers(value);
    };
    const MembersData = [
        { value: 'Đạt', label: 'Đạt' },
        { value: 'Việt', label: 'Việt' },
        { value: 'Thức', label: 'Thức' },
    ];
    return (
        <Modal
            title="Chỉnh sửa câu hỏi"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-question-modal"
        >
            <div className={styles.UploadQuestionModal_container}>
                <div className={`${styles.UploadQuestionModal__body_header} flex`}>
                    <div className={styles.UploadQuestionModal__body_header__left}>
                        <Image
                            src='/img/c.png'
                            alt='avatar'
                            width={50}
                            height={50}
                            preview={false}
                            className={`${styles.UploadQuestionModal__body_header__left_avatar} cursor-pointer`}
                        />
                    </div>
                    <div className={styles.UploadQuestionModal__body_header__right}>
                        <p
                            className={styles.infoUseName}
                        >
                            Nguyễn Thế Đạt
                        </p>
                        <p
                            className={styles.subInfoUseName}
                        >
                            Nguyễn Thế Đạt
                        </p>
                    </div>
                </div>
                <div className={styles.UploadQuestionModal__body_input}>
                    <Input
                        placeholder="Đặt câu hỏi của bạn"
                        size="large"
                        bordered={false}
                    />
                </div>

                <div
                    className={`${styles.UploadQuestionModal__body_upload} `}
                >
                    <div className={styles.UploadQuestionModal__body_upload__viewImg}>
                        <div className={styles.upload__viewImg}>
                            {uploadedFile ? (
                                <>
                                    <div className="cursor-pointer text-center">
                                        <Image
                                            src={URL.createObjectURL(uploadedFile)}
                                            alt={uploadedFile.name}
                                            preview={false}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className={styles.imgClose}>
                                        <Image
                                            src='/img/QTTT/close_file.svg'
                                            alt='avatar'
                                            preview={false}
                                            onClick={clearUploadedFile}
                                        />
                                    </div>
                                </>
                            ) : (
                                <label htmlFor="fileInput" className="cursor-pointer text-center">
                                    <Image
                                        src='/img/QTTT/uploadFile.svg'
                                        alt='avatar'
                                        width={50}
                                        height={50}
                                        preview={false}
                                    />
                                    <p className={styles.upload__viewImg__text}>Thêm ảnh/video/tệp</p>
                                    <div className={styles.imgClose}>
                                        <Image
                                            src='/img/QTTT/close_file.svg'
                                            alt='avatar'
                                            preview={false}
                                        />
                                    </div>
                                </label>
                            )}

                        </div>
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*, video/*, .pdf, .doc, .docx"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
                <div>
                    <Select
                        className={`${styles.UploadQuestionModal__body_select} `}
                        placeholder="Thêm thành viên"
                        size="large"
                        mode='multiple'
                        allowClear
                        value={selectedMembers}
                        onChange={handleMemberChange}
                    >
                        {MembersData.map((member) => (
                            <Select.Option key={member.value} value={member.value}>
                                {member.label}
                            </Select.Option>
                        ))}
                    </Select>
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
                        <span className={styles.modalAddDocumentContentButtonCreateText}>Đăng</span>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default EditQuestionModal;