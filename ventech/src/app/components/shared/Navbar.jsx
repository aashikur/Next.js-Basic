import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                    >
                        Ventech
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link 
                                href="/" 
                                className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/blog" 
                                className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/services" 
                                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                            >
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;