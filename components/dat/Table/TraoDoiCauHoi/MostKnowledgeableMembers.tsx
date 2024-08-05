import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react'
import styles from './TableTDCH.module.scss'

interface DataType {
    key: string;
    stt: number;
    name: string;
    count: number;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        align: 'center',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        render: (text) => <a>{text}</a>,
    },

    {
        title: 'Số câu trả lời',
        dataIndex: 'count',
        key: 'count',
        align: 'center',
    },
];
interface MostKnowledgeableMembersProps {
    data: DataType[];
}
const MostKnowledgeableMembers: React.FC<MostKnowledgeableMembersProps> = ({ data }) => {
    return (
        <div className={`${styles.TDCHcontentRightTable}`}>
            <p
                className={`${styles.TDCHcontentRightTableTitle} TDCHcontentRightTableTitle`}
            >Thành viên hiểu biết nhất</p>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                className={`${styles.TDCHcontentRightTable} TDCHcontentRightTable`}
                scroll={{ x: "max-content" }}
            />
        </div>
    )
}

export default MostKnowledgeableMembers
