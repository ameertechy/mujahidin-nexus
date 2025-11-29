import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  role: string;
  index: number;
}

const ProjectCard = ({ title, description, tech, impact, role, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 card-3d"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <motion.button
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="text-primary hover:text-secondary transition-colors"
        >
          <ExternalLink size={20} />
        </motion.button>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
          <p className="text-sm text-foreground font-medium">{impact}</p>
        </div>
        
        <div>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20">
            {role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
