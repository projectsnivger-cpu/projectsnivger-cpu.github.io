import { Box, Container, Typography } from "@mui/material";
import { serif } from "../theme";

export function Accent({ children }) {
  return (
    <Box
      component="span"
      sx={{ fontFamily: serif, fontStyle: "italic", fontWeight: 500, color: "primary.main" }}
    >
      {children}
    </Box>
  );
}

export default function Section({ id, heading, children, sx }) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 11 }, ...sx }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", letterSpacing: 3, display: "block" }}
          >
            {heading.eyebrow}
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontFamily: serif }}>
            {heading.lead} <Accent>{heading.accent}</Accent>
          </Typography>
        </Box>
        {children}
      </Container>
    </Box>
  );
}
