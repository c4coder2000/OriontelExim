import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TradeArc {
  id: string;
  startAngle: number;
  endAngle: number;
  delay: number;
}

export default function Globe() {
  const [arcs] = useState<TradeArc[]>([
    { id: "1", startAngle: 0, endAngle: 120, delay: 0 },
    { id: "2", startAngle: 45, endAngle: 180, delay: 0.5 },
    { id: "3", startAngle: 90, endAngle: 270, delay: 1 },
    { id: "4", startAngle: 135, endAngle: 315, delay: 1.5 },
    { id: "5", startAngle: 180, endAngle: 45, delay: 2 },
  ]);

  const longitudeLines = Array.from({ length: 12 }, (_, i) => i * 15);

  return (
    <div className="relative w-96 h-96 mx-auto" data-testid="interactive-globe">
      <motion.div
        className="w-full h-full rounded-full relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.3), rgba(0, 212, 255, 0.2))",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          scale: [0.96, 1, 0.96],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Rotating background gradient */}
        <motion.div
          className="absolute -inset-1/2 w-[200%] h-[200%]"
          style={{
            background: "conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Longitude lines */}
        {longitudeLines.map((angle, index) => (
          <motion.div
            key={`longitude-${angle}`}
            className="absolute w-px h-full left-1/2 top-0"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transformOrigin: "center bottom",
              transform: `translateX(-50%) rotateY(${angle}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}

        {/* Trade arcs */}
        {arcs.map((arc) => (
          <motion.div
            key={arc.id}
            className="absolute"
            style={{
              width: "200px",
              height: "100px",
              border: "2px solid transparent",
              borderImage: "linear-gradient(135deg, #7C3AED, #00D4FF) 1",
              borderRadius: "100px 100px 0 0",
              borderBottom: "none",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) rotate(${arc.startAngle}deg)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: arc.delay,
              ease: "easeInOut",
            }}
          >
            {/* Traveling dot */}
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #00D4FF)",
                boxShadow: "0 0 10px #7C3AED",
              }}
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: arc.delay,
              }}
              style={{
                offsetPath: `path("M 0 100 Q 100 0 200 100")`,
              }}
            />
          </motion.div>
        ))}

        {/* Center glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent 70%)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
