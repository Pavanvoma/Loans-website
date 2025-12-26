import { useState } from "react";

function LoanForm({ loanType, onClose }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile) {
      alert("Please fill all fields");
      return;
    }

    const whatsappNumber = "917989561133"; // change to your number

    const message = `
Loan Application

Loan Type: ${loanType}
Name: ${name}
Mobile: ${mobile}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 font-bold"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Apply for {loanType}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700"
          >
            Submit & Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoanForm;
