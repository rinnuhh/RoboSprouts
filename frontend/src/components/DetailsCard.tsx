import { Calendar, Clock, MapPin, Tag, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const details = [
  { icon: Users, label: 'Age Group', value: '8–14 Years', color: 'text-blue-500' },
  { icon: Clock, label: 'Duration', value: '4 Weeks', color: 'text-purple-500' },
  { icon: MapPin, label: 'Mode', value: 'Online (Live)', color: 'text-green-500' },
  { icon: Tag, label: 'Fee', value: '₹2,999', color: 'text-orange-500' },
  { icon: Calendar, label: 'Start Date', value: '15 July 2026', color: 'text-pink-500' },
];

const DetailsCard = () => {
  return (
    <section id="details" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism p-6 rounded-2xl text-center flex flex-col items-center justify-center hover:shadow-2xl transition-shadow"
            >
              <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">{item.label}</p>
              <p className="text-lg font-bold text-slate-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
