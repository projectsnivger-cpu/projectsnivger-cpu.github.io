import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { contact, resume } from "../content/content";
import { C } from "../theme";

const now = () => {
  const d = new Date();
  return `${d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })} ${d.toLocaleDateString("en-GB")}`;
};

// Status bar: "find me in:" links on the left, live clock on the right.
export default function Footer() {
  const [time, setTime] = useState(now);
  useEffect(() => {
    const t = setInterval(() => setTime(now()), 30000);
    return () => clearInterval(t);
  }, []);

  const cells = [
    { label: "Email", href: `mailto:${contact.email}`, icon: <EmailOutlinedIcon /> },
    { label: "Phone", href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: <PhoneOutlinedIcon /> },
    contact.linkedin && { label: "LinkedIn", href: contact.linkedin, icon: <LinkedInIcon />, external: true },
    { label: "Download resume", href: resume.file, download: resume.downloadName, icon: <FileDownloadOutlinedIcon /> },
  ].filter(Boolean);

  return (
    <Box
      component="footer"
      sx={{
        flexShrink: 0,
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        height: 36,
        bgcolor: C.panel,
        borderTop: `1px solid ${C.border}`,
        fontSize: 11.5,
        color: C.comment,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "stretch" }}>
        <Typography sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", px: 2, fontSize: "inherit" }}>
          find me in:
        </Typography>
        {cells.map((c) => (
          <Box
            key={c.label}
            component="a"
            href={c.href}
            aria-label={c.label}
            title={c.label}
            {...(c.download ? { download: c.download } : {})}
            {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            sx={{
              display: "grid",
              placeItems: "center",
              width: 40,
              color: "inherit",
              borderLeft: `1px solid ${C.border}`,
              "&:last-of-type": { borderRight: `1px solid ${C.border}` },
              "&:hover": { color: C.amber, bgcolor: "rgba(255,255,255,0.03)" },
              "& svg": { fontSize: 16 },
            }}
          >
            {c.icon}
          </Box>
        ))}
      </Box>
      <Typography sx={{ display: "flex", alignItems: "center", px: 2, fontSize: "inherit" }}>{time}</Typography>
    </Box>
  );
}
