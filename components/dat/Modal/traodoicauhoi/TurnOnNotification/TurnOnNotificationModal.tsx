import React from 'react';
import { Modal, Button } from 'antd';

interface TurnOnNotificationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const TurnOnNotificationModal: React.FC<TurnOnNotificationModalProps> = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            title="Bật thông báo câu hỏi"
            open={open}
            onCancel={onClose}
            footer={null}
            className="turn-on-notification-modal"
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
                    >Bạn có muốn nhận thông báo cho câu hỏi này?</p>
                    <p
                        style={{
                            margin: '10px 36px',
                            fontSize: '16px',
                        }}>Tất cả các thay đổi mà câu hỏi cập nhật sẽ được gửi tới thông báo của bạn</p>
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
                        Bật thông báo</Button>
                </div>
            </div>
        </Modal>
    );
};

export default TurnOnNotificationModal;