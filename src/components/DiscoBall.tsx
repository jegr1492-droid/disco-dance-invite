import discoBall from "@/assets/disco-ball.png";

export function DiscoBall({ size = 280 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, var(--disco-fuchsia), transparent 70%)" }}
      />
      <img
        src={discoBall}
        alt="Disco ball"
        width={size}
        height={size}
        className="disco-spin disco-glow relative z-10"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
