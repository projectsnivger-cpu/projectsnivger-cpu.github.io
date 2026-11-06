import { Box, Tab, Tabs, Typography } from "@mui/material";
import { navLinks, profile } from "../content/content";
import { C } from "../theme";

// Window title bar + editor tabs.
export default function Navbar({ active, onChange }) {
  const current = navLinks.find((l) => l.id === active) ?? navLinks[0];
  const title = current.slug ? `${profile.handle}_${current.slug}` : profile.handle;

  return (
    <Box component="header" sx={{ flexShrink: 0, bgcolor: C.panel, borderBottom: `1px solid ${C.border}` }}>
      <Box sx={{ position: "relative", display: "flex", alignItems: "center", height: 34, px: 1.75 }}>
        <Box aria-hidden sx={{ display: "flex", gap: 0.75 }}>
          {["#e06c75", "#e5c07b", "#98c379"].map((c) => (
            <Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: c, opacity: 0.85 }} />
          ))}
        </Box>
        <Typography
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 12,
            color: C.muted,
            pointerEvents: "none",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Tabs
        value={active}
        onChange={(_, v) => onChange(v)}
        variant="scrollable"
        scrollButtons={false}
        aria-label="Sections"
        TabIndicatorProps={{ style: { top: 0, bottom: "auto", height: 2, backgroundColor: C.red } }}
        sx={{ minHeight: 40, borderTop: `1px solid ${C.border}` }}
      >
        {navLinks.map((l) => (
          <Tab
            key={l.id}
            value={l.id}
            label={l.label}
            id={`tab-${l.id}`}
            aria-controls="panel"
            sx={{
              minHeight: 40,
              minWidth: 0,
              px: { xs: 2, md: 3.5 },
              fontSize: 12,
              color: C.comment,
              borderRight: `1px solid ${C.border}`,
              "&:hover": { color: C.text },
              "&.Mui-selected": { color: C.amber, bgcolor: C.window },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
