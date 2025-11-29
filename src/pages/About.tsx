import { motion } from "framer-motion";
import { Briefcase, MapPin, Award } from "lucide-react";

const About = () => {
  const timeline = [
    {
      period: "Sept 2023 - Present",
      role: "IT System Engineer",
      company: "City University Ajman",
      description: "Leading infrastructure management, cloud migrations, and IT operations"
    },
    {
      period: "2020 - 2023",
      role: "IT Support & Technical Engineer",
      company: "TwinMOS Technology Middle East",
      description: "Provided technical support and system administration"
    },
    {
      period: "2018 - 2019",
      role: "Network & System Support Engineer",
      company: "Mundo Trading Pvt Ltd",
      description: "Managed network infrastructure and system support"
    }
  ];

  const certifications = [
    "Microsoft Azure Administrator Associate (AZ-104)",
    "ITIL Foundation",
    "Network Security Specialist"
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin size={20} />
            <span>Ajman, United Arab Emirates</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <p className="text-lg leading-relaxed text-foreground">
            I'm an experienced <span className="text-primary font-semibold">IT System Engineer</span> currently working at 
            City University Ajman since September 2023. I specialize in managing large-scale infrastructure, including{" "}
            <span className="text-primary font-semibold">25+ physical servers</span> and{" "}
            <span className="text-primary font-semibold">75+ Windows/Linux virtual machines</span>, maintaining an impressive 
            99.9% availability record.
          </p>

          <p className="text-lg leading-relaxed text-foreground">
            My expertise spans across on-premises and cloud environments, with hands-on experience in:
          </p>

          <ul className="space-y-2 text-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Infrastructure Management:</strong> Active Directory, DNS, DHCP, GPO, IIS configuration and optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Storage Solutions:</strong> SAN/NAS management with Huawei OceanStor and QNAP systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Cloud & Hybrid:</strong> Azure administration, on-prem to cloud migrations, M365 management</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Monitoring & Operations:</strong> PRTG, Zabbix, Grafana for comprehensive infrastructure visibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Cybersecurity:</strong> Kaspersky EDR deployment, endpoint protection, and security hardening</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span><strong>Automation:</strong> Python and PowerShell scripting to reduce manual workloads</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-foreground">
            I lead the IT support team, handle Level 3 escalations, and manage vendor relationships including procurement and BOQ preparation. 
            My approach combines technical expertise with ITIL/ITSM best practices to deliver reliable, scalable infrastructure solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Experience Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all">
                  <div className="text-sm text-muted-foreground mb-1">{item.period}</div>
                  <div className="text-xl font-bold text-foreground">{item.role}</div>
                  <div className="text-primary font-medium mb-2">{item.company}</div>
                  <div className="text-muted-foreground">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="text-primary" />
            Certifications
          </h2>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
