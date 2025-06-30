import { Upload, FolderOutput, Bell, ScrollText, BarChart3, } from 'lucide-react';

function FeatureCard(){
  const features = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "บันทึกรายการง่าย",
      description: "แค่อัปโหลดรูป เราจะสแกนและบันทึกให้เลย",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-600" />,
      title: "แจ้งเตือนเรียลไทม์",
      description: "รู้ทุกธุรกรรมทันทีที่เกิดขึ้น",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "รายงานการเงิน",
      description: "สรุปการใช้จ่ายรายวัน/รายเดือน รู้ว่าใช้ไปกับอะไรบ้าง",
      bgColor: "bg-green-50"
    },
    {
      icon: <ScrollText className="w-8 h-8 text-gray-600" />,
      title: "สรุปงบให้เลย",
      description: "แค่ Export PDF / Excel พร้อมบิลทุกใบ ส่งต่อฝ่ายบัญชีได้เลย",
      bgColor: "bg-white"
    },
  ];

  return (
    <section id="feature" >
      <div className="container mx-auto px-6 pt-20 pb-30">
        <div className="text-center">
          <p className="text-blue-700 text-sm font-bold mb-2">คุณสมบัติ</p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            ทำไมถึงต้องใช้ CacheCash
          </h2>
          <p className="text-sm text-gray-500 mb-1">เพราะการจัดการเงิน ไม่ควรเป็นเรื่องยุ่งยากอีกต่อไป</p>
          <p className="text-sm text-gray-500 mb-15">นี่คือฟีเจอร์หลักๆของเรา</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
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