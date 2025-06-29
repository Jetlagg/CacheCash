function Solution() {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-50 h-510">
        
        <div className="text-center mb-27 px-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                CacheCash ช่วยคุณยังไง
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ullam.
            </p>
        </div>

        <div className="space-y-16 w-full">
            {/* ===== Section 1: สแกนบิล ===== */}
            <div className="w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    
                    <div className="flex flex-col justify-center items-center mb-10 px-2">
                        <p className="text-blue-500 font-medium mb-2">สแกนบิล</p>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">
                            สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                        </h3>
                        <p className="text-gray-600 text-m leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
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
                            <p className="text-blue-500 font-semibold text-lg mb-2">สแกนบิล</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                                สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[400px] w-[280px] rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 ">
                    
                    <div className="bg-[url('/uploadbill.webp')] bg-cover bg-center h-[350px] lg:h-[520px] w-100 ml-30 rounded-4xl shadow-lg"></div>
                    
                    <div className="space-y-4">
                        <p className="text-blue-500 font-semibold text-lg">สแกนบิล</p>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            สแกนบิลให้เลย เพียงแค่อัปโหลดรูปภาพ
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== Section 2: ดูงบ ===== */}
            <div className="bg-white w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden ">
                    
                    <div className="flex flex-col justify-center items-center pt-7 mb-6 px-2">
                        <p className="text-blue-500 font-medium mb-2">ดูงบ</p>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                            รู้ว่างบเหลือเท่าไหร่
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center pb-10">
                        <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[240px] w-100 rounded-xl shadow-lg"></div>
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-1 gap-8 items-center py-12">
                        <div className="text-center">
                            <p className="text-blue-500 font-semibold text-lg mb-2">ดูงบ</p>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
                                รู้ว่างบเหลือเท่าไหร่
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[300px] w-full max-w-150 rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
                    
                    <div className="space-y-4 order-1 ml-30 mt-10">
                        <p className="text-blue-500 font-semibold text-lg">ดูงบ</p>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            รู้ว่างบเหลือเท่าไหร่
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                        </p>
                    </div>
                    
                    <div className="bg-[url('/dashboard.webp')] bg-cover bg-center h-[420px] w-full order-2"></div>
                </div>
            </div>

            {/* ===== Section 3: Export ===== */}
            <div className="w-full">
                {/* Mobile Layout */}
                <div className="block md:hidden  md:items-center">
                    
                    <div className="flex flex-col justify-center items-center mb-6 px-2">
                        <p className="text-blue-500 text-m font-medium mb-2">Export</p>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">
                            Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[url('/export.webp')] bg-cover bg-center h-[240px] w-90 rounded-4xl shadow-lg"></div>
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[url('/export.webp')] bg-cover bg-center h-[300px] w-full max-w-md rounded-4xl shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
                    
                    <div className="bg-[url('/export.webp')] bg-cover bg-center h-[400px] lg:h-[360px] w-150 ml-20 mt-10 rounded-4xl shadow-lg"></div>

                    
                    <div className="space-y-4 mt-10">
                        <p className="text-blue-500 font-semibold text-lg">Export</p>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            Export PDF/Excel ส่งฝ่ายบัญชีได้ทันที
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, vitae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution;