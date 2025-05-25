function Hero() {
  return (
<section className="flex flex-wrap items-center justify-center gap-12 p-8">
    <div className="text-center text-black">
      <h2 className="text-2xl font-bold">ควบคุมการเงินคุณในมือ – ปลอดภัย ทันที</h2>
      <p>แจ้งเตือนทุกการใช้จ่าย ตรวจสอบธุรกรรมก่อนโดนโกง</p>
      <a href="#" className="inline-block px-6 py-3 mt-6 font-bold text-black bg-yellow-400 rounded-md">
        ดูตัวอย่างแอพ
      </a>
    </div>
    <div>
      <img src="public/backgroundone.svg" alt="Hero Graphic" className="max-w-xs h-[500px] object-cover" />
    </div>
  </section>
  )
}

export default Hero