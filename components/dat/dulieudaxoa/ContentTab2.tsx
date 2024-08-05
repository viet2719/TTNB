import { List, Image, Checkbox } from 'antd';
import React, { useState } from 'react';
import styles from './ContentTab.module.scss';
import { dataForContentCollapse } from './data';

interface DataProps {
    key: string;
    day: number;
    month: number;
    year: number;
    time: string;
    name: string;
    description: string;
    department: string;
}

const ContentTab2: React.FC<{
    selectAllItems: boolean;
    setSelectAllItems: (selectAll: boolean) => void;
    selectedItemKey: string | null;
    setSelectedItemKey: (selectedKey: string | null) => void

}> = ({ selectAllItems, setSelectAllItems }) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleItemSelection = (itemKey: string) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(itemKey)) {
                return prevSelectedItems.filter((key) => key !== itemKey);
            } else {
                return [...prevSelectedItems, itemKey];
            }
        });
    };


    const groupedData = new Map<string, DataProps[]>();
    dataForContentCollapse.forEach((data) => {
        const key = `${data.day}.${data.month}.${data.year}`;
        if (!groupedData.has(key)) {
            groupedData.set(key, []);
        }
        groupedData.get(key)?.push(data);
    });

    const dataSource = Array.from(groupedData.keys()).map((key) => {
        return {
            key,
            data: groupedData.get(key) || [],
        };
    });

    const renderItem = (item: { key: string; data: DataProps[] }) => (
        <List.Item
            className={`${styles.listItem} ${selectedItems.includes(item.key) ? styles.selectedItem : ''
                }`}
        >
            <div>
                <ul>
                    {item.data.map((data) => (
                        <li
                            key={data.key}
                            className={`${styles.listItem}`}
                        >
                            <div
                                className='flex flex-align-center flex-space-between'
                                style={{
                                    gap: '20px',
                                }}
                            >
                                <Image
                                    src="/img/dulieudaxoa/imgdaxoa.png"
                                    alt="avatar"
                                    preview={false}
                                />
                                <div className={`${styles.timeDeleteContainer} flex`}>
                                    <div className={`${styles.timeDelete} flex`} >
                                        <p>{`${data.day}.${data.month}.${data.year}`}</p>
                                        <p>{data.time}</p>
                                    </div>
                                    <Checkbox
                                        className={`${styles.checkboxDelete}`}
                                        onChange={() => toggleItemSelection(data.key)}
                                        checked={selectedItems.includes(data.key)}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </List.Item>
    );

    return (
        <div>
            <List
                dataSource={dataSource}
                renderItem={renderItem}
                itemLayout="vertical"
                pagination={false}
            />
        </div>
    );
}

export default ContentTab2;
