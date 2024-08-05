import { SearchOutlined } from "@ant-design/icons";
import { Input, Image, Modal } from "antd";
import { useState } from "react";

import styles from "./ModalLocation.module.css";

interface LocationItem {
    key: string;
    name: string;
}

interface LocationsProps {
    isOpen: boolean;
    onClose: () => void;
    onLocationSelect: (location: string) => void;
}

const locationItemsData: LocationItem[] = [
    {
        key: "1",
        name: "Hà Nội 1",
    },
    {
        key: "2",
        name: "Hà Nội 2",
    },
    {
        key: "3",
        name: "Hà Nội",
    },
    {
        key: "4",
        name: "Hà Nội 0",
    },
    {
        key: "5",
        name: "Hà Nội",
    },
    {
        key: "6",
        name: "Hà Nội",
    },
    {
        key: "7",
        name: "Hà Nội",
    },
    {
        key: "8",
        name: "Hà Nội",
    },
    {
        key: "9",
        name: "Hà Nội",
    },
    {
        key: "10",
        name: "Hà Nội",
    },
    {
        key: "11",
        name: "Hà Nội",
    },
];
const ModalLocation: React.FC<LocationsProps> = ({ isOpen, onClose, onLocationSelect }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredActivities, setFilteredActivities] = useState<LocationItem[]>(locationItemsData);

    const handleSearch = (value: string) => {
        setSearchText(value);

        const filtered = locationItemsData.filter((activity) =>
            activity.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredActivities(filtered);
    };
    const handleLocationSelect = (selectedLocation: string) => {
        onLocationSelect(selectedLocation);
        onClose();
    };
    return (
        <>
            <Modal
                title="Tìm kiếm vị trí"
                open={isOpen}
                onCancel={onClose}
                footer={null}
                className={`${styles.modalSearchLocation} modalSearchLocation`}
            >
                <div className={styles.container}>
                    <div className={`${styles.SearchLocation} SearchLocation`}>
                        <Input
                            placeholder='Nhập tên bạn bè'
                            className={styles.modal__input}
                            bordered={false}
                            suffix={
                                <SearchOutlined rev={undefined} />
                            }
                            onChange={(e) => handleSearch(e.target.value)}
                            value={searchText}
                        />
                    </div>
                    <div className={styles.listLocations}>
                        {filteredActivities.map((activity, index) => (
                            <div
                                key={index}
                                className={styles.Location__item}
                                onClick={() => handleLocationSelect(activity.name)}
                            >
                                <Image
                                    src="/img/img-home/nv_location.svg"
                                    alt={activity.name}
                                    preview={false}
                                    className={styles.Location__item__img}
                                />
                                <p className={styles.Location__item__name}>{activity.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalLocation;