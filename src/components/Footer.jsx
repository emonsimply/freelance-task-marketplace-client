import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
      <footer className="bg-green-100 text-green-700 py-10 mt-12">
        <div className="flex justify-center mb-6">
          <a className=""><img src={logo} alt="logo" className="w-10 h-10 " /></a>
        </div>
        
        <div className="container  mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
            <div className="flex justify-center items-center gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-green-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-green-600" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-green-600" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-green-600" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="text-center text-sm text-green-700 mt-8">
          © 2025 Freelance Task Marketplace. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
