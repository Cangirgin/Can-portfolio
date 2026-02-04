"use client";

import { Container, Button, Row, Col, ProgressBar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <Head>
        <title>Can | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend geliştirici Can'ın kişisel web sitesi"
        />
      </Head>

      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center py-5 px-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="mb-3 fw-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Merhaba, Benim Adım Can! 👋
          </h1>
          <p
            className="lead text-muted mb-4 mb-md-5"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Frontend geliştiricisiyim. Modern, hızlı ve kullanıcı dostu
            arayüzler geliştiriyorum.
          </p>

          <Row className="g-3 justify-content-center mb-5">
            <Col xs="auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/about" passHref legacyBehavior>
                  <Button variant="primary" size="lg">
                    🚀 Hakkımda
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col xs="auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/travels" passHref legacyBehavior>
                  <Button variant="outline-primary" size="lg">
                    🌍 Gezdiğim Ülkeler
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col xs="auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/projects" passHref legacyBehavior>
                  <Button variant="outline-secondary" size="lg">
                    📂 Projelerim
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col xs="auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/contact" passHref legacyBehavior>
                  <Button variant="outline-secondary" size="lg">
                    📬 İletişim
                  </Button>
                </Link>
              </motion.div>
            </Col>
          </Row>

          {/* Sosyal Medya */}
          <div className="mb-5 fs-4">
            <a
              href="https://github.com/Cangirgin"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-reset"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/can-girgin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reset"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Yetenekler */}
          <div
            className="mb-5 text-start w-100 mx-auto"
            style={{ maxWidth: "720px" }}
          >
            <h3 className="mb-3">💻 Yeteneklerim</h3>
            {[
              { name: "React", value: 90 },
              { name: "Next.js", value: 85 },
              { name: "TypeScript", value: 75 },
              { name: "CSS / Bootstrap / Tailwind", value: 80 },
            ].map((skill) => (
              <div key={skill.name} className="mb-3">
                <p className="mb-1 fw-semibold">{skill.name}</p>
                <ProgressBar
                  now={skill.value}
                  label={`${skill.value}%`}
                  animated
                  variant="info"
                  style={{ height: "10px", borderRadius: "5px" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
