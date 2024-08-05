import { SearchOutlined } from "@ant-design/icons";
import { Input, Image } from "antd";
import { useState } from "react";

import { activitiesData } from "./emotionsData";
import styles from "./ModalEmotions.module.css";

interface ActivityItem {
    name: string;
    imageSrc: string;
}
interface ActivityProps {
    onActivitySelect: (activity: string) => void;
}
function Activity({ onActivitySelect }: ActivityProps) {

    const [searchText, setSearchText] = useState("");
    const [filteredActivities, setFilteredActivities] = useState<ActivityItem[]>(activitiesData);

    const handleSearch = (value: string) => {
        setSearchText(value);

        const filtered = activitiesData.filter((activity) =>
            activity.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredActivities(filtered);
    };
    const handleActivitySelect = (selectedActivity: string) => {
        onActivitySelect(selectedActivity);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.searchActivity} searchActivity`}>
                    <Input
                        placeholder='Nhập tên hoạt động'
                        className={styles.modal__input}
                        bordered={false}
                        suffix={
                            <SearchOutlined rev={undefined} />
                        }
                        onChange={(e) => handleSearch(e.target.value)}
                        value={searchText}
                    />
                </div>
                <div className={styles.listEmotions}>
                    {filteredActivities.map((activity, index) => (
                        <div
                            key={index}
                            className={styles.emotion__item}
                            onClick={() => handleActivitySelect(activity.name)}
                        >
                            <Image
                                src={activity.imageSrc}
                                alt={activity.name}
                                preview={false}
                                className={styles.emotion__item__img}
                            />
                            <p className={styles.emotion__item__name}>{activity.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Activity;