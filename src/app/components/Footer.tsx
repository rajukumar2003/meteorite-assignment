
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Iceland Travel</h3>
            <p className="text-gray-400">
              Discover the beauty of Iceland with our curated travel guides and
              recommendations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#locations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#recommendations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Recommendations
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Email: rajukumarsingh12003@gmail.com
              <br />
              Phone: +91 8210332158
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Iceland Travel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
