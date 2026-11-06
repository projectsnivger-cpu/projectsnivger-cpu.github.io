import { Box, Link, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Section from "./Section";
import { credentials } from "../content/content";

export default function Credentials() {
  return (
    <Section id="credentials" heading={credentials.heading}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Education
          </Typography>
          {credentials.education.map((e) => (
            <Paper key={e.degree} variant="outlined" sx={{ p: 2.5, mb: 2, borderColor: "divider", display: "flex", gap: 2 }}>
              <SchoolOutlinedIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Box>
                <Typography sx={{ fontWeight: 600, lineHeight: 1.4 }}>{e.degree}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {e.school}
                </Typography>
                <Typography variant="body2" sx={{ color: "primary.main", mt: 0.5 }}>
                  {e.period} · {e.detail}
                </Typography>
                {e.notes && (
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, lineHeight: 1.7 }}>
                    {e.notes}
                  </Typography>
                )}
              </Box>
            </Paper>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Certifications
          </Typography>
          {credentials.certifications.map((c) => (
            <Paper key={c.title} variant="outlined" sx={{ p: 2.5, mb: 2, borderColor: "divider", display: "flex", gap: 2 }}>
              <VerifiedOutlinedIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 600, lineHeight: 1.4 }}>{c.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {c.issuer}
                </Typography>
                {c.link && (
                  <Link href={c.link} target="_blank" rel="noreferrer" variant="body2">
                    View credential
                  </Link>
                )}
              </Box>
              {c.date && (
                <Typography variant="body2" sx={{ color: "primary.main", whiteSpace: "nowrap" }}>
                  {c.date}
                </Typography>
              )}
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}
