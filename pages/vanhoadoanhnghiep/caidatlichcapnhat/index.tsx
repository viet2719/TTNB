import { Button, Checkbox, Collapse, CollapseProps, DatePicker, DatePickerProps } from 'antd';
import React from 'react'
import Vanhoadoanhnghiep from '..';

import styles from './index.module.scss';
export default function Index() {

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const childrenContentLeft =
        <div
            className={`${styles.LCNTTLeftContainer}`}
        >
            <div className={`${styles.LCNTTLeftContainer__title}`}>
                <p>Thiết lập lịch cập nhật thông tin công ty</p>
            </div>
            <div className={`${styles.LCNTTLeftContainer__content}`}>
                <div className={`${styles.LCNTTLeftContainer__content__title}`}>
                    <p>Kế hoạch cập nhật thông tin định kỳ</p>
                </div>
                <div className={`${styles.LCNTTLeftContainer__content__body}`}>
                    <div className={`${styles.LCNTTLeftContainer__content__body__item}`}>
                        <div className={`${styles.LCNTTLeftContainer__content__body__item__title}`}>
                            <p
                                className={styles.LCNTTLeftContainer__content__body__item__title__text}
                            >1. Cập nhật mới thư từ CEO</p>

                            <DatePicker
                                onChange={onChange}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="yyyy/mm/dd"
                            />
                            <Checkbox
                                className={styles.LCNTTLeftContainer__content__body__item__title__checkbox}
                            >
                                Gửi nhắc nhở cho tôi
                            </Checkbox>
                            <div
                                className={styles.LCNTTLeftContainer__content__body__item__button}
                            >
                                <Button
                                    className={styles.LCNTTcontent__body__item__button}
                                    size="large"
                                >
                                    Tạo lịch
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.LCNTTLeftContainer__content__body__item}`}>
                        <div className={`${styles.LCNTTLeftContainer__content__body__item__title}`}>
                            <p
                                className={styles.LCNTTLeftContainer__content__body__item__title__text}
                            >2. Cập nhật mới tầm nhìn - sứ mệnh</p>
                            <DatePicker
                                onChange={onChange}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="yyyy/mm/dd"
                            />
                            <Checkbox
                                className={styles.LCNTTLeftContainer__content__body__item__title__checkbox}
                            >
                                Gửi nhắc nhở cho tôi
                            </Checkbox>
                            <div
                                className={styles.LCNTTLeftContainer__content__body__item__button}
                            >
                                <Button
                                    className={styles.LCNTTcontent__body__item__button}
                                    size="large"
                                >
                                    Tạo lịch
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.LCNTTLeftContainer__content__body__item}`}>
                        <div className={`${styles.LCNTTLeftContainer__content__body__item__title}`}>
                            <p
                                className={styles.LCNTTLeftContainer__content__body__item__title__text}
                            >3. Cập nhật mới giá trị cốt lõi - mục tiêu chiến lược</p>
                            <DatePicker
                                onChange={onChange}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="yyyy/mm/dd"
                            />
                            <Checkbox
                                className={styles.LCNTTLeftContainer__content__body__item__title__checkbox}
                            >
                                Gửi nhắc nhở cho tôi
                            </Checkbox>
                            <div
                                className={styles.LCNTTLeftContainer__content__body__item__button}
                            >
                                <Button
                                    className={styles.LCNTTcontent__body__item__button}
                                    size="large"
                                >
                                    Tạo lịch
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.LCNTTLeftContainer__content__body__item}`}>
                        <div className={`${styles.LCNTTLeftContainer__content__body__item__title}`}>
                            <p
                                className={styles.LCNTTLeftContainer__content__body__item__title__text}
                            >4. Cập nhật mới nguyên tắc làm việc</p>
                            <DatePicker
                                onChange={onChange}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="yyyy/mm/dd"
                            />
                            <Checkbox
                                className={styles.LCNTTLeftContainer__content__body__item__title__checkbox}
                            >
                                Gửi nhắc nhở cho tôi
                            </Checkbox>
                            <div
                                className={styles.LCNTTLeftContainer__content__body__item__button}
                            >
                                <Button
                                    className={styles.LCNTTcontent__body__item__button}
                                    size="large"
                                >
                                    Tạo lịch
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Trong tuần này',
            children: <p>a</p>,
        },
        {
            key: '2',
            label: 'trong 15 ngày gần đây',
            children: <p>b</p>,
        },
        {
            key: '3',
            label: 'trong 30 ngày gần đây',
            children: <p>c</p>,
        },
        {
            key: '4',
            label: 'trong 90 ngày gần đây',
            children: <p>d</p>,
        },
    ];
    const childrenContentRight =
        <div
            className={`${styles.LCNTTRightContainer}`}
        >
            <div className={`${styles.LCNTTRightContainer__title}`}>
                <p>THỜI GIAN CẬP NHẬT</p>
            </div>

            <div className={`${styles.LCNTTRightContainer__list} LCNTTRightContainer__list `}>
                <Collapse items={items} defaultActiveKey={['1']} />
            </div>

        </div>
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
            keyduocchon="6"
        />
    )
}
