import SideBar from "@/components/header/sidebar/sidebar";
import React, { useState } from "react";
import { Button, Image, Input, Modal, Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./index.module.scss";
import { LeftOutlined, SearchOutlined } from "@ant-design/icons";
import ContentTab1 from "@/components/dat/dulieudaxoa/ContentTab1";
import ContentTab2 from "@/components/dat/dulieudaxoa/ContentTab2";
import { useRouter } from "next/router";
import { SelectedItemsProvider } from "@/components/dat/dulieudaxoa/Context";
import Head from "next/head";
import SideBarNew from "@/components/header/sidebarNew/sidebarNew";

export default function TTNB() {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState("1");
  const [selectedItemKey, setSelectedItemKey] = useState<string | null>(null);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalRestoreOpen, setIsModalRestoreOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectAllItems, setSelectAllItems] = useState(false);
  const [showSelectAllButton, setShowSelectAllButton] = useState(false);
  const [showSelectAllText, setShowSelectAllText] = useState("Bỏ chọn tất cả");

  const handleSelectAllItems = () => {
    setShowSelectAllButton(!showSelectAllButton);
    setSelectAllItems(!selectAllItems);

    if (showSelectAllButton) {
      setShowSelectAllText("Chọn tất cả");
    } else {
      setShowSelectAllText("Bỏ chọn tất cả");
    }
  };

  const showRestoreModal = () => {
    setSelectedAction("Khôi phục");
    setIsModalRestoreOpen(true);
  };

  const showDeleteModal = () => {
    setSelectedAction("Xóa");
    setIsModalDeleteOpen(true);
  };

  const handleRestoreModalOk = () => {
    setIsModalRestoreOpen(false);
  };

  const handleRestoreModalCancel = () => {
    setIsModalRestoreOpen(false);
  };

  const handleDeleteModalOk = () => {
    setIsModalDeleteOpen(false);
  };

  const handleDeleteModalCancel = () => {
    setIsModalDeleteOpen(false);
  };

  const onChange = (key: string) => {
    setActiveTabs(key);
  };

  const RenderTab1 = () => {
    const isActiveTab = activeTabs === "1";
    return (
      <Image
        src={`/img/dulieudaxoa/tab1-${isActiveTab ? "xanh" : "xam"}.svg`}
        alt="tab1"
        width={22}
        height={22}
        preview={false}
      />
    );
  };
  const RenderTab2 = () => {
    const isActiveTab = activeTabs === "2";
    return (
      <Image
        src={`/img/dulieudaxoa/tab2-${isActiveTab ? "xanh" : "xam"}.svg`}
        alt="tab2"
        width={22}
        height={22}
        preview={false}
      />
    );
  };
  const [showPopover, setShowPopover] = useState(false);

  const closePopover = () => {
    setShowPopover(false);
  };
  return (
    <div>
      <Head>
        <title>Quan lý dữ liệu | Văn hóa doanh nghiệp</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="flex containerTTNB">
        <div className={`${styles.sidebar}`}>
          <SideBarNew closePopover={closePopover} />
        </div>

        <div className={`${styles.sidebarContent}`}></div>

        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            onClick={() => router.back()}
            className={`${styles.backWrapper} flex cursor-pointer`}
          >
            <LeftOutlined rev={undefined} />
            <p className={styles.back}>Văn hóa doanh nghiệp</p>
          </div>

          <div id="TableDeleteDataDetail" className={styles.container}>
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              tabBarExtraContent={
                <div className={styles.position}>
                  <div className={styles.btnGroup}>
                    {!showSelectAllButton && (
                      <div className={styles.btn}>
                        <Button block onClick={handleSelectAllItems}>
                          Chọn tất cả
                        </Button>
                      </div>
                    )}
                    {showSelectAllButton && (
                      <div className={styles.btn}>
                        <Button block onClick={showRestoreModal}>
                          Khôi phục
                        </Button>
                      </div>
                    )}
                    {showSelectAllButton && (
                      <div className={styles.btn}>
                        <Button block onClick={showDeleteModal}>
                          Xóa
                        </Button>
                      </div>
                    )}
                    {showSelectAllButton && (
                      <div className={styles.btn}>
                        <Button
                          style={{
                            padding: 0,
                          }}
                          block
                          onClick={handleSelectAllItems}
                        >
                          {showSelectAllText}
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className={styles.searchWrapper}>
                    <Input
                      placeholder="Tìm kiếm"
                      size="large"
                      className={styles.search}
                      suffix={
                        <SearchOutlined
                          className="cursor-pointer"
                          rev={"xxx"}
                        />
                      }
                    />
                  </div>
                </div>
              }
              items={[
                {
                  key: "1",
                  label: <RenderTab1 />,
                  active: activeTabs === "1",
                  children: (
                    <ContentTab1
                      selectAllItems={selectAllItems}
                      setSelectAllItems={setSelectAllItems}
                      selectedItemKey={selectedItemKey}
                      setSelectedItemKey={setSelectedItemKey}
                    />
                  ),
                },
                {
                  key: "2",
                  label: <RenderTab2 />,
                  active: activeTabs === "2",
                  children: (
                    <ContentTab2
                      selectAllItems={selectAllItems}
                      setSelectAllItems={setSelectAllItems}
                      selectedItemKey={selectedItemKey}
                      setSelectedItemKey={setSelectedItemKey}
                    />
                  ),
                },
              ]}
              className={`${styles.tabTTNB} tabTTNB`}
            />
          </div>
        </div>
        <Modal
          title={selectedAction}
          open={isModalRestoreOpen}
          onOk={handleRestoreModalOk}
          onCancel={handleRestoreModalCancel}
          footer={null}
          className={`${styles.modalRestore} ttnbModalRestore`}
        >
          <p className={styles.modalRestoreContent}>
            Bạn có chắc muốn khôi phục
            <span
              style={{
                fontWeight: "bold",
                margin: "0 5px",
              }}
            >
              Tài liệu ABC
            </span>
            thông tin về tài liệu sẽ được khôi phục lại vị trí ban đầu?
          </p>

          <div className={styles.modalRestoreBtn}>
            <Button
              size="large"
              onClick={handleRestoreModalCancel}
              className={styles.modalRestoreBtnCancel}
            >
              Hủy
            </Button>
            <Button
              size="large"
              onClick={handleRestoreModalOk}
              className={styles.modalRestoreBtnOk}
            >
              Khôi phục
            </Button>
          </div>
        </Modal>

        <Modal
          title={selectedAction}
          open={isModalDeleteOpen}
          onOk={handleDeleteModalOk}
          footer={null}
          onCancel={handleDeleteModalCancel}
          className={`${styles.modalDelete} ttnbModalDelete`}
        >
          <p className={styles.modalDeleteContent}>
            Bạn có chắc muốn xóa vĩnh viễn? Tất cả nội dung sẽ
            <span
              style={{
                fontWeight: "bold",
                margin: "0 5px",
              }}
            >
              không thể khôi phục lại.
            </span>
          </p>

          <div className={styles.modalDeleteBtn}>
            <Button
              size="large"
              onClick={handleDeleteModalCancel}
              className={styles.modalDeleteBtnCancel}
            >
              Hủy
            </Button>
            <Button
              size="large"
              onClick={handleDeleteModalOk}
              className={styles.modalDeleteBtnOk}
            >
              Xóa
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
