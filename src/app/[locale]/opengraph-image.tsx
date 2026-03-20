import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#507a00",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: "bold",
          margin: 0,
          letterSpacing: "-1px",
        }}
      >
        Kitsuya Azuma
      </p>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.75)",
          fontSize: 36,
          margin: 0,
        }}
      >
        Software Engineer / Engineering Student
      </p>
    </div>,
    { ...size },
  );
}
