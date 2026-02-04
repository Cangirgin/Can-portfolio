"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Link from "next/link";

const ContactPage = () => {
  const form = useRef();
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastBg, setToastBg] = useState("info"); // success veya danger
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name").trim();
    const email = formData.get("user_email").trim();
    const message = formData.get("message").trim();

    // İsim validasyonu: sadece harf, en az 2 karakter
    const nameRegex = /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]{2,}$/;
    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setToastMsg("Lütfen tüm alanları doldurun!");
      setToastBg("danger");
      setShowToast(true);
      return;
    }

    if (!nameRegex.test(name)) {
      setToastMsg(
        "İsim yalnızca harflerden oluşmalı ve en az 2 karakter olmalı!"
      );
      setToastBg("danger");
      setShowToast(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setToastMsg("Lütfen geçerli bir email adresi girin!");
      setToastBg("danger");
      setShowToast(true);
      return;
    }

    if (message.length < 10) {
      setToastMsg("Mesaj en az 10 karakter olmalı!");
      setToastBg("danger");
      setShowToast(true);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_46izrpr",
        "template_zjbmids",
        form.current,
        "Y9h6kICisM1dn8-Fa"
      )
      .then(
        () => {
          setToastMsg("Mesajınız başarıyla gönderildi!");
          setToastBg("success");
          setShowToast(true);
          form.current.reset();
          setIsSending(false);
        },
        () => {
          setToastMsg("Üzgünüz, mesaj gönderilemedi. Lütfen tekrar deneyin.");
          setToastBg("danger");
          setShowToast(true);
          setIsSending(false);
        }
      );
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5"
      style={{
        background:
          "linear-gradient(135deg, #e0f7ff 0%, #ffffff 50%, #e0f7ff 100%)",
      }}
    >
      <Row className="justify-content-center align-items-center w-100 g-5">
        <Col xs={12} lg={5} className="text-center text-lg-start">
          <h1
            className="fw-bold mb-3"
            style={{ color: "#0d6efd", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Bize Ulaşın
          </h1>
          <p className="lead mb-4 text-secondary">
            Her türlü soru, öneri veya işbirliği için bizimle iletişime
            geçebilirsiniz.
          </p>
          <p className="fs-6 text-muted">
            📍 Adres: 152A Charlotte Street, Peterborough ON
            <br />☎ Telefon: 705-742-3221
            <br />✉ Email: cangirrgin@gmail.com
          </p>
        </Col>

        <Col xs={12} lg={5}>
          <div
            className="p-4 p-md-5 shadow-lg rounded-5 bg-white"
            style={{ transition: "all 0.3s" }}
          >
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Control type="hidden" name="to_email" value="cangirrgin@gmail.com" />
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>İsminiz</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Adınızı giriniz"
                  className="shadow-sm"
                  style={{ borderRadius: "0.5rem" }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email adresiniz</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Email giriniz"
                  className="shadow-sm"
                  style={{ borderRadius: "0.5rem" }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Mesajınız</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Mesajınızı yazınız (en az 20 karakter)"
                  className="shadow-sm"
                  style={{ borderRadius: "0.5rem" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 fw-bold py-2"
                disabled={isSending}
                style={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "all 0.3s",
                }}
              >
                {isSending ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </Form>
          </div>
        </Col>

        <Col xs={12} className="text-center mt-4">
          <Link href="/" passHref legacyBehavior>
            <Button
              variant="outline-primary"
              size="sm"
              className="fw-bold"
              style={{ borderRadius: "2rem" }}
            >
              ⬅️ Ana Sayfa
            </Button>
          </Link>
        </Col>
      </Row>

      <ToastContainer position="top-center" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastBg}
          animation
        >
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default ContactPage;
