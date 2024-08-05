import { SearchOutlined } from '@ant-design/icons'
import { ConfigProvider, Input, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react'

interface DataType {
    idnv: string;
    hoTen: string;
    phongBan: string;
    viTri: string;
    email: string;
    soDienThoai: string;
    trangThaiDangKy: string;
    chiTiet: string;
}

import styles from './DanhSachThanhVien.module.scss'
const DanhSachThanhVien: React.FC = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'ID nhân viên',
            dataIndex: 'idnv',
            key: 'idnv',
            align: 'center',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
            align: 'center',
        },
        {
            title: 'Phòng ban',
            dataIndex: 'phongBan',
            key: 'phongBan',
            align: 'center',
        },
        {
            title: 'Vị trí',
            dataIndex: 'viTri',
            key: 'viTri',
            align: 'center',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: 'center',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDienThoai',
            key: 'soDienThoai',
            align: 'center',
        },
        {
            title: 'Trạng thái đăng ký',
            dataIndex: 'trangThaiDangKy',
            key: 'trangThaiDangKy',
            align: 'center',
            render: (text) => (
                <p
                    style={{ color: '#ffa800', cursor: 'pointer' }}
                >{text}</p>
            )
        },
        {
            title: 'Chi tiết',
            dataIndex: 'chiTiet',
            key: 'chiTiet',
            align: 'center',
            render: (text) => (
                <p
                    style={{ color: '#1890ff', cursor: 'pointer' }}
                >{text}</p>
            )
        },
    ];

    const data: DataType[] = [
        {
            idnv: '1',
            hoTen: 'dat1',
            phongBan: 'ky thuat',
            viTri: 'nhan vien',
            email: 'dat123@gmail.com',
            soDienThoai: '123-456-7890',
            trangThaiDangKy: 'da duyet',
            chiTiet: 'chi tiet',
        },
        {
            idnv: '2',
            hoTen: 'dat2',
            phongBan: 'ky thuat',
            viTri: 'nhan vien',
            email: 'dat111@gmail.com',
            soDienThoai: '123-456-7890',
            trangThaiDangKy: 'da duyet',
            chiTiet: 'chi tiet',
        },
    ];
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter((item) =>
        item.hoTen.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.idnv.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
    };
    return (
        <>
            <div style={{
                width: '100%',
            }}>
                <div className={`${styles.searchContainer}`}>
                    <Input
                        placeholder="Tìm kiếm thành viên"
                        suffix={<SearchOutlined rev={undefined} />}
                        className={`${styles.searchInput} searchInputStaff`}
                        size="large"
                        onChange={handleSearch}
                        value={searchQuery}
                    />
                </div>
                <div className={`${styles.tableContainer} tableStaff`}>

                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        pagination={false}
                        scroll={{
                            x: 'max-content',
                        }}
                    />
                </div>
            </div>
        </>
    )
}


export default DanhSachThanhVien
