const Footer = () => {
    return (
        <footer className="w-full bg-white text-black py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left section */}
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">AlumniSuite</h3>
                    <p className="text-sm text-gray-500">Stay Connected, Grow Together</p>
                </div>

                {/* Center section (links) */}
                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#about" className="text-sm hover:text-gray-700">About Us</a>
                    <a href="#contact" className="text-sm hover:text-gray-700">Contact</a>
                    <a href="#privacy" className="text-sm hover:text-gray-700">Privacy Policy</a>
                    <a href="#terms" className="text-sm hover:text-gray-700">Terms of Service</a>
                </div>

                {/* Right section (social links) */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12c1.5 2.5 4.5 5 7 5s4-1 5-3c1-2 1-4 0-6-1-2-3-4-5-4s-4 1-5 3C8 8 7 10 8 12z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-6-6a6 6 0 016 6h-2a4 4 0 00-4-4V2z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-6 pt-4 text-center">
                <p className="text-sm text-gray-500">© 2024 AlumniSuite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
