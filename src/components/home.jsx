import { useState } from "react";
import Navbar from "./navbar";
import LoanForm from "./LoanForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Carousel />
      <Banner />
      <Services />
      <Scrolling />
      <Footer />
    </div>
  );
};

export default Home;

/* ================= Carousel ================= */

function Carousel() {
  return (
    <div className="relative w-full mt-20">
      <img
        src="https://media.assettype.com/outlookmoney/2025-04-27/6o0m4g2h/Personal-Loans?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
        alt="Loans Banner"
      />
    </div>
  );
}

/* ================= Banner ================= */

function Banner() {
  return (
    <>
      <div className="mt-14 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-amber-500 font-bold text-xl sm:text-2xl mb-4">
          Find Loan Products We Offer
        </h1>
        <p className="text-gray-500 text-sm sm:text-base opacity-80">
          We match you with the right loan program that meets your financial
          needs and ensure quick disbursal within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 px-4 gap-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Personal Loan */}
          <div className="text-center p-6 rounded-lg hover:scale-105 transition shadow-sm">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/7/436814475/JU/WJ/KN/223965608/personal-loan-service-500x500.jpg"
              className="w-full h-40 object-contain mb-4"
              alt="Personal Loan"
            />
            <h2 className="text-amber-500 font-bold mb-2">
              Personal Loan
            </h2>
            <p className="text-gray-500 text-sm">
              Quick personal loans with minimal documentation.
            </p>
          </div>

          {/* Home Loan */}
          <div className="text-center p-6 rounded-lg hover:scale-105 transition shadow-sm">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/buying-home-with-home-loan-illustration-svg-download-png-3916179.png"
              className="w-full h-40 object-contain mb-4"
              alt="Home Loan"
            />
            <h2 className="text-amber-500 font-bold mb-2">
              Home Loan
            </h2>
            <p className="text-gray-500 text-sm">
              Affordable home loans with low interest rates.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://chakrafin.com/images/allloans.jpg"
            className="h-56 sm:h-72 md:h-80 rounded-full border-4 border-dashed border-red-500 p-2 object-cover"
            alt="All Loans"
          />
        </div>
      </div>
    </>
  );
}

/* ================= Services ================= */

function Services() {
  const data = [
    {
      id: 1,
      name: "Personal Loan",
      image: "https://chakrafin.com/images/personalloanimg.avif",
      imagesmall: "https://chakrafin.com/images/personalloanicon.png",
      content: "Personal Loans – Fast & Flexible Support",
      paragraph:
        "Our personal loans help you manage emergencies, travel, weddings, and urgent needs with quick approvals.",
      button: "Apply for Personal Loan",
    },
    {
      id: 2,
      name: "Home Loan",
      image: "https://chakrafin.com/images/homeloanimg.avif",
      imagesmall: "https://chakrafin.com/images/houseicon.png",
      content: "Home Loans – Own Your Dream Home",
      paragraph:
        "Get affordable home loans with low interest rates and flexible tenure.",
      button: "Apply for Home Loan",
    },
  ];

  const [active, setActive] = useState(data[0]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mt-14 px-4">
        <h1 className="text-pink-500 font-bold text-2xl sm:text-3xl mb-4">
          Our Loan Services
        </h1>
        <p className="text-gray-700 opacity-80">
          Choose a loan type and apply instantly. Your request will come directly
          to our WhatsApp.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
              active.id === item.id
                ? "bg-cyan-600 text-white border-cyan-600"
                : "border-amber-500 hover:bg-cyan-500 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 max-w-6xl mx-auto px-4">
        <img
          src={active.image}
          className="w-full max-h-80 object-contain rounded-3xl shadow-lg"
          alt={active.name}
        />

        <div className="flex flex-col justify-center">
          <img src={active.imagesmall} className="h-16 w-16 mb-4" alt="" />
          <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
            {active.content}
          </h2>
          <p className="text-gray-700 opacity-80 mb-6">
            {active.paragraph}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 w-fit"
          >
            {active.button}
          </button>
        </div>
      </div>

      {showForm && (
        <LoanForm
          loanType={active.name}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

/* ================= Scrolling ================= */

const Scrolling = () => {
  return (
    <>
      <div className="text-center mt-20 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold">
          Our Beloved Clients
        </h1>
      </div>

      <div className="mt-8 px-4 md:px-8 lg:px-16 overflow-hidden shadow-2xl">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <div className="flex gap-6 items-center">
            <img src="https://www.miscw.com/wp-content/uploads/2018/05/Banks-in-India.jpg" className="h-20 sm:h-28 md:h-32 lg:h-40" />
            <img src="https://i.pinimg.com/564x/11/6d/fe/116dfe5d2434ff42bc24880529d6b825.jpg" className="h-20 sm:h-28 md:h-32 lg:h-40" />
            <img src="https://i1.wp.com/b4investing.com/wp-content/uploads/2021/04/Indian-Banking-classificati.jpg?fit=2240%2C1260&ssl=1" className="h-20 sm:h-28 md:h-32 lg:h-40" />
          </div>
        </marquee>
      </div>
    </>
  );
};
