import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal, Image, Form, Button, Select, Input, Space, Switch, Dropdown } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import { MinusCircleOutlined } from "@ant-design/icons";
import Head from "next/head";
const Question = () => {
   const [isModalNewOpen, setIsModalNewOpen] = useState(false);
   const showModalNew = () => {
      setIsModalNewOpen(true);
   };
   const handleNewCancel = () => {
      setIsModalNewOpen(false);
   };
   const onFinish = (values) => {
      console.log("Received values of form:", values);
   };
   const [selectedOption, setSelectedOption] = useState("Câu trả lời tự do");
   const [isCheckboxOpen, setIsCheckboxOpen] = useState(false);
   const [isRadioOpen, setIsRadioOpen] = useState(false);
   const handleCheckboxOpen = () => {
      setIsCheckboxOpen(true);
      setIsRadioOpen(false);
   };
   const handleRadioOpen = () => {
      setIsCheckboxOpen(false);
      setIsRadioOpen(true);
   };
   const handleClose = () => {
      setIsCheckboxOpen(false);
      setIsRadioOpen(false);
   };
   const handleChange = (value) => {
      setSelectedOption(value);
      if (value === "Trắc nghiệm") {
         handleRadioOpen();
      }
      if (value === "Ô để đánh dấu") {
         handleCheckboxOpen();
      }
      if (value === "Câu trả lời tự do") {
         handleClose();
      }
   };
   const [reverse, setReverse] = useState(true);

   const items = [
      {
         key: "1",
         label: (
            <div className={styles.menu}>
               <div className={styles.right_menu_content}>
                  <LeftNav />
               </div>
            </div>
         ),
      },
   ];
   return (
      <>
         <div className={styles.right_none}>
            <div className={styles.right_menu}>
               <Dropdown
                  menu={{
                     items,
                  }}
                  placement="bottomRight"
                  trigger="click">
                  <Image src="/img/group/menuu.png" alt="icon" width={40} height={40} preview={false} />
               </Dropdown>
               <h2>Câu hỏi chọn thành viên</h2>
            </div>
         </div>
         <Head>
            <title>Câu hỏi chọn thành viên</title>
            <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
         </Head>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.header}>
                  <h2>Câu hỏi chọn thành viên</h2>
                  <Button className={`btn_ok`} onClick={showModalNew}>
                     Thêm câu hỏi
                  </Button>
               </div>
               <div className={styles.content}>
                  <div>
                     <p>Câu hỏi</p>
                     <h3>abc</h3>
                  </div>
                  <textarea placeholder="Viết câu trả lời" name="" id="" cols="10" rows="5" className={styles.textarea}></textarea>
                  <div className={styles.content_btn}>
                     <Button className={`thuc_btn_question_edit`}>Chỉnh sửa</Button>
                     <Button className={`thuc_btn_question_delete`}>Xóa</Button>
                  </div>
               </div>
               <div className={styles.content}>
                  <div>
                     <p>Câu hỏi</p>
                     <h3>Thức đẹp trai</h3>
                  </div>
                  <div className={styles.content_input}>
                     <Input className={`thuc_input_checkbox`} type="checkbox"></Input>
                     <p> Chính xác</p>
                  </div>

                  <div className={styles.content_btn}>
                     <Button className={`thuc_btn_question_edit`}>Chỉnh sửa</Button>
                     <Button className={`thuc_btn_question_delete`}>Xóa</Button>
                  </div>
               </div>
               <div className={styles.content}>
                  <div>
                     <p>Câu hỏi</p>
                     <h3>Thức đẹp trai</h3>
                  </div>
                  <div className={styles.content_input}>
                     <Input className={`thuc_input_checkbox`} type="radio"></Input>
                     <p> Chính xác</p>
                  </div>

                  <div className={styles.content_btn}>
                     <Button className={`thuc_btn_question_edit`}>Chỉnh sửa</Button>
                     <Button className={`thuc_btn_question_delete`}>Xóa</Button>
                  </div>
               </div>
               <div className={styles.bottom}>
                  <h3>Quy tắc nhóm</h3>
                  <div className={styles.bottom_flex}>
                     <p>Yêu cầu mọi người đồng ý với quy tắc nhóm.</p>
                     <Switch size="small" checked={reverse} onChange={setReverse} />
                  </div>
               </div>
               <div className={styles.impty}>
                  <div className={styles.right_error}>
                     <Image alt="/" src={"/img/group/error.svg"} preview={false} />
                     <h3>Câu hỏi chọn thành viên</h3>
                     <p>Đặt tối đa 3 câu hỏi chọn thành viên cho người muốn tham gia nhóm. Chỉ quản trị viên và người kiểm duyệt mới xem được câu trả lời.</p>
                     <Button className={`btn_ok`} onClick={showModalNew}>
                        Thêm câu hỏi
                     </Button>
                  </div>
                  <div>
                     <h3>Quy tắc nhóm</h3>
                     <div className={styles.bottom_flex}>
                        <p>Yêu cầu mọi người đồng ý với quy tắc nhóm.</p>
                        <Switch size="small" checked={reverse} onChange={setReverse} />
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <Modal className={`thuc_modal ${styles.thuc_pin}`} title="Câu hỏi" open={isModalNewOpen} onCancel={handleNewCancel} footer={null}>
                  <div className={styles.modal_container}>
                     <Select
                        defaultValue="Câu trả lời tự do"
                        style={{
                           width: 250,
                        }}
                        onChange={handleChange}
                        options={[
                           {
                              value: "Câu trả lời tự do",
                              label: "Câu trả lời tự do",
                           },
                           {
                              value: "Ô để đánh dấu",
                              label: "Ô để đánh dấu",
                           },
                           {
                              value: "Trắc nghiệm",
                              label: "Trắc nghiệm",
                           },
                        ]}
                     />

                     <textarea placeholder="Câu hỏi" name="" id="" cols="10" rows="5" className={styles.textarea}></textarea>
                     {isCheckboxOpen && (
                        <Form
                           className={`thuc_form`}
                           onFinish={onFinish}
                           style={{
                              width: "100%",
                           }}
                           autoComplete="off">
                           <Form.List name="users">
                              {(fields, { add, remove }) => (
                                 <>
                                    {fields.map(({ key, name, ...restField }) => (
                                       <Space
                                          className={`thuc_space`}
                                          key={key}
                                          style={{
                                             display: "flex",
                                             marginBottom: 8,
                                          }}
                                          align="baseline">
                                          <div className={styles.space_item}>
                                             <Input className={`thuc_input_checkbox`} type="checkbox"></Input>

                                             <Input className={`thuc_input_space`} placeholder="Nhập lựa chọn"></Input>
                                             <MinusCircleOutlined onClick={() => remove(name)} className={`thuc_icon`} />
                                          </div>
                                       </Space>
                                    ))}
                                    <div className={styles.uploadFileItemIcon}>
                                       <Button className={`thuc_btn_full`} onClick={() => add()}>
                                          + Thêm lựa chọn
                                       </Button>
                                    </div>
                                 </>
                              )}
                           </Form.List>
                        </Form>
                     )}
                     {isRadioOpen && (
                        <Form
                           className={`thuc_form`}
                           onFinish={onFinish}
                           style={{
                              width: "100%",
                           }}
                           autoComplete="off">
                           <Form.List name="users">
                              {(fields, { add, remove }) => (
                                 <>
                                    {fields.map(({ key, name, ...restField }) => (
                                       <Space
                                          className={`thuc_space`}
                                          key={key}
                                          style={{
                                             display: "flex",
                                             marginBottom: 8,
                                          }}
                                          align="baseline">
                                          <div className={styles.space_item}>
                                             <Input className={`thuc_input_checkbox`} type="radio"></Input>
                                             <Input className={`thuc_input_space`} placeholder="Nhập lựa chọn"></Input>
                                             <MinusCircleOutlined onClick={() => remove(name)} className={`thuc_icon`} />
                                          </div>
                                       </Space>
                                    ))}
                                    <div className={styles.uploadFileItemIcon}>
                                       <Button className={`thuc_btn_full`} onClick={() => add()}>
                                          + Thêm lựa chọn
                                       </Button>
                                    </div>
                                 </>
                              )}
                           </Form.List>
                        </Form>
                     )}
                     <div className={styles.btn}>
                        <Button className={`btn_cancer`} onClick={handleNewCancel}>
                           Hủy
                        </Button>
                        <Button className={`btn_ok`}>Lưu</Button>
                     </div>
                  </div>
               </Modal>
            </div>
         </div>
      </>
   );
};
export default Question;
