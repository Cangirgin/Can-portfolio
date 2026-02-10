import Link from "next/link";
import React from "react";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";

const Aboutpage = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center py-5 px-3"
    >
      <Row className="align-items-center g-5">
        {/* Profil Fotoğrafı */}
        <Col md={4} className="text-center order-0 order-md-0">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQGL3XMMBbv9Zw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718235040526?e=2147483647&v=beta&t=dJGdqXs9n40cOSutATGmsMWt7Zzlgeq2Pt9jgNJsEu0" //
            roundedCircle
            fluid
            alt="Can profil"
          />
        </Col>

        {/* Yazılar */}
        <Col md={8} className="text-center text-md-start">
          <h1 className="mb-3 fw-bold">👋 Merhaba, Ben Can!</h1>
          <p className="lead text-muted">
            2001 doğumluyum ve modern web teknolojileriyle{" "}
            <span className="fw-semibold">frontend geliştirme</span> yapıyorum.
            Özellikle <span className="fw-semibold">React</span> ve{" "}
            <span className="fw-semibold">Next.js</span> üzerine yoğunlaşıyorum.
          </p>
          <p>
            Kod yazmak benim için sadece iş değil, aynı zamanda yaratıcı bir
            ifade biçimi. Kullanıcı deneyimini ön plana çıkaran, hızlı ve şık
            arayüzler geliştirmeyi seviyorum. Şu an aynı zamanda{" "}
            <span className="fw-semibold">Almanca öğreniyorum</span> ve
            gelecekte yurtdışında yazılım kariyerime devam etmeyi hedefliyorum.
          </p>
          <p>
            Yeni teknolojiler öğrenmeye, kendimi sürekli geliştirmeye ve
            sınırlarımı zorlamaya inanıyorum. Teknoloji dışında spor yapmak,
            yeni kültürler tanımak ve farklı diller öğrenmek de hayatımın bir
            parçası.
          </p>

          <Row className="g-2 mt-4 justify-content-center justify-content-md-start">
            <Col xs="auto">
              <Link href="/" passHref legacyBehavior>
                <Button variant="primary" size="lg">
                  ⬅️ Ana Sayfaya Dön
                </Button>
              </Link>
            </Col>
            <Col xs="auto">
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="outline-secondary" size="lg">
                  📬 İletişime Geç
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Skill Kartları */}
      <Row className="mt-5 w-100 justify-content-center g-4">
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-center p-3">
            <h4>⚛️ React & Next.js</h4>
            <p className="text-muted">
              Modern, performanslı ve SEO dostu web uygulamaları geliştiriyorum.
            </p>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-center p-3">
            <h4>🎨 UI & UX</h4>
            <p className="text-muted">
              Kullanıcı deneyimini ön planda tutan şık ve akıcı arayüzler
              tasarlıyorum.
            </p>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-center p-3">
            <h4>🌍 Sürekli Öğrenme</h4>
            <p className="text-muted">
              Yeni diller, teknolojiler ve kültürler keşfetmeye tutkuyla devam
              ediyorum.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutpage;
