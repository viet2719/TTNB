
import React from 'react';
import { Image, Popover } from 'antd';
import styles from './ReactionIcons.module.css';
import { reactionImages } from '../dataPost';

interface ReactionIconsProps {
    selectedImage: string;
    onSelectImage: (imageSrc: string) => void;
}

function ReactionIcons({ selectedImage, onSelectImage }: ReactionIconsProps) {
    const defaultImage = '/img/img-home/ep_post_active_like.svg';

    function handleResetImage() {
        onSelectImage(defaultImage);
    }
    return (
        <div className={styles.post__footer__left}>
            <Popover
                content={
                    <div className={styles.popupContainer}>
                        {reactionImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                className={`${styles.imgHoverEffect} ${selectedImage === image.src ? styles.imgSelected : ''}`}
                                width={35}
                                height={35}
                                preview={false}
                                alt={`Image ${index}`}
                                onClick={() => onSelectImage(image.src)}
                            />
                        ))}
                    </div>
                }
                trigger="hover"
                placement="topLeft"
                className={styles.popover}
            >
                <div className={styles.post__footer__left__icon} onClick={handleResetImage}>
                    <Image
                        src={selectedImage}
                        alt='icon'
                        width={32}
                        height={32}
                        preview={false}
                    />
                </div>
                <div
                    className={`${styles.post__footer__left__text} ${selectedImage &&
                        (reactionImages.find(image => image.src === selectedImage)?.color || styles.defaultColor)
                        }`}
                >
                    {reactionImages.find(image => image.src === selectedImage)?.type || "Thích"}
                </div>
            </Popover>
        </div>
    );
}

export default ReactionIcons;