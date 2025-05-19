"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    sunlit?: {
      toggle?: () => void;
    };
  }
}

export default function Sunlit() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Add animation-ready class for transition
    document.body.classList.add("animation-ready");

    // Set dark/light class based on theme
    if (resolvedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [resolvedTheme]);

  return (
    <div id="dappled-light">
      <div id="glow" />
      <div id="glow-bounce" />
      <div className="perspective">
        <div id="leaves">
          <svg style={{ width: 0, height: 0, position: "absolute" }}>
            <defs>
              <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                  <animate
                    attributeName="baseFrequency"
                    dur="16s"
                    keyTimes="0;0.33;0.66;1"
                    values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic">
                  <animate
                    attributeName="scale"
                    dur="20s"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="45;55;75;55;45"
                    repeatCount="indefinite"
                  />
                </feDisplacementMap>
              </filter>
            </defs>
          </svg>
        </div>
        <div id="blinds">
          <div className="shutters">
            {Array.from({ length: 23 }).map((_, i) => (
              <div key={i} className="shutter" />
            ))}
          </div>
          <div className="vertical">
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
      <div id="progressive-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
