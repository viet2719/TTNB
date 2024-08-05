import React, { useState } from "react";
import styles from "./Intro.module.scss";
import { Image } from "antd";
import My_info from "@/components/viet_components/Modal/Contact_Info/My_info";
import Special from "@/components/viet_components/Modal/Contact_Info/Special";
import Quote from "@/components/viet_components/Modal/Contact_Info/Quote";

export default function Details_about_you() {
  const [about, setAbout] = useState(false);
  const [modal, setModal] = useState(false);
  const [dnmodal, setDnModal] = useState("d");
  const [special, setSpecial] = useState(false);
  const [dnspecial, setDnSpecial] = useState("ff");
  const [qoute, setQoute] = useState(false);
  const [dnqoute, setDnQoute] = useState("sd");

  const showModal = () => {
    setModal(true);
  };
  const showSpecial = () => {
    setSpecial(true);
  };
  const showQoute = () => {
    setQoute(true);
  };

  return (
    <div className={styles.overview}>
      <h4>Giới thiệu về công ty</h4>
      {!dnmodal ? (
        <div className={styles.add_family} onClick={() => setModal(true)}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm giới thiệu
        </div>
      ) : (
        <div className={styles.item}>
          <p className={styles.subitem1}>
            Giới thiệu về bản thân:&ensp;
            <span className={styles.subsub}>{dnmodal}</span>
          </p>
          <p className={styles.subitem2}>công khai</p>
          <div className={styles.subitem3}>
            <Image
              alt=""
              src={"/img/chinh-sua.svg"}
              onClick={showModal}
              preview={false}
            />
          </div>
        </div>
      )}

      {/* Biệt danh */}
      <h4>Tên gọi khác</h4>

      {!dnspecial ? (
        <div className={styles.add_family} onClick={() => setSpecial(true)}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm biệt danh, tên thường gọi...
        </div>
      ) : (
        <div className={styles.item}>
          <p className={styles.subitem1}>
            Biệt danh:&ensp; <span className={styles.subsub}>{dnspecial}</span>
          </p>
          <p className={styles.subitem2}>công khai</p>
          <div className={styles.subitem3}>
            <Image
              alt=""
              src={"/img/chinh-sua.svg"}
              onClick={showSpecial}
              preview={false}
            />
          </div>
        </div>
      )}
      {/* trịch dẫn yêu thích */}
      <h4>Trích dẫn yêu thích</h4>

      {!dnqoute ? (
        <div className={styles.add_family} onClick={() => setQoute(true)}>
          <Image
            alt="anh-loi"
            src={"/img/nv_add-circle_blue.svg"}
            preview={false}
          />
          Thêm trích dẫn yêu thích của công ty
        </div>
      ) : (
        <div className={styles.item}>
          <p className={styles.subitem1}>
            Trích dẫn yêu thích:&ensp;{" "}
            <span className={styles.subsub}>{dnqoute}</span>
          </p>
          <p className={styles.subitem2}>công khai</p>
          <div className={styles.subitem3}>
            <Image
              alt=""
              src={"/img/chinh-sua.svg"}
              onClick={() => setQoute(true)}
              preview={false}
            />
          </div>
        </div>
      )}
      {qoute && <Quote qoute={qoute} setQoute={setQoute} />}
      {modal && <My_info modal={modal} setModal={setModal} />}
      {special && <Special special={special} setSpecial={setSpecial} />}
    </div>
  );
}
