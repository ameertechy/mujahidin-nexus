import { motion } from "framer-motion";

const techItems = [
  { label: "Azure / M365", color: "from-sky-500 to-blue-600" },
  { label: "AD · DNS · DHCP", color: "from-emerald-500 to-teal-500" },
  { label: "VMware · Hyper-V", color: "from-violet-500 to-indigo-500" },
  { label: "SAN / NAS Storage", color: "from-cyan-500 to-sky-500" },
  { label: "Firewall & EDR", color: "from-fuchsia-500 to-purple-600" },
  { label: "Backup & DR (Veeam)", color: "from-amber-500 to-orange-500" },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    x: [0, i % 2 === 0 ? 8 : -8, 0],
    transition: {
      duration: 3 + i * 0.4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

const HeroTechOrbits = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-80">
        {techItems.map((item, index) => {
          const radius = 80 + index * 22;
          const angle = (index / techItems.length) * Math.PI * 2;
          const left = 50 + (radius * Math.cos(angle)) / 4;
          const top = 50 + (radius * Math.sin(angle)) / 4;

          return (
            <motion.div
              key={item.label}
              custom={index}
              variants={floatVariants}
              animate="animate"
              className="absolute"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="rounded-2xl px-4 py-2 bg-gradient-to-br shadow-lg shadow-primary/20 border border-white/10 backdrop-blur-sm text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechOrbits;
