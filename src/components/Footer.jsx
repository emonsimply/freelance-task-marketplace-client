import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-900 text-white py-10 mt-12">
        <div className="container  mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>Email: support@taskmarketplace.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Terms and Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Information</h2>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">FAQs</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-500" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-sky-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Task Marketplace. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
