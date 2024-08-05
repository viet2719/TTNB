import React from 'react';
import { Modal, Button, Image } from 'antd';

interface ModalDeleteProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            title="Xóa mục tiêu - chiến lược"
            open={open}
            onCancel={onClose}
            footer={null}
            className="delete-ntlv-modal"
        >
            <>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '30px',
                    }}
                >
                    <p
                        style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            fontSize: '17px',
                        }}
                    >Bạn có chắc xóa mục tiêu - chiến lược này không?</p>
                    <p
                        style={{
                            fontWeight: '500',
                            color: '#474747',
                        }}
                    > Tất cả thông báo sẽ được lưu tự động vào Đã xóa gần đây trong thời gian 03 ngày trước khi bị xóa vĩnh viễn</p>
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
                            width: '170px',
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
                            width: '170px',
                            border: '1px solid #4c5bd4',
                            color: '#fff',
                            backgroundColor: '#4c5bd4',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}
                    >
                        Xóa</Button>
                </div>
            </>
        </Modal >
    );
};

export default ModalDelete;