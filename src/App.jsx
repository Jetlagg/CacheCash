import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Solution from './components/Solution'
import Forwho from './components/Forwho'
import VideoSection from './components/VideoSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="scroll-smooth bg-gray-50 ">
      <Header />

      <Hero />
      <div className="bg-white w-full h-3"></div>

      <div className="bg-gray-100">
        <FeatureCard />
      </div>
      <div className="bg-white w-full h-3"></div>

      <Solution />
      <div className="bg-white w-full h-3"></div>
      <Forwho />
      <div className="bg-white w-full h-3"></div>
  
          

      {/* <VideoSection id="ff"/> */}
      <FAQSection/>
      <Footer />
    </div>
  )
}

export default App
