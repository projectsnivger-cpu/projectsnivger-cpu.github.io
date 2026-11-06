import { Box, Typography } from "@mui/material";
import { Pane, wrapText } from "./Section";
import { experience } from "../content/content";
import { C } from "../theme";

export default function Experience() {
  const { heading, items } = experience;
  return (
    <Pane title={`${heading.lead} ${heading.accent}`} meta={`${items.length} roles`}>
      {items.map((job, i) => {
        const current = job.period.includes("Present");
        return (
          <Box
            key={`${job.company}-${job.period}`}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "170px 1fr" },
              gap: { xs: 0.5, sm: 3 },
              py: 2.5,
              borderTop: i ? `1px solid ${C.border}` : "none",
            }}
          >
            <Typography sx={{ color: current ? C.amber : C.muted, fontSize: 12, lineHeight: 1.9 }}>
              {current && "● "}
              {job.period}
            </Typography>
            <Box>
              <Typography component="h3" sx={{ color: C.text, fontSize: 15, fontWeight: 500 }}>
                {job.role}
              </Typography>
              <Typography sx={{ color: C.blue, fontSize: 13, mt: 0.25 }}>
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
                {job.type && (
                  <Box component="span" sx={{ color: C.amber, ml: 1.5, fontSize: 12 }}>
                    [{job.type}]
                  </Box>
                )}
              </Typography>
              {job.highlights.length > 0 && (
                <Box sx={{ mt: 1.25, color: C.comment, fontSize: 12.5, lineHeight: 1.8 }}>
                  {job.highlights.flatMap((h) =>
                    wrapText(h, 70).map((l, j) => (
                      <Box key={`${h}-${j}`} sx={{ whiteSpace: "pre-wrap" }}>
                        {j === 0 ? " * " : "   "}
                        {l}
                      </Box>
                    ))
                  )}
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
    </Pane>
  );
}
