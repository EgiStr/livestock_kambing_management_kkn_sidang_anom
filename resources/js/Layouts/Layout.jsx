import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <Navbar/>

            {/* Main Content */}
            <main className="py-10">
                {children} 
            </main>

            {/* Footer */}
           <Footer/>
        </div>
    );
};

export default Layout;
