import { Col, Collapse, Image, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './ContentTab.module.scss'
import { dataForContentCollapse } from './data'

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

interface ContentTab1Props {
    selectAllItems: boolean;
    setSelectAllItems: (selectAll: boolean) => void;
    selectedItemKey: string | null;
    setSelectedItemKey: (selectedKey: string | null) => void
}

const ContentCollapse: React.FC<{
    data: DataProps[];
    onSelectItem: (itemKey: string) => void;
    selectedKeys: string[];
}> = ({ data, onSelectItem, selectedKeys }) => {

    const handleItemClick = (itemKey: string) => {
        onSelectItem(itemKey);
    };

    return (
        <Row className="mt-20" gutter={[16, 16]}>
            {data.map((data, index) => (
                <Col xs={24} md={8} sm={12} key={index}>
                    <div
                        className={`${styles.itemDelete} cursor-pointer`}
                        onClick={() => handleItemClick(data.key)}
                        style={{
                            backgroundColor: selectedKeys.includes(data.key)
                                ? '#ccc'
                                : 'white',
                        }}
                    >
                        <div
                            className='flex flex-align-center'
                            style={{
                                gap: '20px',
                            }}
                        >
                            <Image
                                src="/img/dulieudaxoa/imgdaxoa.png"
                                alt="avatar"
                                preview={false}
                            />
                            <div>
                                <p>{`${data.day}.${data.month}.${data.year}`}</p>
                                <p>{data.time}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};


const ContentTab1: React.FC<ContentTab1Props> = (props) => {
    const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>([]);
    const { selectAllItems, setSelectAllItems } = props;

    useEffect(() => {
        if (selectAllItems) {
            setSelectedItemKeys(dataForContentCollapse.map((data) => data.key));
        } else {
            setSelectedItemKeys([]);
        }
    }, [selectAllItems]);

    const groupedData = new Map<string, DataProps[]>();
    dataForContentCollapse.forEach((data) => {
        const key = `${data.day}/${data.month}/${data.year}`;
        if (!groupedData.has(key)) {
            groupedData.set(key, []);
        }
        groupedData.get(key)?.push(data);
    });

    const panels = Array.from(groupedData.keys()).map((key) => {
        const dayData = groupedData.get(key) || [];
        return {
            key,
            label: key,
            children: (
                <ContentCollapse
                    data={dayData}
                    onSelectItem={(itemKey) => setSelectedItemKeys((prevKeys) => {
                        if (prevKeys.includes(itemKey)) {
                            return prevKeys.filter((key) => key !== itemKey);
                        } else {
                            return [...prevKeys, itemKey];
                        }
                    })}
                    selectedKeys={selectedItemKeys}
                />
            ),
        };
    });

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <div>
            <Collapse accordion defaultActiveKey={['1']} onChange={onChange}>
                {panels.map((panel) => (
                    <Collapse.Panel key={panel.key} header={panel.label}>
                        {panel.children}
                    </Collapse.Panel>
                ))}
            </Collapse>
        </div>
    );
}

export default ContentTab1;