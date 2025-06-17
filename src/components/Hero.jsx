import Explorebutton from './Explorebutton';

function Hero() {
  return (
  <section className="flex justify-center items-center w-100% h-210">
    <div className="text-center text-black ">
        <div className="bg-[url('/CacheCash.png')] bg-cover bg-center w-250 h-[500px]"></div>
      <div>
        <h2 className="text-5xl font-semibold mt-5 mb-2">ควบคุมการเงินคุณในมือ</h2>
        <h2 className="text-5xl font-semibold">ปลอดภัย ทันที</h2>
        <p className="mt-5 mb-6">แจ้งเตือนทุกการใช้จ่าย ตรวจสอบธุรกรรมก่อนโดนโกง</p>
        <a href="#">
          <Explorebutton />
        </a>
      </div>
    </div>
    
  </section>
  )
}

export default Hero