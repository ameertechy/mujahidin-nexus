import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  index: number;
}

const ArticleCard = ({ title, excerpt, tags, date, index }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <motion.button
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium group"
      >
        Read More
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.article>
  );
};

export default ArticleCard;
