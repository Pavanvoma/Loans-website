import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <ImageSection />
      <OurServices />
      <ConnectorForm />
      <Footer />
    </div>
  );
};

export default Contact;

/* ================= IMAGE SECTION ================= */

function ImageSection() {
  return (
    <div className="mt-20">
      <img
        src="https://www.monaco.edu/wp-content/uploads/sites/4/2023/09/bannerfinanceexecutiveprograms.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
        alt="Contact Banner"
      />
    </div>
  );
}

/* ================= OUR SERVICES ================= */

function OurServices() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 mt-16">
      {/* LEFT */}
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl text-pink-600 mb-6">
          Connect With Us
        </h1>

        <p className="mb-6 text-gray-700 opacity-80">
          Partner with Chakra Finance to explore a wide range of financial
          solutions tailored to your needs. Our expert team ensures smooth and
          hassle-free financial services across India.
        </p>

        <div className="space-y-4">
          <a
            href="tel:+917989561133"
            className="block text-lg text-blue-700 font-semibold hover:underline"
          >
            📞 +91 79895 61133
          </a>

          <a
            href="mailto:finance@gmail.com"
            className="block text-lg text-blue-700 font-semibold hover:underline"
          >
            ✉️ finance@gmail.com
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-pink-600 text-center mb-6">
          We Serve All Over India
        </h1>

        <iframe
          src="https://www.google.com/maps?q=india,india&output=embed"
          className="w-full h-60 rounded-lg border hover:scale-105 transition"
          title="India Map"
        ></iframe>
      </div>
    </div>
  );
}

/* ================= CONNECTOR FORM ================= */

function ConnectorForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    loan: "",
    pan: "",
    aadhar: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("✅ Connector registration submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center mt-20 px-4 pb-24">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 sm:p-8"
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold text-pink-600 mb-8">
          Connector Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            "firstName",
            "lastName",
            "company",
            "email",
            "phone",
            "pan",
            "aadhar",
          ].map((field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                className="border-2 border-cyan-600 p-2 w-full rounded-md"
                value={formData[field]}
                onChange={handleChange}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          <select
            name="loan"
            className="border-2 border-cyan-600 p-2 w-full rounded-md"
            value={formData.loan}
            onChange={handleChange}
          >
            <option value="">Choose a Loan</option>
            <option>Personal Loan</option>
            <option>Home Loan</option>
            <option>Business Loan</option>
            <option>Mortgage Loan</option>
          </select>
        </div>

        <textarea
          name="address"
          placeholder="Enter Your Address"
          rows="4"
          className="border-2 border-cyan-600 p-2 w-full mt-6 rounded-md"
          value={formData.address}
          onChange={handleChange}
        />

        {successMessage && (
          <div className="mt-6 text-center">
            <div className="bg-green-100 text-green-700 p-3 rounded-lg font-semibold">
              {successMessage}
            </div>

            <a
              href="https://wa.me/917989561133"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-green-600 font-semibold underline"
            >
              💬 Chat with us on WhatsApp
            </a>
          </div>
        )}

        <div className="text-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-3 rounded-lg font-semibold transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
