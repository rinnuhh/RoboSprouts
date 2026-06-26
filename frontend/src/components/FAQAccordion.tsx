import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do children need prior coding experience?",
    answer: "No prior experience is needed! We start from the absolute basics, making it easy for beginners to follow while challenging those with some background."
  },
  {
    question: "Will certificates be provided after the workshop?",
    answer: "Yes, every participant who completes the 4-week course will receive a verified digital certificate from RoboSprouts."
  },
  {
    question: "What hardware/software is required?",
    answer: "A laptop with a stable internet connection is all you need. We use browser-based tools and simulators, so no expensive hardware purchases are required."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked <span className="text-pink-600">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-indigo-500" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 italic border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
