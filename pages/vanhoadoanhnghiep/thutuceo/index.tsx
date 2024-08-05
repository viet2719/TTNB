import ModalDeleteEmail from "@/components/dat/Modal/VHDN/ThuTuCeo/ModalDeleteEmail";
import ModalDetailEmail from "@/components/dat/Modal/VHDN/ThuTuCeo/ModalDetailEmail";
import { UploadOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Upload, Image, Button } from "antd";
import React, { useState } from "react";
import Vanhoadoanhnghiep from "..";
import styles from "./index.module.scss";

interface FormValues {
  subject: string;
  attachment: UploadFile[];
  emailContent: string;
  notificationMethod: string[];
}

interface UploadFile extends File {
  uid: string;
}

export default function Index() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [openModalDetailEmail, setOpenModalDetailEmail] = useState(false);
  const [openModalDeleteEmail, setOpenModalDeleteEmail] = useState(false);

  const handleOpenModalDetailEmail = () => {
    setOpenModalDetailEmail(true);
  };

  const handleCloseModalDetailEmail = () => {
    setOpenModalDetailEmail(false);
  };

  const handleOpenModalDeleteEmail = () => {
    setOpenModalDeleteEmail(true);
  };

  const handleCloseModalDeleteEmail = () => {
    setOpenModalDeleteEmail(false);
  };

  const onFinish = (values: FormValues) => {
    // Xử lý dữ liệu khi form được gửi đi
    console.log("Received values:", values);
  };

  const childrenContentLeft = (
    <div className={styles.thutuceoContainer}>
      <div className={styles.thutuceoContainerHeader}>
        <p className={styles.thutuceoContainerTitle}>Tạo thư mới từ CEO</p>
      </div>
      <div className={styles.thutuceoContainerContent}>
        <Form
          name="emailForm"
          onFinish={onFinish}
          className={styles.thutuceoContainerContentForm}
        >
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
          >
            <p className={styles.thutuceoContainerContentFormTitle}>Tiêu đề</p>
            <Input placeholder="Nhập tiêu đề" size="large" />
          </Form.Item>
          <Form.Item name="attachment">
            <p className={styles.thutuceoContainerContentFormTitle}>
              Chọn tệp đính kèm
            </p>
            <div className={styles.thutuceoContainerContentFormUpload}>
              <Upload
                fileList={fileList as any}
                beforeUpload={(file) => {
                  setFileList([...fileList, file]);
                  return false;
                }}
                onRemove={(file) => {
                  const updatedFileList = fileList.filter(
                    (item) => item !== file
                  );
                  setFileList(updatedFileList);
                }}
              >
                <Button
                  className={`${styles.UploadContainer} flex cursor-pointer flex-align-center`}
                >
                  <UploadOutlined rev={undefined} />
                  <p>Chọn tệp</p>
                </Button>
              </Upload>
            </div>
          </Form.Item>
          <Form.Item
            name="emailContent"
            rules={[{ required: true, message: "Vui lòng nhập nội dung thư!" }]}
          >
            <p className={styles.thutuceoContainerContentFormTitle}>
              Nội dung thư
            </p>
            <Input.TextArea placeholder="Nhập nội dung thư" />
          </Form.Item>
          <Form.Item name="notificationMethod">
            <p className={styles.thutuceoContainerContentFormTitle}>
              Hình thức thông báo đến nhân viên
            </p>
            <div
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Checkbox value="email">Gửi thông báo</Checkbox>
            </div>
            <div
              style={{
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Checkbox value="sms">Gửi thông qua email</Checkbox>
            </div>
          </Form.Item>
          <Form.Item
            className={styles.thutuceoContainerContentFormButton}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              className={styles.thutuceoContainerContentFormButtonSubmit}
            >
              Tạo mới
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
  const childrenContentRight = (
    <div className={styles.thutuceoContainerContentRight}>
      <div className={styles.thutuceoContainerContentRightHeader}>
        <p>DANH SÁCH THƯ</p>
      </div>
      <div className={styles.thutuceoContainerContentRightContent}>
        <div className={styles.thutuceoContainerContentRightContentItem}>
          <p
            className={styles.thutuceoContainerContentRightContentItemTitle}
            onClick={handleOpenModalDetailEmail}
          >
            THƯ GỬI NĂM MỚI ĐẾN TOÀN BỘ CÁC THÀNH VIÊN TRONG CÔNG TY
          </p>
          <div
            className={`${styles.thutuceoContainerContentRightContentItemUserContainer} flex flex-align-center`}
          >
            <p className={styles.thutuceoContainerContentRightContentItemUser}>
              Người cập nhật: Công ty Cổ phần Thanh toán Hưng Hà
            </p>
            <Image
              src="/img/VHDN/v_7.png"
              alt="anh"
              width={20}
              height={20}
              preview={false}
              className="cursor-pointer"
              onClick={handleOpenModalDeleteEmail}
            />
          </div>
          <div
            className={
              styles.thutuceoContainerContentRightContentItemTimeContainer
            }
          >
            <p className={styles.thutuceoContainerContentRightContentItemTime}>
              02:49 05.10.2023
            </p>
          </div>
        </div>
      </div>
      <ModalDetailEmail
        open={openModalDetailEmail}
        onClose={handleCloseModalDetailEmail}
        onConfirm={handleCloseModalDetailEmail}
      />
      <ModalDeleteEmail
        open={openModalDeleteEmail}
        onClose={handleCloseModalDeleteEmail}
        onConfirm={handleCloseModalDeleteEmail}
      />
    </div>
  );
  return (
    <Vanhoadoanhnghiep
      childrenContentLeft={childrenContentLeft}
      childrenContentRight={childrenContentRight}
      keyduocchon="1"
    />
  );
}
