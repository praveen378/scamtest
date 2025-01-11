import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../../auth/files.js";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const [formData, setFormData] = useState({
    userid: userData?.$id,
    username: userData?.username || "",
    email: userData?.email || "",
    mobile: userData?.mobile || "",
    state: userData?.state || "",
    city: userData?.city || "",
    address: userData?.address || "",
  });

  const userName = userData?.name ? userData.name : "";
  const userEmail = userData?.email ? userData.email : "";
  formData.userid = userData?.$id;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userid: userData.$id,
      [name]: value,
    }));
  };
   

  // Handle form submission and update Appwrite database
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page reload
    // console.log(userid);
    try {
      // Update user data in Appwrite database
      await service.createPost(formData);
      console.log("formData", formData);
      console.log("userData", userData);
      alert("Profile updated successfully!");

      navigate("/profile");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>
      <form onSubmit={handleUpdate}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={handleChange}
            readOnly
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={handleChange}
            readOnly
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>

        {/* Address */}
        <div className="flex gap-3">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm"
            required
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
}
