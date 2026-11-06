import { useState } from "react";
import { Box, Button, Chip, Collapse, Link, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Section from "./Section";
import { projects } from "../content/content";

const tagSx = { borderColor: "rgba(53,242,107,0.35)", color: "primary.main" };

function Tags({ tags }) {
  return (
    <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
      {tags.map((t) => (
        <Chip key={t} label={t} size="small" variant="outlined" sx={tagSx} />
      ))}
    </Stack>
  );
}

function Featured({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, md: 4 },
        mb: 3,
        borderColor: "rgba(53,242,107,0.3)",
        background: "linear-gradient(135deg, rgba(53,242,107,0.07), transparent 55%)",
      }}
    >
      <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: 2 }}>
        Featured
      </Typography>
      <Typography variant="h4" component="h3" sx={{ fontWeight: 800 }}>
        {project.title}
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>{project.subtitle}</Typography>
      <Typography sx={{ lineHeight: 1.8, mb: 2 }}>{project.summary}</Typography>
      <Tags tags={project.tags} />

      <Collapse in={open} unmountOnExit>
        <Box component="ul" sx={{ mt: 2.5, mb: 0, pl: 2.5, color: "text.secondary" }}>
          {project.highlights.map((h) => (
            <li key={h}>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {h}
              </Typography>
            </li>
          ))}
        </Box>
      </Collapse>

      <Stack direction="row" spacing={2} sx={{ mt: 2.5 }}>
        <Button
          size="small"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          endIcon={<ExpandMoreIcon sx={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} />}
        >
          {open ? "Show less" : "Read more"}
        </Button>
        {project.link && (
          <Button size="small" href={project.link} target="_blank" rel="noreferrer" endIcon={<OpenInNewIcon />}>
            Visit
          </Button>
        )}
      </Stack>
    </Paper>
  );
}

function Card({ project }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderColor: "divider",
        transition: "transform .2s, border-color .2s",
        "&:hover": { transform: "translateY(-4px)", borderColor: "rgba(53,242,107,0.4)" },
      }}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {project.date}
      </Typography>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
        {project.summary}
      </Typography>
      {project.highlights.length > 0 && (
        <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.5, color: "text.secondary" }}>
          {project.highlights.map((h) => (
            <li key={h}>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                {h}
              </Typography>
            </li>
          ))}
        </Box>
      )}
      <Box sx={{ mt: "auto", pt: 2 }}>
        <Tags tags={project.tags} />
        {project.link && (
          <Link href={project.link} target="_blank" rel="noreferrer" sx={{ display: "inline-block", mt: 1.5 }}>
            View project
          </Link>
        )}
      </Box>
    </Paper>
  );
}

export default function Projects() {
  const featured = projects.items.find((p) => p.featured);
  const rest = projects.items.filter((p) => p !== featured);
  return (
    <Section id="projects" heading={projects.heading}>
      {featured && <Featured project={featured} />}
      <Grid container spacing={3}>
        {rest.map((p) => (
          <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card project={p} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
