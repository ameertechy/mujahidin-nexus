import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">My Skills</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive toolkit for modern infrastructure engineering, from traditional on-premises 
            systems to cloud-native technologies and DevOps practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category.category}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-card border border-primary/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-3 text-primary">Currently Learning</h3>
          <p className="text-muted-foreground mb-4">
            Continuously expanding my skillset with modern DevOps and cloud-native technologies:
          </p>
          <div className="flex flex-wrap gap-3">
            {["Kubernetes", "Terraform", "Ansible", "CI/CD Pipelines", "Infrastructure as Code"].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/30 font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
