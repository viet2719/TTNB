"use client";
import { useState } from "react";
import AddressWork from "./address";
import styles from "./address.module.css";
import { Image } from "antd";
import Bacham from "./bacham";
import Tongquannhanvien from "@/components/viet_components/Modal/Nhanvien/Tongquannhanvien";

const Tongquan = () => {
  const [cty, setCty] = useState(false);
  const [isPastExperience, setIsPastExperience] = useState(false);
  const [roles, setRoles] = useState(false);
  return (
    <div>
      {roles ? (
        <Tongquannhanvien />
      ) : (
        <div>
          {cty ? (
            <div className={styles.overview}>
              <AddressWork />
            </div>
          ) : (
            <div className={styles.overview}>
              <div className={styles.company_cty}>
                <div className={styles.noilamviec}>
                  <Image
                    src={"/img/noi-lam-viec-icon.svg"}
                    alt="anh-loi"
                    preview={false}
                  />
                  <div className={styles.divcty}>
                    <div className={styles.cty}>
                      {isPastExperience ? "Từng làm việc tại" : "Làm việc tại"}
                      <span className={styles.company_name}>dgsdgg</span>
                    </div>
                    <span className={styles.mota}>dgdfgdf</span>
                  </div>
                  <p className={styles.chedo}>Công khai</p>
                  <div className={`${styles.dot}`}>
                    <Bacham />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Tongquan;
