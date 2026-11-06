import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { contact, profile, resume } from "../content/content";
import { Accent } from "./Section";
import { serif } from "../theme";

function Portrait() {
  return (
    <Box
      sx={{
        width: { xs: 220, sm: 280, md: 320 },
        height: { xs: 300, sm: 380, md: 440 },
        borderRadius: "999px 999px 24px 24px",
        p: "6px",
        border: "2px solid",
        borderColor: "rgba(255,255,255,0.18)",
        position: "relative",
        boxShadow: "0 0 80px rgba(53,242,107,0.15)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
          background: "radial-gradient(circle at 30% 20%, #1c2a20, #0e1210 70%)",
        }}
      >
        {profile.photo ? (
          <Box
            component="img"
            src={profile.photo}
            alt={profile.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography sx={{ fontFamily: serif, fontSize: { xs: 64, md: 88 }, fontStyle: "italic", color: "primary.main" }}>
            {profile.initials}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        minHeight: { md: "88vh" },
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(900px 500px at 85% 30%, rgba(53,242,107,0.10), transparent 60%)",
      }}
    >
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          bottom: { xs: 8, md: 24 },
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: serif,
          fontSize: { xs: 56, md: 140 },
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.04)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        WELCOME
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 6 }}
        >
          <Box sx={{ maxWidth: 620, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: 3 }}>
              Hi, I'm {profile.name}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 40, sm: 54, md: 68 }, mt: 1 }}>
              {profile.tagline}
              <br />
              <Accent>{profile.taglineAccent}</Accent>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 3, fontSize: { xs: 16, md: 18 }, lineHeight: 1.7 }}>
              {profile.role}. {profile.intro}
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }} sx={{ mt: 3 }}>
              {profile.interests.map((i) => (
                <Chip key={i} label={i} variant="outlined" size="small" sx={{ borderColor: "rgba(255,255,255,0.18)" }} />
              ))}
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                href={resume.file}
                download={resume.downloadName}
                startIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                href={`mailto:${contact.email}`}
                startIcon={<MailOutlineIcon />}
                sx={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Contact me
              </Button>
            </Stack>
          </Box>

          <Portrait />
        </Stack>
      </Container>
    </Box>
  );
}
