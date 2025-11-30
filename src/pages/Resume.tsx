import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  // Works in dev (/) and in production (/mujahidin-nexus/)
  const resumeUrl = `${import.meta.env.BASE_URL}Ameerul_Sys_CV.pdf`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ameerul_Mujahidin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: "Your resume (PDF) is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Resume</h1>
          <p className="text-lg text-muted-foreground">
            This section summarizes my CV. You can also download the full PDF
            for detailed experience, projects, and skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-8 mb-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Ameerul Mujahidin</h2>
            <p className="text-xl text-primary font-semibold mb-4">
              IT System Engineer
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ajman, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:ameerulmujahidin96@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ameerulmujahidin96@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+971543845984"
                  className="hover:text-primary transition-colors"
                >
                  +971 54 384 5984
                </a>
              </div>
            </div>
          </div>

          {/* Current Role */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="text-primary" />
              Current Role
            </h3>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold">IT System Engineer</h4>
                  <p className="text-primary font-medium">
                    City University Ajman
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  Sept 2023 – Present
                </span>
              </div>
              <p className="text-muted-foreground mt-3">
                Administering 25+ physical servers and 75+ Windows/Linux VMs
                with 99.9% availability. Managing AD, DNS, DHCP, GPO, SAN/NAS
                (Huawei OceanStor, QNAP), Azure, M365, Google Workspace, IIS,
                and automation with Python/PowerShell to reduce manual work and
                reporting time. Leading campus IT operations, escalations, and
                infrastructure rollouts for digital classrooms, AI labs and
                other academic services.
              </p>
            </div>
          </div>

          {/* Key Achievements – aligned with CV */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Projects & Achievements</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  Azure → On-Prem Moodle Migration: Upgraded Moodle LMS
                  3.8→4.5 and migrated from Azure to on-prem, delivering
                  ~AED 60,000 yearly savings.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  Kaspersky EDR Deployment across 2,000+ domain devices,
                  improving threat visibility and overall cybersecurity posture.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  Network Monitoring with PRTG & Zabbix for 400+ network
                  devices, reducing incident detection time by ~40% and
                  improving uptime.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  Backup & DR Upgrade using Veeam + RClone hybrid DR,
                  achieving 100% backup success rates with cloud redundancy and
                  fast restore ({'< 30 minutes for an HP server failure'}).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  SAN Optimization and MPIO fixes improving server I/O by
                  ~35%, plus DNS role migration to increase availability and
                  reduce failover events.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>
                  Open-source deployments (Snipe-IT, Helpdesk, Project
                  Management, Library, PAM) and ITSM/SOP work aligned with ITIL
                  and ISO-style practices.
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications aligned with CV */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications & Training
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <div className="bg-muted rounded-lg p-3">
                <span className="font-medium">
                  Microsoft Azure Administrator Associate (AZ-104) – 2025–2026
                </span>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <span className="font-medium">
                  Additional Training: AWS Cloud Practitioner, Moodle
                  Administrator, Apple Support Engineer, Generative AI Prompt
                  Engineering, Fortinet Certified Fundamentals, CCNA.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8"
          >
            <Download
              className="mr-2 group-hover:scale-110 transition-transform"
              size={20}
            />
            Download Full Resume (PDF)
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Click to download the complete resume with detailed work history,
            technical skills, and tools.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
