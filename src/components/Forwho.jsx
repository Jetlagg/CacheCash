import { User, Users, Building2 } from 'lucide-react';

function Forwho() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 h-150">
        <div>
            <h2 className="text-3xl font-bold">CacheCash เหมาะกับใคร</h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-15">
            {/* 1 */}
            <div className="flex flex-col bg-blue-50 border-none rounded-4xl w-110 h-80 gap-5">
                <div className="flex flex-row items-center gap-5 mt-5 ml-7">
                    <div className="flex justify-center items-center bg-blue-100 border-none rounded-full w-18 h-18">
                        <User className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl">จัดการเงินคนเดียว</h2>
                </div>

                <ul className="leading-9 ml-8">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>จดเงินใน Notepad,Excel หายบ้าง ลืมบ้าง</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>เวลาใช้เงินส่วนตัว กับ เงินธุรกิจ → สับสน</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>อยากเริ่มต้นแบบง่าย ไม่ต้องเรียนระบบบัญชี</li>
                    </div>
                </ul> 
            </div>

            {/* 2 */}
            <div className="flex flex-col bg-blue-50 border-none rounded-4xl w-110 h-80 gap-5">
                <div className="flex flex-row items-center gap-5 mt-5 ml-7">
                    <div className="flex justify-center items-center bg-blue-100 border-none rounded-full w-18 h-18">
                        <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl">จัดการเงินแบบกลุ่ม</h2>
                </div>

                <ul className="leading-9 ml-8">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>จดเงินใน Notepad / Excel → หายบ้าง ลืมบ้าง</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>เวลาใช้เงินส่วนตัว vs เงินธุรกิจ → สับสน</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>อยากเริ่มต้นแบบง่าย ไม่ต้องเรียนระบบบัญชี</li>
                    </div>
                </ul> 
            </div>

            {/* 3 */}
            <div className="flex flex-col bg-blue-50 border-none rounded-4xl w-110 h-80 gap-5">
                <div className="flex flex-row items-center gap-5 mt-5 ml-7">
                    <div className="flex justify-center items-center bg-blue-100 border-none rounded-full w-18 h-18">
                        <Building2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl">รูปแบบของบริษัท</h2>
                </div>

                <ul className="leading-9 ml-8">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>จดเงินใน Notepad / Excel → หายบ้าง ลืมบ้าง</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>เวลาใช้เงินส่วนตัว vs เงินธุรกิจ → สับสน</li>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <li>อยากเริ่มต้นแบบง่าย ไม่ต้องเรียนระบบบัญชี</li>
                    </div>
                </ul> 
            </div>
        </div>
        
    </section>
  )
}

export default Forwho