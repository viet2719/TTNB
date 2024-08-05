import React from 'react';
import { Modal, Button, Image, Form, Input, Checkbox, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface DeleteCommentModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalAdd: React.FC<DeleteCommentModalProps> = ({ open, onClose, onConfirm }) => {
    const [form] = Form.useForm();

    const handleFileUpload = (info: any) => {
        if (info.file.status === 'done') {
            console.log('File uploaded:', info.file.response);
        }
    };

    const uploadProps = {
        name: 'file',
        action: '/your-upload-endpoint',
        onChange: handleFileUpload,
    };
    return (
        <Modal
            title="Thêm nguyên tắc làm việc"
            open={open}
            onCancel={onClose}
            footer={null}
            className="add-ntlv-modal"
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
                            <Upload {...uploadProps}>
                                <Button icon={<UploadOutlined rev={undefined} />}>Tải lên ảnh bìa</Button>
                            </Upload>
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

export default ModalAdd;