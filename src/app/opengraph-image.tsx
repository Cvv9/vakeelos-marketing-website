import { ImageResponse } from "next/og";

export const alt = "VakeelOS — Practice management for the Indian bar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#FBF8F0";
const PAPER_2 = "#F4F0E2";
const INK = "#0E1626";
const INK_2 = "#34384B";
const INK_3 = "#525569";
const RULE = "#D2C9B6";
const SAFFRON = "#D38427";
const SAFFRON_DEEP = "#9F4E15";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          fontFamily: "Inter, sans-serif",
          color: INK,
          padding: "72px 88px",
          position: "relative",
        }}
      >
        {/* Top rule with saffron accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 220,
            height: 6,
            background: SAFFRON,
          }}
        />

        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ width: 14, height: 14, background: SAFFRON }} />
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: -0.4,
              color: INK,
              display: "flex",
            }}
          >
            <span>Vakeel</span>
            <span style={{ color: SAFFRON }}>OS</span>
          </div>
          <div
            style={{
              marginLeft: 18,
              paddingLeft: 18,
              borderLeft: `1px solid ${RULE}`,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: 3.4,
              textTransform: "uppercase",
              color: INK_3,
            }}
          >
            Practice management · Indian bar
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 88,
            maxWidth: 1024,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: -2.5,
              color: INK,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>The operating system&nbsp;</span>
            <span style={{ color: SAFFRON_DEEP, fontStyle: "italic" }}>
              for India&rsquo;s advocates.
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.45,
              color: INK_2,
              maxWidth: 880,
            }}
          >
            Cases, causelists, drafting, and UPI billing — built around CNR numbers,
            APHC/TSHC pulls, and the Indian bar.
          </div>
        </div>

        {/* Bottom strip — fact chips */}
        <div
          style={{
            position: "absolute",
            left: 88,
            right: 88,
            bottom: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: `1px solid ${RULE}`,
          }}
        >
          {[
            { stat: "1.8M", label: "advocates in India" },
            { stat: "Mumbai", label: "India · single region" },
            { stat: "AES-256", label: "encryption at rest" },
            { stat: "Bar Council", label: "verified profiles" },
          ].map((f, i) => (
            <div
              key={f.stat}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: i === 0 ? 0 : 22,
                borderLeft: i === 0 ? "none" : `1px solid ${RULE}`,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: INK,
                  letterSpacing: -0.6,
                }}
              >
                {f.stat}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: INK_3,
                  letterSpacing: 0.2,
                }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>

        {/* soft saffron glow at top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            background: PAPER_2,
            borderRadius: 9999,
            opacity: 0.7,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
