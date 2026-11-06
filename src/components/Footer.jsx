import { Box, Container, Typography } from "@mui/material";
import { profile } from "../content/content";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </Typography>
      </Container>
    </Box>
  );
}
