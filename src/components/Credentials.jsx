import { Box, Typography } from "@mui/material";
import { Pane, cardSx, wrapText } from "./Section";
import { credentials } from "../content/content";
import { C } from "../theme";

function Sub({ children }) {
  return (
    <Typography component="h3" sx={{ color: C.comment, fontSize: 12.5, fontWeight: 400, mb: 1.5 }}>
      {"// "}
      {children}
    </Typography>
  );
}

export default function Credentials() {
  const { heading, education, certifications } = credentials;
  return (
    <Pane title={`${heading.lead} ${heading.accent}`}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" }, gap: { xs: 4, md: 5 } }}>
        <Box component="section">
          <Sub>education</Sub>
          {education.map((e) => (
            <Box key={e.degree} sx={{ ...cardSx, p: 2, mb: 2 }}>
              <Typography sx={{ color: C.muted, fontSize: 11.5 }}>
                {e.period} · <Box component="span" sx={{ color: C.amber }}>{e.detail}</Box>
              </Typography>
              <Typography sx={{ color: C.text, fontSize: 13.5, lineHeight: 1.5, mt: 0.5 }}>{e.degree}</Typography>
              <Typography sx={{ color: C.blue, fontSize: 12.5, mt: 0.25 }}>{e.school}</Typography>
              {e.notes && (
                <Box sx={{ color: C.comment, fontSize: 12, lineHeight: 1.8, mt: 1 }}>
                  {wrapText(e.notes, 48).map((l, j) => (
                    <Box key={j}>
                      {j === 0 ? "/* " : " * "}
                      {l}
                      {j === wrapText(e.notes, 48).length - 1 ? " */" : ""}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Box component="section">
          <Sub>certifications</Sub>
          {certifications.map((c) => (
            <Box
              key={c.title}
              sx={{ ...cardSx, p: 2, mb: 2, display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: C.text, fontSize: 13.5, lineHeight: 1.5 }}>{c.title}</Typography>
                <Typography sx={{ color: C.blue, fontSize: 12.5, mt: 0.25 }}>{c.issuer}</Typography>
                {c.link && (
                  <Box
                    component="a"
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: C.amber, fontSize: 12, display: "inline-block", mt: 0.75 }}
                  >
                    view credential
                  </Box>
                )}
              </Box>
              {c.date && (
                <Typography sx={{ color: C.muted, fontSize: 11.5, flexShrink: 0, whiteSpace: "nowrap" }}>
                  {c.date}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Pane>
  );
}
