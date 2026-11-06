import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { navLinks, profile, resume } from "../content/content";
import { serif } from "../theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, gap: 2 }}>
            <Typography
              onClick={() => go("home")}
              sx={{ fontFamily: serif, fontWeight: 700, fontSize: 24, cursor: "pointer", flexGrow: 1 }}
            >
              {profile.initials}
              <Box component="span" sx={{ color: "primary.main" }}>.</Box>
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
              {navLinks.map((l) => (
                <Button key={l.id} color="inherit" onClick={() => go(l.id)} sx={{ px: 1.5, color: "text.secondary", "&:hover": { color: "primary.main", bgcolor: "transparent" } }}>
                  {l.label}
                </Button>
              ))}
              <Button
                variant="contained"
                size="small"
                href={resume.file}
                download={resume.downloadName}
                startIcon={<DownloadIcon />}
                sx={{ ml: 1.5 }}
              >
                Resume
              </Button>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ mb: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((l) => (
              <ListItemButton key={l.id} onClick={() => go(l.id)}>
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            variant="contained"
            href={resume.file}
            download={resume.downloadName}
            startIcon={<DownloadIcon />}
            sx={{ mt: 2 }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
      <Toolbar sx={{ minHeight: 64 }} />
    </>
  );
}
