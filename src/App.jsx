// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";

export default function App() {
  const pages = [
    { path: "/page1", label: "1", element: <Page1 /> },
    { path: "/page2", label: "2", element: <Page2 /> },
    { path: "/page3", label: "3", element: <Page3 /> },
    { path: "/page4", label: "4", element: <Page4 /> },
    { path: "/page5", label: "5", element: <Page5 /> },
    { path: "/page6", label: "6", element: <Page6 /> },
    { path: "/page7", label: "7", element: <Page7 /> },
    { path: "/page8", label: "8", element: <Page8 /> },
    { path: "/page9", label: "9", element: <Page9 /> },
    { path: "/page10", label: "10", element: <Page10 /> },
  ];

  return (
    <BrowserRouter>
      {/* Navbar */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          // padding: "20px",
          textAlign: "center",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <h1 style={{ marginBottom: "15px" }}> page buttons</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {pages.map((p, i) => (
            <Link key={i} to={p.path} style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#457b9d",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d3557")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#457b9d")}
              >
                {p.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Router pages */}
        <div style={{ marginTop: "40px" }}>
          <Routes>
            <Route path="/" element={<h2>Bosh sahifa</h2>} />
            {pages.map((p, i) => (
              <Route key={i} path={p.path} element={p.element} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
