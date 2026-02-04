"use client";

import { useMemo, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

const days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const SHIFT_HOURS = 8;

const emptyAssignments = () =>
  days.reduce((acc, day) => ({ ...acc, [day]: null }), {});

export default function ShiftPlannerPage() {
  const [employees, setEmployees] = useState([]);
  const [assignments, setAssignments] = useState(emptyAssignments);
  const [formData, setFormData] = useState({
    name: "",
    maxHours: 40,
    offDays: [],
    skills: "",
  });

  const assignedHours = useMemo(() => {
    const hours = employees.reduce((acc, employee) => {
      acc[employee.id] = 0;
      return acc;
    }, {});

    days.forEach((day) => {
      const assignedId = assignments[day];
      if (assignedId && hours[assignedId] !== undefined) {
        hours[assignedId] += SHIFT_HOURS;
      }
    });

    return hours;
  }, [assignments, employees]);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOffDayToggle = (day) => {
    setFormData((prev) => {
      const exists = prev.offDays.includes(day);
      return {
        ...prev,
        offDays: exists
          ? prev.offDays.filter((item) => item !== day)
          : [...prev.offDays, day],
      };
    });
  };

  const handleAddEmployee = (event) => {
    event.preventDefault();
    if (!formData.name.trim()) {
      return;
    }

    const newEmployee = {
      id: `emp-${Date.now()}`,
      name: formData.name.trim(),
      maxHours: Number(formData.maxHours) || 40,
      offDays: formData.offDays,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    setEmployees((prev) => [...prev, newEmployee]);
    setFormData({ name: "", maxHours: 40, offDays: [], skills: "" });
  };

  const handleAssignmentChange = (day, employeeId) => {
    setAssignments((prev) => ({
      ...prev,
      [day]: employeeId || null,
    }));
  };

  const handleAutoAssign = () => {
    const nextAssignments = emptyAssignments();
    const hours = employees.reduce((acc, employee) => {
      acc[employee.id] = 0;
      return acc;
    }, {});

    days.forEach((day) => {
      const candidate = employees
        .filter(
          (employee) =>
            !employee.offDays.includes(day) &&
            hours[employee.id] + SHIFT_HOURS <= employee.maxHours
        )
        .sort((a, b) => hours[a.id] - hours[b.id])[0];

      if (candidate) {
        nextAssignments[day] = candidate.id;
        hours[candidate.id] += SHIFT_HOURS;
      }
    });

    setAssignments(nextAssignments);
  };

  const handleClearWeek = () => {
    setAssignments(emptyAssignments());
  };

  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <Container className="py-5 px-3">
        <div className="text-center mb-4">
          <h1 className="fw-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            🗓️ ShiftPlanner
          </h1>
          <p className="text-muted mb-0">
            Çalışan bilgilerini gir, off günlerini belirle ve otomatik vardiya
            dağıtımını tek tıkla oluştur.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <Card.Body className="p-4">
                <Card.Title className="fw-bold mb-3">
                  👩‍💻 Çalışan Bilgisi Gir
                </Card.Title>
                <Form onSubmit={handleAddEmployee}>
                  <Form.Group className="mb-3" controlId="employeeName">
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Örn: Can Girgin"
                      value={formData.name}
                      onChange={(event) =>
                        handleFormChange("name", event.target.value)
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="employeeMaxHours">
                    <Form.Label>Haftalık Maksimum Saat</Form.Label>
                    <Form.Control
                      type="number"
                      min="8"
                      step="1"
                      value={formData.maxHours}
                      onChange={(event) =>
                        handleFormChange("maxHours", event.target.value)
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Off Günleri</Form.Label>
                    <div className="d-flex flex-wrap gap-2">
                      {days.map((day) => (
                        <Form.Check
                          key={day}
                          type="checkbox"
                          id={`off-${day}`}
                          label={day}
                          checked={formData.offDays.includes(day)}
                          onChange={() => handleOffDayToggle(day)}
                        />
                      ))}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="employeeSkills">
                    <Form.Label>Yetkinlikler (virgül ile)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Örn: kasiyer, barista"
                      value={formData.skills}
                      onChange={(event) =>
                        handleFormChange("skills", event.target.value)
                      }
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    ➕ Çalışan Ekle
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <Card.Body className="p-4">
                <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
                  <div>
                    <Card.Title className="fw-bold mb-1">
                      📋 Haftalık Vardiya Planı
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                      Her gün için tek vardiya (8 saat) atanır.
                    </Card.Subtitle>
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="outline-primary" onClick={handleAutoAssign}>
                      ⚡ Otomatik Dağıt
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClearWeek}>
                      🧹 Haftayı Temizle
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Çalışanlar</h6>
                  {employees.length === 0 ? (
                    <div className="text-muted">
                      Henüz çalışan eklenmedi. Sol panelden ekleyebilirsin.
                    </div>
                  ) : (
                    <div className="d-flex flex-column gap-2">
                      {employees.map((employee) => (
                        <div
                          key={employee.id}
                          className="d-flex flex-wrap justify-content-between align-items-center p-2 rounded-3 bg-light"
                        >
                          <div>
                            <strong>{employee.name}</strong>
                            <div className="text-muted small">
                              Off:{" "}
                              {employee.offDays.length
                                ? employee.offDays.join(", ")
                                : "Yok"}
                            </div>
                          </div>
                          <div className="text-end">
                            <Badge bg="dark">
                              {assignedHours[employee.id] || 0}/
                              {employee.maxHours} saat
                            </Badge>
                            {employee.skills.length > 0 && (
                              <div className="text-muted small mt-1">
                                {employee.skills.join(", ")}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="table-responsive">
                  <Table bordered hover className="align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        {days.map((day) => (
                          <th key={day}>{day}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {days.map((day) => (
                          <td key={day}>
                            <Form.Select
                              value={assignments[day] || ""}
                              onChange={(event) =>
                                handleAssignmentChange(day, event.target.value)
                              }
                            >
                              <option value="">Boş</option>
                              {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                  {employee.name}
                                </option>
                              ))}
                            </Form.Select>
                            {assignments[day] && (
                              <div className="text-muted small mt-1">
                                {SHIFT_HOURS} saat
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
