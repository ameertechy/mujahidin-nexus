import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/HeroScene";  // ✅ add/keep this line

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* This now renders nothing, but keeps old layout safe */}
      <HeroScene />

      {/* Optional soft blobs. Remove these 2 divs if you don't want them. */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Ameerul Mujahidin</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-primary font-semibold mb-6"
          >
            IT System Engineer | Infrastructure, Cloud &amp; Automation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Managing <span className="text-foreground font-semibold">25+ physical servers</span> and{" "}
            <span className="text-foreground font-semibold">75+ VMs</span> with 99.9% availability.
            Specializing in Azure/on-prem hybrid infrastructure, automation with Python &amp; PowerShell,
            and enterprise-scale system engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8"
              >
                View My Projects
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>

            <Link to="/resume">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 group px-8"
              >
                <Download
                  className="mr-2 group-hover:scale-110 transition-transform"
                  size={20}
                />
                Download Resume
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 group px-8"
              >
                <Mail
                  className="mr-2 group-hover:scale-110 transition-transform"
                  size={20}
                />
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div>Physical Servers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">75+</div>
              <div>Virtual Machines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div>Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
