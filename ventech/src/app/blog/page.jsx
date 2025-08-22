"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const blogs = [
    {
        title: "Getting Started with Next.js",
        summary: "Learn the basics of building fast web apps with Next.js.",
        date: "Aug 10, 2025"
    },
    {
        title: "Modern UI Design Tips",
        summary: "Discover simple techniques to create beautiful interfaces.",
        date: "Jul 28, 2025"
    },
    {
        title: "SEO Best Practices",
        summary: "Boost your site's visibility with proven SEO strategies.",
        date: "Jul 15, 2025"
    }
];

const page = () => {
    const router = useRouter();
    const isLoggedIn = true;

    if(!isLoggedIn) {
        router.push("/")
        return null;
    }

    const handleclick =() => {
        router.push("/services")
    }

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Blog</h1>
            <button
            onClick={handleclick}
            type='button' className='btn border border-gray-600 rounded-2xl px-3 py-2 mb-5 cursor-pointer'>
                Secret Group
            </button>
            <div>
                {blogs.map((blog, idx) => (
                    <div key={idx} style={{
                        border: "1px solid #eee",
                        borderRadius: 8,
                        padding: "1.5rem",
                        marginBottom: "1.5rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        background: "#fafbfc"
                    }}>
                        <div style={{ fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>{blog.date}</div>
                        <h2 style={{ marginBottom: "0.5rem", color: "#222" }}>{blog.title}</h2>
                        <p style={{ color: "#555" }}>{blog.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;