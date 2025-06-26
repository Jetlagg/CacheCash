function Solution() {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 w-100% h-530">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            CacheCash ช่วยคุณยังไง
          </h2>
        </div>

        {/* 1 */}
        <div className="grid grid-cols-2 gap-50 mb-16">
            
            <div >
                <div className="bg-[url('/uploadbill.png')] bg-cover bg-center h-[550px] w-260">
                </div> 
            </div>

            <div className="leading-15">
                <p className="text-blue-500">สแกนบิล</p>
                <h2 className="text-3xl">
                    สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!</p>
            </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-2 mb-16">
            <div className="leading-15">
                <p className="text-blue-500">ดูงบ</p>
                <h2 className="text-3xl">
                    รู้ว่างบเหลือเท่าไหร่
                </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!</p>
            </div>
            
            <div >
                <div className="bg-[url('/uploadbill.png')] bg-cover bg-center h-[550px] w-140">
                </div> 
            </div>

        </div>

        {/* 3 */}
        <div className="grid grid-cols-2 gap-20 mb-16">
            
            <div>
                <div className="bg-[url('/uploadbill.png')] bg-cover bg-center h-[550px] w-260">
                </div> 
            </div>

            <div className="leading-15">
                <p className="text-blue-500">Export</p>
                <h2 className="text-3xl">
                    Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!</p>
            </div>
        </div>

    


    </section>
  )
}

export default Solution