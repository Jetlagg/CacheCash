import Explorebutton from './Explorebutton';

function Hero() {
  return (
  <section className="flex flex-wrap justify-center items-center p-8  backdrop-blur-none  w-full h-[700px]">
    <div className="flex flex-col  gap-[40px] text-center text-black ">
      <div>
        <h2 className="text-3xl font-bold">ควบคุมการเงินคุณในมือ – ปลอดภัย ทันที</h2>
        <p>แจ้งเตือนทุกการใช้จ่าย ตรวจสอบธุรกรรมก่อนโดนโกง</p>
      </div>

      <div>
        <a href="#">
          <Explorebutton />
        </a>
      </div>
    </div>
    
  </section>
  )
}

export default Hero