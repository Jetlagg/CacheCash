
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-6  bg-white header">
      <nav className="w-full">
        <div className="nav-wrapper flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-blue-600 font-bold">CacheCash</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-base menu">
            <a href="#ff" className="hover:text-blue-600 transition-colors">แนะนำการใช้งาน</a>
            <a href="#ff" className="hover:text-blue-600 transition-colors">เหมาะกับใคร</a>
            <a href="#feature" className="hover:text-blue-600 transition-colors">คำถามที่พบบ่อย</a>
            <a href="#feature" className="hover:text-blue-600 transition-colors">เกี่ยวกับเรา</a>
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
                href="#ff" 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                แนะนำการใช้งาน
              </a>
              <a 
                href="#ff" 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                เหมาะกับใคร
              </a>
              <a 
                href="#feature" 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                คำถามที่พบบ่อย
              </a>
              <a 
                href="#feature" 
                className="px-4 py-2 text-base hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
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