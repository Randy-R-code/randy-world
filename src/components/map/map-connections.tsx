"use client";

import { connections, zones } from "@/lib/data";
import { motion } from "framer-motion";

export function MapConnections() {
  const zoneMap = Object.fromEntries(zones.map((z) => [z.id, z]));

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map(([fromId, toId], i) => {
        const from = zoneMap[fromId];
        const to = zoneMap[toId];
        return (
          <motion.path
            key={`${fromId}-${toId}`}
            d={`M ${from.position.x} ${from.position.y} L ${to.position.x} ${to.position.y}`}
            stroke="#22d3ee"
            strokeWidth="0.25"
            strokeOpacity="0.25"
            strokeDasharray="1.5 2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.15 + 0.8,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}
