import { CheckCircleFilled } from '@ant-design/icons';
import { Checkbox, Divider, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react'
import styles from './CaiDatChung.module.scss';

const CaiDatChung: React.FC = () => {

    const [selectedTheme, setSelectedTheme] = useState<"theme1" | "theme2">("theme1");

    const handleThemeClick = (theme: "theme1" | "theme2") => {
        setSelectedTheme(theme);
    };

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <div className={styles.ngonngucontainer}>
                <div className={styles.sectionngonngu}>
                    <p
                        className={styles.ngonnguTitle}
                    >Ngôn ngữ:</p>
                    <Radio.Group
                        onChange={onChange}
                        value={value}
                        className={styles.ngonnguRadioGroup}
                    >
                        <Radio value={1}>Tiếng Việt (Vietnamese)</Radio>
                        <Radio value={2}>Tiếng anh (English)</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div className={styles.themecontainer}>
                <div
                    className={styles.sectiontheme}
                >
                    <p
                        className={styles.themeTitle}
                    >
                        Giao diện:
                    </p>
                    <div
                        className={styles.themes}
                    >

                        <div
                            className={`theme-1 ${selectedTheme === "theme1" ? "selected" : ""}`}
                            onClick={() => handleThemeClick("theme1")}
                            style={
                                {
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#4C5BD4",
                                    border: "1px solid #ccc",
                                    marginRight: "18px",
                                }
                            }>
                            <span></span>
                            {selectedTheme === "theme1" &&
                                <CheckCircleFilled
                                    className="checkIcon"
                                    rev={undefined}
                                    style={{
                                        color: "#4c5bd4",
                                        backgroundColor: "white",
                                        borderRadius: "50%",
                                        fontSize: "20px",
                                        marginLeft: "22px",
                                        marginTop: "26px",
                                        border: "1px solid #ccc",
                                    }} />
                            }
                        </div>
                        <div
                            className={`theme-2 ${selectedTheme === "theme2" ? "selected" : ""}`}
                            onClick={() => handleThemeClick("theme2")}
                            style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                            }}>
                            <span></span>
                            {selectedTheme === "theme2" &&
                                <CheckCircleFilled
                                    className="checkIcon"
                                    rev={undefined}
                                    style={{
                                        fontSize: "20px",
                                        color: "#4C5BD4",
                                        marginLeft: "21px",
                                        border: "1px solid #ccc",
                                        marginTop: "25px",
                                        borderRadius: "50%",
                                    }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default CaiDatChung
