"use client";

import { Container, Card } from "react-bootstrap";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Roadmap() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
        <title>Teknik Yol Haritası | Can</title>
        <meta
          name="description"
          content="Vardiya planlama otomasyonu için teknik yol haritası"
        />
      </Head>

      <Container className="py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mb-4 text-center fw-bold">
            🗂️ Vardiya Planlama Otomasyonu
          </h1>
          <p className="text-center text-muted mb-5">
            Görseldeki detaylı Gantt/Time-Grid yapısını otomatikleştirmek için
            adım adım teknik yol haritası.
          </p>

          <Card
            className="shadow-lg rounded-4 p-4"
            style={{
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(255,255,255,0.85)",
            }}
          >
            <Card.Body>
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
