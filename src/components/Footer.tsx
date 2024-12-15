import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="fixed-bottom bg-dark text-white text-center py-3">
      <p>
        <a
          href="https://your-portfolio.com" // Replace with your portfolio link
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          Portfolio
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/adam-marianowski"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="mailto:a.marianowski@outlook.com"
          className="text-light"
        >
          Email
        </a>{" "}
        |{" "}
        <span className="text-light">adam-marianowski</span> {/* Display GitHub account name */}
      </p>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </div>
  );
};

export default Footer;


