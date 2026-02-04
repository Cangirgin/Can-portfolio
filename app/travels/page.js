"use client";

import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Link from "next/link";

const travels = [
  {
    country: "Almanya",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    alt: "Almanya şehir manzarası",
    description:
      "Berlin'de tarih ile modern yaşamın iç içe geçtiğini görmek beni çok etkiledi. Şehir, müzeleri ve düzenli toplu taşımasıyla gezmeyi inanılmaz kolaylaştırdı.",
  },
  {
    country: "Amerika",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    alt: "Amerika şehir silüeti",
    description:
      "New York'un temposu ve enerjisi beni motive eden bambaşka bir deneyim sundu. Farklı kültürlerin bir arada yaşadığı bu şehirde çeşitliliği yakından hissettim.",
  },
  {
    country: "İspanya",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    alt: "İspanya sahil manzarası",
    description:
      "Barselona'nın mimarisi ve sokak sanatları bana bolca ilham verdi. Akdeniz kıyılarındaki sakinlik, şehrin canlı ruhunu dengeleyen harika bir detaydı.",
  },
  {
    country: "İtalya",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    alt: "İtalya tarihi şehir manzarası",
    description:
      "Roma'da tarihî dokunun her köşede hissedilmesi beni büyüledi. Yerel mutfak ve sıcak insanlar, seyahatimi çok daha unutulmaz kıldı.",
  },
];

export default function TravelsPage() {
  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <Container className="py-5 px-3">
        <div className="text-center mb-5">
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            🌍 Gezdiğim Ülkeler
          </h1>
          <p className="lead text-muted">
            Her biri farklı bir kültür, farklı bir ilham kaynağı oldu.
          </p>
        </div>

        <Row className="g-4">
          {travels.map((travel) => (
            <Col key={travel.country} xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <Card.Img src={travel.image} alt={travel.alt} />
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold fs-4">
                    {travel.country}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {travel.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link href="/" passHref legacyBehavior>
            <Button variant="outline-primary" size="lg">
              ⬅️ Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
