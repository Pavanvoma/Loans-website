import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 mt-12 px-6 py-10">
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            place-items-center 
            lg:place-items-start
            max-w-7xl 
            mx-auto
          "
        >
          {/* ===== Logo Section ===== */}
          <div className="text-center lg:text-left">
            <img
              src="https://media.assettype.com/outlookmoney/2025-04-27/6o0m4g2h/Personal-Loans?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
              className="w-44 rounded-lg mx-auto lg:mx-0"
              alt="logo"
            />
            <p className="font-bold mt-4">FINANCIAL SERVICES</p>
          </div>

          {/* ===== Connect With Us ===== */}
          <div className="text-center lg:text-left">
            <h1 className="font-bold mb-4 text-2xl">Connect With Us</h1>
            <p className="text-gray-800">
              Our Finance helps you explore a wide range of financial solutions
              tailored to your needs.
            </p>

            <ul className="flex gap-4 mt-4 justify-center lg:justify-start">
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9lvi4_4ItGlc0EZJ2iWjdbgC1MYA6dC_XA&s"
                  className="w-10 h-10 hover:scale-110 transition rounded-2xl"
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqUVSYW71958Hr2oIoAeVueXmJsAz4uI3JQ&s"
                  className="w-10 h-10 hover:scale-110 transition rounded-2xl"
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3je3B3KRq3jjovIONs3vh5YaJbJnqVAc-8w&s"
                  className="w-10 h-10 hover:scale-110 transition rounded-2xl"
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNyDq9ZejzOXBKIXrX3_w-bxdAnO-IEGYVg&s"
                  className="w-10 h-10 hover:scale-110 transition rounded-2xl"
                />
              </li>
            </ul>
          </div>

          {/* ===== Contact Us ===== */}
          <div className="text-center lg:text-left w-full">
            <h1 className="font-bold mb-4 text-2xl">Contact Us</h1>

            <p className="mb-2">📍 1-116/1 Kukatpally, Hyderabad</p>

            <div className="space-y-2">
              <a
                href="mailto:Vomapavan265@gmail.com"
                className="text-blue-600 underline block"
              >
                ✉️ Vomapavan265@gmail.com
              </a>

              <a
                href="tel:+917989561133"
                className="text-blue-600 underline block"
              >
                📞 +91 79895 61133
              </a>
            </div>

            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed"
              className="
                w-full 
                h-40 
                mt-4 
                rounded-lg 
                border 
                hover:scale-105 
                transition
              "
            ></iframe>
          </div>
        </div>
      </footer>

      {/* ===== Copyright ===== */}
      <div className="bg-amber-500 text-white text-center py-3 px-4">
        <p className="text-sm md:text-base">
           FINANCIAL SERVICES © 2023 AVAS | All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
