import { DeleteColumnOutlined, DeleteFilled } from '@ant-design/icons';
import { Button, Modal, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import styles from './TableEvent.module.css';

interface DataType {
    key: string;
    stt: string;
    tatcasukien: string;
    nguoitao: string;
    time: string;
    chucvu: string;
}

const TableEvent: React.FC = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<DataType | null>(null);

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            align: "center"
        },
        {
            title: 'Tất cả sự kiện',
            dataIndex: 'tatcasukien',
            key: 'tatcasukien',
            align: "center",
            render: (name, record) => (
                <Space direction="vertical">
                    <a className={styles.tensukien}>{name}</a>
                    <a className={styles.thoigian}>{record.time}</a>
                </Space>
            ),
        },
        {
            title: 'Người tạo',
            dataIndex: 'nguoitao',
            key: 'nguoitao',
            align: "center",
            render: (name, record) => (
                <Space direction="vertical">
                    <a className={styles.nguoitao}>{name}</a>
                    <a className={styles.chucvu}>{record.chucvu}</a>
                </Space>
            ),
        },

        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            align: "center",
            render: (_, record: DataType) => (
                <Space direction="vertical">
                    <div
                        className={styles.delete}
                        onClick={() => showDeleteModal(record)}
                        style={{
                            cursor: 'pointer',
                            padding: '12px',
                        }}
                    >
                        <DeleteFilled rev={undefined} />
                    </div>
                </Space>
            ),
        }
    ];

    let data: DataType[] = [
        {
            key: '1',
            stt: '1',
            tatcasukien: "Event 1",
            nguoitao: 'Đạt',
            chucvu: 'Manager',
            time: '10:00 AM',
        },
        {
            key: '2',
            stt: '2',
            tatcasukien: "Event 2",
            nguoitao: 'Đạt',
            chucvu: 'Developer',
            time: '2:30 PM',
        },
        {
            key: '3',
            stt: '3',
            tatcasukien: "Event 3",
            nguoitao: 'Đạt',
            chucvu: 'Designer',
            time: '7:45 AM',
        },
    ];

    const showDeleteModal = (record: DataType) => {
        setSelectedRow(record);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (selectedRow) {
            const newData = data.filter(item => item.key !== selectedRow.key);
            data = newData;
            setIsDeleteModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            <Modal
                title="Xóa sự kiện"
                visible={isDeleteModalOpen}
                className='modal-delete-event-table'
                footer={null}
                onCancel={handleCancel}
            >
                <div style={{
                    marginBottom: '20px',
                }} >
                    <span>Bạn có muốn xóa nội dung sự kiện này?</span>
                </div>
                Tất cả thông tin sẽ được lưu tự động vào
                <span> Đã xóa gần đây </span>
                trong thời gian 05 ngày trước khi bị xóa vĩnh viễn

                <div className={styles.Buttons}>
                    <Button
                        className={styles.buttonCancel}
                        onClick={handleCancel}
                        size="large"
                    >
                        Hủy
                    </Button>
                    <Button
                        className={styles.buttonDelete}
                        onClick={handleDelete}
                        size="large"
                    >
                        Xóa
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default TableEvent;
