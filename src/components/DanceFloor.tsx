import { useMemo } from "react";

export function DanceFloor() {
  const tiles = useMemo(() => {
    const cols = 14;
    const rows = 6;
    const colors = [
      "var(--disco-fuchsia)",
      "var(--disco-orange)",
      "var(--disco-gold)",
      "var(--disco-purple)",
      "var(--disco-cyan)",
    ];
    return Array.from({ length: cols * rows }).map((_, i) => ({
      color: colors[i % colors.length],
      delay: (i % cols) * 0.1 + Math.random(),
    }));
  }, []);

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
      style={{ perspective: "600px" }}
    >
      <div
        className="grid h-full w-full gap-1 p-1"
        style={{
          gridTemplateColumns: "repeat(14, 1fr)",
          transform: "rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      >
        {tiles.map((t, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              background: t.color,
              boxShadow: `0 0 14px ${t.color}`,
              animation: `floor-pulse 1.6s ease-in-out ${t.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, transparent, var(--disco-bg-deep))",
        }}
      />
    </div>
  );
}
