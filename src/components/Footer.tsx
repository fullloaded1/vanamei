export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Coconut Co.</h3>
            <p className="text-gray-300">Specializing in high-quality coconut products and derivatives for various industries.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors duration-200">About Us</a></li>
              <li><a href="/products" className="hover:text-primary transition-colors duration-200">Products</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@coconutco.com</li>
              <li className="text-gray-300">WhatsApp: +62 123 456 7890</li>
              <li className="text-gray-300">Address: Jl. Coconut No. 123, Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Coconut Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
