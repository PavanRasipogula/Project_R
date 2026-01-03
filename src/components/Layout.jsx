import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader onLoaded={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className="relative min-h-screen bg-bg-main overflow-x-hidden">
                    {/* Global 3D Background - Optional, might be too heavy if on every page, 
                 so we put it only in Hero or fixed background */}

                    <Navbar />

                    <main className="relative z-10 flex flex-col gap-20 pb-20">
                        {children}
                    </main>
                </div>
            )}
        </>
    );
};

export default Layout;
