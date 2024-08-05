

import { Image } from 'antd';
import styles from './ReactionIcons/ReactionIcons.module.css';
interface ReactionImage {
    src: string;
    alt: string;
    type: string;
    color?: string;
}
export const menuOptionPost = [
    {
        key: 'save',
        icon: <Image
            src='/img/img-OptionPost/ep_post_save.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Lưu bài viết',
    },
    {
        key: 'notifications',
        icon: <Image
            src='/img/img-OptionPost/ep_post_turn_off_notify.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Tắt thông báo',
    },
    {
        key: 'comment',
        icon: <Image
            src='/img/img-OptionPost/nv_who_can_comment.png'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Ai có thể bình luận về bài viết của bạn',
    },
    {
        key: 'editPost',
        icon: <Image
            src='/img/img-OptionPost/chinh-sua.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chỉnh sửa bài viết',
    },
    {
        key: 'editView',
        icon: <Image
            src='/img/img-home/regime/regime1.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chỉnh sửa đối tượng xem bài viết',
    },
];

export const menuOptionSharePost = [
    {
        key: 'shareNow',
        icon: <Image
            src='/img/img-OptionShare/ep_post_share_now.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chia sẻ ngay',
    },
    {
        key: 'shareOnTime',
        icon: <Image
            src='/img/img-OptionShare/ep_post_share_new.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chia sẻ lên bảng tin',
    },
    {
        key: 'shareOnChat',
        icon: <Image
            src='/img/img-OptionShare/ep_post_share_mess.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Gửi bằng Chat',
    },
    {
        key: 'shareOnGroup',
        icon: <Image
            src='/img/img-OptionShare/ep_post_share_group.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chia sẻ lên nhóm',
    },
    {
        key: 'shareOnPage',
        icon: <Image
            src='/img/img-OptionShare/ep_post_page_friend.svg'
            alt='icon'
            width={20}
            height={20}
            preview={false}
        />,
        text: 'Chia sẻ lên trang cá nhân của bạn bè',
    },
];

export const reactionImages: ReactionImage[] = [
    {
        src: '/img/img-home/reaction/reaction_1.svg',
        alt: 'Reaction 1',
        type: 'Thích',
        color: styles.likeColor
    },
    {
        src: '/img/img-home/reaction/reaction_2.svg',
        alt: 'Reaction 2',
        type: 'Yêu thích',
        color: styles.loveColor
    },
    {
        src: '/img/img-home/reaction/reaction_3.svg',
        alt: 'Reaction 3',
        type: 'Wow',
        color: styles.wowColor
    },
    {
        src: '/img/img-home/reaction/reaction_4.svg',
        alt: 'Reaction 4',
        type: 'Thương thương',
        color: styles.TTColor
    },
    {
        src: '/img/img-home/reaction/reaction_5.svg',
        alt: 'Reaction 5',
        type: 'Phẫn nộ',
        color: styles.angryColor
    },
    {
        src: '/img/img-home/reaction/reaction_6.svg',
        alt: 'Reaction 6',
        type: 'Buồn',
        color: styles.sadColor
    },
    {
        src: '/img/img-home/reaction/reaction_7.svg',
        alt: 'Reaction 7',
        type: 'Ha ha',
        color: styles.hahaColor

    },
];

export const dataPost = [
    {
        id: 1,
        srcDoc: [
            {
                name: 'tailieu1.txt',
                src: '/img/c.png',
            },
            {
                name: 'tailieu2.txt',
                src: '/img/c.png',
            },
        ],
        srcImg: [
            '/img/c.png',
        ],
        srcVideo: [
            '/video/video1.mp4',
        ]
    },

];
