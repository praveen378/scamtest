import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const [formData, setFormData] = useState({
    seva: "Mahakumbh Seva",
    amount: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    pincode: "",
  });

  const navigate = useNavigate(); // Use navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDonate = () => {
    if (formData.amount) {
      navigate("/paymentpage", { state: { amount: formData.amount } });
    } else {
      alert("Please select or enter an amount.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200 p-8">
      {/* Tabs */}

      {/* Donation Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        {/* Select Seva and Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Select Seva
          </label>
          <select
            name="seva"
            value={formData.seva}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option>Mahakumbh Seva</option>
            <option>Other Seva 1</option>
            <option>Other Seva 2</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {[10000, 5100, 3100, 2100, 1100, 501, 101].map((amount) => (
            <button
              key={amount}
              onClick={() => setFormData({ ...formData, amount })}
              className={`px-6 py-2 rounded-lg ${
                formData.amount === amount
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              ₹{amount}
            </button>
          ))}
          <input
            type="number"
            name="amount"
            placeholder="Custom Amount"
            value={formData.amount}
            onChange={handleChange}
            className="p-3 w-40 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <div className="relative">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full pl-12"
            />
            <span className="absolute left-3 top-3 text-gray-500">+91</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            name="pincode"
            placeholder="City Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm text-gray-600">
            Sankalp and Aarti will be performed for you on your birthday.
          </p>
          <button
            onClick={handleDonate}
            className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
