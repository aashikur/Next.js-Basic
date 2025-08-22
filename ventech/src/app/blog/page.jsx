"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const blogs = [
    {
        title: "Getting Started with Next.js",
        summary: "Learn the basics of building fast web apps with Next.js.",
        date: "Aug 10, 2025",
        category: "Development"
    },
    {
        title: "Modern UI Design Tips",
        summary: "Discover simple techniques to create beautiful interfaces.",
        date: "Jul 28, 2025",
        category: "Design"
    },
    {
        title: "SEO Best Practices",
        summary: "Boost your site's visibility with proven SEO strategies.",
        date: "Jul 15, 2025",
        category: "Marketing"
    }
];

const page = () => {
    const router = useRouter();
    const isLoggedIn = true;

    if(!isLoggedIn) {
        router.push("/")
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-cyan-400">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="text-xl opacity-90">Latest insights and updates</p>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="space-y-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} 
                             className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-500">{blog.date}</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                    {blog.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600">
                                {blog.summary}
                            </p>
                            <button 
                                onClick={() => router.push(`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`)}
                                className="mt-4 text-blue-600 font-medium hover:underline"
                            >
                                Read more →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;