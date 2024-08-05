import React from 'react';
import { Modal, Button, Image, message, Form, Input, Table } from 'antd';

interface ModalViewDetailProps {
    open: boolean;
    onClose: () => void;
}
const ModalViewDetail: React.FC<ModalViewDetailProps> = ({ open, onClose }) => {
    const dataSource = [
        {
            key: '1',
            name: '1',
            age: 'dat',
            address: 'a',
            chucvu: 'a',
        },
        {
            key: '2',
            name: '2',
            age: 'viet',
            address: 'a',
            chucvu: 'a',
        },
        {
            key: '3',
            name: '3',
            age: 'thuc',
            address: 'a',
            chucvu: 'a',
        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tên công ty',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Chức vụ',
            dataIndex: 'chucvu',
            key: 'chucvu',
        },
    ];
    return (
        <Modal
            title="Xem chi tiết"
            open={open}
            onCancel={onClose}
            footer={null}
            className="view-detail-event"
        >
            <>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    className="form-view-detail-event"
                >
                    <Form.Item
                        label="Nội dung sự kiện:"
                        name="content"
                    >
                        <div>a</div>
                    </Form.Item>
                    <Form.Item
                        label="Vị trí đăng sự kiện:"
                        name="position"
                    >
                        <div>PHÒNG 3: PHÒNG KỸ THUẬT SỐ 3- Đ/C THU HẰNG</div>
                    </Form.Item>
                    <Form.Item
                        label="Quyền riêng tư:"
                        name="privacy"
                    >
                        <div>Công khai</div>
                    </Form.Item>

                    <div>Thông tin diễn giả:</div>
                    <div className='flex'>
                        <Image
                            src='/img/c.png'
                            alt="avatar"
                            style={{
                                borderRadius: '50%',
                            }}
                            width={50}
                            preview={false}
                        />
                        <div
                            style={{
                                marginLeft: '20px',
                            }}
                        >
                            <p>a</p>
                            <p>a</p>
                            <p>0992939292</p>
                            <p>a</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <p
                            style={{
                                fontWeight: '500',
                            }}
                        >Khách mời tham gia:</p>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                        />
                    </div>
                    <Form.Item
                        label="Thành viên tham gia:"
                        name="privacy"
                    >
                        <div>a</div>
                    </Form.Item>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <p
                            style={{
                                fontWeight: '500',
                            }}
                        >Danh sách câu hỏi trong sự kiện</p>
                        <Input
                            placeholder="Nhập câu hỏi"
                            size='large'
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                        <Button type="primary" style={{ borderRadius: '50px' }}>Thêm câu hỏi</Button>
                    </div>

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
                            width: '130px',
                            border: '1px solid #4c5bd4',
                            color: '#4c5bd4',
                            backgroundColor: 'white',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}

                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={onClose}
                        size="large"
                        style={{
                            width: '130px',
                            border: '1px solid #4c5bd4',
                            color: '#fff',
                            backgroundColor: '#4c5bd4',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                        }}
                    >
                        Mời tham gia
                    </Button>
                </div>
            </>
        </Modal>
    )
}

export default ModalViewDetail
