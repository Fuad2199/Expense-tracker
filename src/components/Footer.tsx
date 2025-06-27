import React from "react";

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 bot-0 w-full">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Spend Flow. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/Fuad2199/spendFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline hover:text-teal-400"
          >
            About
          </a>
          <a
            href="#top"
            className="text-sm hover:underline hover:text-teal-400"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
