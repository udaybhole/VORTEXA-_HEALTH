import React from 'react';

const HomePage = () => {
    return (
        <div
            className="bg-cover bg-center bg-gray-100 font-sans"
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/covid-virus-3d-modeling_23-2149072257.jpg?ga=GA1.1.740362798.1725703210&semt=ais_hybrid')",
            }}
        >
            <div className="bg-black bg-opacity-50 min-h-screen">
                <header className=" text-white p-4">
                    <nav className="flex justify-between">
                        <h1 className="text-2xl font-bold">Vortexa</h1>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="hover:text-gray-200">Home</a></li>
                            <li><a href="/signup" className="hover:text-gray-200">Sign Up</a></li>
                            <li><a href="/signin" className="hover:text-gray-200">Sign In</a></li>
                        </ul>
                    </nav>
                </header>

                <main className="flex flex-col items-center justify-center min-h-screen p-4">
                    <section className="bg-white bg-opacity-80 shadow-md rounded-lg p-6 max-w-lg text-center mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Health Risk Assessment Tool</h2>
                        <p className="mb-4">
                            Welcome to Vortexa, your ultimate solution for health risk assessment. Our tool leverages advanced machine learning algorithms to evaluate individual health risks based on medical history, lifestyle, and genetic factors.
                        </p>
                        <p className="mb-4">
                            With both web and Android support, you can easily access personalized health recommendations and insights to help you make informed decisions about your health.
                        </p>
                        <p>
                            Join us on a journey to better health with Vortexa – where your health is our priority.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default HomePage;
