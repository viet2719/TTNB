import React, { useState } from 'react';
import { Modal, Button, Image, Form, Input, Checkbox, DatePicker, TimePicker, Upload, message, Select } from 'antd';
const { Option } = Select;
import type { UploadProps } from 'antd';

interface ModalEditPostProps {
    open: boolean;
    onClose: () => void;
}
const ModalEditPost: React.FC<ModalEditPostProps> = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const dateFormatList = ['DD/MM/YYYY'];

    const props: UploadProps = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.success(`${info.file.name} file uploaded successfully`);
            }
        },
    };
    const locationOptions = ['Phòng 1', 'Phòng 2', 'Phòng 3', 'Phòng 4'];
    return (
        <Modal
            title="Chỉnh sửa sự kiện nội bộ"
            open={open}
            onCancel={onClose}
            footer={null}
            className="edit-group-modal"
        >
            <>
                <div className="edit-TTNB-Post-modal__content">
                    <Form form={form}>
                        <Form.Item
                            label="Tên sự kiện"
                            name="nameEvent"
                            rules={[
                                { required: true, message: 'Vui lòng nhập Tên sự kiện!' },
                            ]}
                        >
                            <Input
                                placeholder="Nhập Tên sự kiện"
                            />
                        </Form.Item>
                    </Form>

                    <Form form={form}>
                        <Form.Item
                            label="Thời gian diễn ra"
                            name="timeEvent"
                        >
                            <div className='flex flex-space-between'>{/*flex flex-space-around */}
                                <DatePicker format={dateFormatList} />
                                <TimePicker />
                            </div>
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Ảnh đại diện sự kiện"
                            name="avatar"
                            rules={[
                                { required: true, message: 'Vui lòng chọn Ảnh đại diện sự kiện!' },
                            ]}
                        >
                            <div className='uploadImg'>
                                <Upload {...props} >
                                    <Input
                                        placeholder="Hãy chọn Ảnh đại diện sự kiện!"
                                    >
                                    </Input>
                                </Upload>
                            </div>
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Miêu tả sự kiện"
                            name="description"
                            rules={[
                                { required: true, message: 'Vui lòng chọn Miêu tả sự kiện!' },
                            ]}
                        >
                            <Input.TextArea
                                placeholder="Hãy chọn Miêu tả sự kiện!"
                            >
                            </Input.TextArea>
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Tải tệp đính kèm"
                            name="uploadFile"
                            rules={[
                                { required: true, message: 'Vui lòng chọn Tải tệp đính kèm!' },
                            ]}
                        >
                            <div className='uploadImg'>
                                <Upload {...props} >
                                    <Input
                                        placeholder="Hãy chọn tệp đính kèm!"
                                        style={{ width: '100%' }}
                                    >
                                    </Input>
                                </Upload>
                            </div>
                        </Form.Item>
                    </Form>
                    <Form form={form}>
                        <Form.Item
                            label="Vị trí đăng sự kiện"
                            name="location"
                            rules={[
                                { required: true, message: 'Vui lòng chọn Vị trí đăng sự kiện!' },
                            ]}
                        >
                            <Select
                                placeholder="Chọn vị trí"
                            >
                                {locationOptions.map(option => (
                                    <Option key={option} value={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Select>
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
                        Cập nhật</Button>
                </div>
            </>
        </Modal>
    )
}

export default ModalEditPost
