import React from "react";
import { Button } from "../Components/ui/Button";
import { FaRocket, FaTools, FaBookOpen, FaUserPlus, FaCalendarCheck } from "react-icons/fa";


const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
          Welcome to Dern-Support
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8">
          Reliable IT repair and support solutions for businesses and individuals. Schedule repairs, access tech help, and manage support easily.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow">
            Get Started
          </Button>
          <Button variant="outline" className="text-blue-600 border-blue-600 text-lg px-6 py-3 rounded-xl">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaUserPlus className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Accounts</h3>
            <p>Register as a business or individual to access personalized support services.</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCalendarCheck className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule Repairs</h3>
            <p>Submit requests, choose a time, and get a quick quote for any repair service.</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaBookOpen className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
            <p>Diagnose issues and follow self-help instructions for common problems.</p>
          </div>
        </div>
      </section>

      {/* Company Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-100 to-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">For Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaTools className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Spare Parts</h3>
            <p>Search, update, and manage inventory details for efficient stock control.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaRocket className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prioritize Jobs</h3>
            <p>Organize and prioritize daily job schedules for optimal performance.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaBookOpen className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics & Reports</h3>
            <p>Track trends, analyze service data, and inform key business decisions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Dern-Support. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
