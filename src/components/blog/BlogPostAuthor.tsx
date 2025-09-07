import React from "react";

interface BlogPostAuthorProps {
  postTitle: string;
}

const BlogPostAuthor = ({ postTitle }: BlogPostAuthorProps) => {
  if (
    postTitle ===
    "European Blockchain Sandbox Selects Web3 Companies for Third Cohort, Including Privado ID"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/cryptonews.jpg"
          alt="Cryptonews.com"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-600">
          Written by{" "}
          <a
            href="https://cryptonews.com/news/eu-blockchain-sandbox-selects-web3-companies-for-third-cohort-including-privado-id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Cryptonews.com
          </a>
        </span>
      </div>
    );
  } else if (
    postTitle === "The Blueprint for a Successful Blockchain Partner Ecosystem"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Traced Systems"
          className="w-12 h-12"
        />
        <span className="text-gray-600">
          Written by Traced Systems x{" "}
          <a
            href="https://www.kiflo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Kiflo
          </a>
        </span>
      </div>
    );
  } else if (
    postTitle === "Battery Passport – Circular economy in a QR Code"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Traced Systems"
          className="w-12 h-12"
        />
        <span className="text-gray-600">
          Written by Traced Systems x{" "}
          <a
            href="https://www.bonsaitechnology.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Bonsai Technology
          </a>
        </span>
      </div>
    );
  } else if (
    postTitle === "Efficient product tracking with blockchain in supply chains"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Traced Systems"
          className="w-12 h-12"
        />
        <span className="text-gray-600">
          Written by Traced Systems x{" "}
          <a
            href="https://trace4value.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            TRACE 4 VALUE Swepass
          </a>
        </span>
      </div>
    );
  } else if (
    postTitle ===
    "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Traced Systems"
          className="w-12 h-12"
        />
        <span className="text-gray-600">
          Written by Traced Systems x{" "}
          <a
            href="https://doors3.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Doors3
          </a>
        </span>
      </div>
    );
  } else if (
    postTitle === "Evolium, Cling and Traced join forces for battery circularity"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Evolium, Cling & Traced"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-600">
          Written by Evolium, Cling Systems & Traced Systems
        </span>
      </div>
    );
  } else if (
    postTitle ===
    "Five high-potential sustainability and social impact companies across Nordics & Baltics join the Mastercard Lighthouse MASSIV fall 2025 partnership program"
  ) {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/mc_symbol 1.png"
          alt="Mastercard Lighthouse"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-600">
          Written by Mastercard Lighthouse MASSIV
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <img
          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
          alt="Traced Systems"
          className="w-12 h-12"
        />
        <span className="text-gray-600">Written by Traced Systems</span>
      </div>
    );
  }
};

export default BlogPostAuthor;
