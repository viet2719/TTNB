import React from 'react';
import { Modal, Button, Image, Form, Input, Checkbox } from 'antd';

interface ModalEditProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ open, onClose, onConfirm }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            title="Chỉnh sửa nguyên tắc làm việc"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-ntlv-modal"
        >
            <>
                <div className="edit-description-modal__content">

                    <Form form={form}>
                        <Form.Item
                            label="Tên nguyên tắc làm việc"
                            name="name"
                            rules={[
                                { required: true, message: 'Vui lòng nhập Tên nguyên tắc làm việc!' },
                            ]}
                        >
                            <Input
                                placeholder="Nhập Tên nguyên tắc làm việc"
                            />
                        </Form.Item>
                    </Form>

                    <Form form={form}>
                        <Form.Item
                            label="Nội dung nguyên tắc"
                            name="description"
                            rules={[
                                { required: true, message: 'Vui lòng nhập Nội dung nguyên tắc!' },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Nhập Nội dung nguyên tắc của bạn..."
                            />
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Ảnh bìa"
                            name="avatar"
                            rules={[
                                { required: true, message: 'Vui lòng chọn ảnh bìa!' },
                            ]}
                        >
                            <Input
                                placeholder="Hãy chọn ảnh bìa!"
                            >
                            </Input>
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Bình luận"
                            name="comment"
                        >
                            <Checkbox>
                                <p>Tắt bình luận</p>
                            </Checkbox>
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
            </>
        </Modal>
    );
};

export default ModalEdit;