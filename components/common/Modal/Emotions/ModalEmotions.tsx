import React, { useState } from 'react';
import { Modal, Tabs, TabsProps, } from 'antd';
import styles from './ModalEmotions.module.css';
import Emotion from './Emotion';
import Activity from './Activity';

interface EmotionsProps {
    isOpen: boolean;
    onClose: () => void;
    onActivitySelect: (selectedActivity: string) => void;
    onEmotionSelect: (selectedEmotion: string) => void;
}

const Emotions: React.FC<EmotionsProps> = ({ isOpen, onClose, onEmotionSelect, onActivitySelect }) => {

    const handleActivitySelect = (selectedActivity: string) => {
        onActivitySelect(selectedActivity);
        onClose();
    };
    const handleEmotionSelect = (selectedEmotion: string) => {
        onEmotionSelect(selectedEmotion);
        onClose();
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Cảm xúc',
            children: <Emotion onEmotionSelect={handleEmotionSelect} />,
        },
        {
            key: '2',
            label: 'Hoạt động',
            children: <Activity onActivitySelect={handleActivitySelect} />,
        },
    ];
    return (
        <Modal
            title="Cảm xúc/Hoạt động"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            className={`${styles.modal} modal__Emotions`}
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                tabBarGutter={20}
            />
        </Modal>
    );
};

export default Emotions;