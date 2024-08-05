import React, { useState } from "react";
import { CheckCircleTwoTone, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Collapse, Input, List, Image, Modal, Button, notification, } from "antd";

import styles from "./NhatKyHoatDong.module.scss";

interface ActivityItem {
    key: string;
    title: string;
    description: string;
    timeDelete: string;
    deleted: boolean;
}

interface ActivityDay {
    key: string;
    label: string;
    data: ActivityItem[];
}
const NhatKyHoatDong: React.FC = () => {

    const [activityData, setActivityData] = useState([
        {
            key: "1",
            label: "Hôm nay",
            data: [
                {
                    key: "1",
                    title: "Sơ đồ KPI",
                    description: "Xóa KPI Test tiep",
                    timeDelete: "16:42",
                    deleted: false,
                },
                {
                    key: "2",
                    title: "Phân quyền",
                    description:
                        "Cập nhật phân quyền cho nhân viên Phùng Ngọc Anh - KỸ THUẬT,Test Kiên",
                    timeDelete: "16:34",
                    deleted: false,
                },
                {
                    key: "3",
                    title: "Phân quyền",
                    description: "Cập nhật phân quyền cho nhân viên Hà Nhật Vy - Biên Tập",
                    timeDelete: "08:42",
                    deleted: false,
                },
                {
                    key: "4",
                    title: "Đánh giá KPI",
                    description: "Thêm cấu hình đánh giá KPI",
                    timeDelete: "08:24",
                    deleted: false,
                },
            ],
        },
        {
            key: "2",
            label: "Hôm qua",
            data: [
                {
                    key: "1",
                    title: "Sơ đồ KPI",
                    description: "Xóa KPI Test tiep",
                    timeDelete: "16:42",
                    deleted: false,
                },
                {
                    key: "2",
                    title: "Phân quyền",
                    description:
                        "Cập nhật phân quyền cho nhân viên Phùng Ngọc Anh - KỸ THUẬT,Test Kiên",
                    timeDelete: "16:34",
                    deleted: false,
                },
                {
                    key: "3",
                    title: "Phân quyền",
                    description: "Cập nhật phân quyền cho nhân viên Hà Nhật Vy - Biên Tập",
                    timeDelete: "08:42",
                    deleted: false,
                },
                {
                    key: "4",
                    title: "Đánh giá KPI",
                    description: "Thêm cấu hình đánh giá KPI",
                    timeDelete: "08:24",
                    deleted: false,
                },
            ],
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivityIndex, setSelectedActivityIndex] = useState("");
    const [selectedActivityItemIndex, setSelectedActivityItemIndex] = useState(-1);
    const [searchValue, setSearchValue] = useState("");
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showSuccessModal = () => {
        setSuccessModalVisible(true);
        setTimeout(() => {
            setSuccessModalVisible(false);
        }, 1200);
    };

    const handleDelete = (item: ActivityItem) => {
        const newActivityData = activityData.map((panelData) => {
            if (panelData.key === selectedActivityIndex) {
                const newData = panelData.data.filter((activityItem) => {
                    return activityItem.key !== item.key;
                });
                return {
                    ...panelData,
                    data: newData,
                };
            }
            return panelData;
        });

        setActivityData(newActivityData);
        setIsModalOpen(false);

        showSuccessModal();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (key: string | string[]) => {
        console.log(key);
    };


    const filteredDays = activityData.filter((panelData) => {
        const filteredItems = panelData.data.filter(item =>
            !item.deleted &&
            (item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchValue.toLowerCase())) ||
            (item.timeDelete && item.timeDelete.includes(searchValue))
        );

        return filteredItems.length > 0;
    });
    const hasSearchResults = filteredDays.length > 0;

    const ListPanel: React.FC<{ panelData: ActivityDay }> = ({ panelData }) => {
        if (!panelData || !panelData.data) {
            return null;
        }

        const filteredData = panelData.data.filter(item =>
            !item.deleted &&
            (item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchValue.toLowerCase())) ||
            (item.timeDelete && item.timeDelete.includes(searchValue))
        );

        return (
            <List
                className={styles.list}
                itemLayout="horizontal"
                dataSource={filteredData}
                style={{
                    padding: "0px",
                }}
                renderItem={(item, dataIndex) => (
                    <List.Item
                        className={styles.listItem}
                        style={{
                            padding: "0px 30px 0px 0px",
                            backgroundColor: "white",
                        }}
                    >
                        <List.Item.Meta
                            className={styles.listItemMeta}
                            style={{
                                marginLeft: "40px",
                                padding: "10px 0px",
                            }}
                            title={
                                <a>
                                    <RightOutlined rev={undefined} />
                                    {item.title}
                                </a>
                            }
                            description={
                                <span
                                    className={styles.listItemMetaDescription}
                                    style={{
                                        color: "black",
                                        paddingLeft: "15px",
                                    }}
                                >
                                    {item.description}
                                </span>
                            }
                        />
                        <div
                            className={styles.listItemTimeDelete}
                            style={{
                                marginRight: "20%",
                            }}
                        >
                            {item.timeDelete}
                        </div>
                        <Image
                            src="/img/delete-do.svg"
                            alt=""
                            preview={false}
                            onClick={() => {
                                if (!item.deleted) {
                                    showModal();
                                    setSelectedActivityIndex(panelData.key);
                                    setSelectedActivityItemIndex(dataIndex);
                                }
                            }}
                            style={{ cursor: item.deleted ? 'not-allowed' : 'pointer' }}
                        />
                        <Modal
                            className={`${styles.modalDelete} modalDelete`}
                            visible={isModalOpen && selectedActivityIndex === panelData.key && selectedActivityItemIndex === dataIndex}
                            centered
                            footer={null}
                            closeIcon={null}
                            onCancel={() => setSuccessModalVisible(false)}
                            bodyStyle={{
                                borderRadius: "10px",
                                height: "260px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "50px",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: "white",
                                        backgroundColor: "#4c5bd4",
                                        marginBottom: "20px",
                                        borderTopLeftRadius: "8px",
                                        borderTopRightRadius: "8px",
                                    }}
                                >
                                    Xóa nhật ký hoạt động
                                </div>
                                <div
                                    className={styles.modalContent}
                                    style={{
                                        fontSize: "16px",
                                        display: "flex",
                                        paddingBottom: "30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            margin: "0 2px",
                                        }}
                                    >
                                        Bạn có chắc muốn xóa nhật ký hoạt động?
                                    </p>
                                </div>

                                <div style={{ marginBottom: "30px" }}>
                                    <Button
                                        onClick={handleCancel}
                                        size="large"
                                        style={{
                                            marginRight: "20px",
                                            height: "40px",
                                            width: "130px",
                                            color: "#4C5BD4",
                                            border: "1px solid #4C5BD4",
                                        }}
                                    >
                                        Hủy
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item)}
                                        size="large"
                                        style={{
                                            marginRight: "20px",
                                            height: "40px",
                                            width: "130px",
                                            backgroundColor: "#4c5bd4",
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                        disabled={item.deleted}
                                    >
                                        Xóa
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                        <Modal
                            visible={successModalVisible}
                            onCancel={() => setSuccessModalVisible(false)}
                            centered
                            footer={null}
                            closeIcon={null}
                            focusTriggerAfterClose={false}
                            maskClosable={true}
                            bodyStyle={{
                                borderRadius: "10px",
                                height: "260px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <CheckCircleTwoTone
                                    style={{
                                        fontSize: "90px",
                                    }}
                                    twoToneColor="#52c41a" rev={undefined} />
                                <p
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        marginTop: "20px",
                                    }}
                                >
                                    Hoạt động đã được xóa thành công.
                                </p>
                            </div>
                        </Modal>
                    </List.Item>
                )}
            />
        );
    };
    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
            }}
            className={styles.activity}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "20px",
                }}
            >
                <Input
                    placeholder="Tìm kiếm hoạt động"
                    allowClear
                    size="large"
                    bordered={false}
                    suffix={
                        <SearchOutlined
                            style={{
                                fontSize: "20px",
                            }} rev={undefined} />
                    }
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{
                        width: "530px",
                        height: "40px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        padding: "0px 15px",
                    }}
                />
            </div>
            <div>
                <Collapse ghost defaultActiveKey={["1"]} onChange={onChange}>
                    {filteredDays.map((panelData) => (
                        <Collapse.Panel header={panelData.label} key={panelData.key}>
                            <ListPanel panelData={panelData} />
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default NhatKyHoatDong;
