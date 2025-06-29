import Explorebutton from './Explorebutton';

function Hero() {
  return (
    <section className="bg-[url('/bg.webp')] bg-cover bg-center flex justify-center items-center w-full h-170 px-4 py-8 md:py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
            ควบคุมการเงินคุณในมือ
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
            ปลอดภัย ทันที
          </h2>
          <p className="mt-3 mb-6 text-base sm:text-lg text-gray-700 max-w-md">
            แจ้งเตือนทุกการใช้จ่าย ตรวจสอบธุรกรรมก่อนโดนโกง
          </p>
          <a href="#" className="inline-block">
            <Explorebutton />
          </a>
        </div>

        {/* App Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[url('/appweb.webp')] bg-cover bg-center 
                          h-60 w-120 
                          sm:h-90 sm:w-80 
                          md:h-90 md:w-150
                          lg:h-[450px] lg:w-[750px]
                          ">
          </div>
        </div>

      </div>
        
    </section>
  )
}

export default Hero