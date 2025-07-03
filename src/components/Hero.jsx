import Explorebutton from './Explorebutton';

function Hero() {
  return (
    <section id="hero" className="
    bg-[url('/bg.webp')] bg-cover bg-center
    flex justify-center items-center
    w-full
    px-4 py-8
    md:py-12 
    h-150  
    md:h-175
    lg:h-130
    xl:h-170
    ">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-2 lg:mt-20">

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-15 xl:ml-40 text-center lg:text-left pt-23 lg:pt-0">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-1 xl:mb-2">
            ควบคุมการเงินคุณในมือ
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold xl:mb-2">
            โปร่งใส ทันที
          </h2>
          <p className="mt-3 mb-1 xl:mb-1 text-sm sm:text-lg text-gray-500">
            ไม่ว่าคุณจะทำกิจกรรม, โปรเจกต์, หรือธุรกิจเล็ก
          </p>
          <p className="mb-4 xl:mb-6 text-sm sm:text-lg text-gray-500">
            CacheCash ช่วยให้เงินทุกบาทมีที่มาที่ไป
          </p>
          <a href="#" className="inline-block mb-6 lg:mb-0">
            <Explorebutton />
          </a>
        </div>

        {/* App Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[url('/appweb.webp')] bg-cover bg-center  
                          h-60 w-120 
                          md:h-80
                          lg:h-85 lg:w-120
                          xl:h-125 xl:w-190
                          ">
          </div>
        </div>

      </div>
        
    </section>
  )
}

export default Hero