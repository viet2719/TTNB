import React from 'react';
import { Modal, Button, Image, message } from 'antd';

interface ModalJoinEventProps {
    open: boolean;
    onClose: () => void;
}
const ModalJoinEvent: React.FC<ModalJoinEventProps> = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            closeIcon={<></>}
            className="join-event"
            width={480}
            centered
        >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="99" viewBox="0 0 98 99" fill="none">
                    <path d="M48.9997 0.496094C21.9814 0.496094 0 22.477 0 49.4958C0 76.5146 21.9814 98.4961 48.9997 98.4961C76.018 98.4961 97.9995 76.5146 97.9995 49.4958C97.9995 22.477 76.0186 0.496094 48.9997 0.496094ZM77.1363 41.2194L46.3522 72.0034C45.0433 73.3123 43.3033 74.0328 41.4524 74.0328C39.6015 74.0328 37.8615 73.3123 36.5526 72.0034L20.8632 56.3141C19.5543 55.0051 18.8334 53.2652 18.8334 51.4142C18.8334 49.5628 19.5543 47.8228 20.8632 46.5139C22.1717 45.205 23.9116 44.484 25.7631 44.484C27.614 44.484 29.3544 45.205 30.6629 46.5144L41.4519 57.3029L67.3356 31.4192C68.6445 30.1103 70.3845 29.3898 72.2354 29.3898C74.0863 29.3898 75.8263 30.1103 77.1352 31.4192C79.838 34.122 79.838 38.5176 77.1363 41.2194Z" fill="#34B632" />
                </svg>
                <p
                    style={{
                        fontSize: '16px',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    Tham gia thành công
                </p>
            </div>
        </Modal>
    )
}

export default ModalJoinEvent
