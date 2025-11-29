import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Featured Articles</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            In-depth technical articles sharing real-world experiences, best practices, and lessons 
            learned from large-scale infrastructure projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            More articles coming soon. Stay tuned for detailed technical write-ups on infrastructure, 
            cloud, security, and automation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
