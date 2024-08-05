import React from "react";
import { Image, Button, Form, Space, Input, Popover } from "antd";
import styles from "./opinion.module.css";
import { MinusCircleOutlined } from "@ant-design/icons";

const onFinish = (values) => {
   console.log("Received values of form:", values);
};
const Opinion = ({ isOpinionVisible }) => {
   const content = (
      <div>
         <div className={styles.space_item}>
            <input type="checkbox" />
            <p>Cho phép mọi người chọn nhiều câu trả lời</p>
         </div>
         <div className={styles.space_item}>
            <input type="checkbox" />
            <p>Cho phép mọi người chọn nhiều câu trả lời</p>
         </div>
      </div>
   );
   return (
      <div className={`${styles.uploadFile} ${isOpinionVisible ? styles.visible : ""}`}>
         <div className={styles.uploadFileItem}>
            <p>Thêm cuộc thăm dò ý kiến</p>
            <div className={styles.opinion}>
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
                                    <Input className={`thuc_input`} placeholder="Vui lòng nhập lựa chọn"></Input>
                                    <MinusCircleOutlined onClick={() => remove(name)} className={`thuc_icon`} />
                                 </div>
                              </Space>
                           ))}
                           <div className={styles.uploadFileItemIcon}>
                              <Button className={`thuc_btn_full`} onClick={() => add()}>
                                 + Thêm lựa chọn
                              </Button>
                              <div className={styles.img}>
                                 <Popover content={content} placement="bottomRight" trigger="click">
                                    <Image src="/img/group/setting.svg" alt="" preview={false} />
                                 </Popover>
                              </div>
                           </div>
                        </>
                     )}
                  </Form.List>
               </Form>
            </div>
         </div>
      </div>
   );
};
export default Opinion;
