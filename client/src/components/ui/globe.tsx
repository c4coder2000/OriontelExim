import { motion } from "framer-motion";

export default function Earth() {
    return (
        <div className="relative w-[420px] h-[420px] mx-auto">
            {/* Earth sphere */}
            <motion.div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(0,0,0,0.9))",
                    boxShadow:
                        "inset -20px -20px 60px rgba(0,0,0,0.7), 0 0 80px rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.2)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Continent outlines */}
                <motion.div
                    className="absolute inset-0 opacity-45"
                    style={{
                        backgroundImage:
                            "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "invert(1) contrast(1.2) brightness(1.1)", // sharper outlines
                        mixBlendMode: "screen",
                    }}
                    animate={{ backgroundPositionX: ["0%", "100%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Soft atmosphere glow */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
                    }}
                    animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
}
