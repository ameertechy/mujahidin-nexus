import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Cloud,
  Network,
  HardDrive,
  ShieldCheck,
  Server,
} from "lucide-react";

// Import your SVG logos (paths use your folder + filenames)
import azureLogo from "@/assets/logos/Microsoft_Azure.svg";
import m365Logo from "@/assets/logos/Microsoft_365_(2022).svg";
import vmwareLogo from "@/assets/logos/vmware-1.svg";
import fortinetLogo from "@/assets/logos/Fortinet_logo.svg";
import gwsLogo from "@/assets/logos/Google_Workspace_Logo.svg";
import linuxLogo from "@/assets/logos/linux.svg";
import windowsServerLogo from "@/assets/logos/Windows_Server_logo.svg";
import sqlServerLogo from "@/assets/logos/microsoft-sql-server-logo.svg";
import mysqlLogo from "@/assets/logos/mysql-official.svg";
import moodleLogo from "@/assets/logos/Moodle-logo.svg";
import datacenterLogo from "@/assets/logos/data-center.svg";
import devopsLogo from "@/assets/logos/devops-2.svg";

type Item =
  | {
      kind: "icon";
      icon: ComponentType<{ size?: number; className?: string }>;
      color: string;
      label: string;
    }
  | {
      kind: "image";
      image: string;
      color: string;
      label: string;
    };

// Mix of Lucide icons + your real logos
const techItems: Item[] = [
  { kind: "image", image: azureLogo, color: "from-sky-500 to-blue-600", label: "Microsoft Azure" },
  { kind: "image", image: m365Logo, color: "from-cyan-400 to-sky-500", label: "Microsoft 365" },
  { kind: "image", image: vmwareLogo, color: "from-emerald-500 to-teal-500", label: "VMware" },
  { kind: "image", image: windowsServerLogo, color: "from-indigo-500 to-blue-700", label: "Windows Server" },
  { kind: "image", image: linuxLogo, color: "from-yellow-500 to-orange-500", label: "Linux" },
  { kind: "image", image: gwsLogo, color: "from-pink-500 to-purple-500", label: "Google Workspace" },
  { kind: "image", image: sqlServerLogo, color: "from-red-500 to-rose-600", label: "SQL Server" },
  { kind: "image", image: mysqlLogo, color: "from-sky-500 to-teal-500", label: "MySQL" },
  { kind: "image", image: moodleLogo, color: "from-amber-500 to-orange-500", label: "Moodle LMS" },
  { kind: "image", image: fortinetLogo, color: "from-rose-500 to-red-600", label: "Fortinet Firewall" },
  { kind: "image", image: datacenterLogo, color: "from-slate-500 to-slate-700", label: "Datacenter" },
  { kind: "image", image: devopsLogo, color: "from-fuchsia-500 to-purple-600", label: "DevOps / CI/CD" },

  // A few Lucide icons to complement
  { kind: "icon", icon: Cloud, color: "from-sky-500 to-blue-600", label: "Cloud services" },
  { kind: "icon", icon: Network, color: "from-emerald-500 to-lime-500", label: "Networking" },
  { kind: "icon", icon: HardDrive, color: "from-cyan-500 to-sky-500", label: "Storage" },
  { kind: "icon", icon: ShieldCheck, color: "from-fuchsia-500 to-purple-600", label: "Security & EDR" },
  { kind: "icon", icon: Server, color: "from-indigo-500 to-violet-500", label: "Servers & VMs" },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    x: [0, i % 2 === 0 ? 10 : -10, 0],
    transition: {
      duration: 3 + i * 0.3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

const HeroTechOrbits = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
      {/* Bigger area so icons sit OUTSIDE the text area */}
      <div className="relative w-full max-w-5xl h-[26rem]">
        {techItems.map((item, index) => {
          // Push icons further away from centre so they don’t cover text
          const radius = 140 + (index % 8) * 22;
          const angle = (index / techItems.length) * Math.PI * 2;
          const left = 50 + (radius * Math.cos(angle)) / 2.2;
          const top = 50 + (radius * Math.sin(angle)) / 2.0;

          return (
            <motion.div
              key={item.label + index}
              custom={index}
              variants={floatVariants}
              animate="animate"
              className="absolute"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div
                className={`flex items-center justify-center rounded-3xl w-12 h-12 md:w-14 md:h-14
                  bg-gradient-to-br ${item.color} shadow-lg shadow-primary/25 border border-white/15
                  backdrop-blur-sm opacity-90`}
                aria-label={item.label}
              >
                {item.kind === "icon" ? (
                  <item.icon className="text-white" size={22} />
                ) : (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-7 h-7 md:w-8 md:h-8 object-contain drop-shadow"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechOrbits;
