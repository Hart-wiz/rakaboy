import React from "react";

const Footer = () => {
  return (
    <div id="contact">
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6">
        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/23408145581961" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
          >
            <img src="/whatsapp.png" alt="" className="size-9" />
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/uche-chibuike-raphael-2822a7317?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
          >
            <img src="/linkedin.png" alt="" className="size-9" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100090301344443" // replace with your Facebook page/user
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            <img src="/facebook.png" alt="" className="size-9" />
          </a>
          {/* email*/}
          <a
            href="mailto:raphaeluche706@gmail.com " // replace with your email
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            <img src="/mail.png" alt="" className="size-9" />
          </a>
          {/* call dialer*/}
          <a
            href="tel:+2348145581961 "
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            <img src="/call.png" alt="" className="size-9" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
          © {new Date().getFullYear()} RB | graphics. All rights reserved.
        </p>
        <p className="font-bold text-blue-800 mt-5">Powered by WECONETDATA </p>
      </footer>
    </div>
  );
};

export default Footer;
