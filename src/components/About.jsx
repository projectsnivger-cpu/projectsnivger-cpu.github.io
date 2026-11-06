import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import { about, activities, credentials, experience, explorer, projects } from "../content/content";
import { CodeLines, fadeSx, wrapText } from "./Section";
import { C } from "../theme";

const FOLDER_COLORS = [C.amber, C.red, C.blue];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const rowSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  width: "100%",
  py: 0.5,
  px: 0,
  background: "none",
  border: 0,
  color: C.text,
  fontFamily: "inherit",
  fontSize: 12,
  textAlign: "left",
  cursor: "pointer",
};

function Explorer() {
  const [closed, setClosed] = useState({});
  return (
    <Box
      component="aside"
      aria-label="Interests"
      sx={{
        bgcolor: C.panel,
        p: 2,
        minWidth: { md: 230 },
        borderLeft: { md: `1px solid ${C.border}` },
        borderTop: { xs: `1px solid ${C.border}`, md: "none" },
      }}
    >
      <Typography sx={{ fontSize: 11, color: C.muted, letterSpacing: 1, mb: 1.5 }}>EXPLORER</Typography>
      <Typography sx={{ fontSize: 11, color: C.text, letterSpacing: 1, mb: 0.5 }}>
        {explorer.title.toUpperCase()}
      </Typography>
      {explorer.folders.map((f, i) => {
        const isOpen = !closed[f.name];
        return (
          <Box key={f.name}>
            <Box
              component="button"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setClosed((c) => ({ ...c, [f.name]: isOpen }))}
              sx={rowSx}
            >
              {isOpen ? <ExpandMoreIcon sx={{ fontSize: 16 }} /> : <ChevronRightIcon sx={{ fontSize: 16 }} />}
              <FolderIcon sx={{ fontSize: 15, color: FOLDER_COLORS[i % FOLDER_COLORS.length] }} />
              <span>{f.name}</span>
            </Box>
            {isOpen &&
              f.files.map((file) => (
                <Box key={file} sx={{ display: "flex", alignItems: "center", gap: 1, pl: 5.5, py: 0.4, color: C.comment }}>
                  <Box
                    component="span"
                    sx={{ fontSize: 8, fontWeight: 700, bgcolor: "#2f5f9e", color: "#cfe3ff", px: 0.5, borderRadius: "2px" }}
                  >
                    MD
                  </Box>
                  <span>{slug(file)}.md</span>
                </Box>
              ))}
          </Box>
        );
      })}
    </Box>
  );
}

export default function About() {
  const title = `${about.heading.lead} ${about.heading.accent}`;
  const lines = ["/**", ` * ${title}`];
  about.paragraphs.forEach((p, i) => {
    if (i > 0) lines.push(" *");
    wrapText(p, 62).forEach((l) => lines.push(` * ${l}`));
  });
  lines.push(" */", "");
  lines.push(
    `// ${experience.items.length} roles · ${projects.items.length} projects · ${credentials.certifications.length} certifications`,
    ""
  );
  lines.push("/**", ` * ${activities.heading.lead} ${activities.heading.accent}`);
  activities.items.forEach((a) => wrapText(a, 62).forEach((l, j) => lines.push(` * ${j === 0 ? "- " : "  "}${l}`)));
  lines.push(" */");

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, minHeight: "100%", ...fadeSx }}>
      <Box sx={{ flex: 1, minWidth: 0, p: { xs: 2.5, md: 5 } }}>
        <Typography component="h2" sx={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          {title}
        </Typography>
        <CodeLines lines={lines} sx={{ maxWidth: 640, mx: { md: "auto" } }} />
      </Box>
      <Explorer />
    </Box>
  );
}
