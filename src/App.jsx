import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import VideoSection from './components/VideoSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-200">
      <div className="	bg-[url('/public/bgimg.webp')] bg-cover bg-no-repeat bg-center w-full h-[700px]">
        <Header />
        <Hero />
      </div>
      {/* <div className="bg-[url('/public/iPhone')]">

      </div> */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">จุดเด่นของ CacheCash</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <FeatureCard
            title="🔔 แจ้งเตือนเรียลไทม์"
            desc="รู้ทุกธุรกรรมทันทีที่เกิดขึ้น"
          />
          <FeatureCard
            title="🔍 ตรวจลิงก์อันตราย"
            desc="สแกน QR / ลิงก์ก่อนโดนหลอก"
          />
          <FeatureCard
            title="📊 รายงานการเงิน"
            desc="สรุปการใช้จ่ายรายวัน/รายเดือน"
          />
          <FeatureCard
            title="🔐 ความปลอดภัยระดับธนาคาร"
            desc="เข้ารหัสข้อมูลทั้งหมด"
          />
        </div>
      </section>

      <VideoSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
