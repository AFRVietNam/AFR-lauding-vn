import cssB2 from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import { Col, Form, Row } from "antd";
import Image from "next/image";

import css from "./footer.module.scss";
import { f1, f2, f3, f4, f5, gps, logo } from "../public/staticImage";

export function Footer() {
  return (
    <>
      <div
        className={cssB2.reason}
        style={{ background: "white", padding: "0", color: "black" }}
      >
        <div className={cssB1.content} style={{ overflow: "hidden" }}>
          <Row className={css.Rowcuts}>
            <Col span={24} className={css.Clogo}>
              <Image src={logo} className={css.imageLogo} alt="logoCty"></Image>
            </Col>

            <Row className={css.gridLR} gutter={[30, 30]}>
              <Col xs={24} md={12} lg={6} className={css.Colcust}>
                <div className={[css.content, css.Rit].join(" ")}>
                  <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                    AFR Solutions Co.,Ltd:
                  </p>

                  <div className={css.FlexItem}>
                    <Image src={f4} alt="lien he" className={css.IconF}></Image>
                    <p>+81-90-6625-2376</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image src={f5} alt="mail" className={css.IconF}></Image>
                    <p>akira.takahashi@afr-solution.com(Mr. Takashi)</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image
                      src={gps}
                      alt="lien he"
                      className={css.IconF}
                    ></Image>
                    <p>
                      〒105-0004 Tokyo, Minato City, Shinbashi, 1 Chome−12−9 7F{" "}
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6} className={css.Colcust}>
                <div className={[css.content, css.Rit].join(" ")}>
                  <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                    AFR Solutions Korea Co.,Ltd
                  </p>

                  <div className={css.FlexItem}>
                    <Image src={f4} alt="lien he" className={css.IconF}></Image>
                    <p>+82-10-4001-5357</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image src={f5} alt="mail" className={css.IconF}></Image>
                    <p> kwon@afr-solution.com(Mr. Kwon)</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image
                      src={gps}
                      alt="lien he"
                      className={css.IconF}
                    ></Image>
                    <p>
                      8 1509ho Teheranro 64gil Kangnamgu Seoulsi, Republic of
                      Korea.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={css.Colcust}>
                <div className={[css.content, css.Rit].join(" ")}>
                  <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                    AFR Cloud Computing JSC
                  </p>

                  <div className={css.FlexItem}>
                    <Image src={f4} alt="lien he" className={css.IconF}></Image>
                    <p> +84-97-540-4208</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image src={f5} alt="mail" className={css.IconF}></Image>
                    <p>tam@afr-solution.com(Mr. Tâm)</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image
                      src={gps}
                      alt="lien he"
                      className={css.IconF}
                    ></Image>
                    <p>
                      37 Huynh Tinh Cua Street, Ward 8, District 3, Ho Chi Minh
                      City, Vietnam
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6} className={css.Colcust}>
                <div className={[css.content, css.Rit].join(" ")}>
                  <p
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                    className={css.noWrap}
                  >
                    AFR Solutions Cambodia Co.,Ltd
                  </p>

                  <div className={css.FlexItem}>
                    <Image src={f4} alt="lien he" className={css.IconF}></Image>
                    <p>+855 (0) 16-846-059</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image src={f5} alt="mail" className={css.IconF}></Image>
                    <p>tam@afr-solution.com(Mr. Tâm)</p>
                  </div>
                  <div className={css.FlexItem}>
                    <Image
                      src={gps}
                      alt="lien he"
                      className={css.IconF}
                    ></Image>
                    <p>
                      CASA by Meridian, Orient Tower 2nd Floor, Unit A01 - 01, 1
                      Harvard St, Phnom Penh 12301
                    </p>
                  </div>
                </div>
              </Col>
              <div
                style={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "#b1b1b1",
                  margin: "auto",
                }}
              ></div>

              <div className={css.media}>
                <Image src={f1} alt="mail" className={css.IconS}></Image>
                <a
                  rel="noreferrer"
                  className={css.LinkMEdia}
                  href="https://www.facebook.com/LogisForce/"
                  target="_blank"
                ></a>
                <a
                  rel="noreferrer"
                  className={css.LinkMEdia}
                  href="https://www.youtube.com/channel/UC3q08W0yiKF_f8N0SaszBQA"
                  target="_blank"
                >
                  <Image src={f2} alt="mail" className={css.IconS}></Image>
                </a>
                <a
                  rel="noreferrer"
                  className={css.LinkMEdia}
                  href="https://www.linkedin.com/company/afr-cloud-computing/"
                  target="_blank"
                >
                  <Image src={f3} alt="mail" className={css.IconS}></Image>
                </a>
              </div>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}
