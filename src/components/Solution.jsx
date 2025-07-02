function Solution() {
  return (
    <section id="solution" className="flex flex-col justify-center items-center bg-gray-50 h-460 lg:h-375 xl:h-470">
        
        <div className="text-center mb-10 lg:mb-20 lg:mt-20 xl:mb-25 px-4 max-w-3xl mx-auto">
            <p className="text-blue-700 text-sm font-bold mb-2 lg:text-lg lg:font-semibold">How to use</p>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900">
                ขั้นตอนการใช้งานแอป
            </h2>
            {/* <p className="text-gray-600 text-sm lg:text-lg lg:font-normal">
                ไม่ต้องคุยวนใน LINE หรือ Excel อีกต่อไป
            </p>
            <p className="text-gray-600 text-sm lg:text-lg lg:font-normal mb-5">
                เราช่วยให้คุณบันทึก จัดการ และสรุปงบ ได้ง่ายสุดๆ
            </p> */}
        </div>

        <div className="space-y-16 w-full">
            {/* ===== Section 1: สแกนบิล ===== */}
            <div className="w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden border-t border-gray-300">
                    
                    <div className="flex flex-col justify-center items-center mt-10 mb-10 px-2">
                        <p className="text-blue-500 text-sm font-medium mb-2">Upload</p>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                        </h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            อัปโหลดหรือถ่ายรูปบิล ระบบอ่านชื่อร้าน, วันที่, VAT  
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            และยอดรวมให้ทันที ไม่ต้องเสียเวลานั่งพิมพ์ยอด 
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            ไม่ต้องกลัวกรอกผิด ระบบ OCR อ่านให้ครบทุกช่องสำคัญ
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[350px] w-50 rounded-4xl shadow-lg"></div>
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-1 gap-8 items-center">
                        <div className="text-center">
                            <p className="text-blue-500 font-semibold text-lg mb-2">Upload</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                                สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                            </h3>
                            <p className="text-gray-500 text-sm text-center leading-relaxed">
                                อัปโหลดหรือถ่ายรูปบิล ระบบอ่านชื่อร้าน, วันที่, VAT และยอดรวมให้ทันที ไม่ต้องเสียเวลานั่งพิมพ์ยอด ไม่ต้องกลัวกรอกผิด ระบบ OCR อ่านให้ครบทุกช่องสำคัญ
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[400px] w-[280px] rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* ipad Layout */}
                <div className="hidden lg:grid xl:hidden ">
                    <div className="flex flex-row justify-center gap-40">
                        <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[350px] lg:h-[400px] w-80 ml-15 rounded-4xl shadow-lg"></div>
                        
                        <div className="space-y-4">
                            <p className="text-blue-500 font-semibold text-m">Upload</p>
                            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                                สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                            </h3>
                            <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-xl mr-5">
                                อัปโหลดหรือถ่ายรูปบิล ระบบอ่านชื่อร้าน, วันที่, VAT และยอดรวมให้ทันที ไม่ต้องเสียเวลานั่งพิมพ์ยอด ไม่ต้องกลัวกรอกผิด ระบบ OCR อ่านให้ครบทุกช่องสำคัญ
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden xl:grid xl:grid-cols-2 xl:gap-20">
                    <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[550px] w-100 rounded-4xl shadow-xl ml-25"></div>
                    
                    <div className="space-y-6">
                        <p className="text-blue-500 font-semibold text-lg">Upload</p>
                        <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
                            สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                        </h3>
                        <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-2xl">
                            อัปโหลดหรือถ่ายรูปบิล ระบบอ่านชื่อร้าน, วันที่, VAT และยอดรวมให้ทันที ไม่ต้องเสียเวลานั่งพิมพ์ยอด ไม่ต้องกลัวกรอกผิด ระบบ OCR อ่านให้ครบทุกช่องสำคัญ
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Section 2: ดูงบ ===== */}
            <div className="bg-white w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    
                    <div className="flex flex-col justify-center items-center pt-10 mb-8 px-2">
                        <p className="text-blue-500 text-sm font-medium mb-2">Check the budget</p>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            รู้ว่างบเหลือเท่าไหร่
                        </h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            ดูงบคงเหลือ แยกตามโปรเจกต์ / หมวดหมู่ / ผู้ใช้ ได้ทันที
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            ไม่ต้องนั่งลบเองใน Excel ไม่ต้องถามว่า "งบพอไหม?"
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            Dashboard บอกให้ทันที
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center pb-20">
                        <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[180px] w-80 rounded-xl shadow-lg"></div>
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-1 gap-8 items-center py-12">
                        <div className="text-center">
                            <p className="text-blue-500 font-semibold text-lg mb-2">Check the budget</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                                รู้ว่างบเหลือเท่าไหร่
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                                ดูงบคงเหลือ แยกตามโปรเจกต์ / หมวดหมู่ / ผู้ใช้ ได้ทันที ไม่ต้องนั่งลบเองใน Excel ไม่ต้องถามว่า "งบพอไหม?" Dashboard บอกให้ทันที"
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[300px] w-full max-w-150 rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* ipad Layout */}
                <div className="hidden lg:grid xl:hidden">
                    <div className="flex flex-row justify-center gap-5">
                        <div className="space-y-4 order-1 ml-15 mt-10">
                            <p className="text-blue-500 text-lg font-semibold">Check the budget</p>
                            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                                รู้ว่างบเหลือเท่าไหร่
                            </h3>
                            <p className="text-gray-600 text-m font-normal leading-relaxed max-w-xl">
                                ดูงบคงเหลือ แยกตามโปรเจกต์ / หมวดหมู่ / ผู้ใช้ ได้ทันที ไม่ต้องนั่งลบเองใน Excel ไม่ต้องถามว่า "งบพอไหม?" Dashboard บอกให้ทันที"
                            </p>
                        </div>
                        
                        <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[280px] w-170 order-2"></div>
                    </div>
                </div>

                {/* XL Desktop */}
                <div className="hidden xl:grid xl:grid-cols-2 xl:gap-20">
                    <div className="space-y-6 ml-25 mt-12">
                        <p className="text-blue-500 font-semibold text-lg">Check the budget</p>
                        <h3 className="text-3xl font-semibold text-gray-900">
                            รู้ว่างบเหลือเท่าไหร่
                        </h3>
                        <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-2xl">
                            ดูงบคงเหลือ แยกตามโปรเจกต์ / หมวดหมู่ / ผู้ใช้ ได้ทันที ไม่ต้องนั่งลบเองใน Excel ไม่ต้องถามว่า "งบพอไหม?" Dashboard บอกให้ทันที"
                        </p>
                    </div>

                    <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[400px] w-170"></div>
                </div>
            </div>

            {/* ===== Section 3: Export ===== */}
            <div className="w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden  md:items-center mb-5">
                    
                    <div className="flex flex-col justify-center items-center mb-8 px-2">
                        <p className="text-blue-500 text-sm font-medium mb-2">Export</p>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                        </h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            เลือกได้ทั้ง PDF สำหรับ Sponsor หรือ Excel สำหรับฝ่ายบัญชี
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            ครบทั้งยอด, รายการ, และไฟล์บิลแนบทุกใบ
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            ไม่ต้องนั่งเรียงไฟล์ ไม่ต้องรวมยอดเอง
                        </p>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            CacheCash Export ให้ทุกอย่างเรียบร้อย
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[url('/export.webp')] bg-gray-100 bg-cover bg-center h-[210px] w-80 rounded-4xl shadow-lg"></div>
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-1 gap-8 items-center">
                        <div className="text-center">
                            <p className="text-blue-500 font-semibold text-lg mb-2">Export</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                                Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                                เลือกได้ทั้ง PDF สำหรับ Sponsor หรือ Excel สำหรับฝ่ายบัญ ครบทั้งยอด, รายการ, และไฟล์บิลแนบทุกใบ ไม่ต้องนั่งเรียงไฟล์ ไม่ต้องรวมยอดเอง CacheCash Export ให้ทุกอย่างเรียบร้อย
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/export.webp')] bg-cover bg-center h-[300px] w-full max-w-md rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* ipad Layout */}
                <div className="hidden lg:grid xl:hidden">
                    <div className="flex flex-row justify-center gap-20 pb-30">
                        <div className="bg-[url('/export.webp')] bg-gray-100 bg-cover bg-center h-75 w-130 ml-10 mt-10 rounded-4xl shadow-lg"></div>

                        
                        <div className="space-y-4 mt-10">
                            <p className="text-blue-500 font-semibold text-m">Export</p>
                            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                                Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                            </h3>
                            <p className="text-gray-600 text-m font-normal leading-relaxed max-w-xl mr-5">
                                เลือกได้ทั้ง PDF สำหรับ Sponsor หรือ Excel สำหรับฝ่ายบัญ ครบทั้งยอด, รายการ, และไฟล์บิลแนบทุกใบ ไม่ต้องนั่งเรียงไฟล์ ไม่ต้องรวมยอดเอง CacheCash Export ให้ทุกอย่างเรียบร้อย
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden xl:grid xl:grid-cols-2 xl:gap-20 pb-30 mt-20">
                    <div className="bg-[url('/export.webp')] bg-gray-100 bg-cover bg-center h-[380px] w-150 rounded-4xl shadow-xl ml-20"></div>
                    
                    <div className="space-y-6">
                        <p className="text-blue-500 font-semibold text-lg">Export</p>
                        <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
                            Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                        </h3>
                        <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-2xl">
                            เลือกได้ทั้ง PDF สำหรับ Sponsor หรือ Excel สำหรับฝ่ายบัญ ครบทั้งยอด, รายการ, และไฟล์บิลแนบทุกใบ ไม่ต้องนั่งเรียงไฟล์ ไม่ต้องรวมยอดเอง CacheCash Export ให้ทุกอย่างเรียบร้อย
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution;