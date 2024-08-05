import styles from "./Intro.module.scss";
import Languale from "../Modal/Contact_Info/Language";
import Opinion from "../Modal/Contact_Info/Opinion";
import Gender from "../Modal/Contact_Info/Gender";
import DateOfBirth from "../Modal/Contact_Info/Date_of_birth";
import { useEffect, useState } from "react";
import { Image } from "antd";
import x from "./Intro.module.scss";
const TTCB = () => {
  const [birth, setBirth] = useState("");
  // Callback function to update birth date
  const updateBirthDate = (newBirthDate: any) => {
    setBirth(newBirthDate);
  };
  const [language, setLanguage] = useState(false);
  const [dnlanguage, setDnLanguage] = useState("ss");
  const [opinion, setOpinion] = useState(false);
  const [dnopinion, setDnOpinion] = useState("d");
  const [desciption, seDescription] = useState("ccd");
  const [gender, setGender] = useState(false);
  const [dngender, setDnGender] = useState("d");
  const [role, setRole] = useState(false);

  return (
    <>
      {/* thông tin cơ bản */}
      <div>
        <h2 className={styles.title}>Thông tin cơ bản</h2>
        {/* NGÔN NGỮ */}

        {!dnlanguage ? (
          <div className={x.add_family} onClick={() => setLanguage(true)}>
            <Image
              alt="anh-loi"
              src={"/img/nv_add-circle_blue.svg"}
              preview={false}
            />
            Thêm ngôn ngữ
          </div>
        ) : (
          <div className={x.item}>
            <Image alt="" src={"/img/nv_messages.svg"} />
            <p className={x.subitem1}>
              Ngôn ngữ:&ensp;
              <span className={x.subsub}>{dnlanguage}</span>
            </p>
            <p className={x.subitem2}>công khai</p>
            <div className={x.subitem3}>
              <Image
                alt=""
                src={"/img/chinh-sua.svg"}
                onClick={() => setLanguage(true)}
                preview={false}
              />
            </div>
          </div>
        )}

        {/* QUAN ĐIỂM TÔN GIÁO */}

        {!dnopinion ? (
          <div className={x.add_family} onClick={() => setOpinion(true)}>
            <Image
              alt="anh-loi"
              src={"/img/nv_add-circle_blue.svg"}
              preview={false}
            />
            Thêm quan điểm tôn giáo
          </div>
        ) : (
          <div className={x.item}>
            <p className={x.subitem1}>
              Quan điểm tôn giáo:&ensp;
              <span className={x.subsub}>{dnopinion}</span>
              <br />
              <span className={x.subsub}>{desciption}</span>
            </p>
            <p className={x.subitem2}>công khai</p>
            <div className={x.subitem3}>
              <Image
                alt=""
                src={"/img/chinh-sua.svg"}
                onClick={() => setOpinion(true)}
                preview={false}
              />
            </div>
          </div>
        )}

        {/* GIỚI TÍNH */}

        {!dngender ? (
          <div className={x.add_family} onClick={() => setGender(true)}>
            <Image
              alt="anh-loi"
              src={"/img/nv_add-circle_blue.svg"}
              preview={false}
            />
            Giới tính
          </div>
        ) : (
          <div className={x.item}>
            <Image alt="" src={"/img/gioi-tinh.svg"} />
            <p className={x.subitem1}>
              Giới tính:&ensp; <span className={styles.subsub}>adasdas</span>
            </p>
            <p className={x.subitem2}>công khai</p>
            <div className={x.subitem3}>
              <Image
                alt=""
                src={"/img/chinh-sua.svg"}
                onClick={() => setGender(true)}
                preview={false}
              />
            </div>
          </div>
        )}
        {/* NGÀY SINH */}
        <div className={styles.item}>
          <Image alt="" src={"/img/sinh-nhat.svg"} />
          <p className={styles.subitem1}>
            Ngày sinh:&ensp; <span className={styles.subsub}>{birth}</span>
          </p>
          <p className={styles.subitem2}>công khai</p>
          <div className={styles.subitem3}>
            <DateOfBirth onBirthDateChange={updateBirthDate} />
          </div>
        </div>
        {language && <Languale language={language} setLanguage={setLanguage} />}
        {opinion && <Opinion opinion={opinion} setOpinion={setOpinion} />}
        {gender && <Gender gender={gender} setGender={setGender} />}
      </div>
    </>
  );
};
export default TTCB;
