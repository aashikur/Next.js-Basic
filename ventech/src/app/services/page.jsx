import React from 'react';

const services = [
    {
        title: "Web Development",
        description: "Building responsive and modern websites tailored to your needs.",
        slug: "web-development",
        icon: "🌐"
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive interfaces for a seamless user experience.",
        slug: "ui-ux-design",
        icon: "🎨"
    },
    {
        title: "SEO Optimization",
        description: "Improving your website's visibility on search engines.",
        slug: "seo-optimization",
        icon: "📊"
    },
];

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-cyan-400">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl opacity-90">Empowering your digital journey</p>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.slug} 
                             className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>
                            <a
                                href={`/services/${service.slug}`}
                                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;