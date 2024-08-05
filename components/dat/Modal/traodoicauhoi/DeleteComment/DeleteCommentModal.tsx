import React from 'react';
import { Modal, Button } from 'antd';

interface DeleteCommentModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteCommentModal: React.FC<DeleteCommentModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            title="Xóa câu hỏi"
            open={open}
            onCancel={onClose}
            footer={null}
            className="delete-comment-modal"
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
                    >Bạn có chắc muốn xóa bình luận này không?</p>
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

export default DeleteCommentModal;