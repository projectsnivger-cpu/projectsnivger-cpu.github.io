import { createTheme } from "@mui/material/styles";

export const ACCENT = "#35f26b";
export const serif = '"Playfair Display", Georgia, serif';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: ACCENT, contrastText: "#04120a" },
    background: { default: "#0a0a0a", paper: "#121413" },
    text: { primary: "#f4f5f4", secondary: "#9aa09b" },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        "section[id]": { scrollMarginTop: "64px" },
        "@media (prefers-reduced-motion: reduce)": { html: { scrollBehavior: "auto" } },
      },
    },
    MuiButton: { styleOverrides: { root: { borderRadius: 6, padding: "10px 22px" } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
  },
});

export default theme;
