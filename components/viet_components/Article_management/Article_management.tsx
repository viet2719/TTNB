import React, { useEffect, useState } from "react";
import { Divider, Image, Modal, Select } from "antd";
import styles from "./Article_management.module.scss";
import Fillter from "../fillter/Fillter";
import Management from "./management";

export default function Article_management() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkbutton, setCheckbutton] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const Img = [
    {
      id: 1,
      imgSrc: "/img/c.png",
    },
    {
      id: 2,
      imgSrc: "/img/c.png",
    },
    {
      id: 3,
      imgSrc: "/img/c.png",
    },
    {
      id: 4,
      imgSrc: "/img/c.png",
    },
    {
      id: 5,
      imgSrc: "/img/c.png",
    },
    {
      id: 6,
      imgSrc: "/img/c.png",
    },
  ];
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const handleCheckboxChange = (index: number) => {
    // Cập nhật trạng thái của checkbox khi nó được thay đổi
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
    // Kiểm tra nếu tất cả các ô đều được bỏ tích, thì bỏ tích "Chọn tất cả"
    if (!newCheckboxStates.every((checked) => checked)) {
      setSelectAllChecked(false);
    }
  };

  const handleSelectAllChange = () => {
    // Cập nhật trạng thái của tất cả checkbox dựa trên giá trị của "Chọn tất cả"
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);
    const newCheckboxStates = newSelectAllChecked
      ? Array(Img.length).fill(true)
      : Array(Img.length).fill(false);
    setCheckboxStates(newCheckboxStates);
  };
  useEffect(() => {
    // Kiểm tra nếu tất cả các ô đều được chọn, thì kiểm tra "Chọn tất cả"
    if (checkboxStates.every((checked) => checked)) {
      setSelectAllChecked(true);
    } else {
      setSelectAllChecked(false);
    }
  }, [checkboxStates]);
  const checkbtn = (newCheckboxStates: any) => {
    const atLeastOneChecked = newCheckboxStates.some(
      (isChecked: any) => isChecked
    );
    setCheckbutton(atLeastOneChecked);
  };
  const countCheckedInputs = () => {
    return checkboxStates.filter((isChecked) => isChecked).length;
  };

  // Trong thành phần Article_management, sau khi useEffect đã được gọi
  // Bạn có thể gọi hàm countCheckedInputs để đếm số ô input được tích
  const checkedCount = countCheckedInputs();
  return (
    <>
      <button
        onClick={showModal}
        className={`${styles.filter_post_btn} ${styles.btn_manager_post}`}
      >
        <Image
          width={24}
          height={24}
          alt=""
          src={"/img/nv_setting-2.svg"}
          preview={false}
        />
        Quản lý bài viết
      </button>

      <Modal
        width={720}
        title="Bộ lọc bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div className={styles.quanly}>
          <span>Chọn bài viết bạn muốn quản lý</span>
          <Fillter />
        </div>
        <Divider />
        <div className={styles.allpost}>
          <span>Tháng 8 năm 2022</span>
          <div className={styles.allpost_input}>
            <input
              width={20}
              height={20}
              type="checkbox"
              id="allpost-check"
              checked={selectAllChecked}
              onChange={handleSelectAllChange}
            />

            <label htmlFor="allpost-check">Chọn tất cả</label>
          </div>
        </div>
        {/* ảnh */}

        <div className={styles.list_post}>
          {Img.map((imgs, index) => (
            <label htmlFor="img_post" key={index} className={styles.label1}>
              <Image alt="anh-loi" src={imgs.imgSrc} preview={false} />
              <div className={styles.info_post}>
                <Image
                  width={60}
                  height={50}
                  alt="anh-loi"
                  src={imgs.imgSrc}
                  preview={false}
                  className={styles.anhloi}
                />
                <div className={styles.info_post_post}>
                  <p>Acing the worlds 2nd* most popular Management Mastes</p>
                  <p style={{ display: "flex", textAlign: "center", gap: 5 }}>
                    25 Tháng 9
                    <Image
                      width={20}
                      height={20}
                      alt="anh-loi"
                      src="/img/earth.svg"
                      preview={false}
                    />
                  </p>
                </div>
              </div>
              <div className={styles.input}>
                <input
                  width={30}
                  height={30}
                  id="img_post"
                  type="checkbox"
                  checked={checkboxStates[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
            </label>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.count_img}>
            <span className={styles.count}>
              {checkedCount}/{Img.length}
            </span>
            &nbsp;
            <p>Bạn có thể ẩn hoặc xóa các bài viết bạn đã chọn</p>
          </div>
          <div className={styles.btn_btn}>
            <button className={`${styles.del} ${styles.btn}`}>Xóa</button>
            <Management checkbutton={checkbutton} />
          </div>
        </div>
      </Modal>
    </>
  );
}
