import { FaHeadset } from "react-icons/fa";

export default function ContactSupport() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">📞 Contact Support</h2>
      <div className="bg-white p-4 shadow rounded-xl text-center">
        <FaHeadset className="text-3xl text-green-600 mx-auto mb-2" />
        <p>Need help from our team? Submit a support request or check ticket status.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit a Ticket
        </button>
      </div>
    </section>
  );
}
