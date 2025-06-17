import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import VideoSection from './components/VideoSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-200">
      <div>
        <Header />
        <Hero />
      </div>

      {/* className="	bg-[url('/public/bgimg.webp')] bg-cover bg-no-repeat bg-center w-full h-[700px]" */}
      {/* <div className="bg-[url('/public/iPhone')]">

      </div> */}
      <FeatureCard />
      
          
          

      <VideoSection id="ff"/>
      <FAQSection/>
      <Footer />
    </div>
  )
}

export default App
