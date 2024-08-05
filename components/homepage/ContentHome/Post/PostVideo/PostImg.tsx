
import styles from './PostVideo.module.css';
import { Image } from 'antd';
import React, { useRef } from 'react';

function PostVideo(props: { src: string }) {
    return (
        <div className={styles.Post__image}>
            <Image
                src={props.src}
                alt="icon"
            />
        </div>
    );
}

export default PostVideo;