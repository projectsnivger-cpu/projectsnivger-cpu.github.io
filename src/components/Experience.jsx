import { Box, Chip, Paper, Typography } from "@mui/material";
import Section from "./Section";
import { experience } from "../content/content";

export default function Experience() {
  return (
    <Section id="experience" heading={experience.heading} sx={{ bgcolor: "#0d0f0e" }}>
      <Box sx={{ position: "relative", maxWidth: 860, mx: "auto", pl: { xs: 3, md: 5 } }}>
        <Box
          aria-hidden
          sx={{ position: "absolute", left: { xs: 7, md: 11 }, top: 8, bottom: 8, width: 2, bgcolor: "divider" }}
        />
        {experience.items.map((job, i) => (
          <Box key={`${job.company}-${job.period}`} sx={{ position: "relative", mb: 3 }}>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: { xs: -24, md: -40 },
                top: 26,
                width: 16,
                height: 16,
                borderRadius: "50%",
                bgcolor: i === 0 ? "primary.main" : "background.default",
                border: "2px solid",
                borderColor: "primary.main",
                boxShadow: i === 0 ? "0 0 14px rgba(53,242,107,0.6)" : "none",
              }}
            />
            <Paper variant="outlined" sx={{ p: { xs: 2.5, md: 3 }, borderColor: "divider" }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  {job.role}
                </Typography>
                <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                  {job.period}
                </Typography>
              </Box>
              <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
              </Typography>
              {job.type && (
                <Chip label={job.type} size="small" variant="outlined" sx={{ mt: 1.5, borderColor: "rgba(53,242,107,0.4)", color: "primary.main" }} />
              )}
              {job.highlights.length > 0 && (
                <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.5, color: "text.secondary" }}>
                  {job.highlights.map((h) => (
                    <li key={h}>
                      <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                        {h}
                      </Typography>
                    </li>
                  ))}
                </Box>
              )}
            </Paper>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
