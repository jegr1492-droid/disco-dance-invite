import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { Curtains } from "@/components/Curtains";
import { Invitation } from "@/components/Invitation";
import { MusicPlayer } from "@/components/MusicPlayer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Disco Night 70's · Cumpleaños de Alma Delia" },
      {
        name: "description",
        content:
          "Invitación al cumpleaños de Alma Delia Garrido Del Valle. 12 de junio, 19:00 hrs en Salón Vikat. ¡Música disco de los 70!",
      },
      { property: "og:title", content: "Disco Night 70's · Cumpleaños de Alma Delia" },
      {
        property: "og:description",
        content: "12 de junio · 19:00 hrs · Salón Vikat. ¡Prepara tu mejor outfit setentero!",
      },
    ],
  }),
});

function Index() {
  const [introOpen, setIntroOpen] = useState(true);
  const [curtainActive, setCurtainActive] = useState(false);
  const [music, setMusic] = useState(false);

  const handleEnter = () => {
    setMusic(true);
    setCurtainActive(true);
    setTimeout(() => setIntroOpen(false), 200);
    setTimeout(() => setCurtainActive(false), 1700);
  };

  return (
    <main className="relative min-h-screen">
      <Invitation />
      <Curtains active={curtainActive} />
      <IntroScreen open={introOpen} onEnter={handleEnter} />
      {!introOpen && <MusicPlayer playing={music} onToggle={() => setMusic((m) => !m)} />}
    </main>
  );
}
