import React, { useState } from "react";
import styles from "./index.module.css";
import { Input, Image, Dropdown } from "antd";
import Drop from "../../../../../components/thuc_components/status/dropdown/dropOne/drop";
import DropTwo from "../../../../../components/thuc_components/status/dropdown/dropTwo/dropTwo";
import DropThree from "../../../../../components/thuc_components/status/dropdown/dropThree/dropThree";
import DropFour from "../../../../../components/thuc_components/status/dropdown/dropFour/dropFour";
import DropRemove from "../../../../../components/thuc_components/status/dropdown/dropOne/dropRemove";
const Member = () => {
   const [isInvited, setIsInvited] = useState(false);

   const handleButtonClick = () => {
      setIsInvited(!isInvited);
   };
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.left_content1}>
                  <h3>Thành viên (1)</h3>
                  <Input className={`thuc_input_full`} placeholder="Tìm kiếm thành viên "></Input>
               </div>
               <div className={styles.left_content2}>
                  <div className={styles.left_flex}>
                     <Image alt="" src="/img/group/mu3.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                     <div>
                        <p className={styles.p_bold}>Thức Đẹp Trai</p>
                        <p className={styles.p_green}>Quản trị viên</p>
                     </div>
                  </div>
                  <div>
                     <Drop />
                  </div>
               </div>

               <div className={styles.left_content3}>
                  <p className={styles.p_bold}>Quản trị viên kiểm duyệt</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                           <p className={styles.p_green}>Quản trị viên</p>
                        </div>
                     </div>
                     <div>
                        <DropRemove />
                     </div>
                  </div>
               </div>

               <div className={styles.left_content4}>
                  <p className={styles.p_bold}>Bạn bè</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                        <div>
                           <DropTwo />
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.left_content5}>
                  <p className={styles.p_bold}>Thành viên mới vào nhóm</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>
                        <div>
                           <DropTwo />
                        </div>
                     </div>
                  </div>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Thế Đạt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <button className={styles.btn_add} onClick={handleButtonClick}>
                              <Image alt="" src="/img/group/add_friend.svg" preview={false} />
                              {isInvited ? "Hủy lời mời" : "Thêm bạn bè"}
                           </button>
                        </div>
                        <div>
                           <DropTwo />
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.left_content6}>
                  <p className={styles.p_bold}>Đã mời</p>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Hoàng Việt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <Image alt="" src="/img/group/mess.svg" preview={false} />
                           <p>Gửi tin nhắn</p>
                        </div>

                        <div>
                           <DropThree />
                        </div>
                     </div>
                  </div>
                  <div className={styles.left_content3_chil}>
                     <div className={styles.left_flex}>
                        <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                        <div>
                           <p className={styles.p_bold}>Nguyễn Thế Đạt</p>
                        </div>
                     </div>
                     <div className={styles.left_flex}>
                        <div className={styles.left_fl2}>
                           <button className={styles.btn_add} onClick={handleButtonClick}>
                              <Image alt="" src="/img/group/add_friend.svg" preview={false} />
                              {isInvited ? "Hủy lời mời" : "Thêm bạn bè"}
                           </button>
                        </div>

                        <div>
                           <DropThree />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.right}>
               <p className={styles.p_bold}>Bị cấm (1)</p>
               <div className={styles.left_content3_chil}>
                  <div className={styles.left_flex}>
                     <Image alt="" src="/img/group/mu2.jpg" className={`img_border`} style={{ borderRadius: "50%" }} preview={false} />
                     <div>
                        <p className={styles.p_bold}>Nguyễn Thế Đạt</p>
                     </div>
                  </div>
                  <button className={styles.btn_ban}>Bỏ cấm</button>
               </div>
            </div>
         </div>
      </>
   );
};
export default Member;
