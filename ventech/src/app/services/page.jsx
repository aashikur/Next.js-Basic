import React from 'react';

const services = [
    {
        title: "Web Development",
        description: "Building responsive and modern websites tailored to your needs.",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive interfaces for a seamless user experience.",
    },
    {
        title: "SEO Optimization",
        description: "Improving your website's visibility on search engines.",
    },
];

const page = () => {
    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Services</h1>
            <div>
                {services.map((service, idx) => (
                    <div key={idx} style={{
                        border: "1px solid #eee",
                        borderRadius: 8,
                        padding: "1.5rem",
                        marginBottom: "1.5rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                    }}>
                        <h2 style={{ marginBottom: "0.5rem" }}>{service.title}</h2>
                        <p style={{ color: "#555" }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;