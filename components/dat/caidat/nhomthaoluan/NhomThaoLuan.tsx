import ModalDeLete from '@/components/common/Modal/common/Delete/ModalDeLete';
import { SearchOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Form, Image, Input, Select, Table, Upload, UploadFile } from 'antd'
import Modal from 'antd/lib/modal/Modal';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react'

import styles from './NhomThaoLuan.module.scss'

interface DataType {
    id: number;
    stt: number;
    nhomThaoLuan: string;
    quanTri: string;
    soLuongThanhVien: number;
    cheDo: string;
}

const NhomThaoLuan: React.FC = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            align: 'center',
        },
        {
            title: 'Nhóm - thảo luận',
            dataIndex: 'nhomThaoLuan',
            key: 'nhomThaoLuan',
            align: 'center',
            render: (text) => (
                <a href="#">{text}</a>
            )
        },
        {
            title: 'Quản trị',
            dataIndex: 'quanTri',
            key: 'quanTri',
            align: 'center',
        },
        {
            title: 'Số lượng thành viên',
            dataIndex: 'soLuongThanhVien',
            key: 'soLuongThanhVien',
            align: 'center',
        },
        {
            title: 'Chế độ',
            dataIndex: 'cheDo',
            key: 'cheDo',
            align: 'center',
        },
        {
            title: '',
            dataIndex: 'xoa',
            key: 'xoa',
            align: 'center',
            render: (text, record) => (
                <Image
                    src='/img/caidat/xoa.png'
                    alt='loi'
                    preview={false}
                    onClick={() => handleOpenModalDelete(record.id)}
                    style={{ cursor: 'pointer' }}
                />
            )
        },
    ];

    const data: DataType[] = [
        {
            id: 1,
            stt: 1,
            nhomThaoLuan: 'Nhóm 1',
            quanTri: 'dat1',
            soLuongThanhVien: 10,
            cheDo: 'Công khai',
        },
        {

            id: 2,
            stt: 2,
            nhomThaoLuan: 'Nhóm 2',
            quanTri: 'dat2',
            soLuongThanhVien: 20,
            cheDo: 'Công khai',
        },
    ];

    const options = [
        { label: 'User 1', value: 'user1' },
        { label: 'User 2', value: 'user2' },
        { label: 'User 3', value: 'user3' },
    ];


    const [searchQuery, setSearchQuery] = useState('');
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalAddGroup, setOpenModalAddGroup] = useState(false);

    const [profilePictureFileList, setProfilePictureFileList] = useState<UploadFile[]>([]);
    const [groupCoverFileList, setGroupCoverFileList] = useState<UploadFile[]>([]);

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [dataDelete, setDataDelete] = useState<DataType[]>(data);
    const [filteredData, setFilteredData] = useState<DataType[]>(dataDelete);
    useEffect(() => {
        const filteredData = dataDelete.filter((item) =>
            item.nhomThaoLuan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.quanTri.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredData);
    }, [dataDelete, searchQuery]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleOpenModalDelete = (id: number) => {
        setDeleteItemId(id);
        setOpenModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setOpenModalDelete(false);
    };
    const handleDeleteItem = () => {
        if (deleteItemId !== null) {
            const newDataDelete = dataDelete.filter(item => item.id !== deleteItemId);
            setDataDelete(newDataDelete);
            setDeleteItemId(null);
        }
        setOpenModalDelete(false);
    };
    const handleOpenModalAddGroup = () => {
        setOpenModalAddGroup(true);
    };

    const handleCloseModalAddGroup = () => {
        setOpenModalAddGroup(false);
    };

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    const handleProfilePictureFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
        setProfilePictureFileList(fileList);
    };

    const handleGroupCoverFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
        setGroupCoverFileList(fileList);
    };

    const handleFileRemove = (file: UploadFile, fileType: 'profilePicture' | 'groupCover') => {
        if (fileType === 'profilePicture') {
            const newFileList = profilePictureFileList.filter((item) => item.uid !== file.uid);
            setProfilePictureFileList(newFileList);
        } else if (fileType === 'groupCover') {
            const newFileList = groupCoverFileList.filter((item) => item.uid !== file.uid);
            setGroupCoverFileList(newFileList);
        }
    };
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    return (
        <>
            <div
                className={`${styles.headerContainer}`}
            >
                <div className={`${styles.header} flex flex-align-center flex-space-between `}>
                    <div className={`${styles.headerSearch}`}>
                        <Input
                            placeholder="Tìm kiếm nhóm-thảo luận"
                            className={`${styles.headerSearchInput}`}
                            size="large"
                            suffix={<SearchOutlined rev={undefined} />}
                            bordered={false}
                            onChange={handleSearch}
                            value={searchQuery}
                        />
                    </div>

                    <div className={`${styles.headerAddGroup}`}>
                        <Button
                            className={`${styles.headerAddGroupButton} flex flex-align-center`}
                            onClick={handleOpenModalAddGroup}
                            size="large"
                        >
                            <Image
                                src='/img/caidat/themnhom.png'
                                alt='loi'
                                preview={false}
                                className={`${styles.headerAddGroupButtonImage}`}
                            />
                            <p
                                className={`${styles.headerAddGroupButtonText}`}
                            >Thêm nhóm - thảo luận</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`${styles.TableGroup} tableGroup `}>
                {filteredData.length === 0 ? (
                    <p
                        style={{
                            textAlign: 'center',
                            padding: '20px 0',
                            borderTop: '1px solid #e8e8e8',
                            fontStyle: 'italic',
                            fontWeight: 600,
                        }}
                    > Không có kết quả </p>
                ) : (
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        pagination={false}
                        scroll={{ x: 'max-content' }}
                    />
                )}
            </div>
            <ModalDeLete
                title="Xóa nhóm - thảo luận"
                message="Bạn có chắc muốn xóa nhóm Phòng Kỹ Thuật?"
                desc='Nhóm này sẽ không thể khôi phục do không được lưu tại bộ nhớ tạm của hệ thống'
                open={openModalDelete}
                onCancel={handleCloseModalDelete}
                onOk={handleDeleteItem}
            />
            <Modal
                title="Thêm nhóm - thảo luận"
                open={openModalAddGroup}
                onCancel={handleCloseModalAddGroup}
                onOk={handleCloseModalAddGroup}
                footer={null}
                className={`${styles.modalAddGroup} modalAddGroup`}
            >
                <div className='flex'
                    style={{
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Form form={form} onFinish={onFinish}>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Tên nhóm
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="nhomThaoLuan"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tên nhóm.',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Nhập tên nhóm"
                                    className={`${styles.headerSearchInput}`}
                                    size="large"
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Quản trị
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="quanTri"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn quản trị viên.',
                                    },
                                ]}
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    placeholder="Chọn quản trị viên"
                                    onChange={handleChange}
                                    options={options}
                                    style={{ width: '100%' }}
                                    size="large"
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Ảnh bìa nhóm
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="groupCoverFileList"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ảnh bìa nhóm.',
                                    },
                                ]}
                            >
                                <Upload
                                    fileList={groupCoverFileList}
                                    beforeUpload={() => false}
                                    onRemove={(file) => handleFileRemove(file, 'groupCover')}
                                    onChange={handleGroupCoverFileChange}
                                >
                                    <Button
                                        icon={<UploadOutlined rev={undefined} />}
                                    >
                                        Chọn ảnh
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Ảnh đại diện nhóm
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="profilePictureFileList"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ảnh đại diện nhóm.',
                                    },
                                ]}
                            >
                                <Upload
                                    fileList={profilePictureFileList}
                                    beforeUpload={() => false}
                                    onRemove={(file) => handleFileRemove(file, 'profilePicture')}
                                    onChange={handleProfilePictureFileChange}
                                >
                                    <Button
                                        icon={<UploadOutlined rev={undefined} />}
                                    >
                                        Chọn ảnh
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Mô tả
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="moTa"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ảnh đại diện nhóm.',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Nhập mô tả"
                                    className={`${styles.headerSearchInput}`}
                                    size="large"
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Thành viên
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="thanhVien"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được để trống',
                                    },
                                ]}
                            >
                                <Select

                                    mode="multiple"
                                    allowClear
                                    placeholder="Chọn thành viên"
                                    onChange={handleChange}
                                    options={options}
                                    style={{ width: '100%' }}
                                    size="large"
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <p
                                className={`${styles.modalAddGroupTitle}`}
                            >Chế độ nhóm
                                <span style={{
                                    color: 'red',
                                }}>*</span>
                            </p>
                            <Form.Item
                                name="cheDoNhom"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được để trống',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Chọn chế độ nhóm"
                                    onChange={handleChange}
                                    options={
                                        [
                                            { label: 'Công khai', value: 'public' },
                                            { label: 'Riêng tư', value: 'private' },
                                        ]
                                    }
                                    style={{ width: '100%' }}
                                    size="large"
                                />
                            </Form.Item>
                        </div>
                        <div
                            className={`${styles.modalAddGroupButtons} flex flex-space-around flex-align-center`}
                        >
                            <Button
                                size='large'
                                onClick={handleCloseModalAddGroup}
                                className={`${styles.modalAddGroupButtonCancel}`}
                            >
                                Hủy
                            </Button>
                            <Button
                                type="primary"
                                size='large'
                                className={`${styles.modalAddGroupButtonCreate}`}
                                htmlType="submit"
                            >
                                Tạo nhóm
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default NhomThaoLuan
