
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    className="flex justify-between items-center p-4 md:p-6 fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300"
    >
      <nav className="w-full">
        <div className="nav-wrapper flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-blue-600 font-bold">CacheCash</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-base menu">
            <a href="#feature" onClick={(e) => handleClick(e, 'feature')} className="hover:text-blue-600 transition-colors">คุณสมบัติ</a>
            <a href="#solution" onClick={(e) => handleClick(e, 'solution')} className="hover:text-blue-600 transition-colors">แนะนำการใช้งาน</a>
            <a href="#forwho" onClick={(e) => handleClick(e, 'forwho')} className="hover:text-blue-600 transition-colors">เหมาะกับใคร</a>
            <a href="#faq" onClick={(e) => handleClick(e, 'faq')} className="hover:text-blue-600 transition-colors">คำถามที่พบบ่อย</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="hover:text-blue-600 transition-colors">เกี่ยวกับเรา</a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="hamberger md:hidden">
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
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white menu">
            <div className="flex flex-col space-y-3">
              <a 
                href="#feature" onClick={(e) => handleClick(e, 'feature')} 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
              >
                คุณสมบัติ
              </a>
              <a 
                href="#solution" onClick={(e) => handleClick(e, 'solution')} 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
              >
                แนะนำการใช้งาน
              </a>
              <a 
                href="#forwho" onClick={(e) => handleClick(e, 'forwho')} 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
              >
                เหมาะกับใคร
              </a>
              <a 
                href="#faq" onClick={(e) => handleClick(e, 'faq')} 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
              >
                คำถามที่พบบ่อย
              </a>
              <a 
                href="#about" onClick={(e) => handleClick(e, 'about')} 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
              >
                เกี่ยวกับเรา
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header