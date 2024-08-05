import React from 'react';
import { Modal, Button, Image, message } from 'antd';

interface ModalNotifyProps {
    open: boolean;
    onClose: () => void;
}
const ModalNotify: React.FC<ModalNotifyProps> = ({ open, onClose }) => {
    const handleShowSuccessMessage = () => {
        message.success('Bật thông báo thành công!');
    };
    const handleTurnOnNotify = () => {
        handleShowSuccessMessage();
        onClose();
    }
    return (
        <Modal
            title="Bật thông báo cho bài viết"
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
                    >Bạn có muốn nhận thông báo cho bài viết này?</p>
                    <p
                        style={{
                            fontWeight: '500',
                            color: '#474747',
                        }}
                    >Tất cả các thay đổi mà bài viết cập nhật sẽ được gửi tới thông báo của bạn</p>
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
                        onClick={handleTurnOnNotify}
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
                        Bật thông báo
                    </Button>
                </div>
            </>
        </Modal>
    )
}

export default ModalNotify
