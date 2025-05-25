function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">CacheCash</h1>
      <nav className="flex gap-6 text-gray-700 text-sm">
        <a href="#">แอพฯ เพื่อการจัดการเงิน</a>
        <a href="#">แนะนำการใช้งาน</a>
        <a href="#">คำถามที่พบบ่อย</a>
        <a href="#">เกี่ยวกับเรา</a>
      </nav>
    </header>
  )
}

export default Header