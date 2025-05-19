export default function HelpTips() {
  const tips = [
    "Restart your device before calling support.",
    "Use the knowledge base for quick fixes.",
    "Back up data before handing over your device.",
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">🎯 Helpful Tips</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
