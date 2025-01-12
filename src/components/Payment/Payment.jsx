import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation(); // Initialize useLocation
  const [amount, setAmount] = useState(0);
  const [qrLink, setQrLink] = useState("");

  useEffect(() => {
    // Set amount from state or fallback
    if (location.state && location.state.amount) {
      setAmount(location.state.amount);
    } else {
      setAmount(0); // Default value for amount
    }
  }, [location.state]);

  useEffect(() => {
    setQrLink(
      `upi://pay?pa=praveen87552@okicici&pn=Praveen%20Rajput&am=${amount}.00&cu=INR&aid=uGICAgMDe_tz9ZQ`
    );
  }, [qrLink]);

  return (
    <div className="font-sans p-8 max-w-md mx-auto text-center">
     
      <div className="text-gray-700 mb-4">
        Payment Amount: <span className="font-semibold">₹{amount}</span>
      </div>

      {qrLink && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your QR Code:
          </h3>
          <div className="flex justify-center mb-4">
            <QRCode value={qrLink} size={200} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
