import React, { useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import Update_address_on_system from "@/components/viet_components/Modal/Contact_Info/Update_address_on_system";
import PhoneNumber from "@/components/viet_components/Modal/Contact_Info/PhoneNumber";
import UpdateEmail from "@/components/viet_components/Modal/Contact_Info/UpdateEmail";
import TTCB from "@/components/viet_components/Intro/TTCB";
import { Image } from "antd";

export default function InfoBasic() {
  const [email, setEmail] = useState("sđ");
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className={styles.overview}>
        {/* Thông tin liên hệ */}
        <div>
          <h2 className={styles.title}>Thông tin liên hệ</h2>
          <div className={styles.item}>
            <Image alt="" src={"/img/carbon_location-filled.svg"} />
            <p className={styles.subitem1}>
              Địa chỉ:&ensp; <span className={styles.subsub}>adasdas</span>
            </p>
            <p className={styles.subitem2}>công khai</p>
            <div className={styles.subitem3}>
              <Update_address_on_system />
            </div>
          </div>
          <div className={styles.item}>
            <Image alt="" src={"/img/so-dien-thoai.svg"} />
            <p className={styles.subitem1}>
              Số điện thoại: &ensp;<span className={styles.subsub}>dâsd</span>
            </p>
            <p className={styles.subitem2}>công khai</p>
            <div className={styles.subitem3}>
              <PhoneNumber />
            </div>
          </div>

          {display ? (
            <div className={styles.item}>
              <Image alt="" src={"/img/zmdi_email.svg"} />

              <p className={styles.subitem1}>
                Email: &ensp;<span className={styles.subsub}></span>
              </p>
              <p className={styles.subitem2}>công khai</p>
              <div className={styles.subitem3}>
                <UpdateEmail />
              </div>
            </div>
          ) : null}
        </div>
        {/* thông tin cơ bản */}
        <TTCB />
      </div>
    </div>
  );
}
