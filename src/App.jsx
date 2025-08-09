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
    { path: "/page1", label: "Sahifa 1", element: <Page1 /> },
    { path: "/page2", label: "Sahifa 2", element: <Page2 /> },
    { path: "/page3", label: "Sahifa 3", element: <Page3 /> },
    { path: "/page4", label: "Sahifa 4", element: <Page4 /> },
    { path: "/page5", label: "Sahifa 5", element: <Page5 /> },
    { path: "/page6", label: "Sahifa 6", element: <Page6 /> },
    { path: "/page7", label: "Sahifa 7", element: <Page7 /> },
    { path: "/page8", label: "Sahifa 8", element: <Page8 /> },
    { path: "/page9", label: "Sahifa 9", element: <Page9 /> },
    { path: "/page10", label: "Sahifa 10", element: <Page10 /> },
  ];

  return (
    <BrowserRouter>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>10 ta Button</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
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
                  fontSize: "16px",
                }}
              >
                {p.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: "center" }}>Bosh sahifa</h2>} />
        {pages.map((p, i) => (
          <Route key={i} path={p.path} element={p.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
