import { useEffect, useState } from "react";

import styles from "@/components/common/Modal/AddressWork/address.module.css";
import { Image } from "antd";

import Themnoilamviec from "@/components/viet_components/Modal/Nhanvien/Themnoilamviec";
import DropNoiLamViec from "@/components/viet_components/Modal/Nhanvien/DropNoiLamViec";
import School from "./School";
import DropSchool from "./DropSchool";
import City from "./ThanhPhoHienTai";
import EditCity from "./EditCity";

function Tongquannhanvien() {
  const [isPastExperience, setIsPastExperience] = useState(false);
  const [addnhanvien, setAddNhanvien] = useState(false);
  const [nhanvien, setNhanvien] = useState(false);
  const handleClickAddressNhanvien = () => {
    setAddNhanvien(true);
  };
  const [school, setSchool] = useState(false);
  const [dataSchool, setDataSchool] = useState(false);
  const [city, setCity] = useState(false);
  const [datacity, setDataCity] = useState(false);
  return (
    <div>
      <div>
        {addnhanvien ? (
          <div className={styles.overview}>
            <p className={styles.item} onClick={() => setNhanvien(true)}>
              <Image
                width={24}
                height={25}
                alt="anh-loi"
                src={"/img/nv_add-circle_blue.svg"}
                preview={false}
              />
              Thêm nơi làm việc
            </p>
            {nhanvien && (
              <Themnoilamviec nhanvien={nhanvien} setNhanvien={setNhanvien} />
            )}
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
                  <p className={styles.cty}>
                    {isPastExperience ? "Từng làm việc tại" : "Làm việc tại"}
                    <span className={styles.company_name}>ggdg</span>
                  </p>
                  <span className={styles.mota}>gsg</span>
                </div>
                <p className={styles.chedo}>Công khai</p>
                <p className={`${styles.dot}`}>
                  <DropNoiLamViec
                    nhanvien={nhanvien}
                    setNhanvien={setNhanvien}
                  />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Thêm trường học */}
      <div className={styles.overview}>
        {dataSchool ? (
          <div>
            <p className={styles.item} onClick={() => setSchool(true)}>
              <Image
                width={24}
                height={25}
                alt="anh-loi"
                src={"/img/nv_add-circle_blue.svg"}
                preview={false}
              />
              Thêm trường học
            </p>
            {school && <School school={school} setSchool={setSchool} />}
          </div>
        ) : (
          <div className={styles.company_cty}>
            <div className={styles.noilamviec}>
              <Image src={"/img/tung-hoc.svg"} alt="anh-loi" preview={false} />
              <div className={styles.divcty}>
                <p className={styles.cty}>
                  Học tại:
                  <span className={styles.company_name}>ggdg</span>
                </p>
                <span className={styles.mota}>Tốt nghiệp năm</span>
                <span className={styles.mota}>2023-2023</span>
              </div>
              <p className={styles.chedo}>Công khai</p>
              <p className={`${styles.dot}`}>
                <DropSchool school={school} setSchool={setSchool} />
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Thanh pho hien tai */}
      <div className={styles.overview}>
        {datacity ? (
          <div>
            <p className={styles.item} onClick={() => setCity(true)}>
              <Image
                width={24}
                height={25}
                alt="anh-loi"
                src={"/img/nv_add-circle_blue.svg"}
                preview={false}
              />
              Thêm thành phố hiện tại
            </p>
            {city && <City city={city} setCity={setCity} />}
          </div>
        ) : (
          <div className={styles.company_cty}>
            <div className={styles.noilamviec}>
              <Image src={"/img/noi-song.svg"} alt="anh-loi" preview={false} />
              <div className={styles.divcty}>
                <p className={styles.cty}>
                  Sống tại:
                  <span className={styles.company_name}>ggdg</span>
                </p>
              </div>
              <p className={styles.chedo}>Công khai</p>
              <p className={`${styles.dot}`} onClick={() => setCity(true)}>
                <Image alt="" src={"/img/chinh-sua.svg"} preview={false} />
              </p>
              {city && <EditCity city={city} setCity={setCity} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tongquannhanvien;
