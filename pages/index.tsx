import ContactHome from "@/components/homepage/ContactHome/contact";
import ContentHome from "@/components/homepage/ContentHome/contentHome";
import NavbarHome from "@/components/homepage/NavBarHome/NavBarHome";
import { Col, Row } from "antd";
import Head from "next/head";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Truyền thông nội bộ </title>
        <meta name="keywords" content="coders" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="Home">
        <div className="container">
          <Row className={styles.homeRow}>
            <Col span={6} className={styles.navbarHome}>
              <NavbarHome />
            </Col>
            <Col lg={24} xl={12} offset={0} className={styles.content}>
              <ContentHome />
            </Col>
            <Col span={6} offset={0} className={styles.contact}>
              <ContactHome />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
