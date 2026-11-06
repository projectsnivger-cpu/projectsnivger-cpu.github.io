import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Pane, barSx, cardSx } from "./Section";
import { projects } from "../content/content";
import { C } from "../theme";

const chunk = (arr, n) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

const pillSx = {
  display: "inline-block",
  mt: 1.75,
  px: 1.75,
  py: 0.6,
  fontSize: 12,
  color: C.blue,
  textDecoration: "none",
  border: `1px solid ${C.border}`,
  borderRadius: "999px",
  "&:hover": { borderColor: C.blue },
};

function Card({ p }) {
  const [open, setOpen] = useState(false);
  const hasMore = p.highlights.length > 0;
  const codeLines = ["/**", ...chunk(p.tags, 3).map((c) => ` * ${c.join(", ")}`), " */"];

  return (
    <Box
      component="article"
      sx={{ ...cardSx, p: 2.25, gridColumn: { md: p.featured ? "1 / -1" : "auto" }, minWidth: 0 }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 1.25 }}>
        <Typography component="h3" sx={{ color: C.amber, fontSize: 13 }}>
          {p.title}
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: 11.5, flexShrink: 0 }}>
          {p.date || (p.featured ? "featured" : "")}
        </Typography>
      </Box>

      <Box sx={{ bgcolor: C.code, border: `1px solid ${C.border}`, borderRadius: "6px", p: 1.5 }}>
        <Box sx={{ color: C.comment, fontSize: 12, lineHeight: 1.8, mb: hasMore ? 1.5 : 0 }}>
          {codeLines.map((l, i) => (
            <Box key={i} sx={{ whiteSpace: "pre-wrap" }}>
              {l}
            </Box>
          ))}
        </Box>
        {hasMore && (
          <Box component="button" type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} sx={barSx}>
            {open ? "hide details" : "see the project"}
          </Box>
        )}
      </Box>

      {p.subtitle && <Typography sx={{ color: C.text, fontSize: 12.5, mt: 1.75 }}>{p.subtitle}</Typography>}
      <Typography sx={{ color: C.comment, fontSize: 12.5, lineHeight: 1.85, mt: p.subtitle ? 0.5 : 1.75 }}>
        {p.summary}
      </Typography>

      {open && (
        <Box component="ul" sx={{ m: 0, mt: 1.5, p: 0, listStyle: "none", color: C.comment, fontSize: 12.5, lineHeight: 1.8 }}>
          {p.highlights.map((h) => (
            <Box component="li" key={h} sx={{ display: "flex", gap: 1.25, mb: 0.75 }}>
              <Box component="span" aria-hidden sx={{ color: C.amber }}>
                ›
              </Box>
              <span>{h}</span>
            </Box>
          ))}
        </Box>
      )}

      {p.link && (
        <Box component="a" href={p.link} target="_blank" rel="noreferrer" sx={pillSx}>
          Check in GitHub
        </Box>
      )}
    </Box>
  );
}

export default function Projects() {
  const { heading, items } = projects;
  return (
    <Pane title={`${heading.lead} ${heading.accent}`} meta={`${items.length} projects`}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gap: 3 }}>
        {items.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </Box>
    </Pane>
  );
}
