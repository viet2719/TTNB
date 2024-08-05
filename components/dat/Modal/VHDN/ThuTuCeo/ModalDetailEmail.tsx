import React from 'react';
import { Modal, Button, Image } from 'antd';

interface DeleteCommentModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalDetailEmail: React.FC<DeleteCommentModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            title="Chi tiết thư"
            open={open}
            onCancel={onClose}
            footer={null}
            className="detail-email-modal"
        >
            <div>
                <div
                    style={{
                        borderBottom: '1px solid #e8e8e8',
                    }}
                >
                    <p>THƯ GỬI NĂM MỚI ĐẾN TOÀN BỘ CÁC THÀNH VIÊN TRONG CÔNG TY</p>
                </div>
                <div
                    style={{
                        userSelect: 'none',
                    }}
                >
                    <p
                        style={{
                            marginTop: '8px',
                            marginBottom: '8px',
                            fontWeight: '500',
                            fontSize: '16px',
                        }}
                    >File đính kèm</p>
                    <Image
                        src="/img/VHDN/vh_12.png"
                        alt="attachment"
                        preview={false}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginTop: '30px',
                        marginBottom: '20px',
                    }}
                >
                    <Button
                        onClick={onClose}
                        size="large"
                        style={{
                            width: '200px',
                            border: '1px solid #4c5bd4',
                            color: '#4c5bd4',
                            backgroundColor: 'white',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}

                    >
                        Đóng</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalDetailEmail;