import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function Counter({ 
  value, 
  duration = 2, 
  className = "", 
  prefix = "", 
  suffix = "",
  decimals = 0 
}: CounterProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 18,
    stiffness: 120,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedValue = decimals > 0 
          ? latest.toFixed(decimals)
          : Math.floor(latest).toLocaleString();
        
        (ref.current as HTMLElement).textContent = `${prefix}${formattedValue}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      data-testid={`counter-${value}`}
    />
  );
}
