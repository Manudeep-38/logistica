import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar added as a separate component
import Footer from "./components/Footer";
import PricingPlan from "./pages/PricingPlan";
import Features from "./pages/Features";
import FreeQuote from "./pages/FreeQuote";
import OurTeam from "./pages/Ourteam";
import Testimonial from "./pages/Testimonial";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Services from "./services/Services";
import About from "./pages/About";
import Home from "./pages/Home";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div id="root">
                <Navbar /> {/* Navbar will always be visible */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Home Page */}
                        <Route path="/pricing-plan" element={<PricingPlan />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/free-quote" element={<FreeQuote />} />
                        <Route path="/our-team" element={<OurTeam />} />
                        <Route path="/testimonial" element={<Testimonial />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} /> {/* Fallback for invalid routes */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
