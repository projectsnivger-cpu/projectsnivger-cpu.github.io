import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navLinks } from "./content/content";
import { C } from "./theme";

const ids = navLinks.map((l) => l.id);
const fromHash = () => {
  const h = window.location.hash.replace("#", "");
  return ids.includes(h) ? h : ids[0];
};

export default function App() {
  const [active, setActive] = useState(fromHash);
  const panelRef = useRef(null);

  useEffect(() => {
    const onHash = () => setActive(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    panelRef.current?.scrollTo(0, 0);
  }, [active]);

  const go = useCallback((id) => {
    window.location.hash = id;
    setActive(id);
  }, []);

  const view = {
    home: <Hero onNavigate={go} />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    credentials: <Credentials />,
    contact: <Contact />,
  }[active];

  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 0, md: 3 } }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1180,
          height: { xs: "100dvh", md: "min(820px, calc(100dvh - 48px))" },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: C.window,
          border: { md: `1px solid ${C.border}` },
          borderRadius: { md: "12px" },
          boxShadow: { md: "0 30px 90px rgba(0,0,0,0.55)" },
        }}
      >
        <Navbar active={active} onChange={go} />
        <Box
          component="main"
          id="panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          ref={panelRef}
          sx={{ flex: 1, minHeight: 0, overflowY: "auto", position: "relative" }}
        >
          {view}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
