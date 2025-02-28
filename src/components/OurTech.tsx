import React from "react";
import { Check, X } from "lucide-react";

const OurTech = () => {
  return (
    <section className="pt-32 pb-28 bg-[#f7f7f7] flex flex-col items-center">
      <div className="container mx-auto px-12 lg:px-8">
        {/* Big Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[#002A38] mb-2">
            Our Technology
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full ">
          {/* Left Card */}
          <div className="w-full md:w-2/5 bg-[#f1f1f1] px-6 py-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-medium text-[#002A38] text-center">
              Centralized Solutions
            </h3>
            <h3 className="text-lg font-medium text-[#002A38] text-center">
              (Web2)
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "Single Point of Failure",
                  description:
                    "Centralized systems risk complete shutdown if the central server fails.",
                },
                {
                  title: "Data Security and Manipulation Risks",
                  description:
                    "Increased user activity can slow down transaction processing times in decentralized systems, challenging scalability.",
                },
                {
                  title: "No Web 3.0 Integration",
                  description:
                    "Centralized systems lack integration with Web 3.0, limiting their functionality with emerging internet technologies.",
                },
              ].map((item, index) => (
                <li key={index} className="text-gray-700">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-4 h-4 bg-[#2D545E] rounded-full">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <strong className="ml-2">{item.title}</strong>
                  </div>
                  <div className="text-gray-600 mt-1">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle (Higher) Card */}
          <div className="w-full md:w-2/5 bg-white p-8 rounded-2xl md:py-12 drop-shadow-[0_4px_6px_rgba(255,140,0,0.15)]">
            <h3 className="text-xl font-medium text-[#002A38] text-center mb-6">
              Our Decentralized Solution
            </h3>

            <ul className="mt-4 space-y-4">
              {[
                {
                  title: "Web 3.0 Gateway",
                  description:
                    "Facilitates smooth integration with the latest decentralized web technologies.",
                },
                {
                  title: "Superior Scalability",
                  description:
                    "Leverages RBN’s infrastructure for efficient handling of high transaction volumes without incurring gas fees, enhancing cost-effectiveness.",
                },
                {
                  title: "Security & Privacy",
                  description:
                    "Offers robust security protocols against common decentralized network vulnerabilities.",
                },
                {
                  title: "Business Data Privacy",
                  description:
                    "Prioritizes stringent privacy standards to safeguard sensitive business data.",
                },
              ].map((item, index) => (
                <li key={index} className="text-gray-700">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-4 h-4 bg-[#E4AC70] rounded-full">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <strong className="ml-2">{item.title}</strong>
                  </div>
                  <div className="text-gray-600 mt-1">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="w-full md:w-2/5 bg-[#f1f1f1] px-6 py-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-medium text-[#002A38] text-center">
              Common Decentralized Solutions
            </h3>
            <h3 className="text-xl font-medium text-[#002A38] text-center">
              (Web3)
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "High Transaction Fees",
                  description:
                    "Blockchain networks often charge escalating fees as demand exceeds capacity.",
                },
                {
                  title: "Scalability Delays",
                  description:
                    "Increased user activity can slow down transaction processing times in decentralized systems, challenging scalability.",
                },
                {
                  title: "Complexity",
                  description:
                    "The technology and architecture behind decentralized systems can be complex, making integration and maintenance challenging.",
                },
              ].map((item, index) => (
                <li key={index} className="text-gray-700">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-4 h-4 bg-[#2D545E] rounded-full">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <strong className="ml-2">{item.title}</strong>
                  </div>
                  <div className="text-gray-600 mt-1">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTech;
