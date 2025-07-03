import { Upload, FolderOutput, Bell, ScrollText, BarChart3, } from 'lucide-react';

function FeatureCard(){
  const features = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "บันทึกรายการง่าย",
      description: "แค่อัปโหลดรูป เราจะสแกนและบันทึกให้เลย",
      bgColor: "bg-blue-50 border border-blue-100"
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-600" />,
      title: "แจ้งเตือนเรียลไทม์",
      description: "รู้ทุกธุรกรรมทันทีที่เกิดขึ้น",
      bgColor: "bg-yellow-50 border border-yellow-100"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "รายงานการเงิน",
      description: "สรุปการใช้จ่ายรายวัน/รายเดือน รู้ว่าใช้ไปกับอะไรบ้าง",
      bgColor: "bg-green-50 border border-green-100"
    },
    {
      icon: <ScrollText className="w-8 h-8 text-gray-600" />,
      title: "สรุปงบให้เลย",
      description: "แค่ Export PDF / Excel พร้อมบิลทุกใบ ส่งต่อฝ่ายบัญชีได้เลย",
      bgColor: "bg-gray-100 border border-gray-200"
    },
  ];

  return (
    <section id="feature" className="lg:h-155">
      <div className="container mx-auto px-6 pt-20 pb-30">
        <div className="text-center">
          <p className="text-blue-700 text-sm md:text-lg lg:text-lg font-bold  lg:font-semibold mb-2 lg:mb-4">Features</p>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2 lg:mb-4">
            ทำไมถึงต้องใช้ CacheCash
          </h2>

          {/* Mobile */}
          <p className="block lg:hidden text-sm md:text-lg text-gray-600">เพราะการจัดการเงิน ไม่ควรเป็นเรื่องยุ่งยากอีกต่อไป</p>
          <p className="block lg:hidden text-sm md:text-lg text-gray-600 mb-15">นี่คือฟีเจอร์หลักๆของเรา</p>

          {/* Ipad Dasktop */}
          <p className="hidden lg:flex justify-center items-center text-sm lg:text-lg lg:font-normal text-gray-600 mb-20">เพราะการจัดการเงิน ไม่ควรเป็นเรื่องยุ่งยากอีกต่อไป นี่คือฟีเจอร์หลักๆของเรา</p>

        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`
                ${feature.bgColor} rounded-2xl p-6
                transition duration-300 ease-in-out transform
                hover:-translate-y-1 hover:shadow-lg
                active:-translate-y-0.5
                ${index === 2 ? 'lg:col-span-1 lg:mx-0' : ''}
            `}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCard