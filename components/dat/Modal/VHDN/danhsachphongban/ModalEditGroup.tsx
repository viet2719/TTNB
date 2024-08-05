import React, { useState } from 'react';
import { Modal, Button, Form, Input, Radio } from 'antd';

interface ModalEditGroupProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ModalEditGroup: React.FC<ModalEditGroupProps> = ({ open, onClose, onConfirm }) => {

    return (
        <Modal
            title="Sửa nhóm - phòng ban"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-group-modal"
        >
            <div>

                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Tên nhóm phòng - ban"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên nhóm - phòng ban!' }]}
                    >
                        <Input
                            placeholder="Nhập tên nhóm - phòng ban"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item

                        label="Mô tả công việc chính"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                    >
                        <Input.TextArea
                            rows={4}
                            placeholder="Nhập mô tả công việc chính"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Yêu cầu kiểm duyệt thành viên tham gia"
                        name="require"
                        rules={[{ required: true, message: 'Vui lòng nhập yêu cầu kiểm duyệt thành viên tham gia!' }]}
                    >
                        <Radio.Group
                            style={{ width: '100%' }}
                        >
                            <div className='flex flex-space-around'>
                                <Radio value={1}>Có</Radio>
                                <Radio value={2}>Không</Radio>
                            </div>
                        </Radio.Group>
                    </Form.Item>
                </Form>
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

export default ModalEditGroup;