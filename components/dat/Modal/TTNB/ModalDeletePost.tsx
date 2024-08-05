import React from 'react';
import { Modal, Button, Image } from 'antd';

interface ModalDeletePostProps {
    open: boolean;
    onClose: () => void;
}
const ModalDeletePost: React.FC<ModalDeletePostProps> = ({ open, onClose }) => {
    return (
        <Modal
            title="Xóa bài viết"
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
                    >Bạn có chắc muốn xóa bài viết của người này?</p>
                    <p
                        style={{
                            fontWeight: '500',
                            color: '#474747',
                        }}
                    > Bài viết này sẽ không thể khôi phục do không được lưu tại bộ nhớ tạm của hệ thống</p>
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
                        onClick={onClose}
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
}

export default ModalDeletePost;
