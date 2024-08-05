import React, { useState } from "react";
import styles from "./index.module.css";
import { Image } from "antd";
import { Popover, ConfigProvider } from "antd";
import Footer from "./footer/Footer";
import Menunav from "./menu";
import HeaderLogin from "./header"
const BeforeLogin = () => {
   const [open, setOpen] = useState(false);
   const hide = () => {
      setOpen(false);
   };
   const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
   };
   return (
      <>
         <div>
            <HeaderLogin/>
            <div className={styles.children}>
               <div className={styles.children_container}>
                  <div className={styles.children_content}>
                     <h1 className={styles.children_h1}>PHẦN MỀM TRUYỀN THÔNG NỘI BỘ - VĂN HÓA DOANH NGHIỆP</h1>
                     <p className={styles.children_p1}>Yếu tố quan trọng không thể thiếu trong thành công của doanh nghiệp 4.0</p>
                     <p className={styles.children_p2}>Tải App Truyền Thông Nội Bộ 365 dành cho PC</p>
                     <div className={styles.children_img}>
                        <Image alt="/" src={"/img/before_login/dl_app_pc2.png"} preview={false} />
                        <Image alt="/" src={"/img/before_login/dl_app_pc1.png"} preview={false} />
                     </div>
                     <div className={styles.contact}>
                        <div className={styles.dk}>
                           <a href="https://quanlychung.timviec365.vn/lua-chon-dang-ky.html" rel="nofollow" className={styles.support}>
                              Liên hệ hỗ trợ
                           </a>
                        </div>
                        <div className={styles.ht}>
                           <a rel="nofollow" href="https://quanlychung.timviec365.vn/lua-chon-dang-ky.html" className={styles.sign}>
                              Đăng ký ngay
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.content}>
               <h2 className={styles.content_h2}>Tính năng nổi bật</h2>

               <div className={styles.content_blog}>
                  <div className={styles.content_blog_tax}>
                     <div className={styles.content_blog_img}>
                        <Image alt="/" src={"/img/before_login/tinhnang1_1520.png"} preview={false} />
                     </div>
                     <p className={styles.content_blog_p}>Truyền tải văn hóa doanh nghiệp đến cụ thể từng cá nhân trong nội bộ</p>
                     <p className={styles.content_blog_p2}>Các giá trị văn hóa doanh nghiệp được xây dựng, gửi tới nhân viên một cách có tổ chức, rõ ràng, dễ hiểu</p>
                  </div>
                  <div className={styles.content_blog_tax}>
                     <div className={styles.content_blog_img}>
                        <Image alt="/" src={"/img/before_login/tinhnang2_1520.png"} preview={false} />
                     </div>
                     <p className={styles.content_blog_p}>Truyền thông đa chiều trong nội bộ doanh nghiệp</p>
                     <p className={styles.content_blog_p22}>
                        Tương tác đa chiều giữa Nhân viên - cấp quản lý - nhân viên góp phần quan trọng trong công tác truyền tải thông tin, gắn kết nhân viên đồng lòng với mục tiêu chung
                     </p>
                  </div>
                  <div className={styles.content_blog_tax}>
                     <div className={styles.content_blog_img}>
                        <Image alt="/" src={"/img/before_login/tinhnang3_1520.png"} preview={false} />
                     </div>
                     <p className={styles.content_blog_p}>Chia sẻ - quản trị tri thức</p>
                     <p className={styles.content_blog_p22}>
                        Xây dựng hệ thống tra cứu - chia sẻ tri thức nội bộ dành riêng cho doanh nghiệp và nhân viên Quản trị tri thức doanh nghiệp theo một hệ thống, dễ dàng phục vụ nhân viên.
                     </p>
                  </div>
                  <div className={styles.content_blog_tax}>
                     <div className={styles.content_blog_img}>
                        <Image alt="/" src={"/img/before_login/tinhnang4_1520.png"} preview={false} />
                     </div>
                     <p className={styles.content_blog_p_end}>Hỗ trợ sự kiện - hội thảo</p>
                     <p className={styles.content_blog_p2}>Tổ chức sự kiện - hội thảo - diễn đàn hỏi đáp, làm thân thiết hơn mối quan hệ diễn giả - khán giả trong sự kiện</p>
                  </div>
                  <div className={styles.content_blog_tax}>
                     <div className={styles.content_blog_img}>
                        <Image alt="/" src={"/img/before_login/tinhnang5_1520.png"} preview={false} />
                     </div>
                     <p className={styles.content_blog_p_end}>Quản lý thông tin khách tới thăm</p>
                     <p className={styles.content_blog_p2}>Hệ thống quản lý thông tin, nội dung khách hàng ghé thăm công ty được quản lý chặt chẽ bởi quá trình lưu trữ khoa học</p>
                  </div>
               </div>
            </div>
            <div className={styles.content2}>
               <h1 className={styles.content2_h1}>Download phần mềm truyền thông nội bộ doanh nghiệp</h1>
               <div className={styles.qr}>
                  <div>
                     <Image alt="/" src={"/img/before_login/qr.png"} preview={false} />
                  </div>
                  <div className={styles.app}>
                     <Image alt="/" src={"/img/before_login/chplay.png"} preview={false} />
                     <Image alt="/" src={"/img/before_login/app.png"} preview={false} />
                  </div>
               </div>
            </div>
            <div className={styles.content3}>
               <h1 className={styles.content3_h1}>
                  Không gian giao lưu nội bộ
                  <br />
                  Truyền bá văn hóa doanh nghiệp
               </h1>
               <div className={styles.content3_all_img}>
                  <div className={styles.content3_img}>
                     <div className={styles.border}>
                        <div className={styles.img}>
                           <Image alt="/" src={"/img/before_login/img_lll1.png"} preview={false} />
                        </div>
                        <div className={styles.content3_p}>
                           <p>An toàn và bảo mật</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content3_img}>
                     <div className={styles.border}>
                        <div className={styles.img}>
                           <Image alt="/" src={"/img/before_login/img_lll2.png"} preview={false} />
                        </div>
                        <div className={styles.content3_p}>
                           <p>Một nền tảng duy nhất</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content3_img_center}>
                     <div className={styles.border}>
                        <div className={styles.img}>
                           <Image alt="/" src={"/img/before_login/img_lll3.png"} preview={false} />
                        </div>
                        <div className={styles.content3_p}>
                           <p>Ứng dụng công nghệ AI</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content3_img}>
                     <div className={styles.border}>
                        <div className={styles.img}>
                           <Image alt="/" src={"/img/before_login/img_lll4.png"} preview={false} />
                        </div>
                        <div className={styles.content3_p}>
                           <p>Giải pháp số 1 Việt Nam</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content3_img}>
                     <div className={styles.border}>
                        <div className={styles.img}>
                           <Image alt="/" src={"/img/before_login/img_lll5.png"} preview={false} />
                        </div>
                        <div className={styles.content3_p}>
                           <p>Sử dụng miễn phí trọn đời</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.video_container}>
               <div className={styles.video}>
                  <div className={styles.video_left}>
                     <h2 className={styles.video_h2_none}>Video hướng dẫn sử dụng phần mềm</h2>
                     <iframe
                        className={styles.video_hd}
                        src="https://www.youtube.com/embed/UssNzo6m1p8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""></iframe>
                  </div>
                  <div className={styles.video_right}>
                     <h2 className={styles.video_h2}>Video hướng dẫn sử dụng phần mềm</h2>
                     <p className={styles.video_p}>PHẦN MỀM TRUYỀN THÔNG - VĂN HÓA DOANH NGHIỆP</p>
                     <p className={styles.video_pp}>
                        Nền tảng quản trị tài sản, quản trị thông tin và giao tiếp nội bộ giúp doanh nghiệp dễ dàng hơn trong việc truyền đạt mục tiêu, gắn kết nhân viên
                     </p>
                     <a className={styles.button_video} rel="nofollow" href="https://quanlychung.timviec365.vn/lua-chon-dang-ky.html">
                        <span>Đăng ký để sử dụng miễn phí</span>
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.content4}>
               <h2 className={styles.content4_h2}>Khách hàng sử dụng Phần mềm Truyền thông nội bộ 365</h2>
               <div className={styles.content4_icon}>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avat1.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata2.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata3.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata4.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata5.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avat1.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata2.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata3.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata4.png"} preview={false} />
                  </div>
                  <div className={styles.icon}>
                     <Image alt="/" src={"/img/before_login/avata5.png"} preview={false} />
                  </div>
               </div>
            </div>
            <div>
               <div className={styles.content5}>
                  <div className={styles.ceo}>
                     <Image alt="/" src={"/img/before_login/img45.png"} width={490} preview={false} />
                  </div>
                  <div className={styles.ceo_said}></div>
                  <div className={styles.content5_p}>
                     <p className={styles.content5_pcolor}>
                        Hãy chấp nhận những gì định mệnh gắn cho bạn, hãy yêu cái nghề mà định mệnh cho bạn làm việc và hãy cố gắng hoàn thành nó với tất cả tấm chân tình
                     </p>
                  </div>
                  <div className={styles.ceo_info}>
                     <p className={styles.ceo_name}>TRƯƠNG VĂN TRẮC</p>
                     <p className={styles.com}>CEO - Tổng giám đốc Công ty Cổ phần Thanh toán Hưng Hà</p>
                  </div>
                  <div className={styles.ceo_none}>
                     <p className={styles.ceo_none_p}>
                        Hãy chấp nhận những gì định mệnh gắn cho bạn, hãy yêu cái nghề mà định mệnh cho bạn làm việc và hãy cố gắng hoàn thành nó với tất cả tấm chân tình{" "}
                     </p>
                     <p className={styles.ceo_none_p}>(CEO - Tổng giám đốc Công ty cổ phần thanh toán Hưng Hà - Trương Văn Trắc)</p>
                  </div>
               </div>
            </div>
            <div className={styles.footer}>
               <link rel="stylesheet" href="https://timviec365.vn/css/footer_new.css?v=2" />
               <Footer />
            </div>
         </div>
      </>
   );
};

export default BeforeLogin;
