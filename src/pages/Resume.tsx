import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ameerul_Mujahidin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    toast({
      title: "Download Started",
      description: "Your resume is being downloaded.",
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
            Download my complete resume for detailed information about my experience and qualifications.
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
            <p className="text-xl text-primary font-semibold mb-4">IT System Engineer</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ajman, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ameerulmujahidin96@gmail.com" className="hover:text-primary transition-colors">
                  ameerulmujahidin96@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+971543845984" className="hover:text-primary transition-colors">
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
                  <p className="text-primary font-medium">City University Ajman</p>
                </div>
                <span className="text-sm text-muted-foreground">Sept 2023 - Present</span>
              </div>
              <p className="text-muted-foreground mt-3">
                Leading infrastructure management for 25+ physical servers and 75+ VMs, achieving 99.9% uptime. 
                Specializing in Azure/on-prem hybrid environments, automation, and enterprise security.
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>Migrated Moodle LMS from Azure to on-prem, saving AED 60,000/year</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>Deployed Kaspersky EDR across 2,000+ endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>Implemented monitoring for 400+ network devices, reducing incident detection by 40%</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>Optimized SAN infrastructure improving server I/O by 35%</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-2">
              <div className="bg-muted rounded-lg p-3">
                <span className="font-medium">Microsoft Azure Administrator Associate (AZ-104)</span>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <span className="font-medium">ITIL Foundation</span>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <span className="font-medium">Network Security Specialist</span>
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
            <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Download Full Resume (PDF)
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Click to download the complete resume with detailed work history and technical skills
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
