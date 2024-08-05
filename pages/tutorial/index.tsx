import React from "react";
import styles from "./tutorial.module.scss";
import HeaderLogin from "../login/header";
import { Image } from "antd";
import Footer from "../login/footer/Footer";
import Head from "next/head";
interface Tutorial {
  imgSrc: string;
  title: string;
  content: string;
}
export default function tutorial() {
  const data = [
    {
      id: 1,
      title: "Quản lý chung",
      imgSrc: "/img/hd_qlch.png",
      content:
        "Quản lý danh sách nhân viên, danh sách nhóm - phòng ban, cài đặt phân quyền nhân viên",
    },
    {
      id: 2,
      title: "Trang chủ",
      imgSrc: "/img/hd_trangchu.png",
      content:
        "Đăng tin, thông báo, sự kiện, hội thảo, tạo bình chọn... trên trang công ty.Xem và bình luận các bài viết, tin đã đăng",
    },
    {
      id: 3,
      title: "Truyền thông nội bộ",
      imgSrc: "/img/hd_ttnbo.png",
      content:
        "Đăng tin, thông báo, sự kiện, hội thảo, tạo bình chọn... trong từng nhóm thảo luận.Xem chi tiết các sự kiện sắp diễn ra trong doanh nghiệp.",
    },
    {
      id: 4,
      title: "Văn hóa doanh nghiệp",
      imgSrc: "/img/hd_vhdn.png",
      content:
        "Tạo, xem, chỉnh sửa, xóa các giá trị cốt lõi, mục tiêu chiến lược, thông tin công ty, danh sách nhóm phòng ban trong doanh nghiệp",
    },
    {
      id: 5,
      title: "Quản trị tri thức",
      imgSrc: "/img/hd_qttthuc.png",
      content:
        "Thêm, xem, chỉnh sửa tài liệu.Đặt và trao đổi câu hỏi trong nội bộ doanh nghiệp.Trả lời câu hỏi của người khác.",
    },
    {
      id: 6,
      title: "Quản lý cuộc họp",
      imgSrc: "/img/hd_qlch.png",
      content:
        "Thêm mới, chỉnh sửa, xóa, xem cuộc họp bao gồm cuộc họp trực tuyến, cuộc họp trực tiếp, cuộc họp định kỳ.Video call đối với cuộc họp trực tuyến.",
    },
    {
      id: 7,
      title: "Dữ liệu đã xóa",
      imgSrc: "/img/hd_dldx.png",
      content: "Khôi phục hoặc xóa vĩnh viễn các dữ liệu đã xóa từ trước",
    },
  ];
  return (
    <div>
      <Head>
        <title>Hướng dẫn</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <HeaderLogin />
      <div className={styles.background}>
        <div className={styles.background_left}>
          <div className={styles.tutorial}>
            <p className={styles.tutorial_1}>Hướng dẫn sử dụng</p>
            <p className={styles.tutorial_2}>
              Phần mềm Truyền thông văn hóa 365
            </p>
          </div>
          <div className={styles.img_video}>
            <div className={styles.img_hd}>
              <div className={styles.qr}>
                <Image alt="phanh" src="/img/hd_logo_qr.png" preview={false} />
              </div>
              <div className={styles.img_download}>
                <Image alt="" src="/img/hd_chplay_hd.png" preview={false} />
                <Image alt="" src="/img/hd_app-store.png" preview={false} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <iframe
            className="video_tutorial"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UssNzo6m1p8?si=tPWDISwsbu2wI9tu"
            title="YouTube video player"
            // frameborder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.title}>
          <h4>Hướng dẫn sử dụng phần mềm</h4>
        </div>

        <article className={styles.article}>
          <div className={styles.o_tutorial}>
            {data.map((datas, index) => (
              <div key={index} className={styles.data}>
                <div className={styles.padding_right}>
                  <div className={styles.img}>
                    <Image alt="" src={datas.imgSrc} preview={false} />
                  </div>

                  <div>
                    <span className={styles.data_title}>{datas.title}</span>
                    <p className={styles.data_content}>{datas.content}</p>
                  </div>
                </div>
                <div className={styles.btn_tutorial}>
                  <button>Xem hướng dẫn</button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
      <div className={styles.footer}>
        <link
          rel="stylesheet"
          href="https://timviec365.vn/css/footer_new.css?v=2"
        />
        <Footer />
      </div>
    </div>
  );
}
