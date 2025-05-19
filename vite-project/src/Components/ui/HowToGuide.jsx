import HelpCard from "./HelpCard";
import { FaWifi, FaPowerOff, FaTrash } from "react-icons/fa";

export default function HowToGuides() {
  const guides = [
    { icon: <FaWifi />, title: "Fix WiFi Issues", desc: "Steps to resolve network connection problems." },
    { icon: <FaPowerOff />, title: "Computer Won’t Start", desc: "What to do if your PC doesn’t turn on." },
    { icon: <FaTrash />, title: "Free Up Space", desc: "Clear unwanted files and speed up your system." }
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">🧾 How-To Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide, i) => (
          <HelpCard key={i} icon={guide.icon} title={guide.title} description={guide.desc} />
        ))}
      </div>
    </section>
  );
}
