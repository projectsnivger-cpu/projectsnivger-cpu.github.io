import { Box, Typography } from "@mui/material";
import { Pane, cardSx } from "./Section";
import { skills } from "../content/content";
import { C } from "../theme";

// "ML & AI Frameworks" -> mlAiFrameworks
const camel = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^./, (c) => c.toLowerCase());

export default function Skills() {
  const { heading, groups } = skills;
  return (
    <Pane title={`${heading.lead} ${heading.accent}`}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gap: 3 }}>
        {groups.map((g) => (
          <Box key={g.title} sx={{ ...cardSx, p: 2.25, fontSize: 12.5, lineHeight: 1.9, minWidth: 0 }}>
            <Typography component="h3" sx={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              {g.title}
            </Typography>
            <Box>
              <Box component="span" sx={{ color: C.red }}>
                const{" "}
              </Box>
              <Box component="span" sx={{ color: C.blue }}>
                {camel(g.title)}
              </Box>
              <Box component="span" sx={{ color: C.comment }}>
                {" = ["}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 1.25, pl: 3, borderLeft: `1px solid ${C.border}`, ml: 0.5 }}>
              {g.items.map((s) => (
                <Box key={s} component="span" sx={{ color: C.amber, whiteSpace: "nowrap" }}>
                  "{s}"
                  <Box component="span" sx={{ color: C.comment }}>
                    ,
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ color: C.comment }}>];</Box>
          </Box>
        ))}
      </Box>
    </Pane>
  );
}
