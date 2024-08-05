import AddDocumentModal from "@/components/dat/Modal/quantritrithuc/AddDocument/AddDocumentModal";
import DeleteDocumentModal from "@/components/dat/Modal/quantritrithuc/DeleteDocumentModal/DeleteDocumentModal";
import EditDocumentModal from "@/components/dat/Modal/quantritrithuc/EditDocumentModal/EditDocumentModal";
import ExchangeQuestionModal from "@/components/dat/Modal/quantritrithuc/ExchangeQuestionModal/ModalExchangeQuestion";
import SideBar from "@/components/header/sidebar/sidebar";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Menu, Image, Button, Popover, Dropdown, MenuProps } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./index.module.scss";
import Head from "next/head";
import SideBarNew from "@/components/header/sidebarNew/sidebarNew";
const SelectOptions = [
  {
    key: "1",
    value: "Wiki",
    img: "/img/QTTT/wiki.png",
  },
  {
    key: "2",
    value: "Trao đổi - Đặt câu hỏi",
    img: "/img/QTTT/traodoicauhoi.png",
  },
  {
    key: "3",
    value: "Câu hỏi của tôi",
    img: "/img/QTTT/cauhoicuatoi.png",
  },
];

const DocumentData = [
  {
    id: "1",
    name: "Tài liệu 1",
    author: "Tác giả 1",
    createDate: "01/10/2023",
    field: "Lĩnh vực 1",
    fileName: "file1.pdf",
    imageURL: "/img/QTTT/anhbiasach1.png",
  },
  {
    id: "2",
    name: "Tài liệu 2",
    author: "Tác giả 2",
    createDate: "02/10/2023",
    field: "Lĩnh vực 2",
    fileName: "file2.pdf",
    imageURL: "/img/QTTT/anhbiasach2.png",
  },
];
interface SelectOptions {
  key: string;
  value: string;
  img: string;
}
export default function QTTT() {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SelectOptions[0]);
  const [isModalAddDocumentOpen, setIsModalAddDocumentOpen] = useState(false);
  const [isExchangeQuestionModalOpen, setIsExchangeQuestionModalOpen] =
    useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [isDeleteDocumentModalOpen, setIsDeleteDocumentModalOpen] =
    useState(false);
  const [isEditDocumentModalOpen, setIsEditDocumentModalOpen] = useState(false);

  const handleOpenDeleteDocumentModal = () => {
    setIsDeleteDocumentModalOpen(true);
  };

  const handleOpenEditDocumentModal = () => {
    console.log("Edit Document Modal should open now");
    setIsEditDocumentModalOpen(true);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleOpenExchangeQuestionModal = () => {
    setIsExchangeQuestionModalOpen(true);
  };

  const handleCloseExchangeQuestionModal = () => {
    setIsExchangeQuestionModalOpen(false);
  };

  const handleOpenModalAddDocument = () => {
    setIsModalAddDocumentOpen(true);
  };

  const handleCloseModalAddDocument = () => {
    setIsModalAddDocumentOpen(false);
  };
  const handleMouseEnter = () => {
    setSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubMenuOpen(false);
  };

  const handleMenuClick = (option: any) => {
    setSelectedOption(option);
    setSubMenuOpen(false);

    if (option.key === "1") {
      router.push("/quantritrithuc/wiki");
    }
    if (option.key === "2") {
      router.push("/quantritrithuc/traodoicauhoi");
    }
    if (option.key === "3") {
      router.push("/quantritrithuc/traodoicauhoi");
    }
  };

  const remainingOptions = SelectOptions.filter(
    (option) => option.key !== selectedOption.key
  );

  const handleDownloadFile = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div
          className={`${styles.popoverItem} popoverItem flex`}
          onClick={() => handleDownloadFile("/path/to/your/file.pdf")} //đường dẫn file pdf để tải xuống
        >
          <Image src="/img/QTTT/option1.png" alt="anh1" preview={false} />
          <p className={styles.popoverItemText}>Tải xuống</p>
        </div>
      ),
    },

    {
      key: '2',
      label: (
        <div
          className={`${styles.popoverItem} popoverItem flex`}
          onClick={handleOpenEditDocumentModal}
        >
          <Image src="/img/QTTT/option2.png" alt="anh1" preview={false} />
          <p className={styles.popoverItemText}>Chỉnh sửa thông tin tài liệu</p>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          className={`${styles.popoverItem} popoverItem flex`}
          onClick={handleOpenExchangeQuestionModal}
        >
          <Image src="/img/QTTT/option3.png" alt="anh1" preview={false} />
          <p className={styles.popoverItemText}>Trao đổi - đặt câu hỏi</p>
        </div>
      ),
    },

    {
      key: '4',
      label: (
        <div
          className={`${styles.popoverItem} popoverItem flex`}
          onClick={handleOpenDeleteDocumentModal}
        >
          <Image src="/img/QTTT/option4.png" alt="anh1" preview={false} />
          <p className={styles.popoverItemText}>Xóa thông tin tài liệu</p>
        </div>
      ),
    },
  ];
  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <div>
      <Head>
        <title>Wiki</title>
      </Head>
      <div className={`${styles.QTTTContainer} QTTTContainer flex`}>
        <div className={`${styles.sidebar}`}>
          <SideBarNew closePopover={closePopover} />
        </div>
        <div className={`${styles.subSidebar}`}></div>
        <div className={`${styles.QTTTContent} QTTTContent`}>
          <div className={`${styles.QTTTContentHeader} QTTTContentHeader flex`}>
            <div className={`${styles.QTTTSearchInput} QTTTSearchInput `}>
              <Input
                placeholder="Tìm kiếm sách"
                suffix={<SearchOutlined rev={undefined} />}
                className={styles.searchInput}
                size="large"
              />
            </div>
            <div className={styles.contentRightContainer}>
              <div
                className={`${styles.QTTTcontentRight} QTTTcontentRight`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <div className={`${styles.selectedOption} cursor-pointer`}>
                    <Image
                      src={selectedOption.img}
                      alt={selectedOption.value}
                      preview={false}
                    />
                    <span className={`${styles.optionText} cursor-pointer`}>
                      {selectedOption.value}
                    </span>
                  </div>
                  <Menu
                    style={{ display: subMenuOpen ? "block" : "none" }}
                    onClick={(e) =>
                      handleMenuClick(
                        remainingOptions.find((option) => option.key === e.key)
                      )
                    }
                  >
                    {remainingOptions.map((option) => (
                      <Menu.Item key={option.key}>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={option.img}
                            alt={option.value}
                            preview={false}
                          />
                          <span className={styles.optionText}>
                            {option.value}
                          </span>
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.QTTTButtonAdd} QTTTButtonAdd flex flex-end `}
          >
            <Button
              className={styles.themtailieuButton}
              size="large"
              onClick={handleOpenModalAddDocument}
            >
              <Image
                src="/img/QTTT/themtailieu.png"
                alt="themtailieu"
                preview={false}
              />
              <span className={styles.themtailieuButtonText}>
                Thêm tài liệu
              </span>
            </Button>
          </div>

          <div className={`${styles.QTTTContentBody} QTTTContentBody`}>
            <div
              className={`${styles.QTTTContentBodyListItem} QTTTContentBodyListItem`}
            >
              {DocumentData.map((document) => (
                <div
                  className={`${styles.QTTTContentBodyItem} QTTTContentBodyItem `}
                  key={document.id}
                >
                  <div
                    className={`${styles.QTTTContentBodyItemImg} QTTTContentBodyItemImg`}
                  >
                    <Image
                      src="/img/QTTT/anhbiasach.png"
                      alt="anh1"
                      preview={false}
                      className={styles.anhbia}
                      style={{
                        width: "107%",
                        marginLeft: "-1%",
                      }}
                    />
                  </div>
                  <div
                    className={`${styles.QTTTContentBodyItemInfo} QTTTContentBodyItemInfo`}
                  >
                    <div className="flex flex-space-between ">
                      <p>
                        Tên tài liệu :
                        <span className={styles.QTTTBoldText}>
                          {" "}
                          {document.name}
                        </span>
                      </p>

                      <Dropdown
                        menu={{ items }}
                        placement="bottomRight"
                        trigger={["click"]}
                      >
                        <Image
                          src="/img/QTTT/3cham.png"
                          alt="anh1"
                          preview={false}
                          className="cursor-pointer"
                          onClick={() => { }}
                        />
                      </Dropdown>
                    </div>
                    <p>
                      Tác giả :
                      <span className={styles.QTTTBoldText}>
                        {" "}
                        {document.author}
                      </span>
                    </p>
                    <p>
                      Ngày tạo :
                      <span className={styles.QTTTBoldText}>
                        {" "}
                        {document.createDate}
                      </span>
                    </p>
                    <p>
                      Lĩnh vực đề cập :
                      <span className={styles.QTTTBoldText}>
                        {" "}
                        {document.field}
                      </span>
                    </p>
                    <a
                      className={`${styles.QTTTBoldText} ${styles.QTTTDowloadFile}`}
                    >
                      {" "}
                      {document.fileName}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AddDocumentModal
          open={isModalAddDocumentOpen}
          onClose={handleCloseModalAddDocument}
          onCreate={handleCloseModalAddDocument}
        />
        <ExchangeQuestionModal
          open={isExchangeQuestionModalOpen}
          onClose={handleCloseExchangeQuestionModal}
        />
        <EditDocumentModal
          open={isEditDocumentModalOpen}
          onClose={() => setIsEditDocumentModalOpen(false)}
        />

        <DeleteDocumentModal
          open={isDeleteDocumentModalOpen}
          onClose={() => setIsDeleteDocumentModalOpen(false)}
        />
      </div>
    </div>
  );
}
