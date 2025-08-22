"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { title: 'Dashboard', path: '/dashboard', icon: '📊' },
        { title: 'Products', path: '/dashboard/products', icon: '📦' },
        { title: 'Orders', path: '/dashboard/orders', icon: '🛍️' },
        { title: 'Customers', path: '/dashboard/customers', icon: '👥' },
        { title: 'Analytics', path: '/dashboard/analytics', icon: '📈' },
        { title: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
            >
                {isSidebarOpen ? '✖' : '☰'}
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed left-0 top-0 h-screen bg-white shadow-lg
                transform transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:w-64
                w-64 z-40
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Logo */}
                <div className="p-4 border-b">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        Visit Website
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                                >
                                    <span>{item.icon}</span>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 transition-all duration-300">
                {/* Top Navigation */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-4 lg:px-8 py-4">
                        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-gray-600 hover:text-blue-600">
                                🔔
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <span className="hidden sm:inline text-sm text-gray-700">Admin User</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 lg:hidden z-30"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Page Content */}
                <div className="p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;