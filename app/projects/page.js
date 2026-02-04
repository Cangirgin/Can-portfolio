"use client";

import { Container, Button, Card } from "react-bootstrap";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = { scale: 1.03, transition: { duration: 0.3 } };

  const projects = [
    {
      title: "IT Mastery School",
      description:
        "Eğitim odaklı bir platform. Modern frontend teknolojileriyle geliştirilmiş.",
      tech: "React, Next.js, Bootstrap, TypeScript",
      list: [
        "Kurs listesi ve detay sayfaları",
        "Kullanıcı girişi ve yetkilendirme",
        "Responsive tasarım",
        "Performans odaklı frontend",
      ],
      link: "https://it-mastery-school-frontend-3da4sj2zk-cans-projects-247ad053.vercel.app/",
    },
    {
      title: "React Instructions",
      description: "React eğitimi sırasında yaptığım çalışmalar.",
      tech: "React, Bootstrap, CSS",
      list: [
        "Component yapısı ve props kullanımı",
        "State ve event yönetimi",
        "Responsive tasarım",
        "Temel React uygulama mantığı",
      ],
      link: "https://react-instructions.vercel.app/",
    },
  ];

  const roadmapSteps = [
    {
      title: "1. Adım: Veri Katmanını Tasarla (Database)",
      items: [
        "Employee: İsim, ID, departman, haftalık maksimum saat.",
        "Availability: Gün bazlı çalışabilir/çalışamaz saat aralıkları.",
        "Shift: Başlangıç saati, bitiş saati ve görev türü (CB, TL, HO gibi).",
      ],
    },
    {
      title: "2. Adım: Arayüzü İnşa Et (Frontend)",
      items: [
        "Grid sistemi: Satırlarda çalışanlar, sütunlarda 08:00-04:00 saatleri.",
        "Dinamik renklendirme: Uygun saat hücresi yeşil, içine görev kodu yazılır.",
        "TanStack Table: 50+ çalışan ve 24 saatlik büyük veri için performans.",
      ],
    },
    {
      title: "3. Adım: Otomatik Dağıtım Algoritması (The Logic)",
      items: [
        "Talep kontrolü: Örn. 09:00’da 10 kişi ihtiyacı gibi slot sayıları.",
        "Müsaitlik elemesi: Uygunluk bildiren çalışanların filtrelenmesi.",
        "Kural kontrolü: Haftalık saat limiti, 11 saat dinlenme kuralı.",
        "Atama: Uygun adayların boş saatlere dağıtılması.",
      ],
    },
    {
      title: "4. Adım: Görseldeki Detayları Ekle",
      items: [
        "Departman başlıkları: RECEPTION, KITCHEN gibi gruplama satırları.",
        "Günlük/haftalık toplam: TDT sütununda anlık saat hesabı.",
        "Kod seçimleri: HO, CB, TL gibi kısaltmalar için select menü.",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <Head>
        <title>Projelerim | Can</title>
        <meta
          name="description"
          content="Frontend geliştirici Can'ın projeleri"
        />
      </Head>

      <Container className="py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mb-5 text-center fw-bold">📂 Projelerim</h1>

          {projects.map((project, idx) => (
            <motion.div key={idx} whileHover={cardHover} className="mb-4">
              <Card
                className="shadow-lg rounded-4 p-4"
                style={{
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              >
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold">
                    {project.title}
                  </Card.Title>
                  <Card.Text>
                    {project.description}
                    <br />
                    <strong>Teknolojiler:</strong> {project.tech}
                  </Card.Text>
                  <ul className="text-start mb-3">
                    {project.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Button href={project.link} target="_blank" variant="primary">
                    İncele
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}

          <Card
            className="shadow-lg rounded-4 p-4"
            style={{
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(255,255,255,0.85)",
            }}
          >
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">
                🗂️ Vardiya Planlama Otomasyonu - Teknik Yol Haritası
              </Card.Title>
              <Card.Text className="text-muted">
                Görseldeki detaylı Gantt/Time-Grid yapısını otomatikleştirmek
                için izlenmesi gereken adımlar.
              </Card.Text>
              <div className="d-flex flex-column gap-4">
                {roadmapSteps.map((step) => (
                  <div key={step.title}>
                    <h5 className="fw-semibold mb-2">{step.title}</h5>
                    <ul className="text-start mb-0">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}
