import { useEffect, useRef } from "react";
import { Music, Pause } from "lucide-react";

// "You Should Be Dancing" - Bee Gees
const VIDEO_ID = "_JoZS6LgqYI";

export function MusicPlayer({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const cmd = playing ? "playVideo" : "pauseVideo";
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: cmd, args: [] }),
      "*",
    );
  }, [playing]);

  return (
    <>
      <div className="pointer-events-none fixed -z-10 h-0 w-0 overflow-hidden opacity-0">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          title="music"
        />
      </div>
      <button
        onClick={onToggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
        style={{
          background: "var(--gradient-neon)",
          boxShadow: "0 0 20px var(--disco-fuchsia), 0 0 40px var(--disco-purple)",
        }}
      >
        {playing ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
      </button>
    </>
  );
}
