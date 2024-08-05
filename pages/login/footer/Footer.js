import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "antd";
export default function Footer() {
  const elementRefs = useRef([]);
  const seeNvAllClickHandlerRef = useRef(null);
  const [getCheck, setCheck] = useState(false);

  const handleClick = (index) => {
    const hiddenElement = elementRefs.current[index].nextElementSibling;
    if (hiddenElement) {
      hiddenElement.style.display =
        hiddenElement.style.display === "none" ? "block" : "none";
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        seeNvAllClickHandlerRef.current = (event, index) => {
          event.stopPropagation();
          handleClick(index);
        };
        setCheck(true);
      }
    };

    // Thêm sự kiện resize khi component được mount
    window.addEventListener("resize", handleWindowResize);

    // Kiểm tra kích thước màn hình khi component được mount
    handleWindowResize();

    const detlNvCtyClickHandler = (event) => {
      event.stopPropagation();
    };

    document.addEventListener("click", detlNvCtyClickHandler);

    return () => {
      // Xóa sự kiện resize khi component bị unmount
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("click", detlNvCtyClickHandler);
    };
  }, []);
  return (
    <>
      <div>
        <div className="footer_main">
          <div className="footer_content">
            <div className="footer_block1">
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/"
                className="footer_block1_txt"
              >
                Hồ sơ xin việc,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-tieng-anh"
                className="footer_block1_txt"
              >
                cv tiếng anh,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-tieng-viet"
                className="footer_block1_txt"
              >
                cv tiếng việt,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-tieng-han"
                className="footer_block1_txt"
              >
                cv tiếng hàn,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-tieng-nhat"
                className="footer_block1_txt"
              >
                cv tiếng nhật,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/mau-don-xin-viec"
                className="footer_block1_txt"
              >
                đơn xin việc,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/mau-cover-letter-thu-xin-viec"
                className="footer_block1_txt"
              >
                thư xin việc,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/mau-so-yeu-ly-lich"
                className="footer_block1_txt"
              >
                sơ yếu lý lịch,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-viet-tat-cua-tu-gi-nhung-dieu-can-biet-khi-viet-cv.html"
                className="footer_block1_txt"
              >
                cv là gì,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cau-hoi-tuyen-dung"
                className="footer_block1_txt"
              >
                câu hỏi phỏng vấn,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-ke-toan"
                className="footer_block1_txt"
              >
                cv kế toán,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-kinh-doanh"
                className="footer_block1_txt"
              >
                cv kinh doanh,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-it"
                className="footer_block1_txt"
              >
                cv IT,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-hanh-chinh-nhan-su"
                className="footer_block1_txt"
              >
                cv nhân sự,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-nhan-vien-ban-hang"
                className="footer_block1_txt"
              >
                cv bán hàng,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-marketing"
                className="footer_block1_txt"
              >
                CV marketing,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-xay-dung"
                className="footer_block1_txt"
              >
                cv xây dựng,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-co-khi"
                className="footer_block1_txt"
              >
                cv cơ khí,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-xuat-nhap-khau"
                className="footer_block1_txt"
              >
                cv xuất nhập khẩu,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-sinh-vien-moi-ra-truong"
                className="footer_block1_txt"
              >
                cv sinh viên mới ra trường,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-kien-truc-noi-that"
                className="footer_block1_txt"
              >
                cv kiến trúc nội thất,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-cham-soc-khach-hang"
                className="footer_block1_txt"
              >
                cv chăm sóc khách hàng,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-phat-trien-thi-truong"
                className="footer_block1_txt"
              >
                cv phát triển thị trường,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-du-lich"
                className="footer_block1_txt"
              >
                cv du lịch,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-thu-ngan"
                className="footer_block1_txt"
              >
                cv thu ngân,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-viec-lam-telesale"
                className="footer_block1_txt"
              >
                cv telesale,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-tai-chinh"
                className="footer_block1_txt"
              >
                cv tài chính,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-logistic"
                className="footer_block1_txt"
              >
                cv logistic,
              </Link>
              <Link
                rel="dofollow"
                target="_blank"
                href="https://dev.timviec365.vn/cv365/cv-nha-hang-khach-san"
                className="footer_block1_txt"
              >
                cv nhà hàng khách sạn
              </Link>
            </div>
            <div className="gach_ngang" />
            <div className="footer_block2">
              <div className="about_365">
                <div
                  className="wrap_arr open_content"
                  onClick={
                    getCheck
                      ? (event) => seeNvAllClickHandlerRef.current(event, 0)
                      : null
                  }
                  ref={(el) => (elementRefs.current[0] = el)}
                >
                  <p className="footer_block2_header">Về Timviec365</p>
                  <div className="arr_respon hidden">
                    <Image
                      src="https://timviec365.vn/images/arr_up.svg"
                      className="hidden"
                      alt="arrow_up"
                    />
                    <Image
                      src="https://timviec365.vn/images/arr_down.svg"
                      alt="arrow_down"
                    />
                  </div>
                </div>
                <div className="list_about_365 content_show">
                  <div className="timviec_item">
                    <div className="content_item">
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/gioi-thieu-chung.html"
                      >
                        Giới thiệu
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/thong-tin-can-biet.html"
                      >
                        Thông tin
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/blog/hoi-va-dap-ve-timviec365vn-chat365-va-cac-ung-dung-chuyen-doi-so-new16648.html"
                      >
                        Hỏi đáp
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/blog"
                      >
                        Cẩm nang
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/thoa-thuan-su-dung.html"
                      >
                        Thỏa thuận
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/quy-dinh-bao-mat.html"
                      >
                        Bảo mật
                      </Link>
                    </div>
                    <div className="content_item">
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/giai-quyet-tranh-chap.html"
                      >
                        Giải quyết tranh chấp
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/so-do-trang-web.html"
                      >
                        Sơ đồ Website
                      </Link>
                      <Link
                        rel="nofollow"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=UssNzo6m1p8"
                      >
                        Video
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/blog/ung-dung-cua-trinh-sat-ai365-new16655.html"
                      >
                        AI365
                      </Link>
                      <Link
                        rel="nofollow"
                        href="https://dev.timviec365.vn/blog/huy-hieu-tia-set-new16722.html"
                      >
                        Huy hiệu tia sét
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_block2_right">
                <div className="for_uv">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 1)
                        : null
                    }
                    ref={(el) => (elementRefs.current[1] = el)}
                  >
                    <p className="footer_block2_header">Dành cho ứng viên</p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className="arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_for_uv content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/cv-xin-viec">
                          Mẫu CV xin việc
                        </Link>
                        <Link href="https://dev.timviec365.vn/cv365/mau-cover-letter-thu-xin-viec">
                          Thư xin việc
                        </Link>
                        <Link href="https://dev.timviec365.vn/cv365/mau-don-xin-viec">
                          Hồ sơ xin việc
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/blog/c24/bi-quyet-viet-cv">
                          Bí quyết viết CV
                        </Link>
                        <Link
                          rel="nofollow"
                          href="https://dev.timviec365.vn/trang-vang-doanh-nghiep.html"
                        >
                          Trang vàng
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="for_ntd">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 2)
                        : null
                    }
                    ref={(el) => (elementRefs.current[2] = el)}
                  >
                    <p className="footer_block2_header">
                      Dành cho nhà tuyển dụng
                    </p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className="arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_for_ntd content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/dang-tin-tuyen-dung-mien-phi.html">
                          Đăng tuyển dụng
                        </Link>
                        <Link href="https://dev.timviec365.vn/blog">
                          Cẩm nang tuyển dụng
                        </Link>
                        <Link href="https://dev.timviec365.vn/nguoi-tim-viec.html">
                          Tìm hồ sơ
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link
                          rel="nofollow"
                          href="https://quanlychung.timviec365.vn/"
                        >
                          Ứng dụng chuyển đổi số
                        </Link>
                        <Link href="https://dev.timviec365.vn/bieu-mau">
                          Biểu mẫu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tien_ich">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 3)
                        : null
                    }
                    ref={(el) => (elementRefs.current[3] = el)}
                  >
                    <p className="footer_block2_header">Tiện ích</p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className="arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_tien_ich content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link
                          rel="nofollow"
                          href="https://dev.timviec365.vn/ssl/so-sanh-luong.html"
                        >
                          Tra cứu lương
                        </Link>
                        <Link href="https://dev.timviec365.vn/tinh-luong-gross-net.html">
                          Lương Gross - Net
                        </Link>
                        <Link
                          rel="nofollow"
                          href="https://dev.timviec365.vn/mail365/"
                        >
                          Email365
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/gioi-thieu-app-tim-viec.html">
                          Tải app
                        </Link>
                        <Link
                          href="https://dev.timviec365.vn/tinh-bao-hiem-that-nghiep"
                          rel="nofollow"
                        >
                          Tính bảo hiểm thất nghiệp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work_area">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 4)
                        : null
                    }
                    ref={(el) => (elementRefs.current[4] = el)}
                  >
                    <p className="footer_block2_header">
                      Việc làm theo khu vực
                    </p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className=" arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_work_area content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/tim-viec-lam-tai-ha-noi.html">
                          Việc làm tại Hà Nội
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-ho-chi-minh-c0v45">
                          Việc làm tại Hồ Chí Minh
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-da-nang-c0v26">
                          Việc làm tại Đà Nẵng
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-hai-phong-c0v2">
                          Việc làm tại Hải Phòng
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-binh-duong-c0v46">
                          Việc làm tại Bình Dương
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-can-tho-c0v48">
                          Việc làm tại Cần Thơ
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-dong-nai-c0v55">
                          Việc làm tại Đồng Nai
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-tai-bac-ninh-c0v5">
                          Việc làm tại Bắc Ninh
                        </Link>
                      </div>
                    </div>
                    <Link
                      rel="nofollow"
                      href="https://dev.timviec365.vn/viec-lam-tai-tinh-thanh"
                      className="seen_all"
                    >
                      Xem tất cả{" "}
                      <Image
                        src="https://timviec365.vn/images/2arr_right.svg"
                        alt="see_all"
                      />
                    </Link>
                  </div>
                </div>
                <div className="work_job">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 5)
                        : null
                    }
                    ref={(el) => (elementRefs.current[5] = el)}
                  >
                    <p className="footer_block2_header">
                      Việc làm theo ngành nghề
                    </p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className="arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_work_job content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/viec-lam-nhan-vien-kinh-doanh-c9v0">
                          Việc làm kinh doanh
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-kd-bat-dong-san-c33v0">
                          Việc làm bất động sản
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-bao-hiem-c66v0">
                          Việc làm bảo hiểm
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-it-phan-mem-c13v0">
                          Việc làm IT
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/viec-lam-nhan-su-c27v0">
                          Việc làm nhân sự
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-ban-hang-c10v0">
                          Việc làm bán hàng
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-luong-cao.html">
                          Việc làm lương cao
                        </Link>
                        <Link href="https://dev.timviec365.vn/viec-lam-ke-toan-kiem-toan-c1v0">
                          Việc làm kế toán
                        </Link>
                      </div>
                    </div>
                    <Link
                      rel="nofollow"
                      href="https://dev.timviec365.vn/danh-sach-nganh-nghe"
                      className="seen_all"
                    >
                      Xem tất cả{" "}
                      <Image
                        src="https://timviec365.vn/images/2arr_right.svg"
                        alt="see_all"
                      />
                    </Link>
                  </div>
                </div>
                <div className="work_tag">
                  <div
                    className="wrap_arr open_content"
                    onClick={
                      getCheck
                        ? (event) => seeNvAllClickHandlerRef.current(event, 6)
                        : null
                    }
                    ref={(el) => (elementRefs.current[6] = el)}
                  >
                    <p className="footer_block2_header">Việc làm theo tag</p>
                    <div className="arr_respon hidden">
                      <Image
                        src="https://timviec365.vn/images/arr_up.svg"
                        className="arr_up hidden"
                        alt="arrow_up"
                      />
                      <Image
                        src="https://timviec365.vn/images/arr_down.svg"
                        className="arr_down"
                        alt="arrow_down"
                      />
                    </div>
                  </div>
                  <div className="list_work_tag content_show">
                    <div className="timviec_item">
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/tim-viec-lam-php-t11394.html">
                          Việc làm PHP
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-ke-toan-noi-bo-866">
                          Việc làm Kế toán nội bộ
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-digital-marketing-521">
                          Việc làm Digital Marketing
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-chuyen-vien-seo-2070">
                          Việc làm chuyên viên seo
                        </Link>
                      </div>
                      <div className="content_item">
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-tu-van-bat-dong-san-2737">
                          Việc làm bất động sản
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-thuc-tap-sinh-1265">
                          Việc làm thực tập sinh
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-nhan-vien-bao-hiem-900">
                          Việc làm nhân viên bảo hiểm
                        </Link>
                        <Link href="https://dev.timviec365.vn/tag7/DS-viec-lam-tuyen-dung-content-526">
                          Việc làm Content
                        </Link>
                      </div>
                    </div>
                    <Link
                      rel="nofollow"
                      href="https://dev.timviec365.vn/danh-sach-viec-lam-theo-tags"
                      className="seen_all"
                    >
                      Xem tất cả{" "}
                      <Image
                        src="https://timviec365.vn/images/2arr_right.svg"
                        alt="see_all"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="gach_ngang" />
            <div className="footer_block3">
              <div className="wrap_365">
                <div className="logo_h">
                  {/* <Image
                    className='lazyload'
                    src='../Image/logo_h.svg'
                    alt='timviec365'
                  /> */}
                </div>
                <span className="wrap_365_txt">KẾT NỐI VỚI TIMVIEC365.VN</span>
                <div className="wrap_block_connect">
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://chat365.timviec365.vn/"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon365.svg"
                        alt="chat"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://www.facebook.com/Timviec365.Vn/"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_fb.svg"
                        alt="facebook"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://twitter.com/timviec365vn"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_witter.svg"
                        alt="witter"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_youtube.svg"
                        alt="youtube"
                      />
                    </Link>
                  </div>
                </div>
                <div className="wrap_certify">
                  <Link
                    rel="nofollow"
                    href="http://online.gov.vn/Home/WebDetails/35979?AspxAutoDetectCookieSupport=1"
                  >
                    <Image
                      className="lazyload icon_bct"
                      src="https://timviec365.vn/images/DK_bocongthuong.png"
                      alt="Đã đăng ký bộ công thương"
                    />
                  </Link>
                  <Link
                    rel="nofollow"
                    href="//www.dmca.com/Protection/Status.aspx?ID=5b1070f1-e6fb-4ba4-8283-84c7da8f8398"
                  >
                    <Image
                      className="lazyload icon_dmca"
                      src="https://timviec365.vn/images/dmca.png"
                      alt="DMCA.com Protection Status"
                    />
                  </Link>
                </div>
              </div>
              <div className="wrap_address">
                <p className="wrap_address_header">
                  CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ
                </p>
                <Link
                  href="https://goo.gl/maps/stYYuH5Ln5U2"
                  rel="nofollow"
                  target="_blank"
                  className="wrap_address_txt"
                >
                  VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
                </Link>
                <p className="wrap_address_txt">
                  VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng
                  Yên
                </p>
                {/* <p class="wrap_address_txt">VP3: Tầng 3, Số 1 đường Trần Nguyên Đán, Khu Đô Thị Định Công, Hoàng Mai, Hà Nội</p> */}
                <p className="wrap_address_txt">
                  Hotline: 0982079209, 1900633682 - ấn phím 1
                </p>
                <p className="wrap_address_txt">
                  Email: timviec365.vn@gmail.com
                </p>
              </div>
              <div className="wrap_qr">
                <p className="wrap_qr_header">TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
                <div className="wrap_qr_block">
                  <div className="wrap_qr_child">
                    <Image
                      className="qr_img lazyload"
                      style={{ width: "101.5%" }}
                      src="https://timviec365.vn/images/qr_timviec_uv.png"
                      alt="download_app"
                    />
                    <p className="qr_txt">App Timviec365 UV</p>
                  </div>
                  <div className="wrap_qr_child">
                    <Image
                      className="qr_img lazyload"
                      src="https://timviec365.vn/images/New_images/new_qr_ft1.png"
                      alt="download_app"
                    />
                    <p className="qr_txt">App Timviec365 NTD</p>
                  </div>
                  <div className="wrap_qr_child">
                    <Image
                      className="qr_img lazyload"
                      src="https://timviec365.vn/images/qr_cv_365.png"
                      alt="download_app"
                    />
                    <p className="qr_txt">App CV365</p>
                  </div>
                  <div className="wrap_qr_child">
                    <Image
                      className="qr_img lazyload"
                      src="https://timviec365.vn/images/qr_chat_365.png"
                      alt="download_app"
                    />
                    <p className="qr_txt">App Chat365</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_block3_2 hidden">
              <div className="logo_h">
                <Image
                  className="lazyload"
                  src="../Image/logo_h.svg"
                  alt="timviec365"
                />
              </div>
              <div className="wrap_address">
                <p className="wrap_address_header">
                  CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ
                </p>
                <p className="wrap_address_txt">
                  VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
                </p>
                <p className="wrap_address_txt">
                  VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng
                  Yên
                </p>
                {/* <p class="wrap_address_txt">VP3: Tầng 3, Số 1 đường Trần Nguyên Đán, Khu Đô Thị Định Công, Hoàng Mai, Hà Nội</p> */}
                <p className="wrap_address_txt">
                  Hotline: 0982079209, 1900633682 - ấn phím 1
                </p>
                <p className="wrap_address_txt">
                  Email: timviec365.vn@gmail.com
                </p>
              </div>
              <div className="flex jtf_sb">
                <div className="wrap_certify">
                  <Link
                    rel="nofollow"
                    href="http://online.gov.vn/Home/WebDetails/35979?AspxAutoDetectCookieSupport=1"
                  >
                    <Image
                      className="lazyload icon_bct"
                      src="https://timviec365.vn/images/DK_bocongthuong.png"
                      alt="Đã đăng ký bộ công thương"
                    />
                  </Link>
                  <Link
                    rel="nofollow"
                    href="//www.dmca.com/Protection/Status.aspx?ID=5b1070f1-e6fb-4ba4-8283-84c7da8f8398"
                  >
                    <Image
                      className="lazyload icon_dmca"
                      src="https://timviec365.vn/images/dmca.png"
                      alt="DMCA.com Protection Status"
                    />
                  </Link>
                </div>
                <div className="wrap_block_connect">
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://chat365.timviec365.vn/"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon365.svg"
                        alt="chat"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://www.facebook.com/Timviec365.Vn/"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_fb.svg"
                        alt="facebook"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://twitter.com/timviec365vn"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_witter.svg"
                        alt="witter"
                      />
                    </Link>
                  </div>
                  <div className="wrap_icon_connet">
                    <Link
                      href="https://www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos"
                      rel="nofollow"
                      target="_blank"
                    >
                      <Image
                        src="https://timviec365.vn/images/icon_youtube.svg"
                        alt="youtube"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="gach_ngang respon_1200 hidden" />
            <div className="footer_block4 hidden">
              <p className="wrap_qr_header">TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
              <p className="wrap_qr_header_2">
                Tải app để tìm việc siêu tốc Tạo CV đẹp với 365+ mẫu CV xin việc
              </p>
              <div className="wrap_qr_block">
                <button className="wrap_qr_child">
                  <Link
                    href="https://play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
                    ios-href="https://apps.apple.com/vn/app/t%C3%ACm-vi%E1%BB%87c-365-t%C3%ACm-vi%E1%BB%87c-online/id1597712953?l=vi"
                    className="ios_check"
                    rel="nofollow"
                    target="_blank"
                  >
                    <p className="qr_txt">Tải app Timviec365 UV</p>
                    <Image
                      className="download_img"
                      src="https://timviec365.vn/images/download.svg"
                      alt="download"
                    />
                  </Link>
                </button>
                <button className="wrap_qr_child">
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.timviec365.company"
                    ios-href="https://apps.apple.com/vn/app/nh%C3%A0-tuy%E1%BB%83n-d%E1%BB%A5ng-timviec365-vn/id1606069668"
                    rel="nofollow"
                    className="ios_check"
                    target="_blank"
                  >
                    <p className="qr_txt">Tải app Timviec365 NTD</p>
                    <Image
                      className="download_img"
                      src="https://timviec365.vn/images/download.svg"
                      alt="download"
                    />
                  </Link>
                </button>
                <button className="wrap_qr_child wrap_qr_child_respon">
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
                    className="ios_check"
                    ios-href="https://apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
                    rel="nofollow"
                    target="_blank"
                  >
                    <p className="qr_txt">Tải app CV365</p>
                    <Image
                      className="download_img"
                      src="https://timviec365.vn/images/download.svg"
                      alt="download"
                    />
                  </Link>
                </button>
                <button className="wrap_qr_child wrap_qr_child_respon">
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.timviec365.chat_365"
                    className="ios_check"
                    ios-href="https://apps.apple.com/us/app/chat365-nh%E1%BA%AFn-tin-nhanh-ch%C3%B3ng/id1623353330"
                    rel="nofollow"
                    target="_blank"
                  >
                    <p className="qr_txt">Tải app Chat365</p>
                    <Image
                      className="download_img"
                      src="https://timviec365.vn/images/download.svg"
                      alt="download"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
