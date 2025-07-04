import { ChevronDown, Shield, Bell, TrendingUp, Lock, Play, Plus, Minus, Mail, Phone, Facebook, Twitter, Instagram, Search, BarChart3, CreditCard } from 'lucide-react';
import Iconapp from './Iconapp';

function Footer() {
  return (
    <footer id="about" className="py-16 bg-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-15 xl:px-0">
        <div className="grid md:grid-cols-4 gap-12 md:gap-0 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 ml-2">
            <div className="text-3xl font-bold text-blue-500 mb-4">
              CacheCash
            </div>
            <p className="text-white text-base mb-6 leading-relaxed">
              แอปจัดการเงินสดที่ช่วยให้คุณควบคุมการเงินได้อย่างง่ายดายและปลอดภัย พร้อมฟีเจอร์บันทึกธุรกรรมของคุณได้ทั้งแบบเดี่ยว และแบบกลุ่ม
            </p>
          </div>
          
          {/* version */}
          <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-4 ml-2">เวอร์ชัน</h4>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-white text-base ml-2">
                v0.1.0
              </p>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-5 ml-2 xl:ml-5">ลิงก์ด่วน</h4>
            <div className="space-y-4 ml-2 xl:ml-5">
              {['การสนับสนุน', 'นโยบายความเป็นส่วนตัว', 'เงื่อนไขการใช้งาน'].map((link) => (
                <a key={link} href="#" className="block text-white text-base font-semibold hover:text-blue-600 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div> */}
          
          {/* Contact Info */}
          <div className="">
            <h4 className="text-lg font-semibold text-blue-500 mb-4 ml-2">ติดต่อเรา</h4>
            <div className="space-y-4">
              < Iconapp/>
              
              <a href="mailto:cachecash.team@gmail.com" className="flex items-center gap-3 text-white text-base hover:text-blue-600 transition-colors ml-2">
                <Mail className="w-5 h-5" />
                cachecash.team@gmail.com
              </a>
              <a href="tel:0621619626" className="flex items-center gap-3 text-white text-base hover:text-blue-600 transition-colors ml-2">
                <Phone className="w-5 h-5" />
                0621619626
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center h-2">
          <p className="text-white text-sm lg:text-base font-medium">
            © 2025 CacheCash. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer