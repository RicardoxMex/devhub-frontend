import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "/src/styles/global.css";
import App from "./App.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="pt-[60px] min-h-[calc(100vh)]">
        <App />
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
