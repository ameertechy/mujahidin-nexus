import { motion } from "framer-motion";

import azure from "@/assets/logos/Microsoft_Azure.svg";
import linux from "@/assets/logos/linux.svg";
import vmware from "@/assets/logos/vmware-1.svg";
import dataCenter from "@/assets/logos/data-center.svg";
import mysql from "@/assets/logos/mysql-official.svg";
import m365 from "@/assets/logos/Microsoft_365_(2022).svg";
import sql from "@/assets/logos/microsoft-sql-server-logo.svg";
import google from "@/assets/logos/Google_Workspace_Logo.svg";
import fortinet from "@/assets/logos/Fortinet_logo.svg";
import moodle from "@/assets/logos/Moodle-logo.svg";
import windowsServer from "@/assets/logos/Windows_Server_logo.svg";
import devops from "@/assets/logos/devops-2.svg";

// Animation style: Float + gentle rotation
const floatRotate = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 4 + i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const LOGO_SIZE = 55; // bigger logos

const leftSide = [
  azure,
  linux,
  windowsServer,
  sql,
  dataCenter,
];

const rightSide = [
  vmware,
  google,
  mysql,
  m365,
  fortinet,
  devops,
  moodle,
];

const HeroTechOrbits = () => {
  return (
    <>
      {/* LEFT SIDE */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none z-0">
        {leftSide.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="tech-logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="opacity-80"
            variants={floatRotate}
            animate="animate"
            custom={index}
          />
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none z-0">
        {rightSide.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="tech-logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="opacity-80"
            variants={floatRotate}
            animate="animate"
            custom={index}
          />
        ))}
      </div>
    </>
  );
};

export default HeroTechOrbits;
