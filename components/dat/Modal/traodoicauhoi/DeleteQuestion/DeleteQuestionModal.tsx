import React from 'react';
import { Modal, Button } from 'antd';

interface DeleteQuestionModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteQuestionModal: React.FC<DeleteQuestionModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            title="Xóa câu hỏi"
            open={open}
            onCancel={onClose}
            footer={null}
            className="delete-question-modal"
        >
            <div>
                <div
                    className="text-center"
                >
                    <p
                        style={{
                            fontWeight: 'bold',
                            margin: '16px 0',
                            fontSize: '16px',
                        }}
                    >Bạn có chắc muốn xóa câu hỏi của người này?</p>
                    <p
                        style={{
                            margin: '10px 36px',
                            fontSize: '16px',
                        }}>Bài viết này sẽ không thể khôi phục do không được lưu tại bộ nhớ tạm của hệ thống</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop: '40px',
                        marginBottom: '30px',
                    }}
                >
                    <Button
                        onClick={onClose}
                        size="large"
                        style={{
                            width: '135px',
                            border: '1px solid #4c5bd4',
                            color: '#4c5bd4',
                            backgroundColor: 'white',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}

                    >
                        Hủy</Button>
                    <Button
                        onClick={onConfirm}
                        size="large"
                        style={{
                            width: '135px',
                            border: '1px solid #4c5bd4',
                            color: '#fff',
                            backgroundColor: '#4c5bd4',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}
                    >
                        Xóa</Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteQuestionModal;