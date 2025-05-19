import { FaStethoscope } from "react-icons/fa";

export default function ProblemDiagnoser() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">🧠 Problem Diagnoser</h2>
      <div className="bg-white shadow-md p-4 rounded-xl text-center">
        <FaStethoscope className="text-3xl text-red-500 mx-auto mb-2" />
        <p>Use our basic tool to detect issues based on symptoms.</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Diagnosis
        </button>
      </div>
    </section>
  );
}
