import { User, Users, Building2 } from 'lucide-react';

function Forwho() {
  return (
    <section id="forwho" className="flex flex-col justify-center items-center gap-20 py-12 px-4 bg-gray-100 h-290">

      {/* หัวข้อ */}
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="text-blue-700 text-sm font-bold mb-2">เหมาะกับทุกคน</p>
        <h2 className="text-2xl font-semibold mb-2">CacheCash เหมาะกับใคร</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          ใครใช้ CacheCash แล้วชีวิตง่ายขึ้นบ้าง นี่คือสิ่งที่คุณจะได้เมื่อใช้งานเรา
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-10">

        {/* Card Template */}
        {[
          {
            icon: <User className="text-blue-600 w-6 h-6" />,
            title: 'จัดการเงินคนเดียว',
            items: [
              'บันทึกรายรับ-รายจ่ายเองง่าย ๆ',
              'แนบบิล ถ่ายภาพสลิป แล้วระบบอ่านยอดให้',
              'อยากเริ่มต้นแบบง่าย ไม่ต้องเรียนระบบบัญชี',
              'เลือกได้ว่ารายการไหน "ส่วนตัว" หรือ "ธุรกิจ"',
            ],
          },
          {
            icon: <Users className="text-blue-600 w-6 h-6" />,
            title: 'จัดการเงินแบบกลุ่ม',
            items: [
              'ทุกคนในกลุ่มสามารถบันทึกเงินเองในแอป',
              'Dashboard เห็นงบแบบ Real-time',
              'Export รายงานแบบมืออาชีพ',
            ],
          },
          {
            icon: <Building2 className="text-blue-600 w-6 h-6" />,
            title: 'รูปแบบของบริษัท',
            items: [
              'ได้ไฟล์ CSV พร้อมหมวดและ VAT',
              'บิลมี OCR + แนบไฟล์ครบ',
              'Export Excel ส่งบัญชีได้เลย',
            ],
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`
              flex flex-col bg-white border border-gray-200 rounded-3xl p-6 shadow-sm
              transition duration-300 ease-in-out transform
              hover:-translate-y-1 hover:shadow-lg
              active:-translate-y-0.5
              ${index === 2 ? 'md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0' : ''}
            `}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-14 h-14">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed ml-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Forwho;
