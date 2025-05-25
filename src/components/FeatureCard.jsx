function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-xs">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

export default FeatureCard