// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Page({ title }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>{title}</h1>
      <Link to="/" style={{ color: "#457b9d" }}>Bosh sahifaga qaytish</Link>
    </div>
  );
}

export default function App() {
  const pages = [
    { path: "/page1", label: "Sahifa 1" },
    { path: "/page2", label: "Sahifa 2" },
    { path: "/page3", label: "Sahifa 3" },
    { path: "/page4", label: "Sahifa 4" },
    { path: "/page5", label: "Sahifa 5" },
    { path: "/page6", label: "Sahifa 6" },
    { path: "/page7", label: "Sahifa 7" },
    { path: "/page8", label: "Sahifa 8" },
    { path: "/page9", label: "Sahifa 9" },
    { path: "/page10", label: "Sahifa 10" },
  ];

  return (
    <BrowserRouter>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>10 ta Button</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {pages.map((p, i) => (
            <Link key={i} to={p.path}>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#457b9d",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                {p.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <Routes>
        {pages.map((p, i) => (
          <Route key={i} path={p.path} element={<Page title={p.label} />} />
        ))}
        <Route path="/" element={<h2 style={{ textAlign: "center" }}>Bosh sahifa</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
