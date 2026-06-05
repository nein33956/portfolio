/** Nền aurora với các khối blur động — tạo chiều sâu thị giác */
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="aurora animate-floaty"
        style={{
          width: 420,
          height: 420,
          top: -120,
          left: -80,
          background:
            "radial-gradient(circle at 30% 30%, #22d3ee, transparent 70%)",
        }}
      />
      <div
        className="aurora animate-floaty"
        style={{
          width: 380,
          height: 380,
          top: 60,
          right: -100,
          animationDelay: "1.5s",
          background:
            "radial-gradient(circle at 70% 30%, #818cf8, transparent 70%)",
        }}
      />
      <div
        className="aurora animate-floaty"
        style={{
          width: 360,
          height: 360,
          bottom: -140,
          left: "40%",
          animationDelay: "3s",
          background:
            "radial-gradient(circle at 50% 50%, #2dd4bf, transparent 70%)",
        }}
      />
    </div>
  );
}
