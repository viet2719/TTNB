import React from 'react';
import { Modal, Button, Form, Input } from 'antd';

interface ModalEditVisionProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalEditVision: React.FC<ModalEditVisionProps> = ({ open, onClose, onConfirm }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            title="Chỉnh sửa nội dung tầm nhìn"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-vision-modal"
        >
            <div>
                <div className="edit-description-modal__content">

                    <Form form={form}>
                        <Form.Item
                            label="Nội dung tầm nhìn"
                            name="description"
                            rules={[
                                { required: true, message: 'Vui lòng nhập nội dung tầm nhìn !' },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Nhập nội dung tầm nhìn"
                            />
                        </Form.Item>
                    </Form>
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
                        Cập nhật</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalEditVision;