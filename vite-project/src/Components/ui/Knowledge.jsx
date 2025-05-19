import HelpCard from "./HelpCard";
import { FaDesktop, FaBug, FaTools } from "react-icons/fa";

export default function KnowledgeBase() {
  const categories = [
    { icon: <FaDesktop />, title: "Hardware Issues", desc: "Troubleshoot common hardware problems." },
    { icon: <FaBug />, title: "Software Issues", desc: "Fix operating system & software errors." },
    { icon: <FaTools />, title: "Diagnostics", desc: "Run tools to detect issues." }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">📘 Knowledge Base</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <HelpCard key={i} icon={cat.icon} title={cat.title} description={cat.desc} />
        ))}
      </div>
    </section>
  );
}
