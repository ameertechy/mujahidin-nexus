import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Cloud,
  Network,
  HardDrive,
  ShieldCheck,
  Server,
  Database,
} from "lucide-react";

type IconDef = {
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
  label: string; // used only for aria-label
};

const techItems: IconDef[] = [
  {
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    label: "Azure and M365",
  },
  {
    icon: Network,
    color: "from-emerald-500 to-teal-500",
    label: "AD, DNS, DHCP networking",
  },
  {
    icon: Server,
    color: "from-violet-500 to-indigo-500",
    label: "VMware and Hyper-V servers",
  },
  {
    icon: HardDrive,
    color: "from-cyan-500 to-sky-500",
    label: "SAN and NAS storage",
  },
  {
    icon: ShieldCheck,
    color: "from-fuchsia-500 to-purple-600",
    label: "Firewall and endpoint security",
  },
  {
    icon: Database,
    color: "from-amber-500 to-orange-500",
    label: "Backup, DR and databases",
  },
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
          const Icon = item.icon;
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
              <div
                className={`flex items-center justify-center rounded-3xl w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} shadow-lg shadow-primary/30 border border-white/20 backdrop-blur-sm`}
                aria-label={item.label}
              >
                <Icon className="text-white" size={26} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechOrbits;
