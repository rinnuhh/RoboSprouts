import Hero from './components/Hero'
import DetailsCard from './components/DetailsCard'
import LearningList from './components/LearningList'
import FAQAccordion from './components/FAQAccordion'
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Simple Sticky Nav */}
      <nav className="fixed top-0 w-full z-50 glass-morphism py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black gradient-text">RoboSprouts</div>
        <div className="hidden md:flex gap-8 font-semibold text-slate-600">
          <a href="#details" className="hover:text-indigo-600 transition-colors">Details</a>
          <a href="#enroll" className="hover:text-indigo-600 transition-colors">Curriculum</a>
          <a href="#enroll" className="hover:text-indigo-600 transition-colors">FAQs</a>
        </div>
        <a href="#enroll" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 transition-all text-sm">
          Get Started
        </a>
      </nav>

      <main>
        <Hero />
        <DetailsCard />
        <LearningList />
        <FAQAccordion />
        <RegistrationForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
        <div className="text-2xl font-black text-white mb-4">RoboSprouts</div>
        <p className="mb-6">Empowering the next generation of innovators.</p>
        <p className="text-sm">© 2026 RoboSprouts Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
