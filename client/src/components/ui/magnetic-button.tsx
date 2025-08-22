import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";
import { Button } from "./button";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
  onClick?: () => void;
  disabled?: boolean;
  testId?: string;
}

export default function MagneticButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  testId,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ transform }}>
      <motion.div
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          ref={ref}
          className={`transition-all duration-200 ${className}`}
          variant={variant}
          size={size}
          onClick={onClick}
          disabled={disabled}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          data-testid={testId}
        >
          {children}
        </Button>
      </motion.div>
    </motion.div>
  );
}