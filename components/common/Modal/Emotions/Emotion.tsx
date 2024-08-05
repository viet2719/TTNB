import { useState } from "react";
import { Input, Image, } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { emotionsData } from "./emotionsData";
import styles from "./ModalEmotions.module.css";

interface EmotionItem {
    name: string;
    imageSrc: string;
}
interface EmotionProps {
    onEmotionSelect: (emotion: string) => void;
}
function Emotion({ onEmotionSelect }: EmotionProps): JSX.Element {

    const [searchText, setSearchText] = useState("");
    const [filteredEmotions, setFilteredEmotions] = useState<EmotionItem[]>(emotionsData);

    const handleSearch = (value: string) => {
        setSearchText(value);

        const filtered = emotionsData.filter((emotion) =>
            emotion.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEmotions(filtered);
    };
    const handleEmotionSelect = (selectedEmotion: string) => {
        onEmotionSelect(selectedEmotion);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.searchEmotion} searchEmotion`}>
                    <Input
                        placeholder='Nhập tên cảm xúc'
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
                    {filteredEmotions.map((emotion, index) => (
                        <div
                            key={index}
                            className={styles.emotion__item}
                            onClick={() => handleEmotionSelect(emotion.name)}
                        >
                            <Image
                                src={emotion.imageSrc}
                                alt={emotion.name}
                                preview={false}
                                className={styles.emotion__item__img}
                            />
                            <p className={styles.emotion__item__name}>{emotion.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Emotion;