import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Business Solutions */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Business Solutions
            </h3>
            <ul className="space-y-2">
              {[
                "E-waste Management",
                "Lithium-ion Battery Management",
                "Upcycling",
                "Green Metals",
                "Selsmart",
                "MetallMandi",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Sustainability
            </h3>
            <ul className="space-y-2">
              {["Software Technology", "People & Culture"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {["Media", "Blogs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>1900-102-9882</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <a
                  href="mailto:info@attero.in"
                  className="hover:text-white transition-colors"
                >
                  info@attero.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© Attero 2025. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
