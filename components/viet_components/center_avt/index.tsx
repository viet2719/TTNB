"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, Image, MenuProps, Modal } from "antd";
import styles from "./index.module.scss";
import NavBlock from "../Tab_header";
import CoverImage from "@/components/headerperson/UpdateImageWall";
import EditPerPages from "@/components/common/Modal/EditPerPages/EditPages";
import Avatar from "@/components/headerperson/Avatar";
import x from "@/components/Tuychinhdangtin/tuychinh.module.scss";

const Center_avt = () => {
  const router = useRouter();
  const [eidtImageWall, setEidtImageWall] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [fr, setFr] = useState(false);
  const [fl, setFl] = useState(false);
  const clickFr = () => {
    setFr(!fr);
  };
  const onClicknewstory = () => {
    router.push("/addstory24h");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className={styles.item_fr}>
          <Image
            preview={false}
            width={20}
            alt="phanh"
            src={"/img/ban-be2.svg"}
          />
          Bạn bè
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          onClick={() => {
            setFl(!fl);
          }}
        >
          {fl ? (
            <div className={styles.item_fr}>
              <Image
                preview={false}
                width={20}
                alt="phanh"
                src={"/img/bo-theo-doi.svg"}
              />
              Bỏ theo dõi
            </div>
          ) : (
            <div className={styles.item_fr}>
              <Image
                preview={false}
                width={20}
                alt="phanh"
                src={"/img/bo-theo-doi3.svg"}
              />
              Theo dõi
            </div>
          )}
        </div>
      ),
      key: "1",
    },

    {
      label: (
        <div className={styles.item_fr} onClick={showModal}>
          <Image
            preview={false}
            width={20}
            alt="phanh"
            src={"/img/huy-ket-ban.svg"}
          />
          Hủy kết bạn
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <div>
      <div className={styles.center_avt}>
        <div className={styles.center_avt_header}>
          {/*---------------------------------------------------------- ẢNH BÌA -------------------------------------------------- */}
          <div className={`${styles.avt} avt`}>
            <Image alt="anh-bia" src={"/img/c.png"} preview={false} />
          </div>
          {/*-------------------------------------------------- NÚT CHỈNH SỬA ẢNH BÌA   -----------------------------------*/}
          <div className={styles.cover_image_container}>
            <div
              onClick={() => setEidtImageWall(true)}
              className={styles.center_cover_upload_btn}
            >
              <Image
                className={styles.center_cover_upload_img}
                width={24}
                height={24}
                alt="may-anh"
                src={"/img/nv_camera.svg"}
                preview={false}
              />
              <span className={styles.center_cover_upload_btn_txt}>
                Chỉnh sửa ảnh bìa
              </span>
            </div>
            {/*-----------------------------------------------MODAL CHỈNH SỬA ẢNH BÌA ----------------------------------------------------- */}
            {eidtImageWall && (
              <CoverImage
                isOpen={eidtImageWall}
                onClose={() => setEidtImageWall(false)}
              />
            )}
          </div>
        </div>

        {/* -======== = = = = = = = = ==================KẾT THÚC ẢNH BÌA ================================================================ */}
        {/* =============================================PHẦN  ẢNH ĐẠI DIỆN====================================================== */}
        <div className={styles.center_avt_footer}>
          {/* ==========================================ẢNH ĐẠI DIỆN ============================= */}
          <div className="anhdaidien">
            <Image
              width={192}
              preview={false}
              height={186}
              alt="anh-loi"
              src={"/img/c.png"}
            />
          </div>
          {/*================================================= NÚT CẬP NHẬT ẢNH ĐẠI DIỆN=========================================================== */}
          <div
            onClick={() => {
              setAvatar(true);
            }}
            className="up"
          >
            <Image
              width={30}
              height={30}
              alt="anh-loi"
              src={"/img/nv_camera.svg"}
              preview={false}
            />
          </div>
          {avatar && (
            <Avatar
              isOpen={avatar}
              onClose={() => {
                setAvatar(false);
              }}
            />
          )}
          {/* ===============^^^^^^^=============== */}

          <div className={styles.center_avt_info_detail}>
            <p className={styles.center_avt_name}>
              Công ty Cổ phần Thanh toán Hưng Hà
            </p>
            <p className={styles.center_avt_count_mem}>1 người theo dõi</p>
            <div className={`${styles.center_avt_6_follewer} active`}>
              <Image
                width={24}
                height={24}
                alt="anh"
                src={"/img/app_add.png"}
                preview={false}
              />
            </div>
          </div>
          {/* ----------------------------------TRANG CÁ NHÂN------------------------------- */}
          <div className={styles.center_avt_btn}>
            <div onClick={onClicknewstory} className={styles.addstory}>
              <Image
                width={20}
                height={20}
                alt="cin"
                src={"/img/nv_add-circle.svg"}
                preview={false}
              />
              Thêm vào tin
            </div>

            <EditPerPages />
          </div>
          {/* -------==================-----TRANG NGƯỜI LẠ --------------------------- */}
          {/* <div className={styles.center_avt_btn}>
            <div className={styles.addstory_2} onClick={clickFr}>
              {fr ? (
                <div className={styles.add_fr}>
                  <Image
                    width={30}
                    alt=""
                    src="/img/them-ban-be.svg"
                    preview={false}
                  />
                  Thêm bạn bè
                </div>
              ) : (
                <div className={styles.add_fr}>
                  <Image
                    width={30}
                    alt=""
                    src="/img/TTNB/huy-loi-moi.svg"
                    preview={false}
                  />
                  Hủy kết bạn
                </div>
              )}
            </div>
            <div
              className={styles.nhantin}
              onClick={() => {
                router.push("https://chat365.timviec365.vn/notification-MTcw");
              }}
            >
              <Image
                width={30}
                alt=""
                src="/img/nhan-tin2.svg"
                preview={false}
              />
              Nhắn tin
            </div>
          </div> */}
          {/* --==================-TRANG BẠN BÈ ------------------------------ */}
          {/* <div className={styles.center_avt_btn}>
            <div className={styles.addstory_2} onClick={clickFr}>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div
                  onClick={(e) => e.preventDefault()}
                  className={styles.trang_ban_be}
                >
                  <Image
                    width={20}
                    alt=""
                    src="/img/them-ban-be.svg"
                    preview={false}
                  />
                  Bạn Bè
                </div>
              </Dropdown>
            </div>

            <div
              className={styles.nhantin}
              onClick={() => {
                router.push("https://chat365.timviec365.vn/notification-MTcw");
              }}
            >
              <Image
                width={20}
                alt=""
                src="/img/nhan-tin2.svg"
                preview={false}
              />
              Nhắn tin
            </div>
          </div> */}
        </div>
        <div className={`${styles.center_nav_block} width100`}>
          <NavBlock />
        </div>
      </div>

      <Modal
        title="Hủy kết bạn"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <p>
          Bạn có chắc chắn muốn xóa Nguyễn Tuấn Anh khỏi danh sách bạn bè không?
        </p>
        <div className={x.btn}>
          <button className={x.huy} onClick={handleCancel}>
            Hủy
          </button>
          <button className={x.ok} onClick={handleOk}>
            Xác nhận
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Center_avt;
