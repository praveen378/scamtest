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
    username: userData?.name || "",
    email: userData?.email || "",
    mobile: userData?.mobile || "",
    state: userData?.state || "",
    city: userData?.city || "",
    address: userData?.address || "",
  });

  const [isProfileComplete, setIsProfileComplete] = useState(true);

  useEffect(() => {
    if (userData) {
      getDetails(userData.$id);
    }
  }, [userData]);

  async function getDetails(userId) {
    try {
      const userDetails = await service.getUserDetails(userId);
      setIsProfileComplete(!!userDetails);
      if (userDetails) {
        setFormData((prevData) => ({
          ...prevData,
          address: userDetails.address,
          city: userDetails.city,
          state: userDetails.state,
          mobile: userDetails.mobile,
        }));
      }
      // Check profile completeness
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to update profile
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await service.updatePost(formData, userData.$id);
      alert("Profile updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Redirect to CompleteProfile component
  const redirectToCompleteProfile = () => {
    navigate("/CompleteProfile");
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        {isProfileComplete ? "Profile" : "Complete Your Profile"}
      </h2>

      {isProfileComplete ? (
        <form onSubmit={handleUpdate}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              readOnly
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
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
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 text-white font-medium text-base md:text-lg rounded-md hover:bg-orange-600 transition duration-150 ease-in-out"
          >
            Update Profile
          </button>
        </form>
      ) : (
        // Redirect Button
        <button
          onClick={redirectToCompleteProfile}
          className="w-full py-3 px-4 bg-blue-500 text-white font-medium text-base md:text-lg rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          Complete Your Profile
        </button>
      )}
    </div>
  );
}
