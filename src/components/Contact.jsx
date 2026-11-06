import { Box, Typography } from "@mui/material";
import { Pane, barSx, cardSx, wrapText } from "./Section";
import { contact, contactSection, resume } from "../content/content";
import { C } from "../theme";

export default function Contact() {
  const { heading, message } = contactSection;
  const fields = [
    { key: "email", value: contact.email, href: `mailto:${contact.email}` },
    { key: "phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { key: "linkedin", value: contact.linkedin, href: contact.linkedin, external: true },
  ].filter((f) => f.value);

  return (
    <Pane title={`${heading.lead} ${heading.accent}`}>
      <Box sx={{ ...cardSx, p: { xs: 2.25, md: 3.5 }, maxWidth: 640, fontSize: { xs: 12.5, md: 14 }, lineHeight: 2 }}>
        <Box sx={{ color: C.comment, mb: 1.5 }}>
          {["/**", ...wrapText(message, 56).map((l) => ` * ${l}`), " */"].map((l, i) => (
            <Box key={i} sx={{ whiteSpace: "pre-wrap" }}>
              {l}
            </Box>
          ))}
        </Box>

        <Box>
          <Box component="span" sx={{ color: C.red }}>
            const{" "}
          </Box>
          <Box component="span" sx={{ color: C.blue }}>
            contact
          </Box>
          <Box component="span" sx={{ color: C.comment }}>
            {" = {"}
          </Box>
        </Box>
        {fields.map((f) => (
          <Box key={f.key} sx={{ pl: 3, overflowWrap: "anywhere" }}>
            <Box component="span" sx={{ color: C.text }}>
              {f.key}
            </Box>
            <Box component="span" sx={{ color: C.comment }}>
              :{" "}
            </Box>
            <Box
              component="a"
              href={f.href}
              {...(f.external ? { target: "_blank", rel: "noreferrer" } : {})}
              sx={{ color: C.amber, textDecorationColor: "rgba(212,160,60,0.4)", "&:hover": { textDecorationColor: C.amber } }}
            >
              "{f.value}"
            </Box>
            <Box component="span" sx={{ color: C.comment }}>
              ,
            </Box>
          </Box>
        ))}
        <Box sx={{ color: C.comment }}>{"};"}</Box>

        <Box component="a" href={resume.file} download={resume.downloadName} sx={{ ...barSx, mt: 2.5, maxWidth: 320 }}>
          download resume
        </Box>
      </Box>
    </Pane>
  );
}
