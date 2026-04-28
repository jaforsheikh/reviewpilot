import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import ProblemSection from "./components/ProblemSection";
import Features from "./components/Features";
import AIAnalyzer from "./components/AIAnalyzer";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen cyber-bg">
        <Navbar />
        <Hero />
        <TrustedBy />
        <ProblemSection />
        <Features />
        <AIAnalyzer />
        <DashboardPreview />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}