import { ChevronDown, Shield, Bell, TrendingUp, Lock, Play, Plus, Minus, Mail, Phone, Facebook, Twitter, Instagram, Search, BarChart3, CreditCard } from 'lucide-react';

function FeatureCard(){
  const features = [
    {
      icon: <Bell className="w-8 h-8 text-yellow-600" />,
      title: "แจ้งเตือนเรียลไทม์",
      description: "รู้ทุกธุรกรรมทันทีที่เกิดขึ้น",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "ตรวจสอบข้อมูลเตราย",
      description: "สแกน QR / ลิงก์ก่อนโอนเงินทุกครั้ง",
      bgColor: "bg-blue-50"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "รายงานการเงิน",
      description: "สรุปการใช้จ่ายรายวัน/รายเดือน",
      bgColor: "bg-green-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "ความปลอดภัยระดับธนาคาร",
      description: "เข้ารหัสข้อมูลสำคัญ",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            จุดเด่นของ CacheCash
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