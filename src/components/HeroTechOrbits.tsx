import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Cloud, Network, HardDrive, ShieldCheck, Server } from "lucide-react";

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
      label: string;
    }
  | {
      kind: "image";
      image: string;
      label: string;
    };

// mix of your logos + some generic infra icons
const techItems: Item[] = [
  { kind: "image", image: azureLogo, label: "Microsoft Azure" },
  { kind: "image", image: m365Logo, label: "Microsoft 365" },
  { kind: "image", image: vmwareLogo, label: "VMware" },
  { kind: "image", image: windowsServerLogo, label: "Windows Server" },
  { kind: "image", image: linuxLogo, label: "Linux" },
  { kind: "image", image: gwsLogo, label: "Google Workspace" },
  { kind: "image", image: sqlServerLogo, label: "SQL Server" },
  { kind: "image", image: mysqlLogo, label: "MySQL" },
  { kind: "image", image: moodleLogo, label: "Moodle LMS" },
  { kind: "image", image: fortinetLogo, label: "Fortinet Firewall" },
  { kind: "image", image: datacenterLogo, label: "Datacenter" },
  { kind: "image", image: devopsLogo, label: "DevOps / CI/CD" },
  { kind: "icon", icon: Cloud, label: "Cloud Services" },
  { kind: "icon", icon: Network, label: "Networking" },
  { kind: "icon", icon: HardDrive, label: "Storage" },
  { kind: "icon", icon: ShieldCheck, label: "Security & EDR" },
  { kind: "icon", icon: Server, label: "Servers & VMs" },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -8, 0],
    x: [0, i % 2 === 0 ? 6 : -6, 0],
    transition: {
      duration: 3 + i * 0.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

const HeroTechOrbits = () => {
  // radius in pixels – tuned so icons sit close to hero text area
  const baseRadius = 140; // distance from center
  const radiusJitter = 30;

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
      <div className="relative w-full max-w-5xl h-[22rem]">
        {techItems.map((item, index) => {
          const angle = (index / techItems.length) * Math.PI * 2;
          const radius = baseRadius + (index % 4) * (radiusJitter / 3);

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.label + index}
              custom={index}
              variants={floatVariants}
              animate="animate"
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* NO colored background – only logos/icons with a subtle glow */}
              {item.kind === "image" ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.55)]"
                />
              ) : (
                <item.icon
                  size={22}
                  className="text-cyan-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.55)]"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechOrbits;
