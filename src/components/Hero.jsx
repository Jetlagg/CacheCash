import Explorebutton from './Explorebutton';

function Hero() {
  return (
    <section className="bg-[url('/BG.png')] bg-cover bg-center flex justify-center items-center w-100% h-140">
      
      <div className="grid grid-cols-2 items-center">

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-semibold mb-2">ควบคุมการเงินคุณในมือ</h2>
          <h2 className="text-5xl font-semibold">ปลอดภัย ทันที</h2>
          <p className="mt-5 mb-6">แจ้งเตือนทุกการใช้จ่าย ตรวจสอบธุรกรรมก่อนโดนโกง</p>
          <a href="#">
          <Explorebutton />
          </a>
        </div>

        <div className="bg-[url('/appweb.png')] bg-cover bg-center h-[500px] w-180"></div>

      </div>
        
    </section>
  )
}

export default Hero