import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerDashboard from "../Admin/CustomerDashboard";

export function SupportRequest() {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [scheduled, setScheduled] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.id) {
      setUserId(user.id);
    } else {
      toast.error("User not logged in.");
    }
  }, []);

  const handleSubmit = async () => {
    if (!device || !issue || !scheduled) {
      toast.error("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token"); // assuming token is stored after login

    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:3000/api/repair",
        {
          userId,
          device,
          issue,
          scheduled,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Support request submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Failed to submit support request"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 py-8">
      <ToastContainer />
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">
          Submit a Support Request
        </h2>
        <p className="text-gray-600 mb-6">
          Need help with your device? Fill out the form below and one of our
          technicians will be in touch with you shortly.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Device Type
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Laptop, Desktop, Printer"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Issue Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 min-h-[100px]"
              placeholder="Describe the issue you're facing..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Preferred Repair Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              value={scheduled}
              onChange={(e) => setScheduled(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            <strong>Note:</strong> For business clients, our technician will
            visit your site. Individuals can drop off their devices at our
            office or arrange courier delivery.
          </p>
          <p className="mt-2">
            Need immediate assistance?{" "}
            <a href="/support/chat" className="text-blue-600 hover:underline">
              Start a live chat
            </a>
            .
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-100 shadow-md rounded-xl p-6">
 <CustomerDashboard />
      </div>
     
    </div>
  );
}
