import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "CacheCash คืออะไร?",
      answer: "CacheCash คือแอปช่วยจัดการเงินกองกลาง / งบทีม / ค่าใช้จ่ายโปรเจกต์แบบง่ายๆ แต่มีความจริงจัง ทั้งบันทึกเงินเข้า-ออก, ขอเบิกเงิน, อนุมัติ, และ Export รายงาน"
    },
    {
      question: "ใช้กับโปรเจกต์ประเภทไหนได้บ้าง?",
      answer: "CacheCash เหมาะกับทุกแบบ ไม่ว่าจะเป็น ค่าย, กิจกรรม, โปรดักชัน, SME, งาน CSR หรือแม้แต่โปรเจกต์ส่วนตัว"
    },
    {
      question: "ต้องมีพื้นฐานบัญชีมั้ยถึงใช้ได้?",
      answer: "ไม่จำเป็นเลย แอปเราออกแบบให้คนทั่วไปใช้งานง่ายเหมือนแอปจดรายจ่ายทั่วไป แต่ถ้าทีมคุณมีฝ่ายบัญชี ก็สามารถ Export ข้อมูลส่งต่อได้ครบถ้วน"
    },
    {
      question: "ถ้าไม่อยากขออนุมัติ แค่อยากบันทึกเงินเฉย ๆ ได้ไหม?",
      answer: "ได้เลย CacheCash รองรับทั้ง บันทึกเฉยๆ กับ เปิด flow ขออนุมัติ แล้วแต่ความเหมาะสมของแต่ละทีม"
    },
    {
      question: "มีระบบอนุมัติหลายชั้นมั้ย?",
      answer: "คุณสามารถตั้งได้ว่าจะอนุมัติ 1 ชั้น, 2 ชั้น หรือมากกว่านั้น เช่น หัวหน้าโปรเจกต์ → ผู้จัดการฝ่าย → ผู้บริหาร"
    },
    {
      question: "ต้องเสียเงินไหม?",
      answer: "CacheCash มีทั้งเวอร์ชันใช้ฟรี (Feature พื้นฐาน) และแพ็คเกจ Pro สำหรับทีมที่ต้องการ Export รายงาน, Audit Log หรือเชื่อม FlowAccount"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 text-sm font-bold lg:text-lg lg:font-semibold mb-2">FAQ</p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-sm text-gray-600 lg:text-lg lg:font-normal max-w-2xl mx-auto">
            คำตอบสำหรับคำถามที่ผู้ใช้งานมักจะถามเกี่ยวกับ CacheCash
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-all duration-300 flex justify-between items-center group"
              >
                <h3 className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <div className="text-blue-600 group-hover:scale-110 transition-transform">
                  {openFAQ === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              {/* ส่วนนี้คือการเพิ่ม slide-down effect */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'h-auto' : 'h-0'}`}
                style={{ maxHeight: openFAQ === index ? '1000px' : '0px' }}
              >
                {openFAQ === index && (
                  <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl p-6">
                    <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
