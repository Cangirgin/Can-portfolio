"use client";

import Head from "next/head";

const timeSlots = [
  { label: "08", value: 8 },
  { label: "09", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
  { label: "16", value: 16 },
  { label: "17", value: 17 },
  { label: "18", value: 18 },
  { label: "19", value: 19 },
  { label: "20", value: 20 },
  { label: "21", value: 21 },
  { label: "22", value: 22 },
  { label: "23", value: 23 },
  { label: "00", value: 24 },
  { label: "01", value: 25 },
  { label: "02", value: 26 },
  { label: "03", value: 27 },
  { label: "04", value: 28 },
];

const codeLegend = [
  { code: "CB", label: "Cashier Booth", color: "#6fcf97" },
  { code: "TL", label: "Team Lead", color: "#56ccf2" },
  { code: "HO", label: "Holiday Off", color: "#bdbdbd" },
  { code: "BR", label: "Break", color: "#f2c94c" },
];

const departments = [
  {
    name: "RECEPTION",
    employees: [
      {
        name: "Elif Yılmaz",
        role: "Front Desk",
        shifts: [
          { start: 8, end: 12, code: "CB", color: "#6fcf97" },
          { start: 12, end: 13, code: "BR", color: "#f2c94c" },
          { start: 13, end: 16, code: "CB", color: "#6fcf97" },
          { start: 16, end: 18, code: "TL", color: "#56ccf2" },
        ],
      },
      {
        name: "Can Aksoy",
        role: "Guest Service",
        shifts: [
          { start: 9, end: 14, code: "CB", color: "#6fcf97" },
          { start: 14, end: 15, code: "BR", color: "#f2c94c" },
          { start: 15, end: 19, code: "CB", color: "#6fcf97" },
        ],
      },
      {
        name: "Mert Şahin",
        role: "Night Reception",
        shifts: [
          { start: 20, end: 24, code: "TL", color: "#56ccf2" },
          { start: 24, end: 28, code: "TL", color: "#56ccf2" },
        ],
      },
    ],
  },
  {
    name: "KITCHEN",
    employees: [
      {
        name: "Seda Kara",
        role: "Chef",
        shifts: [
          { start: 8, end: 12, code: "TL", color: "#56ccf2" },
          { start: 12, end: 13, code: "BR", color: "#f2c94c" },
          { start: 13, end: 17, code: "CB", color: "#6fcf97" },
        ],
      },
      {
        name: "Ali Demir",
        role: "Line Cook",
        shifts: [
          { start: 10, end: 15, code: "CB", color: "#6fcf97" },
          { start: 15, end: 16, code: "BR", color: "#f2c94c" },
          { start: 16, end: 20, code: "CB", color: "#6fcf97" },
        ],
      },
      {
        name: "Zeynep Arslan",
        role: "Pastry",
        shifts: [
          { start: 14, end: 18, code: "CB", color: "#6fcf97" },
          { start: 18, end: 19, code: "BR", color: "#f2c94c" },
          { start: 19, end: 23, code: "CB", color: "#6fcf97" },
        ],
      },
    ],
  },
  {
    name: "HOUSEKEEPING",
    employees: [
      {
        name: "Fatma Öz",
        role: "Floor Lead",
        shifts: [
          { start: 8, end: 12, code: "CB", color: "#6fcf97" },
          { start: 12, end: 13, code: "BR", color: "#f2c94c" },
          { start: 13, end: 17, code: "CB", color: "#6fcf97" },
        ],
      },
      {
        name: "Burak Şen",
        role: "Room Attendant",
        shifts: [
          { start: 9, end: 12, code: "CB", color: "#6fcf97" },
          { start: 12, end: 13, code: "BR", color: "#f2c94c" },
          { start: 13, end: 16, code: "CB", color: "#6fcf97" },
          { start: 16, end: 18, code: "HO", color: "#bdbdbd" },
        ],
      },
      {
        name: "Ece Kılıç",
        role: "Laundry",
        shifts: [
          { start: 12, end: 16, code: "CB", color: "#6fcf97" },
          { start: 16, end: 17, code: "BR", color: "#f2c94c" },
          { start: 17, end: 21, code: "CB", color: "#6fcf97" },
        ],
      },
    ],
  },
];

const getShiftForSlot = (shifts, slotValue) =>
  shifts.find((shift) => slotValue >= shift.start && slotValue < shift.end);

const calculateTotalHours = (shifts) =>
  shifts.reduce((total, shift) => total + (shift.end - shift.start), 0);

export default function ShiftPlannerPage() {
  return (
    <div style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <Head>
        <title>Shift Planner | Can</title>
        <meta
          name="description"
          content="Saatlik vardiya çizelgesi ve teknik yol haritası görünümü"
        />
      </Head>

      <main style={{ padding: "48px 24px", maxWidth: "1400px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>
            Shift Planner Time-Grid
          </h1>
          <p style={{ color: "#6c757d", maxWidth: "760px", margin: "0 auto" }}>
            08:00 - 04:00 arası vardiya dağılımını departman bazlı olarak gösteren
            profesyonel çizelge. Hücreler görev kodlarına göre renklendirilir ve
            TDT sütununda günlük toplam saat hesaplanır.
          </p>
        </header>

        <section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `220px repeat(${timeSlots.length}, 52px) 70px`,
              gap: "4px",
              alignItems: "center",
              fontSize: "0.85rem",
              color: "#111827",
            }}
          >
            <div style={{ fontWeight: 600, padding: "8px" }}>Çalışan</div>
            {timeSlots.map((slot) => (
              <div
                key={slot.value}
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  padding: "8px 0",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "8px",
                }}
              >
                {slot.label}
              </div>
            ))}
            <div style={{ fontWeight: 600, textAlign: "center" }}>TDT</div>

            {departments.map((department) => (
              <div
                key={department.name}
                style={{
                  gridColumn: `1 / span ${timeSlots.length + 2}`,
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  marginTop: "8px",
                }}
              >
                {department.name}
              </div>
            ))}

            {departments.flatMap((department) =>
              department.employees.map((employee) => {
                const totalHours = calculateTotalHours(employee.shifts);

                return [
                  <div
                    key={`${employee.name}-label`}
                    style={{
                      padding: "10px 8px",
                      backgroundColor: "#f9fafb",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{employee.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                      {employee.role}
                    </div>
                  </div>,
                  ...timeSlots.map((slot) => {
                    const shift = getShiftForSlot(employee.shifts, slot.value);
                    return (
                      <div
                        key={`${employee.name}-${slot.value}`}
                        style={{
                          height: "38px",
                          borderRadius: "8px",
                          backgroundColor: shift ? shift.color : "#f3f4f6",
                          color: shift ? "#0f172a" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 600,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {shift ? shift.code : "-"}
                      </div>
                    );
                  }),
                  <div
                    key={`${employee.name}-total`}
                    style={{
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#111827",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "10px",
                      padding: "8px 0",
                    }}
                  >
                    {totalHours}h
                  </div>,
                ];
              })
            )}
          </div>
        </section>

        <section
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {codeLegend.map((item) => (
            <div
              key={item.code}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {item.code}
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{item.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  Görev kodu
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
