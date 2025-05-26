import './Color.css'
import Loginbutton from './Loginbutton';

function Header() {
  return (
    <header className="flex justify-between items-center p-6 backdrop-blur-sm">
      <h1 className="text-2xl font-bold">CacheCash</h1>
      
      <nav className="flex gap-6 text-gray-700 text-base">
        <a href="#">แอพฯ เพื่อการจัดการเงิน</a>
        <a href="#">แนะนำการใช้งาน</a>
        <a href="#">คำถามที่พบบ่อย</a>
        <a href="#">เกี่ยวกับเรา</a>
      </nav>

      <div>
        <a href="#">
          <Loginbutton />
        </a>
      </div>
    </header>
  )
}

export default Header