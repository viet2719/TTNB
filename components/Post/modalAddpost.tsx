import React, { useEffect, useRef, useState } from "react";
import { Modal, Image, Select, SelectProps } from "antd";
import styles from "./modaladdpost.module.scss";

const ModalAddPost = (props: any) => {
  const { setOpenModal, modal, showInput, setShowInput } = props;

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleChange = (value: string | string[]) => {};
  //   const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    const newFiles = [];

    // Lặp qua danh sách tệp và kiểm tra từng tệp
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const isImage = file.type.startsWith("image/");
      // Kiểm tra nếu là tệp hình ảnh (có thể điều chỉnh loại tệp tại đây)
      if (file.type.startsWith("image/")) {
        // Nếu là ảnh, thêm thông tin ảnh vào mảng newFiles
        newFiles.push({
          file: file,
          isImage: true,
        });
      } else {
        // Nếu không phải ảnh, thêm thông tin cơ bản vào mảng newFiles
        newFiles.push({
          file: file,
          isImage: false,
          name: file.name,
          size: file.size, // Dung lượng tệp
          formattedDateTime: file.formattedDateTime, // Thời gian sửa đổi
        });
      }
    }
    // Xử lý tệp ở đây, ví dụ: lưu vào state hoặc gửi lên máy chủ
    setUploadedFiles([...uploadedFiles, ...files]);
  };
  const handleDeleteClick = () => {
    const newImages = uploadedFiles.filter(
      (image) => image.name !== "/img/TTNB/show_del_file.svg"
    );

    // Cập nhật state images
    setUploadedFiles(newImages);
  };
  const hasImageData = uploadedFiles && uploadedFiles.length > 0;
  return (
    <>
      <Modal
        title="Tải lên ảnh/video/tệp"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="addressbacham"
      >
        <div>
          <div className={styles.modal_top_post}>
            <div>
              <Image
                preview={false}
                alt="phanh"
                src="/img/c.png"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.text_modal_top}>
              <p className={styles.text1}>Công ty Cổ phần Thanh toán Hưng Hà</p>
              <p className={styles.text2}>Công ty Cổ phần Thanh toán Hưng Hà</p>
            </div>
          </div>
          <form action="">
            <input
              className={styles.textarea}
              placeholder="Nhập công việc với các đồng nghiệp của bạn"
            ></input>
            {!hasImageData ? (
              <div className={styles.view_img_item1}>
                <div className={styles.view_img_item2}>
                  <label className={styles.label} htmlFor="add/video/file">
                    <Image
                      alt="phanh"
                      src="/img/TTNB/open_file_nf.svg"
                      preview={false}
                      width={40}
                      height={40}
                    />
                    <p>Thêm ảnh/video/tệp</p>
                  </label>
                </div>
              </div>
            ) : (
              <div className={styles.show_files}>
                {uploadedFiles.map((file, index) => (
                  <div className={styles.show} key={index}>
                    <div className={styles.files}>
                      <div className={styles.file_name}>
                        <p>{file.name}</p>
                        <Image
                          className="xoas"
                          alt="phanh"
                          src="/img/TTNB/show_del_file.svg"
                          preview={false}
                        />
                      </div>
                      <div className={styles.weight}>
                        <p>{file.size} KB</p>
                        <p>ngày giờ</p>
                      </div>
                    </div>

                    <div className="image_posst">
                      <div className="img_delete">
                        <Image
                          onClick={handleDeleteClick}
                          className="xoas"
                          alt="phanh"
                          src="/img/TTNB/show_del_file.svg"
                          preview={false}
                        />
                      </div>

                      <Image
                        className="imge"
                        src={URL.createObjectURL(file)}
                        alt="phanh"
                        preview={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {showInput && (
              <div className={styles.select_fr}>
                <Select
                  mode="multiple"
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  options={options}
                />
              </div>
            )}

            <div className={styles.add_option_new_feed}>
              <p>Thêm vào bài viết</p>
              <div className={styles.option}>
                <label htmlFor="add/video/file" style={{ cursor: "pointer" }}>
                  <Image
                    width={24}
                    src="/img/TTNB/icon_anh.png"
                    preview={false}
                    alt=""
                  />
                </label>
                <div style={{ cursor: "pointer" }} onClick={handleShowInput}>
                  <Image
                    alt=""
                    width={24}
                    src="/img/TTNB/icon_nhac.png"
                    preview={false}
                  />
                </div>
                <label htmlFor="add/video/file" style={{ cursor: "pointer" }}>
                  <Image
                    alt=""
                    width={24}
                    src="/img/TTNB/up_file.svg"
                    preview={false}
                  />
                  <input
                    type="file"
                    id="add/video/file"
                    accept="image/*, video/*, .pdf, .doc" // Loại tệp được chấp nhận
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    hidden
                  />
                </label>
              </div>
            </div>
            <div className={styles.btn}>
              <button className={styles.huy} onClick={handleCancel}>
                Hủy
              </button>
              <button className={styles.dang} onClick={handleOk}>
                Đăng
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddPost;
