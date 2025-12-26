import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

/* ================= MAIN PAGE ================= */

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Heading />
      <AboutUs />
      <KeyPerson />
      <LoanProducts />
      <Scrolling />
      <Footer />
    </div>
  );
};

export default About;

/* ================= HEADING ================= */

function Heading() {
  return (
    <div className="w-full mt-20">
      <img
        src="https://chakrafin.com/images/aboutusbanner1.jpg"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
        alt="About Banner"
      />
    </div>
  );
}

/* ================= ABOUT US ================= */

function AboutUs() {
  return (
    <>
      <h1 className="text-pink-600 font-bold text-2xl sm:text-3xl mt-14 mb-10 text-center">
        About Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {/* Text */}
        <div>
          <p className="text-gray-700 opacity-80 mb-6">
            We are delighted to introduce <b>Our Financial Services</b>, your
            trusted partner in comprehensive financial solutions. We specialize
            in providing flexible and reliable loan products designed to meet
            diverse customer needs.
          </p>

          <p className="text-gray-700 opacity-80 mb-6">
            Our primary offerings include Personal Loans, Home Loans, Business
            Loans, Education Loans, Overdraft / Cash Credit, and
            Trade Finance solutions.
          </p>

          <div className="border-4 border-pink-400 p-4 text-center mb-6 rounded-md">
            <h2 className="font-bold text-orange-400 mb-2">Our Vision</h2>
            <p className="text-gray-700 opacity-80">
              To become a trusted financial partner by delivering transparent,
              innovative, and customer-centric financial solutions.
            </p>
          </div>

          <div className="border-4 border-pink-400 p-4 text-center rounded-md">
            <h2 className="font-bold text-orange-400 mb-2">Our Mission</h2>
            <p className="text-gray-700 opacity-80">
              To empower individuals and businesses with easy access to finance,
              fast approvals, and ethical lending practices.
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          className="rounded-xl hover:scale-105 transition object-cover w-full h-72 md:h-96"
          alt="About Us"
        />
      </div>
    </>
  );
}

/* ================= KEY PERSON ================= */

function KeyPerson() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-5xl mx-auto px-4 items-center">
        <div className="h-24 bg-linear-to-r from-blue-400 to-orange-500 rounded-2xl flex items-center justify-center">
          <p className="underline decoration-4 text-2xl text-white font-semibold">
            Key Person
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-pink-500 font-bold text-2xl sm:text-3xl mb-2">
            Voma. Pavan Kalyan<br/>
            N. Rakesh Kumar

          </h1>
          <p className="text-gray-700 underline text-lg mb-2">
            Managing Partner
          </p>
          <p className="font-semibold text-lg">
             Financial Services
          </p>
        </div>
      </div>

      <div className="border-4 border-blue-500 p-6 sm:p-10 mt-12 max-w-5xl mx-auto rounded-2xl">
        <p className="text-gray-800 opacity-80 mb-6">
          As Managing Partner, I am proud to lead an organization built on
          integrity, innovation, and customer trust. Our journey reflects the
          dedication of our team and the confidence of our clients.
        </p>

        <p className="text-gray-800 opacity-80 mb-6">
          We continuously adapt to market changes, invest in digital
          transformation, and ensure sustainable growth while maintaining our
          core values.
        </p>

        <p className="text-gray-800 opacity-80 mb-6">
          We look forward to serving you and building long-term relationships
          that create value for all stakeholders.
        </p>

        <div className="text-center">
          <p className="opacity-80">Thank you for your trust and support.</p>
          <p className="opacity-80">Warm regards,</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAalWTTxaP8gUTdu-AsT43C4YAayrCtv6_aE5U6faMQsmFmw/viewform"
            className="underline text-blue-600"
          >
            Data Form
          </a>
        </div>
      </div>
    </>
  );
}

/* ================= LOAN PRODUCTS ================= */

function LoanProducts() {
  const loans = [
    {
      title: "Personal Loan",
      image:
        "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
      description:
        "Unsecured loans for emergencies, travel, weddings, education, and personal expenses.",
      points: [
        "Loan Amount: ₹50,000 – ₹40 Lakhs",
        "Interest Rate: From 10.5%",
        "Tenure: Up to 5 Years",
        "Fast Approval & Disbursal",
      ],
    },
    {
      title: "Home Loan",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      description:
        "Affordable housing loans to buy, construct, or renovate your dream home.",
      points: [
        "Loan Amount: Up to ₹5 Crores",
        "Interest Rate: From 8.5%",
        "Tenure: Up to 30 Years",
        "Tax Benefits Available",
      ],
    },
  ];

  return (
    <section className="mt-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-center text-pink-600 font-bold text-2xl sm:text-3xl mb-16">
        Our Loan Products
      </h1>

      <div className="space-y-20">
        {loans.map((loan, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <img
              src={loan.image}
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg"
              alt={loan.title}
            />

            <div>
              <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
                {loan.title}
              </h2>
              <p className="text-gray-700 opacity-80 mb-6">
                {loan.description}
              </p>

              <ul className="space-y-2 mb-6">
                {loan.points.map((p, idx) => (
                  <li key={idx}>✅ {p}</li>
                ))}
              </ul>

              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SCROLLING ================= */

function Scrolling() {
  return (
    <>
      <div className="text-center mt-24 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold">
          Our Beloved Clients
        </h1>
      </div>

      <div className="mt-8 px-4 md:px-8 lg:px-16 overflow-hidden shadow-2xl">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <div className="flex gap-6 items-center">
            <img
              src="https://www.miscw.com/wp-content/uploads/2018/05/Banks-in-India.jpg"
              className="h-20 sm:h-28 md:h-32 lg:h-40"
            />
            <img
              src="https://i.pinimg.com/564x/11/6d/fe/116dfe5d2434ff42bc24880529d6b825.jpg"
              className="h-20 sm:h-28 md:h-32 lg:h-40"
            />
            <img
              src="https://i1.wp.com/b4investing.com/wp-content/uploads/2021/04/Indian-Banking-classificati.jpg?fit=2240%2C1260&ssl=1"
              className="h-20 sm:h-28 md:h-32 lg:h-40"
            />
          </div>
        </marquee>
      </div>
    </>
  );
}
