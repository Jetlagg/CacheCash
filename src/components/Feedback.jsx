import Commentbutton from './Commentbutton';

function Feedback() {
  return (
    <section className="flex justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 w-full h-135 md:h-150 lg:h-150 xl:h-155">
        <div className="flex flex-col justify-center items-center">
            <p className="text-blue-700 text-sm md:text-lg font-bold  lg:font-semibold mb-2 lg:mb-2 mt-10">Feedback</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                ช่วยเราทำให้ CacheCash ดียิ่งขึ้น
            </h2>

            {/* Mobile */}
            <p className="block lg:hidden text-sm md:text-lg lg:font-normal text-gray-600 max-w-sm md:max-w-7xl text-center leading-relaxed">
                เรากำลังพัฒนา CacheCash ให้ตอบโจทย์ทุกคนมากขึ้น 
            </p>
            <p className="block lg:hidden text-sm md:text-lg lg:font-normal text-gray-600 mb-15 max-w-sm md:max-w-7xl text-center leading-relaxed">
                ถ้าคุณมีฟีดแบคหรือไอเดียดี ๆ บอกเราได้เลย!
            </p>

            {/* ipad dasktop */}
            <p className="hidden lg:flex text-sm lg:text-lg lg:font-normal text-gray-600 mb-25 max-w-sm lg:max-w-7xl text-center leading-relaxed">
                เรากำลังพัฒนา CacheCash ให้ตอบโจทย์ทุกคนมากขึ้น ถ้าคุณมีฟีดแบคหรือไอเดียดี ๆ บอกเราได้เลย!
            </p>

            <a href="#" className="mb-7">
                <Commentbutton />
            </a>
            <div className="flex justify-center space-x-4 opacity-30 mb-20 lg:mb-25">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <p className="text-xs md:text-base md:font-normal text-gray-600 mb-15 lg:mb-17 max-w-xs lg:max-w-7xl text-center leading-relaxed">
                ความคิดเห็นของคุณสำคัญกับเรา และจะช่วยให้ CacheCash ดีขึ้นสำหรับทุกคน
            </p>
        </div>

    </section>
    );
};

export default Feedback