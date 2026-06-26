import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const outcomes = [
  "Understand the fundamentals of Artificial Intelligence & ML.",
  "Hands-on experience with Robotics hardware simulations.",
  "Learn Python programming logic through interactive games.",
  "Build your first chatbot using Natural Language Processing.",
  "Develop problem-solving skills with algorithmic thinking.",
  "Create a capstone project to showcase in your portfolio."
];

const LearningList = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Your Child Will <span className="text-indigo-600">Learn</span></h2>
          <p className="text-slate-600">Our curriculum is designed by professionals to make complex concepts fun and accessible.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100"
            >
              <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
              <p className="text-lg text-slate-700 leading-tight">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningList;
