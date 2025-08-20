import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({ 
  children, 
  speed = 25, 
  direction = "left", 
  pauseOnHover = true, 
  className = "" 
}: MarqueeProps) {
  const directionClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`flex whitespace-nowrap ${directionClass}`}
        style={{
          animationDuration: `${speed}s`,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        <div className="flex items-center space-x-12 mx-6">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center space-x-12 mx-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
