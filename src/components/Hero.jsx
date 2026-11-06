import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { profile, projects, resume, terminal } from "../content/content";
import { barSx, cardSx, fadeSx } from "./Section";
import { C } from "../theme";

// Command → tab id
const COMMANDS = {
  whois: "about",
  about: "about",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  credentials: "credentials",
  contact: "contact",
};

function downloadResume() {
  const a = document.createElement("a");
  a.href = resume.file;
  a.download = resume.downloadName;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function Photo() {
  const { photos, photoTiming } = profile;
  const [failed, setFailed] = useState([]);
  const [tick, setTick] = useState(0);
  const list = photos.filter((p) => !failed.includes(p));
  const fade = photoTiming.fadeMs;
  const period = photoTiming.holdMs + fade;

  // Move to the next photo every (hold + fade) ms, so each one is fully visible
  // for `holdMs` and then blends into the next over `fadeMs`.
  useEffect(() => {
    if (list.length < 2) return undefined;
    const t = setInterval(() => setTick((n) => n + 1), period);
    return () => clearInterval(t);
  }, [list.length, period]);

  const box = { width: "100%", height: { xs: 300, md: 330 }, borderRadius: "6px", overflow: "hidden" };

  if (list.length === 0) {
    return (
      <Box
        sx={{
          ...box,
          display: "grid",
          placeItems: "center",
          background: "radial-gradient(circle at 30% 20%, #1b2a3f, #0b1019 70%)",
        }}
      >
        <Typography sx={{ color: C.amber, fontSize: 56, fontWeight: 500 }}>{profile.initials}</Typography>
      </Box>
    );
  }

  const current = list[tick % list.length];
  return (
    <Box sx={{ ...box, position: "relative", bgcolor: "#0b1019" }}>
      {list.map((src) => {
        const isCurrent = src === current;
        return (
          <Box
            key={src}
            component="img"
            src={src}
            alt={isCurrent ? profile.name : ""}
            aria-hidden={!isCurrent}
            draggable={false}
            onError={() => setFailed((f) => [...f, src])}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              // The incoming photo fades in on top. The outgoing one stays fully visible
              // underneath until the fade ends, then drops to 0, so there is no dip.
              opacity: isCurrent ? 1 : 0,
              zIndex: isCurrent ? 2 : 0,
              transition: isCurrent ? `opacity ${fade}ms ease-in-out` : `opacity 0s linear ${fade}ms`,
              "@media (prefers-reduced-motion: reduce)": { transition: "none" },
            }}
          />
        );
      })}
    </Box>
  );
}

function ProfileCard() {
  const behind = [
    { p: projects.items[2], top: 0, scale: 0.88, opacity: 0.25 },
    { p: projects.items[1], top: 24, scale: 0.94, opacity: 0.5 },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        pt: { md: 6 },
        width: "100%",
        maxWidth: 380,
        mx: { xs: "auto", md: 0 },
        justifySelf: { md: "end" },
      }}
    >
      {behind.map(
        ({ p, top, scale, opacity }) =>
          p && (
            <Box
              key={p.title}
              aria-hidden
              sx={{
                ...cardSx,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                gap: 2,
                position: "absolute",
                top,
                left: 0,
                right: 0,
                p: 1.25,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                opacity,
              }}
            >
              <Typography noWrap sx={{ color: C.amber, fontSize: 12 }}>
                {p.title}
              </Typography>
              <Typography sx={{ color: C.muted, fontSize: 11, flexShrink: 0 }}>{p.date}</Typography>
            </Box>
          )
      )}

      <Box
        sx={{
          ...cardSx,
          position: "relative",
          bgcolor: "#0d121a",
          p: 2,
          boxShadow: "0 20px 60px rgba(0,0,0,.5), 0 0 80px rgba(60,110,180,.12)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
          <Typography sx={{ color: C.amber, fontSize: 13 }}>profile.jpg</Typography>
          <Typography sx={{ color: C.muted, fontSize: 12 }}>{profile.role}</Typography>
        </Box>
        <Box sx={{ bgcolor: C.code, border: `1px solid ${C.border}`, borderRadius: "6px", p: 1 }}>
          <Photo />
          <Box component="a" href={resume.file} download={resume.downloadName} sx={{ ...barSx, mt: 1 }}>
            download resume
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function Hero({ onNavigate }) {
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState("");
  const inputRef = useRef(null);

  const run = () => {
    const cmd = value.trim().toLowerCase() || terminal.command;
    if (cmd === "resume") {
      downloadResume();
      setMsg("");
    } else if (COMMANDS[cmd]) {
      setMsg("");
      onNavigate(COMMANDS[cmd]);
    } else {
      setMsg(`command not found: ${cmd}. try: ${[...Object.keys(COMMANDS), "resume"].join(", ")}`);
    }
    setValue("");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
        gap: { xs: 5, md: 6 },
        alignItems: "center",
        minHeight: "100%",
        p: { xs: 3, md: 7 },
        boxSizing: "border-box",
        ...fadeSx,
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ color: C.text, fontSize: 13 }}>{profile.greeting}</Typography>
        <Typography
          component="h1"
          sx={{
            color: "#fff",
            fontSize: { xs: 30, sm: 42, md: 50 },
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
            mt: 0.5,
            overflowWrap: "anywhere",
          }}
        >
          {profile.name}
        </Typography>
        <Typography sx={{ color: C.blue, fontSize: { xs: 15, md: 18 }, mt: 1 }}>{profile.role}</Typography>
        <Typography sx={{ color: C.comment, fontSize: 12, mt: 2.5, lineHeight: 1.8 }}>
          {"// "}
          {profile.interests.join(" · ")}
        </Typography>

        <Box sx={{ mt: { xs: 5, md: 10 } }}>
          <Typography sx={{ color: C.text, fontSize: 12, mb: 1 }}>{terminal.prompt}</Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              run();
            }}
            onClick={() => inputRef.current?.focus()}
            sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
          >
            <Box component="span" aria-hidden sx={{ color: C.blue, fontSize: { xs: 15, md: 16 } }}>
              {">"}
            </Box>
            <Box
              component="input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={terminal.command}
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              sx={{
                flex: 1,
                minWidth: 0,
                background: "transparent",
                border: 0,
                borderBottom: "1px solid transparent",
                outline: 0,
                color: C.text,
                fontFamily: "inherit",
                fontSize: { xs: 15, md: 16 },
                caretColor: C.purple,
                "&::placeholder": { color: C.muted, opacity: 1 },
                "&:focus": { borderBottomColor: C.border },
              }}
            />
          </Box>
          <Typography role="status" sx={{ color: msg ? C.red : C.muted, fontSize: 11.5, mt: 1, minHeight: 18 }}>
            {msg || "press Enter to run · try: whois, projects, contact, resume"}
          </Typography>
        </Box>
      </Box>

      <ProfileCard />
    </Box>
  );
}
