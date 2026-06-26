import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-6 font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Summer 2026 Admissions Open
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Ignite Your Child's Future with <br />
            <span className="gradient-text">AI & Robotics</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            A hands-on, 4-week immersion into the world of Artificial Intelligence and Machine Learning. 
            Empower your child to build, code, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enroll" className="btn-premium">
              Enroll Now
            </a>
            <a href="#details" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full border-2 border-indigo-50 hover:bg-indigo-50 transition-all duration-300">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
