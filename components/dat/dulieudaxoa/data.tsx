
export interface DataProps {
    key: string;
    day: number;
    month: number;
    year: number;
    time: string;
    name: string;
    description: string;
    department: string;
}

export const dataForContentCollapse: DataProps[] = [
    {
        key: '1',
        day: 1,
        month: 9,
        year: 2023,
        time: '10:00 AM',
        name: 'dat123',
        description: 'alo1234',
        department: 'vn',
    },
    {
        key: '2',
        day: 2,
        month: 9,
        year: 2023,
        time: '11:30 AM',
        name: 'viet123',
        description: 'alo113',
        department: 'vn',
    },
    // Thêm dữ liệu khác nếu cần
];