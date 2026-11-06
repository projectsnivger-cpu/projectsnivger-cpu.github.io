import { Chip, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Section from "./Section";
import { skills } from "../content/content";

export default function Skills() {
  return (
    <Section id="skills" heading={skills.heading} sx={{ bgcolor: "#0d0f0e" }}>
      <Grid container spacing={3}>
        {skills.groups.map((g) => (
          <Grid key={g.title} size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%", borderColor: "divider" }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                {g.title}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {g.items.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      "&:hover": { bgcolor: "rgba(53,242,107,0.15)", color: "primary.main" },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
