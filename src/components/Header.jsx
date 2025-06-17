function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-t border-gray-500 bg-white">
      <h1 className="text-3xl text-blue-600 font-bold">CacheCash</h1>
      
      <nav className="flex gap-6 text-white-700 text-base headertext">
        <a href="#ff">แนะนำการใช้งาน</a>
        <a href="#feature">คำถามที่พบบ่อย</a>
        <a href="#feature">เกี่ยวกับเรา</a>
      </nav>

    </header>
  )
}

export default Header