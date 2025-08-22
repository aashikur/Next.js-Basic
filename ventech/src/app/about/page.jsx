import React from 'react';

const importantLinks = [
    { label: "Vendor Portal", url: "#" },
    { label: "Documentation", url: "#" },
    { label: "Support", url: "#" },
    { label: "Community", url: "#" }
];

const page = () => {
    return (
        <div>
            {/* Banner */}
            <div
                style={{
                    maxHeight: 400,
                    height: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(90deg, #4f8cff 0%, #38e8b0 100%)",
                    borderRadius: 16,
                    margin: "2rem 0"
                }}
            >
                <h1 style={{
                    color: "#fff",
                    fontSize: "3rem",
                    fontWeight: 700,
                    textAlign: "center",
                    letterSpacing: 2
                }}>
                    About Ventech Platform
                </h1>
            </div>

            {/* About Section */}
            <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 0" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Multi-Vendor, Auth-Driven Experience</h2>
                <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "2rem" }}>
                    Ventech empowers vendors and buyers with a secure, authentication-based platform. 
                    Each vendor manages their own storefront, products, and orders, while buyers enjoy seamless shopping across multiple vendors. 
                    Our context-driven authentication ensures privacy, security, and a personalized experience for every user.
                </p>

                {/* Important Links */}
                <div style={{
                    display: "flex",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem"
                }}>
                    {importantLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.url}
                            style={{
                                padding: "0.75rem 1.5rem",
                                background: "#f4f6fa",
                                borderRadius: 8,
                                color: "#2d6cdf",
                                fontWeight: 500,
                                textDecoration: "none",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                border: "1px solid #e0e7ef"
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;