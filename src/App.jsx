import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Solution from './components/Solution'
import FeatureCard from './components/FeatureCard'
import VideoSection from './components/VideoSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50">
      <div>
        <Header />
      </div>
    
      <Hero />
      <FeatureCard />
      <Solution />
  
          

      {/* <VideoSection id="ff"/> */}
      <FAQSection/>
      <Footer />
    </div>
  )
}

export default App
