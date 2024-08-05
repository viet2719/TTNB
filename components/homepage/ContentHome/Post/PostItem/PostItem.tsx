import React, { useState } from 'react'
import { Button, Image } from 'antd';
import PostVideo from '../PostVideo/PostVideo';
import styles from './PostItem.module.scss';
import PostImg from '../PostVideo/PostImg';

interface Props {
    dataPost: {
        id: number;
        srcImg: string | string[];
        srcVideo: string | string[];
        srcDoc: {
            name: string;
            src: string;
        }[];
    }[];
}

export default function PostItem(props: Props) {
    const { dataPost } = props;
    const [showAll, setShowAll] = useState(false);
    const displayedData = showAll ? dataPost : dataPost.slice(0, 4);
    return (
        <div className={`${styles.container} flex flex-wrap`}>

            {displayedData.map((post) => (
                <div key={post.id}>
                    <div style={{ width: "98%" }}>
                        {
                            post.srcDoc.map((src, index) => (
                                <div key={index} className={styles.itemDoc}>
                                    <a href={src.src} download>
                                        <div className={`${styles.TDCHContentBodyLeftContentQuestionFile} flex flex-space-between flex-align-center cursor-pointer`}>
                                            <div className={styles.infoFile}>
                                                <p>{src.name}</p>
                                                <div className='flex' style={{ gap: '10px', fontSize: '12px' }}>
                                                    <p>1.2MB</p>
                                                    <p>08:50 04/10/2023</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/img/QTTT/icon_download.svg"
                                                alt="file"
                                                preview={false}
                                                className={styles.TDCHContentBodyLeftContentQuestionFileImg}
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div key={post.id} className={styles.PostItem}>
                        {Array.isArray(post.srcImg) ? (
                            post.srcImg.map((src, index) => (
                                <div key={index} className={styles.item}>
                                    <PostImg key={index} src={src} />
                                </div>
                            ))
                        ) : (
                            <div className={styles.item}>
                                <PostImg src={post.srcImg} />
                            </div>
                        )}

                        {Array.isArray(post.srcVideo) ? (
                            post.srcVideo.map((src, index) => (
                                <div key={index} className={styles.item}>
                                    <PostVideo key={index} src={src} />
                                </div>
                            ))
                        ) : (
                            <div className={styles.item}>
                                <PostVideo src={post.srcVideo} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
            {dataPost[0].srcImg.length > 4 && !showAll && (
                <Button onClick={() => setShowAll(true)} className={styles.showMoreButton}>
                    Xem thêm
                </Button>
            )}
        </div>
    );
}
