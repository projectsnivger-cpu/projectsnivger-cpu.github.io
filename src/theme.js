import { createTheme } from "@mui/material/styles";

// Colour tokens used across the editor-style UI.
export const C = {
  bg: "#0b0f17",
  window: "#0e131b",
  panel: "#0a0e15",
  code: "#080b11",
  border: "rgba(130,150,185,0.16)",
  text: "#d5dbe8",
  comment: "#8693aa",
  muted: "#566174",
  amber: "#d4a03c",
  blue: "#6cb6ff",
  red: "#e06c75",
  green: "#98c379",
  purple: "#c678dd",
};

export const mono =
  '"Fira Code", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: C.amber, contrastText: "#1a1306" },
    secondary: { main: C.blue },
    background: { default: C.bg, paper: C.window },
    text: { primary: C.text, secondary: C.muted },
    divider: C.border,
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: mono,
    fontSize: 13,
    button: { textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: C.bg,
          backgroundImage:
            "radial-gradient(900px 520px at 18% -8%, rgba(40,80,130,0.30), transparent 60%), radial-gradient(700px 500px at 100% 85%, rgba(30,60,100,0.20), transparent 60%)",
          backgroundAttachment: "fixed",
        },
        "*": { scrollbarWidth: "thin", scrollbarColor: `${C.border} transparent` },
        "*::selection": { background: "rgba(212,160,60,0.35)" },
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
  },
});

export default theme;
