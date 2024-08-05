
import styles from './PostVideo.module.css';

import React, { useRef } from 'react';

function PostVideo(props: { src: string }) {
    return (
        <div className={styles.post__content__container}>
            <div className={`${styles.post__content__video} ${styles.post__content__video_container}`}>
                <video
                    width="100%"
                    height="270"
                    controls
                    className={styles.video}
                >
                    <source src={props.src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default PostVideo;