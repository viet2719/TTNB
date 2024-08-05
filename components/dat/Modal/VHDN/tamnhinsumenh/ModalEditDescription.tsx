import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

interface ModalEditDescriptionProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalEditDescription: React.FC<ModalEditDescriptionProps> = ({ open, onClose, onConfirm }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title="Chỉnh sửa mô tả"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-description-modal"
        >
            <div>
                <div className="edit-description-modal__content">

                    <Form form={form}>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                { required: true, message: 'Vui lòng nhập mô tả!' },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Nhập mô tả của bạn..."
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

export default ModalEditDescription;