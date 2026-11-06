import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Section from "./Section";
import { about, activities, credentials, experience, projects } from "../content/content";

const stats = [
  { value: experience.items.length, label: "Roles" },
  { value: projects.items.length, label: "Projects" },
  { value: credentials.certifications.length, label: "Certifications" },
];

export default function About() {
  return (
    <>
      <Section id="about" heading={about.heading}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            {about.paragraphs.map((p) => (
              <Typography key={p} sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2, fontSize: 17 }}>
                {p}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={2}>
              {stats.map((s) => (
                <Grid key={s.label} size={4}>
                  <Paper variant="outlined" sx={{ p: 2, textAlign: "center", borderColor: "divider" }}>
                    <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 800 }}>
                      {s.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {s.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Paper variant="outlined" sx={{ p: 3, mt: 2, borderColor: "divider" }}>
              <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: 2 }}>
                {activities.heading.lead} {activities.heading.accent}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mt: 1 }}>
                {activities.items.map((a) => (
                  <Box key={a} component="li" sx={{ display: "flex", gap: 1.5, py: 0.75, color: "text.secondary" }}>
                    <SportsSoccerIcon sx={{ fontSize: 18, mt: "3px", color: "primary.main" }} />
                    <Typography variant="body2">{a}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
