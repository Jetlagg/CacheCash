import { Upload, FolderOutput, Bell, TrendingUp, Lock, Play, Plus, Minus, Mail, Phone, Facebook, Twitter, Instagram, Search, BarChart3, CreditCard, } from 'lucide-react';

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
      icon: <FolderOutput className="w-8 h-8 text-gray-600" />,
      title: "สรุปงบให้เลย",
      description: "แค่ Export PDF / Excel / ZIP พร้อมบิลทุกใบ ส่งต่อฝ่ายบัญชีได้เลย",
      bgColor: "bg-gray-100"
    },
  ];

  return (
    <section id="features" >
      <div className="container mx-auto px-6 mb-25">
        <div className="text-center mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ทำไมคุณถึงต้องใช้ CacheCash
          </h2>
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