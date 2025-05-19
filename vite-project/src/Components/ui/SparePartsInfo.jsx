import { FaBox } from "react-icons/fa";

export default function SparePartsInfo() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">📦 Spare Parts Information</h2>
      <div className="bg-white shadow p-4 rounded-xl">
        <FaBox className="text-2xl text-purple-500 mb-2" />
        <p>
          View or manage available spare parts, check compatibility, and stock availability.
        </p>
        <button className="mt-3 text-blue-600 hover:underline">Go to Inventory</button>
      </div>
    </section>
  );
}
