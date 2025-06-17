import React, { useState } from 'react';
import { ChevronDown, Shield, Bell, TrendingUp, Lock, Play, Plus, Minus, Mail, Phone, Facebook, Twitter, Instagram, Search, BarChart3, CreditCard } from 'lucide-react';

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "วิธีการดาวน์โหลดแอพ CacheCash?",
      answer: "คุณสามารถดาวน์โหลดแอพ CacheCash ได้จาก App Store หรือ Google Play Store โดยค้นหาชื่อ 'CacheCash' หรือคลิกปุ่ม Download App บนหน้าเว็บไซต์นี้"
    },
    {
      question: "การสมัครใช้งานแอพมีค่าใช้จ่ายหรือไม่?",
      answer: "แอพ CacheCash ให้บริการฟรีสำหรับฟีเจอร์พื้นฐาน และมีแผน Premium สำหรับฟีเจอร์ขั้นสูงที่มีค่าใช้จ่ายเพียงเดือนละ 99 บาท"
    },
    {
      question: "ข้อมูลส่วนตัวของฉันปลอดภัยแค่ไหน?",
      answer: "เราใช้เทคโนโลยีการเข้ารหัสระดับธนาคาร และไม่เก็บข้อมูลบัตรเครดิตหรือรหัสผ่านธนาคารของคุณในระบบของเรา"
    },
    {
      question: "สามารถใช้งานแอพกับธนาคารใดได้บ้าง?",
      answer: "แอพ CacheCash รองรับการเชื่อมต่อกับธนาคารชั้นนำในประเทศไทยทุกแห่ง รวมถึง Mobile Banking และ E-Wallet ต่าง ๆ"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
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
                    <p className="text-gray-600 leading-relaxed">
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
