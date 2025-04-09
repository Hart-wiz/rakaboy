import React from "react";
import { Facebook, MessageCircleMore } from "lucide-react"; // WhatsApp icon is not in Lucide, using a message icon as a placeholder

const Footer = () => {
  return (
    <div id="contact">
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6">
        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2347012345678" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
          >
            <MessageCircleMore size={28} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourusername" // replace with your Facebook page/user
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            <Facebook size={28} />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
          © {new Date().getFullYear()} RB | graphics. All rights reserved.
        </p>
        <p className="font-bold text-blue-700 mt-5">Powered by WECONETDATA </p>
      </footer>
    </div>
  );
};

export default Footer;
