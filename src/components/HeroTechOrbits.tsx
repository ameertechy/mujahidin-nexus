import { motion } from "framer-motion";

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

type LogoItem = {
  image: string;
  label: string;
};

const logos: LogoItem[] = [
  { image: azureLogo, label: "Microsoft Azure" },
  { image: m365Logo, label: "Microsoft 365" },
  { image: vmwareLogo, label: "VMware" },
  { image: windowsServerLogo, label: "Windows Server" },
  { image: linuxLogo, label: "Linux" },
  { image: gwsLogo, label: "Google Workspace" },
  { image: sqlServerLogo, label: "SQL Server" },
  { image: mysqlLogo, label: "MySQL" },
  { image: moodleLogo, label: "Moodle" },
  { image: fortinetLogo, label: "Fortinet" },
  { image: datacenterLogo, label: "Datacenter" },
  { image: devopsLogo, label: "DevOps" },
];

// simple soft float animation
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3 + i * 0.15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

const HeroTechOrbits = () => {
  // half on the left, half on the right
  const mid = Math.ceil(logos.length / 2);
  const leftLogos = logos.slice(0, mid);
  const rightLogos = logos.slice(mid);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
      <div className="relative w-full max-w-6xl h-full flex justify-between items-center px-4 md:px-16">
        {/* LEFT COLUMN */}
        <div className="hidden md:flex flex-col gap-4 items-end">
          {leftLogos.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index}
              variants={floatVariants}
              animate="animate"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-8 h-8 object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
              />
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:flex flex-col gap-4 items-start">
          {rightLogos.map((item, index) => (
            <motion.div
              key={item.label}
              custom={index + leftLogos.length}
              variants={floatVariants}
              animate="animate"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-8 h-8 object-contain drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTechOrbits;
