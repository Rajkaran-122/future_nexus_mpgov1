import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f6f8fa" }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: "#1e293b", color: "#fff", display: "flex", flexDirection: "column", padding: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32 }}>Future Nexus</h1>
        <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a href="/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Dashboard</a>
          <a href="/dashboard/admin" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Admin</a>
        </nav>
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 12, opacity: 0.7 }}>MP E-Mobility</div>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header style={{ height: 64, background: "#fff", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", padding: "0 32px", fontWeight: 600, fontSize: 18 }}>
          Dashboard
        </header>
        <div style={{ flex: 1, padding: 32 }}>{children}</div>
      </main>
    </div>
  );
} 