import { Box, Typography } from "@mui/material";
import { C } from "../theme";

// Shared building blocks for every tab.

export const fadeSx = {
  animation: "fadeIn .35s ease both",
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
};

export const cardSx = {
  border: `1px solid ${C.border}`,
  borderRadius: "8px",
  bgcolor: "rgba(255,255,255,0.02)",
};

export const barSx = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  bgcolor: C.amber,
  color: "#1a1306",
  fontFamily: "inherit",
  fontSize: 12,
  fontWeight: 600,
  textAlign: "left",
  textDecoration: "none",
  border: 0,
  px: 1.5,
  py: 0.6,
  cursor: "pointer",
  "&:hover": { filter: "brightness(1.1)" },
};

export function wrapText(text, width = 60) {
  const lines = [];
  let cur = "";
  for (const w of text.split(/\s+/)) {
    if (!cur) cur = w;
    else if ((cur + " " + w).length <= width) cur += " " + w;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

export function Pane({ title, meta, children }) {
  return (
    <Box sx={{ p: { xs: 2.5, md: 5 }, maxWidth: 1000, mx: "auto", ...fadeSx }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 2, mb: 3 }}>
        <Typography component="h2" sx={{ color: C.text, fontSize: 15, fontWeight: 500 }}>
          <Box component="span" sx={{ color: C.muted }}>
            {"// "}
          </Box>
          {title}
        </Typography>
        {meta && <Typography sx={{ color: C.muted, fontSize: 12 }}>{meta}</Typography>}
      </Box>
      {children}
    </Box>
  );
}

// Renders lines of text as a numbered code listing.
export function CodeLines({ lines, start = 1, numbers = true, color = C.comment, sx }) {
  return (
    <Box sx={{ fontSize: { xs: 12, md: 13 }, lineHeight: 1.9, ...sx }}>
      {lines.map((line, i) => (
        <Box key={i} sx={{ display: "flex" }}>
          {numbers && (
            <Box
              component="span"
              aria-hidden
              sx={{ width: 36, flexShrink: 0, textAlign: "right", pr: 2.5, color: C.muted, userSelect: "none" }}
            >
              {start + i}
            </Box>
          )}
          <Box component="span" sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word", color }}>
            {line || " "}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
