import { FaSearch } from "react-icons/fa";

export default function HelpSearch() {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 mb-6">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search help topics..."
        className="w-full outline-none"
      />
    </div>
  );
}
