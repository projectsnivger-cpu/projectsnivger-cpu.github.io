import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DownloadIcon from "@mui/icons-material/Download";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "./Section";
import { contact, contactSection, resume } from "../content/content";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: <EmailOutlinedIcon /> },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: <PhoneOutlinedIcon /> },
  { label: "LinkedIn", value: "Connect with me", href: contact.linkedin, icon: <LinkedInIcon />, external: true },
].filter((c) => c.href);

export default function Contact() {
  return (
    <Section id="contact" heading={contactSection.heading} sx={{ bgcolor: "#0d0f0e" }}>
      <Typography sx={{ color: "text.secondary", textAlign: "center", maxWidth: 560, mx: "auto", mb: 5, lineHeight: 1.8 }}>
        {contactSection.message}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {channels.map((c) => (
          <Grid key={c.label} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              variant="outlined"
              component="a"
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                textDecoration: "none",
                color: "inherit",
                borderColor: "divider",
                transition: "border-color .2s, transform .2s",
                "&:hover": { borderColor: "rgba(53,242,107,0.5)", transform: "translateY(-3px)" },
              }}
            >
              <Box sx={{ color: "primary.main", display: "flex" }}>{c.icon}</Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {c.label}
                </Typography>
                <Typography sx={{ fontWeight: 600, overflowWrap: "anywhere" }}>{c.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" sx={{ mt: 5 }}>
        <Button variant="contained" size="large" href={resume.file} download={resume.downloadName} startIcon={<DownloadIcon />}>
          Download Resume
        </Button>
      </Stack>
    </Section>
  );
}
