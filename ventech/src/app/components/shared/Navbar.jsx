import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="px-3 py-2 max-w-6xl mx-auto">
         <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
       </nav>
    );
};

export default Navbar;