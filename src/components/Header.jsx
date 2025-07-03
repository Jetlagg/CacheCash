
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setMenuAnimation(true), 10);  // ดีเลย์นิดนึงเพื่อให้ Tailwind จับ transition
    } else {
      setMenuAnimation(false);
      setTimeout(() => setIsMenuOpen(false), 300);   // ปิดเมนูหลังอนิเมชั่นจบ
    }
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);  
    };

  return (
    <header 
    className="flex justify-between items-center p-4 md:p-5 lg:p-6 fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300"
    >
      <nav className="w-full">
        <div className="nav-wrapper flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleClick(e, 'hero')}>
          <h1 className="
          text-2xl md:text-3xl 
          lg:ml-2
          xl:text-3xl xl:ml-5
           text-blue-600 font-bold">CacheCash</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 md:text-base menu lg:mr-1 xl:mr-3">
            {/* <a href="#feature" onClick={(e) => handleClick(e, 'feature')} className="hover:text-blue-600 transition-colors">คุณสมบัติ</a> */}
            <a href="#solution" onClick={(e) => handleClick(e, 'solution')} className="lg:text-base lg:text-gray-800 hover:text-blue-600 transition-colors">แนะนำการใช้งาน</a>
            <a href="#forwho" onClick={(e) => handleClick(e, 'forwho')} className="lg:text-base lg:text-gray-800 hover:text-blue-600 transition-colors">เหมาะกับใคร</a>
            <a href="#faq" onClick={(e) => handleClick(e, 'faq')} className="lg:text-base lg:text-gray-800 hover:text-blue-600 transition-colors">คำถามที่พบบ่อย</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="lg:text-base lg:text-gray-800 hover:text-blue-600 transition-colors">ติดต่อเรา</a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="hamberger lg:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${menuAnimation ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex flex-col space-y-3 py-4 border-t border-gray-200 bg-white menu px-4">
              <a href="#solution" onClick={(e) => handleClick(e, 'solution')} className="py-2 hover:text-blue-600">แนะนำการใช้งาน</a>
              <a href="#forwho" onClick={(e) => handleClick(e, 'forwho')} className="py-2 hover:text-blue-600">เหมาะกับใคร</a>
              <a href="#faq" onClick={(e) => handleClick(e, 'faq')} className="py-2 hover:text-blue-600">คำถามที่พบบ่อย</a>
              <a href="#about" onClick={(e) => handleClick(e, 'about')} className="py-2 hover:text-blue-600">ติดต่อเรา</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header