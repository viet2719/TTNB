import React, { useState } from 'react';
import { Modal, Button } from 'antd';

interface DeleteCommentModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalDeleteEmail: React.FC<DeleteCommentModalProps> = ({ open, onClose, onConfirm }) => {

    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

    const handleOpenConfirmationModal = () => {
        setOpenConfirmationModal(true);

    };
    return (
        <Modal
            title="Xóa thư từ CEO"
            open={open}
            onCancel={onClose}
            footer={null}
            className="delete-email-modal"
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
                    >Bạn có chắc xóa thư THƯ GỬI NĂM MỚI ĐẾN TOÀN BỘ CÁC THÀNH VIÊN TRONG CÔNG TY?</p>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#474747',
                            marginTop: '16px',
                        }}
                    >Tất cả thư đã xóa sẽ được lưu tự động vào Đã xóa gần đây trong thời gian 03 ngày trước khi bị xóa vĩnh viễn</p>
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
                        onClick={() => {
                            onConfirm();
                        }}
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
                {openConfirmationModal && (
                    <Modal
                        title="Xóa thư từ CEO"
                        visible={openConfirmationModal}
                        onCancel={() => setOpenConfirmationModal(false)}
                        footer={null}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="99" viewBox="0 0 98 99" fill="none">
                            <path d="M48.9997 0.496094C21.9814 0.496094 0 22.477 0 49.4958C0 76.5146 21.9814 98.4961 48.9997 98.4961C76.018 98.4961 97.9995 76.5146 97.9995 49.4958C97.9995 22.477 76.0186 0.496094 48.9997 0.496094ZM77.1363 41.2194L46.3522 72.0034C45.0433 73.3123 43.3033 74.0328 41.4524 74.0328C39.6015 74.0328 37.8615 73.3123 36.5526 72.0034L20.8632 56.3141C19.5543 55.0051 18.8334 53.2652 18.8334 51.4142C18.8334 49.5628 19.5543 47.8228 20.8632 46.5139C22.1717 45.205 23.9116 44.484 25.7631 44.484C27.614 44.484 29.3544 45.205 30.6629 46.5144L41.4519 57.3029L67.3356 31.4192C68.6445 30.1103 70.3845 29.3898 72.2354 29.3898C74.0863 29.3898 75.8263 30.1103 77.1352 31.4192C79.838 34.122 79.838 38.5176 77.1363 41.2194Z" fill="#34B632" />
                        </svg>
                        <p>Xóa thành công!</p>
                        <Button
                            onClick={() => setOpenConfirmationModal(false)}
                        >ok</Button>
                    </Modal>
                )}
            </div>
        </Modal>
    );
};

export default ModalDeleteEmail;