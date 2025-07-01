import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Solution from './components/Solution'
import Forwho from './components/Forwho'
import FAQSection from './components/FAQSection'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="scroll-smooth bg-gray-50 ">
      <Header />

      <Hero />
      <div className="bg-white w-full h-4 lg:h-5"></div>

      
      <FeatureCard />
      
      <div className="bg-white w-full h-4 lg:h-5"></div>

      <Solution />
      <div className="bg-white w-full h-4 lg:h-5"></div>
      <Forwho />
      <div className="bg-white w-full h-4 lg:h-5"></div>
      <FAQSection/>
      <div className="bg-white w-full h-4 lg:h-5"></div>
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
