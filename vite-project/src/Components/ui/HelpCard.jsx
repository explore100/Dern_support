export default function HelpCard({ icon, title, description }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <div className="mb-4 text-2xl">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-3 text-sm text-blue-600 hover:underline">Learn more</button>
    </div>
  );
}
